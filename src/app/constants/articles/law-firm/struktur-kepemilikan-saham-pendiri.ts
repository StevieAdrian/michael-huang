import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "10",
  title: "Struktur Kepemilikan Saham yang Aman: Panduan untuk Pendiri Bisnis",
  excerpt: "Komposisi saham yang tidak terencana bisa menjadi akar konflik di masa depan. Pelajari strategi legal untuk menyusun struktur kepemilikan yang adil dan terlindungi.",
  date: "8 September 2026",
  category: "Korporat",
  slug: "struktur-kepemilikan-saham-pendiri",
  readTime: "8 menit",
  subtitle: "Bagi pendiri bisnis, struktur kepemilikan saham yang salah bisa mengancam kendali perusahaan. Perencanaan legal sejak awal adalah kunci keamanan jangka panjang.",
  author: {
        name: "Tim Legal Michael, Antonius & Co",
        role: "Corporate Law Division",
      },
  content: [
        {
          type: "paragraph",
          text: "Ketika bisnis berkembang dan mengundang investor atau mitra baru, struktur kepemilikan saham yang tidak terancang dengan baik bisa menjadi bom waktu. Banyak konflik pendiri (founder dispute) bermula dari ambiguitas kepemilikan, hak suara yang tidak seimbang, atau absennya mekanisme exit yang jelas.",
        },
        {
          type: "heading",
          text: "Mengapa Struktur Saham Harus Dirancang Sejak Awal?",
        },
        {
          type: "paragraph",
          text: "Komposisi saham menentukan siapa yang berhak mengambil keputusan strategis, siapa yang menerima dividen, dan siapa yang bisa melakukan exit di masa mendatang. Tanpa dokumen yang tepat, perselisihan antar pendiri bisa memakan waktu dan biaya litigasi yang besar.",
        },
        {
          type: "heading",
          text: "Instrumen Legal yang Wajib Disiapkan",
        },
        {
          type: "list",
          items: [
            "Shareholders Agreement (SHA): Mengatur hak dan kewajiban pemegang saham, mekanisme voting, dan klausul anti-dilusi.",
            "Vesting Schedule: Klausul yang memastikan saham pendiri diperoleh secara bertahap sebagai insentif komitmen jangka panjang.",
            "Right of First Refusal (ROFR): Memberi hak kepada pemegang saham lama untuk membeli saham yang akan dijual sebelum ditawarkan ke pihak luar.",
            "Drag-Along dan Tag-Along Rights: Melindungi pemegang saham minoritas dalam proses akuisisi.",
            "Deadlock Resolution Clause: Mekanisme penyelesaian jika pendiri tidak mencapai kesepakatan dalam keputusan kritis.",
          ],
        },
        {
          type: "quote",
          text: "Struktur saham yang jelas bukan hanya soal keadilan — ini tentang menjaga keutuhan bisnis dari dalam ketika tekanan dari luar semakin besar.",
        },
        {
          type: "heading",
          text: "Pola Kepemilikan yang Umum Digunakan Startup",
        },
        {
          type: "paragraph",
          text: "Di tahap awal, banyak startup menerapkan komposisi 50:50 antar pendiri — yang sering bermasalah saat terjadi deadlock. Pola yang lebih direkomendasikan adalah kepemilikan mayoritas oleh CEO sebesar 51% atau lebih, dengan saham selebihnya dibagi secara proporsional sesuai kontribusi dan dilindungi dengan SHA yang terstruktur.",
        },
        {
          type: "paragraph",
          text: "Dengan bantuan konsultan hukum korporat, Anda dapat menyusun struktur kepemilikan yang tidak hanya adil hari ini, tetapi juga kokoh menghadapi perubahan di masa mendatang — termasuk masuknya investor institusional, IPO, atau proses akuisisi.",
        },
      ],
  tags: ["Saham", "Korporat", "Pendiri", "Startup"],
};
