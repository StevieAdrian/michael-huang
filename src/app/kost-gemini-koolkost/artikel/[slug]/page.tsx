import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KostArticleClientPage } from "./article-client";
import { kostArticleDetails, kostArticles } from "@/app/constants/kost-articles";
import { seoConfig } from "@/config/seo-config";

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
      title: "Artikel Kost | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      description: "Artikel seputar tips memilih kost, fasilitas, dan gaya hidup hunian.",
    };
  }

  return {
    title: `${article.title} | Kost | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.`,
    description: article.subtitle,
    alternates: {
      canonical: `${seoConfig.siteUrl}/kost-gemini-koolkost/artikel/${slug}`,
    },
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
