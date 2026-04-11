import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MusicArticleClientPage } from "./article-client";
import { musicArticleDetails, musicArticles } from "@/app/constants/music-articles";

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
      title: "Artikel Musik | Michael Huang",
      description: "Artikel seputar produksi musik, mixing, mastering, dan distribusi digital.",
    };
  }

  return {
    title: `${article.title} | Musik | Michael Huang`,
    description: article.subtitle,
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
