import { MetadataRoute } from "next";
import { getSiteOrigin } from "@/src/lib/site-url.server";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = await getSiteOrigin();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
