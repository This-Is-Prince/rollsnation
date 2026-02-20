export const SUPPORTED_SITE_DOMAINS = [
  "rollsnationindia.in",
  "rollsnationindia.com",
  "rollsnation.in",
  "rollnations.in",
  "therollsnation.in",
  "rollsnation.net",
] as const;

export type SupportedSiteDomain = (typeof SUPPORTED_SITE_DOMAINS)[number];

export const PRIMARY_SITE_DOMAIN: SupportedSiteDomain = "rollsnationindia.in";

export const DEFAULT_SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://${PRIMARY_SITE_DOMAIN}`;

export const CONTACT_EMAIL = "info@rollsnation.in";
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

export const PRIMARY_PHONE = "+917696833321";
export const SECONDARY_PHONE = "+918000500038";
export const PRIMARY_PHONE_LABEL = "+91 76968-33321";
export const SECONDARY_PHONE_LABEL = "+91 80005-00038";

export const PRIMARY_PHONE_HREF = `tel:${PRIMARY_PHONE}`;
export const SECONDARY_PHONE_HREF = `tel:${SECONDARY_PHONE}`;

export const WHATSAPP_NUMBER = "917696833321";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SOCIAL_URLS = {
  facebook: "https://www.facebook.com/rollsnationindia",
  instagram: "https://www.instagram.com/rollsnationindia",
  twitter: "https://x.com/rolls_nation",
  linkedin: "https://www.linkedin.com/company/rolls-nation",
  youtube: "https://www.youtube.com/@rollsnationindia",
} as const;

export type SocialPlatform = keyof typeof SOCIAL_URLS;

export const SOCIAL_LINKS = [
  { key: "facebook", label: "Facebook", href: SOCIAL_URLS.facebook },
  { key: "instagram", label: "Instagram", href: SOCIAL_URLS.instagram },
  { key: "twitter", label: "Twitter", href: SOCIAL_URLS.twitter },
  { key: "linkedin", label: "LinkedIn", href: SOCIAL_URLS.linkedin },
  { key: "youtube", label: "YouTube", href: SOCIAL_URLS.youtube },
] as const;
