import {
  CONTACT_EMAIL,
  PRIMARY_PHONE,
  SOCIAL_URLS,
  WHATSAPP_LINK,
  type SocialPlatform,
} from "@/src/config/site";
import { isAnalyticsRuntimeEnabled } from "@/src/lib/analytics-env";

declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

type EventPrimitive = string | number | boolean;
type EventParams = Record<string, EventPrimitive | null | undefined>;

type TrackingContext = {
  site_host?: string;
  page_path?: string;
  page_location?: string;
  page_title?: string;
  page_referrer?: string;
};

function canTrack() {
  return (
    isAnalyticsRuntimeEnabled() &&
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  );
}

function cleanParams(params: EventParams): Record<string, EventPrimitive> {
  const cleaned: Record<string, EventPrimitive> = {};

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }

    cleaned[key] = value;
  }

  return cleaned;
}

export function getClientTrackingContext(): TrackingContext {
  if (typeof window === "undefined") {
    return {};
  }

  const pathWithQuery = `${window.location.pathname}${window.location.search}`;

  return {
    site_host: window.location.hostname,
    page_path: pathWithQuery,
    page_location: window.location.href,
    page_title: document.title,
    page_referrer: document.referrer || "direct",
  };
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (!canTrack()) {
    return;
  }

  const payload = cleanParams({
    ...getClientTrackingContext(),
    ...params,
  });

  window.gtag("event", eventName, payload);
}

export function trackPageView(path: string, source = "router") {
  if (!canTrack()) {
    return;
  }

  const resolvedUrl = new URL(path, window.location.origin);

  trackEvent("page_view", {
    page_path: `${resolvedUrl.pathname}${resolvedUrl.search}`,
    page_location: resolvedUrl.toString(),
    navigation_source: source,
  });
}

export function inferSocialPlatformFromUrl(rawUrl: string): SocialPlatform | null {
  const normalized = rawUrl.toLowerCase();

  if (normalized.includes("facebook.com")) return "facebook";
  if (normalized.includes("instagram.com")) return "instagram";
  if (normalized.includes("x.com") || normalized.includes("twitter.com")) {
    return "twitter";
  }
  if (normalized.includes("linkedin.com")) return "linkedin";
  if (normalized.includes("youtube.com")) return "youtube";

  return null;
}

export function trackFranchiseWhatsAppClick(
  source: string,
  destination = WHATSAPP_LINK
) {
  trackEvent("franchise_whatsapp_click", {
    event_category: "Franchise Lead",
    event_label: source,
    destination,
    value: 1,
  });
}

export function trackPhoneCall(source: string, phoneNumber = PRIMARY_PHONE) {
  trackEvent("phone_call_click", {
    event_category: "Lead",
    event_label: source,
    phone_number: phoneNumber,
    value: 1,
  });
}

export function trackEmailClick(source: string, email = CONTACT_EMAIL) {
  trackEvent("email_click", {
    event_category: "Lead",
    event_label: source,
    email,
    value: 1,
  });
}

export function trackContactFormSubmit(subject: string) {
  trackEvent("contact_form_submit", {
    event_category: "Contact",
    event_label: subject,
    value: 1,
  });
}

export function trackContactFormError(subject: string, reason: string) {
  trackEvent("contact_form_error", {
    event_category: "Contact",
    event_label: subject,
    error_reason: reason,
  });
}

export function trackFranchiseModelView(modelName: string) {
  trackEvent("franchise_model_view", {
    event_category: "Franchise",
    event_label: modelName,
  });
}

export function trackMenuView(category: string) {
  trackEvent("menu_category_view", {
    event_category: "Menu",
    event_label: category,
  });
}

export function trackSocialClick(
  platform: SocialPlatform,
  source = "unknown",
  destination?: string
) {
  const targetUrl = destination ?? SOCIAL_URLS[platform];

  trackEvent("social_click", {
    event_category: "Social Media",
    event_label: platform,
    source,
    destination: targetUrl,
    value: 1,
  });
}

export function trackGalleryView() {
  trackEvent("gallery_view", {
    event_category: "Engagement",
    event_label: "gallery",
  });
}

export function trackFranchiseCTAClick(source: string) {
  trackEvent("franchise_cta_click", {
    event_category: "Navigation",
    event_label: source,
    value: 1,
  });
}

export function trackOutboundClick(destination: string, source = "link") {
  trackEvent("outbound_click", {
    event_category: "Navigation",
    event_label: source,
    destination,
    value: 1,
  });
}

export function trackNavigationClick(label: string, destination: string) {
  trackEvent("navigation_click", {
    event_category: "Navigation",
    event_label: label,
    destination,
  });
}
