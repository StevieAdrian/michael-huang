import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PodcastArticleClientPage } from "./article-client";
import { podcastArticleDetails, podcastArticles } from "@/app/constants/podcast-articles";

interface PodcastArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PodcastArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = podcastArticleDetails[slug];

  if (!article) {
    return {
      title: "Artikel Podcast | Michael Huang",
      description: "Artikel seputar podcast, interview, dan strategi konten audio.",
    };
  }

  return {
    title: `${article.title} | Podcast | Michael Huang`,
    description: article.subtitle,
  };
}

export async function generateStaticParams() {
  return podcastArticles.map((article) => ({ slug: article.slug }));
}

export default async function PodcastArticlePage({ params }: PodcastArticlePageProps) {
  const { slug } = await params;
  const article = podcastArticleDetails[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = podcastArticles.filter((item) => item.slug !== slug).slice(0, 3);

  return <PodcastArticleClientPage article={article} relatedArticles={relatedArticles} />;
}
