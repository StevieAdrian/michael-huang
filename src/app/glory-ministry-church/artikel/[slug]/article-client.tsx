"use client";

import { ArticleDetailPage } from "@/shared/components/article-detail-page";
import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

interface ChurchArticleClientPageProps {
  article: ArticleDetail;
  relatedArticles: Article[];
}

export function ChurchArticleClientPage({
  article,
  relatedArticles,
}: ChurchArticleClientPageProps) {
  return (
    <ArticleDetailPage
      article={article}
      relatedArticles={relatedArticles}
      basePath="/glory-ministry-church"
      breadcrumbLabel="Gereja"
      backLabel="Kembali ke Gereja"
      cta={{
        title: "Butuh bantuan lebih lanjut?",
        subtitle: "Tim Gereja kami siap membantu Anda secara langsung.",
        buttonText: "Hubungi Kami",
        href: "https://wa.me/6281234567890",
      }}
    />
  );
}
