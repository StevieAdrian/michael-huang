/**
 * Dynamic Sitemap Generation
 * Automatically generates sitemap.xml at /sitemap.xml
 */

import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo-config";
import { latestDate, parseIndoDate } from "@/app/utils/parse-date";
import { churchArticles } from "@/app/constants/church-articles";
import { kostArticles } from "@/app/constants/kost-articles";
import { lawConsultingArticles } from "@/app/constants/law-consulting-articles";
import { lawFirmArticles } from "@/app/constants/law-firm-articles";
import { musicArticles } from "@/app/constants/music-articles";
import { notarisArticles } from "@/app/constants/notaris-articles";
import { podcastArticles } from "@/app/constants/podcast-articles";
import { ppatArticles } from "@/app/constants/ppat-articles";

const articleSections = [
  { base: "/notaris-michael", articles: notarisArticles },
  { base: "/ppat-michael", articles: ppatArticles },
  { base: "/law-firm-michael", articles: lawFirmArticles },
  { base: "/law-consulting-michael", articles: lawConsultingArticles },
  { base: "/glory-ministry-church", articles: churchArticles },
  { base: "/kost-gemini-koolkost", articles: kostArticles },
  { base: "/musik-production-michael", articles: musicArticles },
  { base: "/podcast-michael", articles: podcastArticles },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/notaris-michael`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ppat-michael`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-firm-michael`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-consulting-michael`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podcast-michael`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glory-ministry-church`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kost-gemini-koolkost`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/warteg-gemini`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/musik-production-michael`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/indonesia-legal-faq`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/franchise-michael`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  const articleRoutes = articleSections.flatMap(({ base, articles }) => [
    {
      url: `${baseUrl}${base}/artikel`,
      lastModified: latestDate(articles),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    ...articles.map((article) => ({
      url: `${baseUrl}${base}/artikel/${article.slug}`,
      lastModified: parseIndoDate(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]);

  return [...routes, ...articleRoutes];
}
