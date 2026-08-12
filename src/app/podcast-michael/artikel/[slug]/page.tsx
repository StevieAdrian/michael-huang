import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PodcastArticleClientPage } from "./article-client";
import { podcastArticleDetails, podcastArticles } from "@/app/constants/podcast-articles";
import { seoConfig } from "@/config/seo-config";

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
      title: "Artikel Podcast | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      description: "Artikel seputar podcast, interview, dan strategi konten audio.",
    };
  }

  return {
    title: `${article.title} | Podcast | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.`,
    description: article.subtitle,
    alternates: {
      canonical: `${seoConfig.siteUrl}/podcast-michael/artikel/${slug}`,
    },
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
