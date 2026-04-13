/**
 * Dynamic Sitemap Generation
 * Automatically generates sitemap.xml at /sitemap.xml
 */

import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;
  const lastMod = new Date();

  const routes = [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/notaris-michael`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ppat-michael`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-firm-michael`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-consulting-michael`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podcast-michael`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glory-ministry-church`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kost-gemini-koolkost`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/warteg-gemini`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/musik-production-michael`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/indonesia-legal-faq`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/franchise-michael`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  return routes;
}
