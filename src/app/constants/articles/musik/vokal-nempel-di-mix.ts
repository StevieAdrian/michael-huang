import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "6",
  title: "Vokal Nempel di Mix: Teknik Dasar agar Suara Lebih Maju",
  excerpt: "Vokal sering tenggelam saat lagu makin ramai. Pelajari teknik EQ, compression, dan automation sederhana agar vokal tetap jelas dan emosional.",
  date: "4 Juli 2026",
  category: "Teknis",
  slug: "vokal-nempel-di-mix",
  readTime: "6 menit",
  subtitle: "Vokal adalah pusat perhatian di banyak genre. Dengan penanganan yang tepat, vokal bisa terdengar jelas tanpa harus terlalu keras.",
  author: {
        name: "Tim Audio Michael Music",
        role: "Mixing Engineer",
      },
  content: [
        {
          type: "paragraph",
          text: "Masalah paling umum dalam mixing adalah vokal terasa tertutup instrumen lain, terutama ketika aransemen mulai padat. Solusinya bukan sekadar menaikkan volume vokal, tetapi membangun ruang frekuensi dan dinamika yang seimbang.",
        },
        {
          type: "heading",
          text: "Langkah Dasar Membuat Vokal Lebih Maju",
        },
        {
          type: "list",
          items: [
            "High-pass filter seperlunya untuk membersihkan low rumble yang tidak perlu.",
            "Cut frekuensi boxy pada vokal jika terdengar keruh, lalu boost presence secara halus.",
            "Gunakan compressor dengan setting moderat agar level vokal lebih stabil.",
            "Beri de-esser untuk mengontrol sibilance tanpa membuat vokal kusam.",
          ],
        },
        {
          type: "heading",
          text: "Peran Automation dalam Chorus",
        },
        {
          type: "paragraph",
          text: "Automation volume sangat membantu menjaga artikulasi kata-kata penting, terutama di bagian chorus yang ramai. Naikkan level vokal sedikit pada frase kunci agar emosi lagu tetap sampai ke pendengar.",
        },
        {
          type: "quote",
          text: "Mix vokal yang bagus bukan yang paling keras, tapi yang paling mudah dipahami dan dirasakan.",
        },
        {
          type: "paragraph",
          text: "Selain plugin, kualitas performa vokal saat tracking tetap krusial. Rekaman yang baik sejak awal akan jauh lebih mudah dipoles saat mixing dan memberi hasil akhir yang lebih natural.",
        },
      ],
  tags: ["Vokal", "Mixing", "EQ", "Compression"],
};
