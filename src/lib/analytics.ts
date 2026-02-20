declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

export function trackFranchiseWhatsAppClick(source: string) {
  trackEvent("franchise_whatsapp_click", {
    event_category: "Franchise Lead",
    event_label: source,
    value: 1,
  });
}

export function trackPhoneCall(source: string) {
  trackEvent("phone_call_click", {
    event_category: "Lead",
    event_label: source,
  });
}

export function trackContactFormSubmit(subject: string) {
  trackEvent("contact_form_submit", {
    event_category: "Contact",
    event_label: subject,
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

export function trackSocialClick(platform: string) {
  trackEvent("social_click", {
    event_category: "Social Media",
    event_label: platform,
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
  });
}
