import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "5",
  title: "Pentingnya Perlindungan Data Pribadi (PDP) dalam Operasional Perusahaan",
  excerpt: "Dengan berlakunya UU PDP, setiap bisnis wajib menjaga keamanan data pelanggan. Pelajari sanksi hukum dan langkah kepatuhan yang harus diterapkan.",
  date: "15 Juni 2026",
  category: "Compliance",
  slug: "perlindungan-data-pribadi-pdp-perusahaan",
  readTime: "6 menit",
  subtitle: "Kepatuhan terhadap regulasi PDP kini bukan lagi pilihan, melainkan kewajiban legal yang memengaruhi kredibilitas bisnis Anda.",
  author: {
        name: "Tim Regulatory Advisory",
        role: "Compliance Specialist",
      },
  content: [
        {
          type: "paragraph",
          text: "Undang-Undang Perlindungan Data Pribadi (UU PDP) menandai era baru dalam pengelolaan informasi digital di Indonesia. Setiap perusahaan yang mengumpulkan, menyimpan, atau memproses data pribadi pelanggan, karyawan, atau mitra bisnis wajib menyesuaikan operasionalnya.",
        },
        {
          type: "heading",
          text: "Prinsip Utama Pengelolaan Data Pribadi",
        },
        {
          type: "list",
          items: [
            "Persetujuan Tertulis (Consent): Pengumpulan data pribadi wajib didasarkan pada persetujuan tertulis yang jelas dari pemilik data.",
            "Tujuan yang Spesifik: Data hanya boleh digunakan sesuai dengan tujuan yang disampaikan saat pengumpulan.",
            "Keamanan Informasi: Perusahaan wajib menerapkan enkripsi dan sistem keamanan IT yang memadai untuk mencegah kebocoran data.",
          ],
        },
        {
          type: "heading",
          text: "Sanksi Pelanggaran UU PDP",
        },
        {
          type: "paragraph",
          text: "Ketidakpatuhan terhadap ketentuan UU PDP dapat berakibat fatal, mulai dari sanksi administratif berupa denda miliaran rupiah, perintah penghentian pemrosesan data, hingga sanksi pidana bagi pengurus perusahaan jika terbukti melakukan pelanggaran berat dengan sengaja.",
        },
      ],
  tags: ["UU PDP", "Compliance", "Privasi Data", "Hukum Digital"],
};
