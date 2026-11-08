import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "3",
  title: "Apa Itu Hak Tanggungan dan Bagaimana Cara Kerjanya?",
  excerpt: "Hak tanggungan adalah jaminan atas tanah yang sering digunakan dalam kredit bank. Pahami hak dan kewajiban Anda sebagai debitur.",
  date: "13 Mei 2026",
  category: "Edukasi",
  slug: "hak-tanggungan-pengertian",
  readTime: "6 menit",
  subtitle: "Hak tanggungan adalah jaminan kebendaan atas tanah untuk pelunasan utang tertentu. Instrumen ini umum digunakan dalam pembiayaan perbankan.",
  author: {
        name: "Tim Legal PPAT",
        role: "Ahli Hak Atas Tanah",
      },
  content: [
        {
          type: "paragraph",
          text: "Dalam praktik pembiayaan, bank membutuhkan jaminan yang memiliki kekuatan eksekutorial. Hak tanggungan memberikan kepastian hukum bagi kreditur sekaligus memperjelas posisi debitur atas objek jaminan.",
        },
        {
          type: "heading",
          text: "Unsur Penting Hak Tanggungan",
        },
        {
          type: "list",
          items: [
            "Objek jaminan berupa hak atas tanah yang dapat dibebani.",
            "Adanya utang pokok yang dijamin pelunasannya.",
            "Pembuatan APHT di hadapan PPAT.",
            "Pendaftaran hak tanggungan ke BPN.",
          ],
        },
        {
          type: "quote",
          text: "Hak tanggungan bukan hanya formalitas kredit, tetapi instrumen legal untuk menjaga kepastian hak para pihak.",
        },
        {
          type: "paragraph",
          text: "Memahami hak dan kewajiban sejak awal membantu debitur mengambil keputusan pembiayaan dengan lebih aman dan terukur.",
        },
      ],
  tags: ["Hak Tanggungan", "APHT", "PPAT", "Kredit Bank"],
  detailOverrides: {
    date: "15 Mei 2026",
  },
};
