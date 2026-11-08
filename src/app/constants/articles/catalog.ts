import type { Article } from "@/shared/types/article";
import type { ArticleDetail, ArticleRecord } from "@/shared/types/article";

export function createArticleCatalog(records: ArticleRecord[]) {
  const articles: Article[] = records.map(
    ({ id, title, excerpt, date, category, slug }) => ({
      id,
      title,
      excerpt,
      date,
      category,
      slug,
    }),
  );

  const details = Object.fromEntries(
    records.map((record) => [
      record.slug,
      {
        slug: record.detailOverrides?.slug ?? record.slug,
        category: record.detailOverrides?.category ?? record.category,
        readTime: record.readTime,
        date: record.detailOverrides?.date ?? record.date,
        title: record.detailOverrides?.title ?? record.title,
        subtitle: record.subtitle,
        author: record.author,
        content: record.content,
        tags: record.tags,
      },
    ]),
  ) as Record<string, ArticleDetail>;

  return { articles, details };
}
