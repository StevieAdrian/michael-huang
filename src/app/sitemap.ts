/**
 * Dynamic Sitemap Generation
 * Automatically generates sitemap.xml at /sitemap.xml
 */

import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/notaris-michael`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ppat-michael`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-firm-michael`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-consulting-michael`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podcast-michael`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glory-ministry-church`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kost-gemini-koolkost`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/warteg-gemini`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/musik-production-michael`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/indonesia-legal-faq`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/franchise-michael`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  return routes;
}
