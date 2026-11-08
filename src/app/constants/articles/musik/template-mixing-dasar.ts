import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "8",
  title: "Template Mixing Dasar: Cara Hemat Waktu untuk Produksi Lagu Rutin",
  excerpt: "Membangun template mixing membuat workflow lebih konsisten dan cepat. Cocok untuk produser yang merilis lagu secara berkala.",
  date: "7 Agustus 2026",
  category: "Teknis",
  slug: "template-mixing-dasar",
  readTime: "6 menit",
  subtitle: "Template mixing yang baik membantu Anda fokus pada kreativitas, bukan mengulang setup teknis dari nol di setiap proyek.",
  author: {
        name: "Tim Audio Michael Music",
        role: "Mix Engineer",
      },
  content: [
        {
          type: "paragraph",
          text: "Produser yang aktif merilis lagu sering kehilangan waktu hanya untuk menata session awal. Dengan template mixing, Anda bisa memulai lebih cepat dengan struktur channel, routing, dan plugin dasar yang sudah siap.",
        },
        {
          type: "heading",
          text: "Elemen Template yang Disarankan",
        },
        {
          type: "list",
          items: [
            "Grouping standar: drums, bass, instrument, vocal, FX.",
            "Bus processing ringan untuk menjaga headroom awal.",
            "Marker section lagu agar editing lebih cepat.",
            "Utility tracks untuk referensi dan A/B check.",
          ],
        },
        {
          type: "quote",
          text: "Template yang baik mempercepat keputusan kreatif tanpa membatasi karakter lagu.",
        },
        {
          type: "paragraph",
          text: "Template bukan aturan kaku. Gunakan sebagai fondasi, lalu sesuaikan sesuai genre dan kebutuhan proyek. Dengan pendekatan ini, konsistensi output meningkat tanpa mengorbankan orisinalitas.",
        },
      ],
  tags: ["Mixing", "Template", "DAW", "Workflow"],
};
