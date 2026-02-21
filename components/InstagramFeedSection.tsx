import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Play, RefreshCcw } from "lucide-react";

import { SOCIAL_URLS } from "@/src/config/site";
import { getInstagramFeed, type InstagramMediaType } from "@/src/services/instagram-feed";

const FEED_LIMIT = 6;
const FALLBACK_CAPTION = "Follow Rolls Nation on Instagram for outlet moments and fresh launches.";

function toShortDate(isoDate: string) {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return "Recent";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
  }).format(date);
}

function truncateCaption(caption: string, maxLength = 110) {
  const normalizedCaption = caption.trim();
  if (!normalizedCaption) {
    return FALLBACK_CAPTION;
  }

  if (normalizedCaption.length <= maxLength) {
    return normalizedCaption;
  }

  return `${normalizedCaption.slice(0, maxLength - 1).trimEnd()}...`;
}

function mediaTypeLabel(mediaType: InstagramMediaType) {
  if (mediaType === "VIDEO") {
    return "Video";
  }

  if (mediaType === "CAROUSEL_ALBUM") {
    return "Carousel";
  }

  return "Photo";
}

export default async function InstagramFeedSection() {
  const feed = await getInstagramFeed({ limit: FEED_LIMIT });
  const isLiveFeed = feed.source === "live";

  return (
    <section className="border-y border-zinc-800 bg-zinc-950 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-1 text-xs font-bold uppercase tracking-widest text-zinc-300">
              <Instagram className="h-3.5 w-3.5 text-yellow-500" />
              Live from Instagram
            </p>
            <h2 className="text-4xl font-black uppercase text-white md:text-5xl">
              Real Store Moments
            </h2>
            <p className="mt-4 max-w-3xl text-zinc-400 md:text-lg">
              See what&apos;s happening across Rolls Nation outlets. Fresh posts are auto-synced from
              Instagram with periodic refresh.
            </p>
          </div>

          <div className="md:text-right">
            <p
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${
                isLiveFeed
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                  : "border-zinc-700 bg-zinc-900 text-zinc-300"
              }`}
            >
              <RefreshCcw className="h-3.5 w-3.5" />
              {isLiveFeed ? "Live feed active" : "Showing latest highlights"}
            </p>
            <p className="mt-2 text-xs text-zinc-500">Updated: {toShortDate(feed.updatedAt)}</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {feed.items.map((item) => {
            const mediaLabel = mediaTypeLabel(item.mediaType);

            return (
              <article
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-black/70 shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/70"
              >
                <a
                  href={item.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-source={`home_instagram_card_${mediaLabel.toLowerCase()}`}
                  className="block"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.previewUrl}
                      alt={`Rolls Nation Instagram ${mediaLabel.toLowerCase()} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/5 to-transparent" />

                    <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white">{mediaLabel}</p>
                    </div>

                    {item.mediaType === "VIDEO" ? (
                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/75 text-white">
                        <Play className="h-4 w-4 fill-white" />
                      </div>
                    ) : null}
                  </div>

                  <div className="space-y-3 p-5">
                    <p className="line-clamp-3 text-sm leading-relaxed text-zinc-300">
                      {truncateCaption(item.caption)}
                    </p>
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      <span>{toShortDate(item.timestamp)}</span>
                      <span className="inline-flex items-center gap-1 text-yellow-500">
                        View
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={SOCIAL_URLS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-source="home_instagram_follow"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
          >
            Follow @rollsnationindia
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
          >
            Open Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
