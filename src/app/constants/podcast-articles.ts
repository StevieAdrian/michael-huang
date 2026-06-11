import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const podcastArticles: Article[] = [
  {
    id: "1",
    title: "Memulai Podcast: Panduan Lengkap dari Nol",
    excerpt:
      "Dari konsep, peralatan, distribusi, hingga promosi, ini fondasi yang perlu Anda siapkan untuk membangun podcast yang bertahan lama.",
    date: "8 April 2025",
    category: "Panduan",
    slug: "memulai-podcast-panduan",
  },
  {
    id: "2",
    title: "Mengapa Podcast adalah Medium yang Tepat untuk Bisnis Anda",
    excerpt:
      "Podcast bukan hanya sarana hiburan. Medium ini efektif untuk membangun otoritas, kedekatan, dan kepercayaan audiens terhadap brand Anda.",
    date: "18 Maret 2025",
    category: "Bisnis",
    slug: "podcast-untuk-bisnis",
  },
  {
    id: "3",
    title: "Tips Mendapatkan Tamu Podcast yang Berkualitas",
    excerpt:
      "Tamu yang tepat dapat menaikkan kualitas percakapan sekaligus memperluas jangkauan episode Anda. Persiapan pendekatan jadi faktor penentu.",
    date: "2 Feb 2025",
    category: "Tips",
    slug: "tips-tamu-podcast-berkualitas",
  },
];

export const podcastArticleDetails: Record<string, ArticleDetail> = {
  "memulai-podcast-panduan": {
    slug: "memulai-podcast-panduan",
    category: "Panduan",
    readTime: "7 menit",
    date: "8 April 2025",
    title: "Memulai Podcast: Panduan Lengkap dari Nol",
    subtitle:
      "Podcast yang baik tidak dimulai dari alat mahal, tetapi dari konsep yang jelas, alur produksi yang rapi, dan konsistensi dalam eksekusi.",
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
  },
  "podcast-untuk-bisnis": {
    slug: "podcast-untuk-bisnis",
    category: "Bisnis",
    readTime: "6 menit",
    date: "18 Maret 2025",
    title: "Mengapa Podcast adalah Medium yang Tepat untuk Bisnis Anda",
    subtitle:
      "Podcast memberi ruang bagi bisnis untuk membangun kedekatan dan otoritas melalui percakapan yang lebih dalam daripada format konten singkat.",
    author: {
      name: "Tim Strategi Konten",
      role: "Brand Communication",
    },
    content: [
      {
        type: "paragraph",
        text: "Berbeda dari iklan konvensional, podcast memungkinkan brand hadir lewat percakapan yang lebih santai dan bernilai. Audiens tidak merasa dijual, melainkan diajak memahami cara berpikir, pengalaman, dan nilai yang dipegang oleh bisnis Anda.",
      },
      {
        type: "heading",
        text: "Nilai Podcast untuk Brand",
      },
      {
        type: "list",
        items: [
          "Membangun kredibilitas melalui insight yang konsisten.",
          "Memperkuat hubungan dengan audiens lewat format yang intim.",
          "Membuka peluang kolaborasi melalui tamu dan jaringan baru.",
          "Menghasilkan aset konten yang bisa dipotong ke berbagai platform.",
        ],
      },
      {
        type: "paragraph",
        text: "Podcast juga sangat fleksibel. Satu episode dapat diturunkan menjadi klip video, kutipan media sosial, artikel blog, dan newsletter. Artinya, investasi produksi audio bisa memberi dampak jauh lebih luas dibanding satu kanal saja.",
      },
    ],
    tags: ["Podcast", "Bisnis", "Branding", "Marketing"],
  },
  "tips-tamu-podcast-berkualitas": {
    slug: "tips-tamu-podcast-berkualitas",
    category: "Tips",
    readTime: "5 menit",
    date: "2 Feb 2025",
    title: "Tips Mendapatkan Tamu Podcast yang Berkualitas",
    subtitle:
      "Tamu yang relevan dapat meningkatkan kualitas diskusi dan memperluas jangkauan podcast Anda, tetapi pendekatan yang tepat tetap menjadi kunci.",
    author: {
      name: "Tim Host Development",
      role: "Show Researcher",
    },
    content: [
      {
        type: "paragraph",
        text: "Mengundang tamu bukan sekadar mencari nama besar. Tamu yang baik adalah mereka yang relevan dengan audiens, mampu bercerita dengan jelas, dan punya sudut pandang yang memperkaya percakapan.",
      },
      {
        type: "heading",
        text: "Strategi Mendekati Calon Tamu",
      },
      {
        type: "list",
        items: [
          "Jelaskan tema episode dan manfaat bagi audiens secara singkat.",
          "Tunjukkan kenapa calon tamu cocok untuk topik tersebut.",
          "Buat proses booking yang sederhana dan tidak bertele-tele.",
          "Siapkan brief sebelum rekaman agar tamu merasa lebih aman.",
        ],
      },
      {
        type: "quote",
        text: "Tamu yang merasa dihargai sebelum rekaman biasanya memberi percakapan yang jauh lebih terbuka saat rekaman berlangsung.",
      },
      {
        type: "paragraph",
        text: "Setelah episode tayang, jangan berhenti di situ. Bangun relasi lanjutan dengan tamu, karena jaringan yang baik sering menjadi sumber kolaborasi episode-episode terbaik berikutnya.",
      },
    ],
    tags: ["Podcast", "Interview", "Guest", "Host"],
  },
};
