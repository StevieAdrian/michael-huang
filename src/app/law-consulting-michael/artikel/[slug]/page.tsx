import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LawConsultingArticleClientPage } from "./article-client";
import {
  lawConsultingArticleDetails,
  lawConsultingArticles,
} from "@/app/constants/law-consulting-articles";

interface LawConsultingArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: LawConsultingArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = lawConsultingArticleDetails[slug];

  if (!article) {
    return {
      title: "Artikel Konsultasi Hukum | Michael Huang",
      description:
        "Artikel seputar legal due diligence, kontrak bisnis, dan kepatuhan hukum startup.",
    };
  }

  return {
    title: `${article.title} | Konsultasi Hukum | Michael Huang`,
    description: article.subtitle,
  };
}

export async function generateStaticParams() {
  return lawConsultingArticles.map((article) => ({ slug: article.slug }));
}

export default async function LawConsultingArticlePage({
  params,
}: LawConsultingArticlePageProps) {
  const { slug } = await params;
  const article = lawConsultingArticleDetails[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = lawConsultingArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <LawConsultingArticleClientPage
      article={article}
      relatedArticles={relatedArticles}
    />
  );
}
