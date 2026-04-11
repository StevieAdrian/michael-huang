import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChurchArticleClientPage } from "./article-client";
import { churchArticleDetails, churchArticles } from "@/app/constants/church-articles";

interface ChurchArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ChurchArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = churchArticleDetails[slug];

  if (!article) {
    return {
      title: "Artikel Gereja | Michael Huang",
      description: "Artikel dan renungan komunitas Glory Ministry Church.",
    };
  }

  return {
    title: `${article.title} | Gereja | Michael Huang`,
    description: article.subtitle,
  };
}

export async function generateStaticParams() {
  return churchArticles.map((article) => ({ slug: article.slug }));
}

export default async function ChurchArticlePage({
  params,
}: ChurchArticlePageProps) {
  const { slug } = await params;
  const article = churchArticleDetails[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = churchArticles.filter((item) => item.slug !== slug).slice(0, 3);

  return <ChurchArticleClientPage article={article} relatedArticles={relatedArticles} />;
}
