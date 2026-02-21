"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { SUPPORTED_SITE_DOMAINS } from "@/src/config/site";
import {
  isAnalyticsProductionEnv,
  isAnalyticsRuntimeEnabled,
} from "@/src/lib/analytics-env";
import {
  inferSocialPlatformFromUrl,
  trackEmailClick,
  trackFranchiseWhatsAppClick,
  trackNavigationClick,
  trackOutboundClick,
  trackPageView,
  trackPhoneCall,
  trackSocialClick,
} from "@/src/lib/analytics";

declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;
const IS_ANALYTICS_PRODUCTION_ENV = isAnalyticsProductionEnv();

const linkerDomains = JSON.stringify([
  ...SUPPORTED_SITE_DOMAINS,
  ...SUPPORTED_SITE_DOMAINS.map((domain) => `www.${domain}`),
]);

function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (
      !IS_ANALYTICS_PRODUCTION_ENV ||
      !isAnalyticsRuntimeEnabled() ||
      !GA_MEASUREMENT_ID ||
      typeof window.gtag !== "function"
    ) {
      return;
    }

    window.gtag("set", "user_properties", {
      site_host: window.location.hostname,
    });
  }, []);

  useEffect(() => {
    if (
      !IS_ANALYTICS_PRODUCTION_ENV ||
      !isAnalyticsRuntimeEnabled() ||
      !GA_MEASUREMENT_ID ||
      typeof window.gtag !== "function"
    ) {
      return;
    }

    const path =
      pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    trackPageView(path, "router");
  }, [pathname, searchParams]);

  useEffect(() => {
    if (
      !IS_ANALYTICS_PRODUCTION_ENV ||
      !isAnalyticsRuntimeEnabled() ||
      !GA_MEASUREMENT_ID ||
      typeof window.gtag !== "function"
    ) {
      return;
    }

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href")?.trim();
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) {
        return;
      }

      const source =
        anchor.dataset.analyticsSource ||
        anchor.getAttribute("aria-label") ||
        anchor.textContent?.trim().slice(0, 80) ||
        "link";

      if (href.startsWith("tel:")) {
        trackPhoneCall(source, href.replace(/^tel:/, ""));
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEmailClick(source, href.replace(/^mailto:/, ""));
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.hostname === "wa.me" || url.hostname.includes("whatsapp")) {
        trackFranchiseWhatsAppClick(source, url.toString());
        return;
      }

      const socialPlatform = inferSocialPlatformFromUrl(url.toString());
      if (socialPlatform) {
        trackSocialClick(socialPlatform, source, url.toString());
        return;
      }

      if (url.origin === window.location.origin) {
        trackNavigationClick(source, `${url.pathname}${url.search}`);
        return;
      }

      trackOutboundClick(url.toString(), source);
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, []);

  return null;
}

export function GoogleAnalyticsScripts() {
  if (!IS_ANALYTICS_PRODUCTION_ENV || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            if (!['localhost', '127.0.0.1', '::1', '[::1]'].includes(window.location.hostname)) {
              gtag('config', '${GA_MEASUREMENT_ID}', {
                send_page_view: false,
                anonymize_ip: true,
                linker: {
                  domains: ${linkerDomains},
                  accept_incoming: true,
                },
              });
            }
          `,
        }}
      />
    </>
  );
}

export function Analytics() {
  if (!IS_ANALYTICS_PRODUCTION_ENV || !GA_MEASUREMENT_ID) return null;

  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
