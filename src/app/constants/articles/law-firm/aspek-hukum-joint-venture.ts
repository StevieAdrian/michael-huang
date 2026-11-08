import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "4",
  title: "Aspek Hukum Pendirian Joint Venture di Indonesia",
  excerpt: "Membangun kemitraan dengan investor asing? Pahami kerangka hukum, pembagian saham, dan ketentuan PMA untuk pendirian joint venture.",
  date: "10 Juni 2026",
  category: "Korporat",
  slug: "aspek-hukum-joint-venture",
  readTime: "7 menit",
  subtitle: "Kerjasama bisnis internasional menawarkan peluang besar, namun membutuhkan perlindungan hukum yang presisi sejak awal.",
  author: {
        name: "Tim Legal Michael, Antonius & Co",
        role: "Corporate Law Division",
      },
  content: [
        {
          type: "paragraph",
          text: "Joint Venture (JV) merupakan salah satu strategi paling umum bagi perusahaan lokal untuk berkolaborasi dengan investor asing atau sebaliknya. Namun, penggabungan modal dan teknologi lintas negara ini diatur dengan ketat oleh regulasi Penanaman Modal Asing (PMA) di Indonesia."
        },
        {
          type: "heading",
          text: "1. Pemilihan Struktur Badan Hukum"
        },
        {
          type: "paragraph",
          text: "Di Indonesia, joint venture dengan pihak asing wajib didirikan dalam bentuk Perseroan Terbatas Penanaman Modal Asing (PT PMA). Dokumen utama yang menjadi landasan adalah Joint Venture Agreement (JVA) dan Akta Pendirian Perusahaan."
        },
        {
          type: "heading",
          text: "2. Pembagian Saham dan Hak Suara"
        },
        {
          type: "paragraph",
          text: "JVA harus merinci pembagian kepemilikan saham, komposisi direksi dan dewan komisaris, hak veto (quorom & voting), serta mekanisme resolusi jika terjadi perselisihan (deadlock resolution)."
        },
        {
          type: "heading",
          text: "3. Hak Kekayaan Intelektual (HKI) dan Alih Teknologi"
        },
        {
          type: "paragraph",
          text: "Penting untuk mengatur kepemilikan HKI yang digunakan dalam JV. Apakah lisensi diberikan secara eksklusif, bagaimana royalti dihitung, dan siapa yang berhak atas pengembangan teknologi baru hasil dari JV tersebut."
        }
      ],
  tags: ["Joint Venture", "Korporat", "PT PMA", "Investasi"],
};
