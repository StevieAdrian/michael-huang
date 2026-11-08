import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "9",
  title: "Tips Menjaga Kamar Kost Tetap Kering dan Anti Lembap",
  excerpt: "Kamar lembap memicu bau dan jamur yang mengganggu kesehatan. Ikuti langkah sederhana ini untuk menjaga kamar tetap segar sepanjang musim.",
  date: "7 Agustus 2026",
  category: "Panduan",
  slug: "kamar-kost-anti-lembap",
  readTime: "5 menit",
  subtitle: "Kelembapan berlebih membuat kamar tidak nyaman dan berisiko bagi kesehatan. Perawatan rutin kecil bisa memberi dampak besar.",
  author: {
        name: "Tim Hunian Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Resident Care",
      },
  content: [
        {
          type: "paragraph",
          text: "Kamar kost yang lembap umumnya ditandai bau apek, dinding berjamur, dan kasur terasa dingin. Kondisi ini bukan cuma mengganggu kenyamanan, tetapi juga dapat memicu alergi dan gangguan pernapasan.",
        },
        {
          type: "heading",
          text: "Langkah Sederhana Mengurangi Lembap",
        },
        {
          type: "list",
          items: [
            "Buka ventilasi secara rutin agar sirkulasi udara tetap berjalan.",
            "Jangan menumpuk pakaian basah di dalam kamar.",
            "Gunakan penyerap lembap di area sudut kamar dan lemari.",
            "Bersihkan titik jamur sejak awal sebelum menyebar.",
          ],
        },
        {
          type: "quote",
          text: "Kamar yang sehat dimulai dari udara yang sehat.",
        },
        {
          type: "paragraph",
          text: "Lakukan pengecekan mingguan pada area rawan lembap seperti bawah kasur, belakang lemari, dan sudut dinding. Konsistensi perawatan kecil jauh lebih efektif daripada perbaikan besar saat masalah sudah parah.",
        },
      ],
  tags: ["Kamar Kost", "Anti Lembap", "Kebersihan", "Hunian Sehat"],
};
