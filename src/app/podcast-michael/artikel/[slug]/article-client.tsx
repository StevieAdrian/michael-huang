"use client";

import { ArticleDetailPage } from "@/shared/components/article-detail-page";
import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";
import { YOUTUBE_CHANNEL_URL } from "@/app/constants/links";

interface PodcastArticleClientPageProps {
  article: ArticleDetail;
  relatedArticles: Article[];
}

export function PodcastArticleClientPage({
  article,
  relatedArticles,
}: PodcastArticleClientPageProps) {
  return (
    <ArticleDetailPage
      article={article}
      relatedArticles={relatedArticles}
      basePath="/podcast-michael"
      breadcrumbLabel="Podcast"
      backLabel="Kembali ke Podcast"
      cta={{
        title: "Mau ikuti episode terbaru?",
        subtitle: "Kunjungi channel podcast kami untuk percakapan terbaru setiap minggu.",
        buttonText: "Tonton Podcast",
        href: YOUTUBE_CHANNEL_URL,
      }}
    />
  );
}
