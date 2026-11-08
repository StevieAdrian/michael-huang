import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "8",
  title: "Teknik Opening 30 Detik yang Bikin Pendengar Langsung Nempel",
  excerpt: "Detik pertama menentukan apakah audiens lanjut mendengar. Pelajari struktur opening singkat yang tajam untuk meningkatkan retensi podcast.",
  date: "7 Agustus 2026",
  category: "Teknik",
  slug: "teknik-opening-30-detik-podcast",
  readTime: "5 menit",
  subtitle: "Pembuka episode yang kuat memberi alasan jelas bagi pendengar untuk bertahan sampai akhir. Teknik ini bisa diterapkan bahkan oleh host pemula.",
  author: {
        name: "Tim Podcast Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Show Development",
      },
  content: [
        {
          type: "paragraph",
          text: "Pendengar biasanya memutuskan dalam hitungan detik apakah sebuah episode layak dilanjutkan. Opening yang terlalu panjang atau berputar-putar membuat audiens cepat berpindah ke konten lain.",
        },
        {
          type: "heading",
          text: "Struktur Opening 30 Detik",
        },
        {
          type: "list",
          items: [
            "Kalimat hook yang menyinggung masalah audiens.",
            "Janji nilai: apa yang akan pendengar dapatkan.",
            "Satu alasan kenapa topik ini relevan sekarang.",
            "Transisi cepat ke isi utama tanpa intro berlebihan.",
          ],
        },
        {
          type: "quote",
          text: "Opening yang efektif tidak menjelaskan semuanya, tapi membuat pendengar penasaran untuk lanjut.",
        },
        {
          type: "paragraph",
          text: "Uji beberapa versi opening dan pantau retensi menit pertama. Perbaikan kecil di bagian pembuka sering memberi dampak besar pada performa keseluruhan episode.",
        },
      ],
  tags: ["Podcast", "Opening", "Retensi", "Host"],
};
