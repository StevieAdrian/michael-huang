"use client";

import { ArticleDetailPage } from "@/shared/components/article-detail-page";
import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";
import { NOTARIS_WHATSAPP_URL } from "@/app/constants/links";

interface NotarisArticleClientPageProps {
  article: ArticleDetail;
  relatedArticles: Article[];
}

export function NotarisArticleClientPage({
  article,
  relatedArticles,
}: NotarisArticleClientPageProps) {
  return (
    <ArticleDetailPage
      article={article}
      relatedArticles={relatedArticles}
      basePath="/notaris-michael"
      breadcrumbLabel="Notaris"
      backLabel="Kembali ke Notaris"
      cta={{
        title: "Butuh layanan notaris profesional?",
        subtitle: "Kantor Notaris kami siap membantu pembuatan akta dan legalisasi dokumen Anda.",
        buttonText: "Konsultasi Sekarang",
        href: NOTARIS_WHATSAPP_URL,
      }}
    />
  );
}
