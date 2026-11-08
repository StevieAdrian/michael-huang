import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "3",
  title: "Cara Mendistribusikan Musik ke Spotify dan Apple Music",
  excerpt: "Setelah rekaman selesai, langkah berikutnya adalah distribusi digital. Pelajari cara mendaftarkan musik Anda ke platform streaming.",
  date: "24 Mei 2026",
  category: "Distribusi",
  slug: "distribusi-musik-streaming",
  readTime: "5 menit",
  subtitle: "Setelah proses produksi selesai, distribusi digital adalah langkah penting agar lagu Anda bisa ditemukan pendengar di berbagai platform streaming.",
  author: {
        name: "Tim Rilis Digital Michael Music",
        role: "Digital Distribution",
      },
  content: [
        {
          type: "paragraph",
          text: "Musisi independen kini bisa merilis lagu tanpa label besar, tetapi tetap perlu strategi distribusi yang benar. Kunci utamanya adalah metadata rapi, artwork sesuai standar, dan jadwal rilis yang terencana.",
        },
        {
          type: "heading",
          text: "Checklist Sebelum Rilis",
        },
        {
          type: "list",
          items: [
            "Siapkan file audio WAV 24-bit berkualitas final master.",
            "Gunakan artwork cover dengan resolusi yang sesuai ketentuan distributor.",
            "Pastikan judul lagu, nama artis, dan credit sudah konsisten.",
            "Tentukan tanggal rilis minimal 2-3 minggu sebelum publish.",
          ],
        },
        {
          type: "heading",
          text: "Sesudah Lagu Tayang",
        },
        {
          type: "paragraph",
          text: "Optimalkan profil artis, dorong playlist pitching, dan jalankan konten promosi pendek di media sosial. Distribusi bukan sekadar upload file, tetapi proses membangun momentum audiens secara berkelanjutan.",
        },
      ],
  tags: ["Distribusi", "Spotify", "Apple Music", "Rilis Digital"],
};
