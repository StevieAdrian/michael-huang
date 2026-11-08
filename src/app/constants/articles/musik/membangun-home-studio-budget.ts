import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "13",
  title: "Tips Membangun Home Studio dengan Budget Terbatas",
  excerpt: "Tak perlu biaya besar untuk mulai memproduksi musik berkualitas. Simak panduan menyusun home studio fungsional dengan anggaran yang efisien.",
  date: "12 Oktober 2026",
  category: "Studio",
  slug: "membangun-home-studio-budget",
  readTime: "6 menit",
  subtitle: "Kualitas produksi tidak selalu soal peralatan mahal. Dengan perencanaan cermat, Anda bisa membangun home studio fungsional tanpa menguras kantong.",
  author: {
        name: "Tim Produksi Michael Music",
        role: "Studio Engineer",
      },
  content: [
        {
          type: "paragraph",
          text: "Impian memiliki studio sendiri kini semakin terjangkau berkat kemajuan teknologi audio. Namun banyak musisi pemula terjebak membeli peralatan mahal yang belum tentu dibutuhkan. Kunci membangun home studio yang baik adalah memprioritaskan kebutuhan dasar terlebih dahulu.",
        },
        {
          type: "heading",
          text: "Peralatan Dasar yang Wajib Dimiliki",
        },
        {
          type: "list",
          items: [
            "Komputer atau laptop dengan spesifikasi memadai untuk menjalankan DAW.",
            "Audio interface untuk konversi sinyal analog ke digital.",
            "Headphone atau monitor studio untuk monitoring akurat.",
            "Mikrofon kondensor untuk vokal dan instrumen akustik.",
            "DAW (Digital Audio Workstation) — banyak pilihan gratis atau terjangkau.",
          ],
        },
        {
          type: "heading",
          text: "Prioritaskan Akustik Ruangan",
        },
        {
          type: "paragraph",
          text: "Banyak orang mengabaikan akustik ruangan dan langsung membeli peralatan mahal. Padahal, perlakuan akustik sederhana seperti panel busa, karpet, dan tirai tebal dapat meningkatkan kualitas rekaman secara signifikan dengan biaya minim.",
        },
        {
          type: "quote",
          text: "Ruangan yang diperlakukan dengan baik dan mikrofon murah sering menghasilkan rekaman lebih baik daripada mikrofon mahal di ruangan yang buruk.",
        },
        {
          type: "heading",
          text: "Tips Menghemat Anggaran",
        },
        {
          type: "list",
          items: [
            "Mulai dari peralatan esensial, tambah secara bertahap sesuai kebutuhan.",
            "Manfaatkan plugin dan sample library gratis berkualitas.",
            "Pertimbangkan peralatan bekas dari sumber terpercaya.",
            "Investasikan pada monitoring yang baik sebelum membeli gear tambahan.",
          ],
        },
        {
          type: "paragraph",
          text: "Dengan perencanaan yang tepat, home studio sederhana sudah cukup untuk menghasilkan karya berkualitas. Jika Anda ingin produksi tingkat profesional, tim studio kami siap membantu dari rekaman hingga mastering.",
        },
      ],
  tags: ["Home Studio", "Produksi Musik", "Peralatan", "Tips"],
};
