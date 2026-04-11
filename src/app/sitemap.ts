/**
 * Dynamic Sitemap Generation
 * Automatically generates sitemap.xml at /sitemap.xml
 */

import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;
  const lastMod = new Date("2025-04-10");

  const routes = [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/notaris`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ppat`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-firm`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-consulting`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podcast`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gereja`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kost`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/warteg`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/musik`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return routes;
}
