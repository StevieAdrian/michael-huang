import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LawFirmArticleClientPage } from "./article-client";
import {
  lawFirmArticleDetails,
  lawFirmArticles,
} from "@/app/constants/law-firm-articles";

interface LawFirmArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: LawFirmArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = lawFirmArticleDetails[slug];

  if (!article) {
    return {
      title: "Artikel Law Firm | Michael Huang",
      description:
        "Artikel dan wawasan hukum dari Michael, Antonius & Co Law Firm.",
    };
  }

  return {
    title: `${article.title} | Law Firm | Michael Huang`,
    description: article.subtitle,
  };
}

export async function generateStaticParams() {
  return lawFirmArticles.map((article) => ({ slug: article.slug }));
}

export default async function LawFirmArticlePage({
  params,
}: LawFirmArticlePageProps) {
  const { slug } = await params;
  const article = lawFirmArticleDetails[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = lawFirmArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <LawFirmArticleClientPage
      article={article}
      relatedArticles={relatedArticles}
    />
  );
}
