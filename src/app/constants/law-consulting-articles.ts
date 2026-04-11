import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const lawConsultingArticles: Article[] = [
  {
    id: "1",
    title: "Pentingnya Legal Due Diligence Sebelum Akuisisi Bisnis",
    excerpt:
      "LDD yang komprehensif dapat mengungkap risiko tersembunyi yang berpotensi menggagalkan transaksi Anda. Pelajari apa saja yang diperiksa dalam proses ini.",
    date: "20 Maret 2025",
    category: "M&A",
    slug: "legal-due-diligence-akuisisi",
  },
  {
    id: "2",
    title: "5 Klausul Penting yang Wajib Ada dalam Kontrak Bisnis",
    excerpt:
      "Kontrak yang lemah bisa menjadi sumber sengketa di kemudian hari. Pastikan kontrak Anda memuat klausul-klausul perlindungan berikut ini.",
    date: "1 Mar 2025",
    category: "Kontrak",
    slug: "klausul-penting-kontrak-bisnis",
  },
  {
    id: "3",
    title: "Kepatuhan Hukum untuk Startup: Dari Awal Hingga Skalabilitas",
    excerpt:
      "Banyak startup mengabaikan aspek hukum di fase awal. Artikel ini menjelaskan fondasi legalitas yang perlu dibangun sejak hari pertama.",
    date: "14 Jan 2025",
    category: "Startup",
    slug: "kepatuhan-hukum-startup",
  },
];

export const lawConsultingArticleDetails: Record<string, ArticleDetail> = {
  "legal-due-diligence-akuisisi": {
    slug: "legal-due-diligence-akuisisi",
    category: "M&A",
    readTime: "7 menit",
    date: "20 Maret 2025",
    title: "Pentingnya Legal Due Diligence Sebelum Akuisisi Bisnis",
    subtitle:
      "Legal due diligence membantu investor dan pembeli bisnis memahami risiko hukum tersembunyi sebelum transaksi disepakati.",
    author: {
      name: "Tim Konsultasi Hukum Michael Huang",
      role: "Corporate Legal Advisor",
    },
    content: [
      {
        type: "paragraph",
        text: "Dalam transaksi akuisisi, keputusan sering didorong oleh valuasi dan potensi pasar. Namun tanpa legal due diligence yang mendalam, Anda bisa mewarisi masalah hukum lama yang nilainya jauh lebih mahal dari harga akuisisi itu sendiri.",
      },
      {
        type: "heading",
        text: "Apa yang Diperiksa Dalam LDD?",
      },
      {
        type: "list",
        items: [
          "Status legalitas perusahaan dan perizinan usaha.",
          "Kontrak material dengan vendor, klien, dan mitra strategis.",
          "Potensi sengketa, gugatan, atau kewajiban hukum tertunda.",
          "Kepatuhan pajak, ketenagakerjaan, dan regulasi sektor terkait.",
        ],
      },
      {
        type: "paragraph",
        text: "Hasil LDD bukan untuk membatalkan transaksi, melainkan untuk memperbaiki struktur deal. Risiko yang teridentifikasi bisa diantisipasi melalui klausul indemnity, penyesuaian harga, atau syarat precedent sebelum closing.",
      },
      {
        type: "quote",
        text: "Transaksi yang aman bukan yang paling cepat, tetapi yang paling terukur risikonya.",
      },
      {
        type: "paragraph",
        text: "Dengan pendekatan LDD yang tepat, Anda tidak hanya melindungi modal, tetapi juga memperkuat posisi negosiasi selama proses akuisisi.",
      },
    ],
    tags: ["M&A", "Due Diligence", "Akuisisi", "Risiko Hukum"],
  },
  "klausul-penting-kontrak-bisnis": {
    slug: "klausul-penting-kontrak-bisnis",
    category: "Kontrak",
    readTime: "6 menit",
    date: "1 Mar 2025",
    title: "5 Klausul Penting yang Wajib Ada dalam Kontrak Bisnis",
    subtitle:
      "Kontrak yang baik bukan sekadar formalitas. Klausul yang tepat melindungi kepentingan bisnis Anda saat kondisi terbaik maupun terburuk.",
    author: {
      name: "Tim Drafting Michael Huang",
      role: "Contract Specialist",
    },
    content: [
      {
        type: "paragraph",
        text: "Banyak sengketa bisnis terjadi bukan karena niat buruk, tetapi karena kontrak yang ambigu. Menyusun klausul secara presisi sejak awal akan mengurangi celah interpretasi dan potensi konflik di masa depan.",
      },
      {
        type: "heading",
        text: "Klausul yang Harus Anda Prioritaskan",
      },
      {
        type: "list",
        items: [
          "Ruang lingkup pekerjaan dan standar deliverables.",
          "Skema pembayaran, denda keterlambatan, dan pajak terkait.",
          "Pembatasan tanggung jawab serta mekanisme ganti rugi.",
          "Ketentuan kerahasiaan dan perlindungan data.",
          "Mekanisme penyelesaian sengketa dan pilihan hukum.",
        ],
      },
      {
        type: "paragraph",
        text: "Selain mencantumkan klausul utama, penting juga memastikan konsistensi istilah antar pasal. Inkonsistensi kecil bisa menimbulkan interpretasi berbeda yang berujung sengketa.",
      },
      {
        type: "quote",
        text: "Kontrak yang kuat bukan yang paling panjang, tetapi yang paling jelas, seimbang, dan dapat dijalankan.",
      },
    ],
    tags: ["Kontrak", "Drafting", "Bisnis", "Sengketa"],
  },
  "kepatuhan-hukum-startup": {
    slug: "kepatuhan-hukum-startup",
    category: "Startup",
    readTime: "6 menit",
    date: "14 Jan 2025",
    title: "Kepatuhan Hukum untuk Startup: Dari Awal Hingga Skalabilitas",
    subtitle:
      "Startup yang tumbuh sehat sejak awal biasanya membangun fondasi legal yang rapi sejak hari pertama operasional.",
    author: {
      name: "Tim Regulatory Advisory",
      role: "Startup Legal Counsel",
    },
    content: [
      {
        type: "paragraph",
        text: "Banyak founder fokus pada growth, fundraising, dan product-market fit. Namun aspek legal yang diabaikan di fase awal sering menjadi hambatan serius ketika startup mulai scale-up atau masuk putaran pendanaan baru.",
      },
      {
        type: "heading",
        text: "Fondasi Legal yang Perlu Disiapkan",
      },
      {
        type: "list",
        items: [
          "Struktur badan usaha dan komposisi kepemilikan saham.",
          "Perjanjian founder dan pembagian hak serta kewajiban.",
          "Kepatuhan ketenagakerjaan dan kontrak tim inti.",
          "Kebijakan privasi, perlindungan data, dan syarat layanan produk.",
        ],
      },
      {
        type: "paragraph",
        text: "Ketika startup masuk fase pendanaan, investor akan menilai legal hygiene secara ketat. Dokumentasi yang rapi mempercepat proses due diligence dan meningkatkan kredibilitas perusahaan.",
      },
      {
        type: "quote",
        text: "Skalabilitas bisnis yang sehat selalu berdiri di atas kepatuhan hukum yang disiplin.",
      },
    ],
    tags: ["Startup", "Compliance", "Fundraising", "Legal Foundation"],
  },
};
