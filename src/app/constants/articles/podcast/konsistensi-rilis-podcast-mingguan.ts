import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "9",
  title: "Menjaga Konsistensi Rilis Podcast Mingguan Tanpa Kewalahan",
  excerpt: "Konsistensi adalah kunci pertumbuhan podcast, tapi banyak kreator berhenti karena kelelahan. Simak sistem produksi mingguan yang realistis.",
  date: "7 Agustus 2026",
  category: "Panduan",
  slug: "konsistensi-rilis-podcast-mingguan",
  readTime: "6 menit",
  subtitle: "Rilis mingguan bisa terasa berat tanpa sistem. Dengan workflow yang sederhana, tim kecil sekalipun bisa tetap konsisten.",
  author: {
        name: "Tim Strategi Konten",
        role: "Production Workflow",
      },
  content: [
        {
          type: "paragraph",
          text: "Banyak podcast berhenti bukan karena kurang ide, tetapi karena proses produksi yang tidak realistis. Konsistensi membutuhkan sistem kerja yang berulang, bukan tenaga ekstra setiap minggu.",
        },
        {
          type: "heading",
          text: "Workflow Mingguan yang Disarankan",
        },
        {
          type: "list",
          items: [
            "Hari 1: riset topik dan outline episode.",
            "Hari 2: rekaman 1-2 episode sekaligus (batching).",
            "Hari 3: editing dan pembuatan asset promosi.",
            "Hari 4-7: distribusi konten turunan dan evaluasi data.",
          ],
        },
        {
          type: "quote",
          text: "Podcast bertumbuh dari ritme yang konsisten, bukan dari episode yang sesekali sempurna.",
        },
        {
          type: "paragraph",
          text: "Mulailah dengan target yang bisa dipenuhi minimal 8 minggu berturut-turut. Setelah ritme stabil, baru tingkatkan kualitas produksi secara bertahap agar pertumbuhan tetap sehat.",
        },
      ],
  tags: ["Podcast", "Konsistensi", "Workflow", "Produksi"],
};
