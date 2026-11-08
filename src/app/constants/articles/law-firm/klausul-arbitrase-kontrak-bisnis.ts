import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "5",
  title: "Pentingnya Klausul Arbitrase dalam Kontrak Bisnis",
  excerpt: "Mengapa banyak pelaku usaha memilih arbitrase dibanding pengadilan negeri? Simak kelebihan klausul arbitrase untuk menyelesaikan sengketa bisnis.",
  date: "11 Juni 2026",
  category: "Litigasi",
  slug: "klausul-arbitrase-kontrak-bisnis",
  readTime: "6 menit",
  subtitle: "Penyelesaian sengketa yang cepat, tertutup, dan ditangani oleh ahli industri menjadikan arbitrase pilihan utama kontrak komersial.",
  author: {
        name: "Tim Litigasi Michael, Antonius & Co",
        role: "Litigation & Dispute Resolution Division",
      },
  content: [
        {
          type: "paragraph",
          text: "Saat merancang kontrak bisnis, bagian penyelesaian sengketa (dispute resolution clause) sering kali kurang mendapat perhatian. Padahal, pilihan forum penyelesaian sengketa sangat menentukan biaya, waktu, dan kerahasiaan saat terjadi perselisihan di kemudian hari."
        },
        {
          type: "heading",
          text: "Kelebihan Arbitrase Dibanding Pengadilan"
        },
        {
          type: "list",
          items: [
            "Kerahasiaan Terjamin: Berbeda dengan sidang pengadilan negeri yang terbuka untuk umum, proses arbitrase bersifat tertutup dan rahasia.",
            "Keahlian Arbiter: Para pihak dapat memilih arbiter yang memiliki keahlian khusus di bidang industri yang disengketakan (misal: konstruksi, teknologi, atau keuangan).",
            "Waktu Penyelesaian Terukur: Putusan arbitrase umumnya lebih cepat dan bersifat final serta mengikat (final and binding), sehingga tidak ada proses banding panjang."
          ]
        },
        {
          type: "heading",
          text: "Cara Menyusun Klausul Arbitrase yang Sah"
        },
        {
          type: "paragraph",
          text: "Pastikan klausul arbitrase mencantumkan lembaga arbitrase yang dipilih (seperti BANI atau SIAC), hukum yang berlaku (governing law), bahasa yang digunakan, serta jumlah arbiter. Klausul yang tidak jelas (pathological clause) justru dapat memicu sengketa baru."
        }
      ],
  tags: ["Arbitrase", "Kontrak Bisnis", "Sengketa", "BANI"],
};
