import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "3",
  title: "Keuntungan Tinggal di Kost Dekat Pusat Bisnis",
  excerpt: "Lokasi adalah segalanya. Tinggal dekat pusat bisnis bukan hanya menghemat waktu - tapi juga membuka lebih banyak peluang karir.",
  date: "18 Mei 2026",
  category: "Gaya Hidup",
  slug: "keuntungan-kost-pusat-bisnis",
  readTime: "5 menit",
  subtitle: "Tinggal di area strategis memberi lebih dari sekadar kemudahan mobilitas. Anda juga mendapat akses yang lebih baik ke peluang kerja dan jaringan profesional.",
  author: {
        name: "Tim Riset Lokasi",
        role: "Urban Living Analyst",
      },
  content: [
        {
          type: "paragraph",
          text: "Waktu tempuh yang pendek bisa meningkatkan kualitas hidup secara signifikan. Energi yang biasanya habis di jalan dapat dialihkan untuk istirahat, belajar, atau aktivitas produktif lainnya.",
        },
        {
          type: "heading",
          text: "Manfaat Tinggal di Lokasi Strategis",
        },
        {
          type: "list",
          items: [
            "Menghemat waktu dan biaya transportasi harian.",
            "Lebih mudah mengikuti aktivitas profesional setelah jam kerja.",
            "Akses cepat ke fasilitas kesehatan, kuliner, dan layanan publik.",
            "Meningkatkan peluang networking karena dekat pusat aktivitas.",
          ],
        },
        {
          type: "quote",
          text: "Lokasi yang tepat sering kali menjadi investasi gaya hidup terbaik, bahkan sebelum Anda menghitung nilai uangnya.",
        },
        {
          type: "paragraph",
          text: "Jika Anda berencana tinggal minimal 1 tahun, memilih kost di lokasi strategis biasanya memberi dampak positif yang paling terasa dalam jangka panjang.",
        },
      ],
  tags: ["Lokasi", "Pusat Bisnis", "Produktivitas", "Kost"],
};
