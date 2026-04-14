import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KostArticleClientPage } from "./article-client";
import { kostArticleDetails, kostArticles } from "@/app/constants/kost-articles";

interface KostArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: KostArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = kostArticleDetails[slug];

  if (!article) {
    return {
      title: "Artikel Kost | Michael Huang",
      description: "Artikel seputar tips memilih kost, fasilitas, dan gaya hidup hunian.",
    };
  }

  return {
    title: `${article.title} | Kost | Michael Huang`,
    description: article.subtitle,
  };
}

export async function generateStaticParams() {
  return kostArticles.map((article) => ({ slug: article.slug }));
}

export default async function KostArticlePage({ params }: KostArticlePageProps) {
  const { slug } = await params;
  const article = kostArticleDetails[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = kostArticles.filter((item) => item.slug !== slug).slice(0, 3);

  return <KostArticleClientPage article={article} relatedArticles={relatedArticles} />;
}
