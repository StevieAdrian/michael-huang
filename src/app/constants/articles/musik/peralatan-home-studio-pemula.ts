import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "4",
  title: "Peralatan Home Studio Esensial untuk Pemula",
  excerpt: "Ingin membangun studio musik sendiri di rumah? Berikut adalah daftar peralatan esensial paling hemat untuk memulai produksi musik.",
  date: "15 Juni 2026",
  category: "Peralatan",
  slug: "peralatan-home-studio-pemula",
  readTime: "6 menit",
  subtitle: "Membangun workstation musik pribadi tidak melulu mahal. Fokus pada perangkat inti adalah kunci efisiensi budget.",
  author: {
        name: "Tim Audio Michael Music",
        role: "Gear Consultant",
      },
  content: [
        {
          type: "paragraph",
          text: "Membuat musik dari kenyamanan kamar sendiri kini bukan lagi impian yang mahal. Berkat kemajuan teknologi audio digital, Anda bisa merekam, memproduksi, dan memproses musik berkualitas tinggi hanya dengan beberapa alat utama.",
        },
        {
          type: "heading",
          text: "1. Komputer atau Laptop (DAW Host)",
        },
        {
          type: "paragraph",
          text: "Komputer Anda adalah otak dari studio. Pastikan memiliki RAM minimal 8GB (direkomendasikan 16GB) dan penyimpanan SSD agar pemuatan instrumen virtual serta pengolahan audio berjalan lancar.",
        },
        {
          type: "heading",
          text: "2. Audio Interface (Soundcard)",
        },
        {
          type: "paragraph",
          text: "Audio interface mengubah sinyal analog dari mikrofon atau instrumen menjadi data digital. Pilihlah interface yang memiliki preamp berkualitas baik dengan opsi phantom power 48V.",
        },
        {
          type: "heading",
          text: "3. Mikrofon Kondensor & Headphone Monitor",
        },
        {
          type: "paragraph",
          text: "Untuk vokal atau instrumen akustik, mikrofon kondensor adalah pilihan standar. Pasangkan dengan headphone monitor tipe closed-back agar suara instrumen tidak bocor kembali ke rekaman mikrofon.",
        },
      ],
  tags: ["Home Studio", "Audio Interface", "Mikrofon", "Gear Guide"],
};
