import "server-only";

import type { Metadata } from "next";
import { absoluteUrl } from "@/src/lib/site-url.server";

type PageMetadataOptions = {
  path: string;
  title: string;
  description: string;
  keywords?: Metadata["keywords"];
  openGraph?: Partial<NonNullable<Metadata["openGraph"]>>;
  twitter?: Metadata["twitter"];
  robots?: Metadata["robots"];
  includeOpenGraph?: boolean;
};

export async function buildPageMetadata({
  path,
  title,
  description,
  keywords,
  openGraph,
  twitter,
  robots,
  includeOpenGraph = true,
}: PageMetadataOptions): Promise<Metadata> {
  const canonicalUrl = await absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: includeOpenGraph
      ? {
          type: "website",
          locale: "en_IN",
          siteName: "Rolls Nation",
          title,
          description,
          images: ["/rollsnation.jpeg"],
          ...openGraph,
          url: canonicalUrl,
        }
      : undefined,
    twitter,
    robots,
  };
}
