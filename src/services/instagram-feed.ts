import "server-only";

import { SOCIAL_URLS } from "@/src/config/site";

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
const INSTAGRAM_IG_USER_ID = process.env.INSTAGRAM_IG_USER_ID?.trim();
const INSTAGRAM_GRAPH_API_VERSION =
  process.env.INSTAGRAM_GRAPH_API_VERSION?.trim() ?? "v22.0";

const FEED_REVALIDATE_SECONDS = 600;
const DEFAULT_FEED_LIMIT = 6;
const MAX_FEED_LIMIT = 12;

const INSTAGRAM_MEDIA_FIELDS = [
  "id",
  "caption",
  "media_type",
  "media_url",
  "thumbnail_url",
  "permalink",
  "timestamp",
].join(",");

export type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export type InstagramFeedItem = {
  id: string;
  caption: string;
  mediaType: InstagramMediaType;
  previewUrl: string;
  permalink: string;
  timestamp: string;
};

export type InstagramFeedSource = "live" | "fallback";
export type InstagramFeedReason =
  | "ok"
  | "missing_token"
  | "empty_response"
  | "fetch_error";

export type InstagramFeedResult = {
  source: InstagramFeedSource;
  reason: InstagramFeedReason;
  updatedAt: string;
  items: InstagramFeedItem[];
};

type GraphMediaItem = {
  id?: string;
  caption?: string | null;
  media_type?: InstagramMediaType;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
};

type GraphMediaResponse = {
  data?: GraphMediaItem[];
};

type FeedOptions = {
  limit?: number;
};

const FALLBACK_ITEMS: InstagramFeedItem[] = [
  {
    id: "fallback-1",
    caption: "Crispy wraps, loaded fillings, and signature Rolls Nation flavors.",
    mediaType: "IMAGE",
    previewUrl: "/rollsnation.jpeg",
    permalink: SOCIAL_URLS.instagram,
    timestamp: "2025-01-04T12:00:00.000Z",
  },
  {
    id: "fallback-2",
    caption: "Our chef spotlight: precision, hygiene, and speed in every roll.",
    mediaType: "IMAGE",
    previewUrl: "/chef.png",
    permalink: SOCIAL_URLS.instagram,
    timestamp: "2025-01-11T12:00:00.000Z",
  },
  {
    id: "fallback-3",
    caption: "Outlet atmosphere built for dine-in comfort and quick takeaway.",
    mediaType: "IMAGE",
    previewUrl: "/staffs/staff-1.jpg",
    permalink: SOCIAL_URLS.instagram,
    timestamp: "2025-01-18T12:00:00.000Z",
  },
  {
    id: "fallback-4",
    caption: "Counter energy during busy hours at Rolls Nation.",
    mediaType: "IMAGE",
    previewUrl: "/staffs/staff-4.jpg",
    permalink: SOCIAL_URLS.instagram,
    timestamp: "2025-01-25T12:00:00.000Z",
  },
  {
    id: "fallback-5",
    caption: "Team moments from launch and operations across locations.",
    mediaType: "IMAGE",
    previewUrl: "/staffs/staff-5.jpg",
    permalink: SOCIAL_URLS.instagram,
    timestamp: "2025-02-01T12:00:00.000Z",
  },
  {
    id: "fallback-6",
    caption: "Brand stories and growth journey from founder to franchise scale.",
    mediaType: "IMAGE",
    previewUrl: "/pic.png",
    permalink: SOCIAL_URLS.instagram,
    timestamp: "2025-02-08T12:00:00.000Z",
  },
];

function clampLimit(rawLimit?: number) {
  if (!rawLimit || Number.isNaN(rawLimit)) {
    return DEFAULT_FEED_LIMIT;
  }

  const integerLimit = Math.floor(rawLimit);
  return Math.min(Math.max(integerLimit, 1), MAX_FEED_LIMIT);
}

function normalizeCaption(value: string | null | undefined) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function buildFeedUrl(limit: number) {
  if (!INSTAGRAM_ACCESS_TOKEN) {
    return null;
  }

  const params = new URLSearchParams({
    fields: INSTAGRAM_MEDIA_FIELDS,
    limit: String(limit),
    access_token: INSTAGRAM_ACCESS_TOKEN,
  });

  if (INSTAGRAM_IG_USER_ID) {
    return `https://graph.facebook.com/${INSTAGRAM_GRAPH_API_VERSION}/${INSTAGRAM_IG_USER_ID}/media?${params.toString()}`;
  }

  return `https://graph.instagram.com/me/media?${params.toString()}`;
}

function mapGraphItem(item: GraphMediaItem): InstagramFeedItem | null {
  const mediaType = item.media_type;
  const hasCoreFields =
    Boolean(item.id) &&
    Boolean(item.permalink) &&
    Boolean(item.timestamp) &&
    Boolean(mediaType);

  if (!hasCoreFields) {
    return null;
  }

  let previewUrl: string | undefined;

  if (mediaType === "VIDEO") {
    previewUrl = item.thumbnail_url;
  } else {
    previewUrl = item.media_url ?? item.thumbnail_url;
  }

  if (!previewUrl) {
    return null;
  }

  return {
    id: item.id!,
    caption: normalizeCaption(item.caption),
    mediaType: mediaType!,
    previewUrl,
    permalink: item.permalink!,
    timestamp: item.timestamp!,
  };
}

function fallbackResult(reason: InstagramFeedReason, limit: number): InstagramFeedResult {
  return {
    source: "fallback",
    reason,
    updatedAt: new Date().toISOString(),
    items: FALLBACK_ITEMS.slice(0, limit),
  };
}

export async function getInstagramFeed(
  options: FeedOptions = {}
): Promise<InstagramFeedResult> {
  const limit = clampLimit(options.limit);
  const feedUrl = buildFeedUrl(limit);

  if (!feedUrl) {
    return fallbackResult("missing_token", limit);
  }

  try {
    const response = await fetch(feedUrl, {
      cache: "force-cache",
      next: { revalidate: FEED_REVALIDATE_SECONDS, tags: ["instagram-feed"] },
    });

    if (!response.ok) {
      console.error("Instagram feed request failed with status:", response.status);
      console.log(response);
      return fallbackResult("fetch_error", limit);
    }

    const payload = (await response.json()) as GraphMediaResponse;
    const liveItems = (payload.data ?? [])
      .map(mapGraphItem)
      .filter((item): item is InstagramFeedItem => item !== null)
      .slice(0, limit);

    if (!liveItems.length) {
      return fallbackResult("empty_response", limit);
    }

    return {
      source: "live",
      reason: "ok",
      updatedAt: new Date().toISOString(),
      items: liveItems,
    };
  } catch (error) {
    console.error("Instagram feed request threw an error:", error);
    return fallbackResult("fetch_error", limit);
  }
}
