import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "8",
  title: "Cara Memilih Teman Sekamar yang Cocok untuk Produktivitas dan Privasi",
  excerpt: "Salah pilih teman sekamar bisa bikin stres harian. Pelajari indikator kecocokan agar tinggal bersama tetap nyaman dan saling menghargai.",
  date: "7 Agustus 2026",
  category: "Tips",
  slug: "memilih-teman-sekamar-cocok",
  readTime: "6 menit",
  subtitle: "Kecocokan gaya hidup adalah faktor utama saat berbagi kamar. Komunikasi ekspektasi sejak awal dapat mencegah konflik jangka panjang.",
  author: {
        name: "Tim Operasional Kost",
        role: "Resident Experience",
      },
  content: [
        {
          type: "paragraph",
          text: "Berbagi kamar dapat menghemat biaya, namun juga menuntut penyesuaian ritme hidup. Banyak konflik terjadi bukan karena niat buruk, melainkan karena ekspektasi yang tidak pernah dibicarakan sejak awal.",
        },
        {
          type: "heading",
          text: "Hal yang Perlu Dicocokkan Sebelum Tinggal Bersama",
        },
        {
          type: "list",
          items: [
            "Jadwal harian: jam tidur, jam bangun, dan aktivitas malam.",
            "Standar kebersihan kamar dan pembagian tugas ringan.",
            "Kebijakan tamu, penggunaan barang bersama, dan privasi.",
            "Kebiasaan kerja atau belajar agar tidak saling mengganggu.",
          ],
        },
        {
          type: "quote",
          text: "Teman sekamar terbaik bukan yang paling mirip, tetapi yang paling bisa saling menghormati batas.",
        },
        {
          type: "paragraph",
          text: "Sebelum memutuskan, lakukan obrolan singkat tentang rutinitas dan aturan dasar. Kesepakatan sederhana di awal akan membuat kehidupan kost lebih tenang, produktif, dan minim drama.",
        },
      ],
  tags: ["Teman Sekamar", "Kost", "Tips Hunian", "Produktivitas"],
};
