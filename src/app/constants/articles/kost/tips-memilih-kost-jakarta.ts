import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "1",
  title: "Tips Memilih Kost yang Tepat di Jakarta",
  excerpt: "Dengan ribuan pilihan kost di Jakarta, memilih yang terbaik bisa membingungkan. Inilah panduan lengkap memilih kost sesuai kebutuhan dan anggaran Anda.",
  date: "13 Mei 2026",
  category: "Tips",
  slug: "tips-memilih-kost-jakarta",
  readTime: "6 menit",
  subtitle: "Memilih kost yang tepat bukan sekadar soal harga murah. Anda perlu mempertimbangkan lokasi, keamanan, dan kualitas fasilitas agar hidup harian lebih nyaman.",
  author: {
        name: "Tim Hunian Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Property Advisor",
      },
  content: [
        {
          type: "paragraph",
          text: "Di kota besar seperti Jakarta, keputusan memilih kost berdampak langsung ke produktivitas harian. Kost yang jauh dari aktivitas utama bisa menghabiskan waktu dan energi Anda setiap hari.",
        },
        {
          type: "heading",
          text: "Faktor Utama Saat Memilih Kost",
        },
        {
          type: "list",
          items: [
            "Jarak ke kantor atau kampus utama.",
            "Akses transportasi umum dan fasilitas publik.",
            "Kondisi keamanan lingkungan sekitar.",
            "Kualitas kamar, ventilasi, dan kebersihan area bersama.",
          ],
        },
        {
          type: "paragraph",
          text: "Selain itu, cek juga detail kontrak sejak awal: apakah ada biaya tambahan listrik, aturan jam malam, dan kebijakan tamu. Transparansi aturan akan menghindari konflik di kemudian hari.",
        },
        {
          type: "quote",
          text: "Kost yang baik tidak hanya nyaman ditempati hari ini, tetapi juga mendukung ritme hidup Anda dalam jangka panjang.",
        },
      ],
  tags: ["Kost", "Jakarta", "Hunian", "Tips"],
};
