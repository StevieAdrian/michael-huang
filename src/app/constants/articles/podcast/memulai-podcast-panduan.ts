import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "1",
  title: "Memulai Podcast: Panduan Lengkap dari Nol",
  excerpt: "Dari konsep, peralatan, distribusi, hingga promosi, ini fondasi yang perlu Anda siapkan untuk membangun podcast yang bertahan lama.",
  date: "18 Mei 2026",
  category: "Panduan",
  slug: "memulai-podcast-panduan",
  readTime: "7 menit",
  subtitle: "Podcast yang baik tidak dimulai dari alat mahal, tetapi dari konsep yang jelas, alur produksi yang rapi, dan konsistensi dalam eksekusi.",
  author: {
        name: "Tim Podcast Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Podcast Producer",
      },
  content: [
        {
          type: "paragraph",
          text: "Banyak orang ingin mulai podcast, tetapi berhenti di tahap ide karena bingung harus mulai dari mana. Pendekatan yang paling efektif adalah menyederhanakan proses: tentukan topik, siapkan format, lalu bangun kebiasaan produksi yang realistis.",
        },
        {
          type: "heading",
          text: "Fondasi yang Perlu Disiapkan",
        },
        {
          type: "list",
          items: [
            "Tentukan audiens utama dan topik yang benar-benar Anda kuasai.",
            "Pilih format episode: solo, interview, atau panel diskusi.",
            "Gunakan peralatan audio yang cukup bersih untuk tahap awal.",
            "Susun jadwal rilis yang konsisten sejak awal.",
          ],
        },
        {
          type: "paragraph",
          text: "Setelah fondasi siap, fokus berikutnya adalah workflow. Buat proses yang sederhana dari recording, editing, penulisan deskripsi, hingga distribusi. Workflow yang rapi akan menjaga podcast tetap berjalan bahkan saat kesibukan meningkat.",
        },
        {
          type: "quote",
          text: "Podcast yang bertahan lama biasanya dibangun dengan sistem yang realistis, bukan semangat yang meledak di awal saja.",
        },
      ],
  tags: ["Podcast", "Panduan", "Produksi", "Konten"],
};
