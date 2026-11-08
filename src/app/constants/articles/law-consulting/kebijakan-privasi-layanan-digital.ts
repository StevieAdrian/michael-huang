import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "15",
  title: "Menyusun Kebijakan Privasi untuk Layanan Digital",
  excerpt: "Kebijakan privasi yang jelas menjelaskan data apa yang dikumpulkan, tujuan pemrosesan, dan pilihan yang tersedia bagi pengguna.",
  date: "16 November 2026",
  category: "Kepatuhan",
  slug: "kebijakan-privasi-layanan-digital",
  readTime: "7 menit",
  subtitle: "Kebijakan privasi yang mudah dipahami membantu pengguna mengetahui bagaimana informasi mereka dikelola dan bagaimana mereka dapat menghubungi penyedia layanan.",
  author: {
        name: "Tim Konsultasi Hukum Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Data and Technology Practice",
      },
  content: [
        {
          type: "paragraph",
          text: "Layanan digital dapat mengumpulkan informasi melalui pendaftaran akun, transaksi, formulir, atau penggunaan fitur. Kebijakan privasi sebaiknya menjelaskan praktik yang benar-benar dilakukan oleh layanan, dengan bahasa yang jelas bagi pengguna.",
        },
        {
          type: "heading",
          text: "Jelaskan Praktik Pengelolaan Data",
        },
        {
          type: "list",
          items: [
            "Jenis informasi yang dikumpulkan dan sumber perolehannya.",
            "Tujuan penggunaan informasi untuk setiap fitur atau proses utama.",
            "Pihak yang menerima atau memproses data untuk mendukung layanan.",
            "Masa penyimpanan dan cara pengguna mengajukan permintaan terkait datanya.",
            "Kontak yang dapat dihubungi untuk pertanyaan privasi atau keamanan.",
          ],
        },
        {
          type: "heading",
          text: "Pastikan Isi Sesuai dengan Praktik Nyata",
        },
        {
          type: "paragraph",
          text: "Tinjau alur data bersama tim produk, teknologi, pemasaran, dan operasional. Periksa formulir, cookie, analitik, serta integrasi pihak ketiga agar penjelasan di kebijakan tidak berbeda dari cara layanan bekerja.",
        },
        {
          type: "quote",
          text: "Keterbukaan yang konsisten membantu pengguna membuat keputusan dengan pemahaman yang lebih baik.",
        },
        {
          type: "paragraph",
          text: "Kewajiban privasi dapat bergantung pada jenis data, tujuan pemrosesan, dan aturan yang berlaku. Minta review profesional sebelum publikasi, dan perbarui kebijakan ketika praktik layanan berubah.",
        },
      ],
  tags: ["Privasi", "Data Pribadi", "Layanan Digital", "Kepatuhan"],
};
