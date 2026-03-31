/**
 * Robots.txt Configuration
 * Controls search engine crawler behavior
 */

import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/admin", "/private"],
      },
      // Optional: Specific rules for Googlebot
      {
        userAgent: "Googlebot",
        allow: ["/"],
        crawlDelay: 0,
      },
    ],
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
  };
}
