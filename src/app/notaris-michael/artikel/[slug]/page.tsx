import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotarisArticleClientPage } from "./article-client";
import {
  notarisArticleDetails,
  notarisArticles,
} from "@/app/constants/notaris-articles";
import { seoConfig } from "@/config/seo-config";

interface NotarisArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: NotarisArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = notarisArticleDetails[slug];

  if (!article) {
    return {
      title: "Artikel Notaris | Michael Huang",
      description:
        "Artikel dan panduan seputar layanan notaris, akta autentik, dan pendirian badan usaha.",
    };
  }

  return {
    title: `${article.title} | Notaris | Michael Huang`,
    description: article.subtitle,
    alternates: {
      canonical: `${seoConfig.siteUrl}/notaris-michael/artikel/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return notarisArticles.map((article) => ({ slug: article.slug }));
}

export default async function NotarisArticlePage({
  params,
}: NotarisArticlePageProps) {
  const { slug } = await params;
  const article = notarisArticleDetails[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = notarisArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <NotarisArticleClientPage
      article={article}
      relatedArticles={relatedArticles}
    />
  );
}
