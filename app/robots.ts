import { MetadataRoute } from "next";
import { getSiteHost, getSiteOrigin } from "@/src/lib/site-url.server";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const [baseUrl, siteHost] = await Promise.all([getSiteOrigin(), getSiteHost()]);

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
    host: siteHost,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
