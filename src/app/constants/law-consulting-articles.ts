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
  {
    id: "4",
    title: "Aspek Hukum Merger dan Akuisisi di Indonesia",
    excerpt:
      "Ingin melakukan ekspansi bisnis melalui penggabungan atau pengambilalihan perusahaan? Pahami regulasi KPPU, hak karyawan, dan prosedurnya.",
    date: "22 Juni 2026",
    category: "M&A",
    slug: "aspek-hukum-merger-akuisisi",
  },
  {
    id: "5",
    title: "Pentingnya Perlindungan Data Pribadi (PDP) dalam Operasional Perusahaan",
    excerpt:
      "Dengan berlakunya UU PDP, setiap bisnis wajib menjaga keamanan data pelanggan. Pelajari sanksi hukum dan langkah kepatuhan yang harus diterapkan.",
    date: "15 Mei 2026",
    category: "Compliance",
    slug: "perlindungan-data-pribadi-pdp-perusahaan",
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
      name: "Tim Konsultasi Hukum Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
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
      name: "Tim Drafting Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
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
        text: "Banyak founder fokus pada growth, fundraising, and product-market fit. Namun aspek legal yang diabaikan di fase awal sering menjadi hambatan serius ketika startup mulai scale-up atau masuk putaran pendanaan baru.",
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
  "aspek-hukum-merger-akuisisi": {
    slug: "aspek-hukum-merger-akuisisi",
    category: "M&A",
    readTime: "7 menit",
    date: "22 Juni 2026",
    title: "Aspek Hukum Merger dan Akuisisi di Indonesia",
    subtitle:
      "Proses Merger dan Akuisisi (M&A) melibatkan regulasi yang kompleks dari aspek persaingan usaha hingga ketenagakerjaan.",
    author: {
      name: "Tim Konsultasi Hukum Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Corporate Legal Advisor",
    },
    content: [
      {
        type: "paragraph",
        text: "Merger (penggabungan) dan Akuisisi (pengambilalihan) merupakan keputusan strategis korporasi untuk memperluas pasar, meningkatkan efisiensi, atau memperoleh teknologi baru. Namun, transaksi M&A ini diatur ketat oleh UU No. 40 Tahun 2007 tentang Perseroan Terbatas dan regulasi persaingan usaha.",
      },
      {
        type: "heading",
        text: "1. Notifikasi dan Persetujuan KPPU",
      },
      {
        type: "paragraph",
        text: "Perusahaan yang melakukan merger atau akuisisi wajib memperhatikan batasan nilai aset atau nilai penjualan tertentu. Apabila memenuhi kriteria, transaksi harus dilaporkan ke KPPU (Komisi Pengawas Persaingan Usaha) untuk menghindari praktek monopoli.",
      },
      {
        type: "heading",
        text: "2. Perlindungan Terhadap Karyawan",
      },
      {
        type: "paragraph",
        text: "Berdasarkan regulasi ketenagakerjaan, merger atau akuisisi memberikan opsi kepada pekerja untuk memilih melanjutkan hubungan kerja dengan syarat baru atau mengajukan penghentian hubungan kerja dengan kompensasi yang sesuai ketentuan undang-undang.",
      },
      {
        type: "heading",
        text: "3. Hak-Hak Pemegang Saham Minoritas",
      },
      {
        type: "paragraph",
        text: "Pemegang saham minoritas yang tidak setuju dengan keputusan M&A berhak meminta agar saham mereka dibeli dengan harga yang wajar sesuai dengan ketentuan anggaran dasar perusahaan.",
      },
    ],
    tags: ["Merger", "Akuisisi", "KPPU", "Hukum Korporat"],
  },
  "perlindungan-data-pribadi-pdp-perusahaan": {
    slug: "perlindungan-data-pribadi-pdp-perusahaan",
    category: "Compliance",
    readTime: "6 menit",
    date: "15 Mei 2026",
    title: "Pentingnya Perlindungan Data Pribadi (PDP) dalam Operasional Perusahaan",
    subtitle:
      "Kepatuhan terhadap regulasi PDP kini bukan lagi pilihan, melainkan kewajiban legal yang memengaruhi kredibilitas bisnis Anda.",
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
  },
};
