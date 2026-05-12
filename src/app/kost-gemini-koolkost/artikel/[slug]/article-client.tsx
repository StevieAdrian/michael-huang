"use client";

import { ArticleDetailPage } from "@/shared/components/article-detail-page";
import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";
import { WHATSAPP_PHONE } from "@/app/constants/links";

interface KostArticleClientPageProps {
  article: ArticleDetail;
  relatedArticles: Article[];
}

export function KostArticleClientPage({
  article,
  relatedArticles,
}: KostArticleClientPageProps) {
  return (
    <ArticleDetailPage
      article={article}
      relatedArticles={relatedArticles}
      basePath="/kost-gemini-koolkost"
      breadcrumbLabel="Kost"
      backLabel="Kembali ke Kost"
      cta={{
        title: "Cari kost nyaman di Jakarta Barat?",
        subtitle: "Tim kami siap bantu cek kamar tersedia sesuai kebutuhan Anda.",
        buttonText: "Tanya Kamar",
        href: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
          "Halo, saya ingin tanya kamar kost yang tersedia",
        )}`,
      }}
    />
  );
}
