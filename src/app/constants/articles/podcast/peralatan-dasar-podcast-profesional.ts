import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "4",
  title: "Peralatan Dasar Podcast untuk Hasil Audio Profesional",
  excerpt: "Tidak perlu studio mahal untuk menghasilkan audio jernih. Pahami peralatan dasar esensial dari mikrofon hingga software editing.",
  date: "11 Juni 2026",
  category: "Peralatan",
  slug: "peralatan-dasar-podcast-profesional",
  readTime: "5 menit",
  subtitle: "Kualitas audio adalah penentu utama retensi pendengar podcast. Berikut panduan memilih alat sesuai anggaran Anda.",
  author: {
        name: "Tim Podcast Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Audio Engineer",
      },
  content: [
        {
          type: "paragraph",
          text: "Banyak podcast pemula gagal mempertahankan pendengar bukan karena topiknya kurang menarik, tetapi karena kualitas audio yang buruk atau bising. Kunci utama audio podcast yang baik adalah pilihan mikrofon yang tepat dan penanganan ruangan.",
        },
        {
          type: "heading",
          text: "1. Mikrofon: USB vs XLR",
        },
        {
          type: "paragraph",
          text: "Mikrofon USB adalah pilihan termudah (plug-and-play), cocok untuk pemula. Sedangkan mikrofon XLR menawarkan kualitas audio yang lebih matang tetapi memerlukan audio interface tambahan.",
        },
        {
          type: "heading",
          text: "2. Headphone Monitor & Software Editing",
        },
        {
          type: "paragraph",
          text: "Gunakan headphone closed-back untuk memantau suara tanpa adanya kebocoran suara. Untuk software (DAW), Audacity (gratis) atau Reaper (sangat terjangkau) adalah opsi yang sangat disarankan untuk editing podcast.",
        },
      ],
  tags: ["Podcast", "Audio Gear", "Mikrofon", "Produksi"],
};
