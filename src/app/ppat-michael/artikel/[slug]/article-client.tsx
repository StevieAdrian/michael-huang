"use client";

import { ArticleDetailPage } from "@/shared/components/article-detail-page";
import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";
import { PPAT_WHATSAPP_URL } from "@/app/constants/links";

interface PPATArticleClientPageProps {
  article: ArticleDetail;
  relatedArticles: Article[];
}

export function PPATArticleClientPage({
  article,
  relatedArticles,
}: PPATArticleClientPageProps) {
  return (
    <ArticleDetailPage
      article={article}
      relatedArticles={relatedArticles}
      basePath="/ppat-michael"
      breadcrumbLabel="PPAT"
      backLabel="Kembali ke PPAT"
      cta={{
        title: "Perlu bantu urus akta tanah?",
        subtitle: "Konsultasikan kebutuhan PPAT Anda bersama tim kami.",
        buttonText: "Konsultasi PPAT",
        href: PPAT_WHATSAPP_URL,
      }}
    />
  );
}
