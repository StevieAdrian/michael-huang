import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "12",
  title: "Strategi Penyelesaian Sengketa: Litigasi vs Arbitrase",
  excerpt: "Ketika sengketa bisnis tak terhindarkan, memilih jalur penyelesaian yang tepat sangat menentukan. Pahami perbedaan litigasi pengadilan dan arbitrase.",
  date: "10 Oktober 2026",
  category: "Litigasi",
  slug: "litigasi-vs-arbitrase-sengketa",
  readTime: "7 menit",
  subtitle: "Setiap mekanisme penyelesaian sengketa memiliki kelebihan dan kekurangan. Memilih jalur yang tepat dapat menghemat waktu, biaya, dan menjaga reputasi bisnis.",
  author: {
        name: "Tim Legal Michael, Antonius & Co",
        role: "Dispute Resolution Division",
      },
  content: [
        {
          type: "paragraph",
          text: "Ketika negosiasi gagal dan sengketa bisnis tidak terhindarkan, para pihak dihadapkan pada pilihan: menyelesaikan sengketa melalui pengadilan (litigasi) atau melalui arbitrase. Keduanya memiliki karakteristik, prosedur, dan konsekuensi yang berbeda.",
        },
        {
          type: "heading",
          text: "Litigasi Melalui Pengadilan",
        },
        {
          type: "list",
          items: [
            "Proses bersifat terbuka untuk umum, sehingga kurang menjaga kerahasiaan bisnis.",
            "Putusan dapat diajukan banding dan kasasi, memperpanjang waktu penyelesaian.",
            "Biaya relatif lebih terjangkau dibanding arbitrase internasional.",
            "Hakim ditunjuk oleh pengadilan, para pihak tidak dapat memilih.",
          ],
        },
        {
          type: "heading",
          text: "Arbitrase",
        },
        {
          type: "list",
          items: [
            "Proses bersifat tertutup dan rahasia, menjaga reputasi bisnis para pihak.",
            "Putusan arbitrase bersifat final dan mengikat, tidak dapat dibanding.",
            "Para pihak dapat memilih arbiter yang ahli di bidang sengketa.",
            "Umumnya lebih cepat, namun biaya cenderung lebih tinggi.",
          ],
        },
        {
          type: "quote",
          text: "Pilihan antara litigasi dan arbitrase sebaiknya sudah ditentukan sejak penyusunan kontrak melalui klausul penyelesaian sengketa yang jelas.",
        },
        {
          type: "heading",
          text: "Mana yang Tepat untuk Anda?",
        },
        {
          type: "paragraph",
          text: "Pemilihan jalur bergantung pada sifat sengketa, nilai transaksi, kebutuhan kerahasiaan, dan kecepatan penyelesaian yang diinginkan. Untuk sengketa komersial bernilai besar yang mengutamakan kerahasiaan, arbitrase sering lebih sesuai. Sementara untuk sengketa yang memerlukan upaya hukum berjenjang, litigasi bisa menjadi pilihan.",
        },
        {
          type: "paragraph",
          text: "Tim litigasi kami siap membantu menganalisis sengketa Anda dan merekomendasikan strategi penyelesaian yang paling menguntungkan. Konsultasikan kasus Anda sedini mungkin.",
        },
      ],
  tags: ["Litigasi", "Arbitrase", "Sengketa", "Penyelesaian Hukum"],
};
