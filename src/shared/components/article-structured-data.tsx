/**
 * Article + Breadcrumb JSON-LD for an article detail page.
 * Every section renders the same two schemas, so they live here rather than
 * being repeated across the eight `artikel/[slug]/page.tsx` routes.
 */

import { StructuredData } from "@/shared/components/StructuredData";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { seoConfig } from "@/config/seo-config";
import { parseIndoDate } from "@/app/utils/parse-date";
import type { ArticleDetail } from "@/shared/types/article";

interface ArticleStructuredDataProps {
  article: ArticleDetail;
  /** Section root, e.g. "/notaris-michael". */
  basePath: string;
  /** Breadcrumb label for the section, e.g. "Notaris". */
  sectionLabel: string;
}

export function ArticleStructuredData({
  article,
  basePath,
  sectionLabel,
}: ArticleStructuredDataProps) {
  const url = `${seoConfig.siteUrl}${basePath}/artikel/${article.slug}`;
  const publishedDate = parseIndoDate(article.date).toISOString();

  return (
    <>
      <StructuredData
        data={generateArticleSchema({
          title: article.title,
          description: article.subtitle,
          publishedDate,
          author: article.author.name,
          url,
        })}
      />
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Beranda", url: `${seoConfig.siteUrl}/` },
          { name: sectionLabel, url: `${seoConfig.siteUrl}${basePath}` },
          { name: "Artikel", url: `${seoConfig.siteUrl}${basePath}/artikel` },
          { name: article.title, url },
        ])}
      />
    </>
  );
}
