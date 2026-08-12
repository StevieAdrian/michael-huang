import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MusicArticleClientPage } from "./article-client";
import { musicArticleDetails, musicArticles } from "@/app/constants/music-articles";
import { seoConfig } from "@/config/seo-config";

interface MusicArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: MusicArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = musicArticleDetails[slug];

  if (!article) {
    return {
      title: "Artikel Musik | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      description: "Artikel seputar produksi musik, mixing, mastering, dan distribusi digital.",
    };
  }

  return {
    title: `${article.title} | Musik | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.`,
    description: article.subtitle,
    alternates: {
      canonical: `${seoConfig.siteUrl}/musik-production-michael/artikel/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return musicArticles.map((article) => ({ slug: article.slug }));
}

export default async function MusicArticlePage({ params }: MusicArticlePageProps) {
  const { slug } = await params;
  const article = musicArticleDetails[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = musicArticles.filter((item) => item.slug !== slug).slice(0, 3);

  return <MusicArticleClientPage article={article} relatedArticles={relatedArticles} />;
}
