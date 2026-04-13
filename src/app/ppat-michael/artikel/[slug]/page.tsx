import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PPATArticleClientPage } from "./article-client";
import { ppatArticleDetails, ppatArticles } from "@/app/constants/ppat-articles";

interface PPATArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PPATArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ppatArticleDetails[slug];

  if (!article) {
    return {
      title: "Artikel PPAT | Michael Huang",
      description: "Artikel seputar layanan PPAT, AJB, balik nama, dan hak tanggungan.",
    };
  }

  return {
    title: `${article.title} | PPAT | Michael Huang`,
    description: article.subtitle,
  };
}

export async function generateStaticParams() {
  return ppatArticles.map((article) => ({ slug: article.slug }));
}

export default async function PPATArticlePage({ params }: PPATArticlePageProps) {
  const { slug } = await params;
  const article = ppatArticleDetails[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = ppatArticles.filter((item) => item.slug !== slug).slice(0, 3);

  return <PPATArticleClientPage article={article} relatedArticles={relatedArticles} />;
}
