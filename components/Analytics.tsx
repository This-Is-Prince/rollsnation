"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

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

function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;

    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalyticsScripts() {
  if (!GA_MEASUREMENT_ID) return null;

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
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false,
            });
          `,
        }}
      />
    </>
  );
}

export function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
