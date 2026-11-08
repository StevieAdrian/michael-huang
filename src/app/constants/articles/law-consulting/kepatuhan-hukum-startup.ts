import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "3",
  title: "Kepatuhan Hukum untuk Startup: Dari Awal Hingga Skalabilitas",
  excerpt: "Banyak startup mengabaikan aspek hukum di fase awal. Artikel ini menjelaskan fondasi legalitas yang perlu dibangun sejak hari pertama.",
  date: "14 Mei 2026",
  category: "Startup",
  slug: "kepatuhan-hukum-startup",
  readTime: "6 menit",
  subtitle: "Startup yang tumbuh sehat sejak awal biasanya membangun fondasi legal yang rapi sejak hari pertama operasional.",
  author: {
        name: "Tim Regulatory Advisory",
        role: "Startup Legal Counsel",
      },
  content: [
        {
          type: "paragraph",
          text: "Banyak founder fokus pada growth, fundraising, and product-market fit. Namun aspek legal yang diabaikan di fase awal sering menjadi hambatan serius ketika startup mulai scale-up atau masuk putaran pendanaan baru.",
        },
        {
          type: "heading",
          text: "Fondasi Legal yang Perlu Disiapkan",
        },
        {
          type: "list",
          items: [
            "Struktur badan usaha dan komposisi kepemilikan saham.",
            "Perjanjian founder dan pembagian hak serta kewajiban.",
            "Kepatuhan ketenagakerjaan dan kontrak tim inti.",
            "Kebijakan privasi, perlindungan data, dan syarat layanan produk.",
          ],
        },
        {
          type: "paragraph",
          text: "Ketika startup masuk fase pendanaan, investor akan menilai legal hygiene secara ketat. Dokumentasi yang rapi mempercepat proses due diligence dan meningkatkan kredibilitas perusahaan.",
        },
        {
          type: "quote",
          text: "Skalabilitas bisnis yang sehat selalu berdiri di atas kepatuhan hukum yang disiplin.",
        },
      ],
  tags: ["Startup", "Compliance", "Fundraising", "Legal Foundation"],
};
