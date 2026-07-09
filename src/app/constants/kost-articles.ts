import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const kostArticles: Article[] = [
  {
    id: "1",
    title: "Tips Memilih Kost yang Tepat di Jakarta",
    excerpt:
      "Dengan ribuan pilihan kost di Jakarta, memilih yang terbaik bisa membingungkan. Inilah panduan lengkap memilih kost sesuai kebutuhan dan anggaran Anda.",
    date: "13 Mei 2026",
    category: "Tips",
    slug: "tips-memilih-kost-jakarta",
  },
  {
    id: "2",
    title: "5 Fasilitas Wajib di Kost Premium Modern",
    excerpt:
      "Kost premium bukan hanya soal harga - ini tentang kualitas hidup. Pastikan kost pilihan Anda memiliki 5 fasilitas penting ini.",
    date: "15 Mei 2026",
    category: "Panduan",
    slug: "fasilitas-wajib-kost-premium",
  },
  {
    id: "3",
    title: "Keuntungan Tinggal di Kost Dekat Pusat Bisnis",
    excerpt:
      "Lokasi adalah segalanya. Tinggal dekat pusat bisnis bukan hanya menghemat waktu - tapi juga membuka lebih banyak peluang karir.",
    date: "18 Mei 2026",
    category: "Gaya Hidup",
    slug: "keuntungan-kost-pusat-bisnis",
  },
  {
    id: "4",
    title: "Cara Mengatur Budget Bulanan untuk Anak Kost",
    excerpt:
      "Mengelola keuangan saat tinggal di kost bisa jadi tantangan. Pelajari cara mengatur pengeluaran bulanan agar tetap hemat tanpa mengorbankan kenyamanan.",
    date: "19 Juni 2026",
    category: "Keuangan",
    slug: "budget-bulanan-anak-kost",
  },
  {
    id: "5",
    title: "Dekorasi Kamar Kost: Bikin Nyaman Tanpa Mahal",
    excerpt:
      "Kamar kost sempit bukan alasan untuk tidak nyaman. Dengan trik dekorasi sederhana, kamar Anda bisa terasa lebih luas, rapi, dan estetik.",
    date: "19 Juni 2026",
    category: "Dekorasi",
    slug: "dekorasi-kamar-kost-nyaman",
  },
];

export const kostArticleDetails: Record<string, ArticleDetail> = {
  "tips-memilih-kost-jakarta": {
    slug: "tips-memilih-kost-jakarta",
    category: "Tips",
    readTime: "6 menit",
    date: "13 Mei 2026",
    title: "Tips Memilih Kost yang Tepat di Jakarta",
    subtitle:
      "Memilih kost yang tepat bukan sekadar soal harga murah. Anda perlu mempertimbangkan lokasi, keamanan, dan kualitas fasilitas agar hidup harian lebih nyaman.",
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
  },
  "fasilitas-wajib-kost-premium": {
    slug: "fasilitas-wajib-kost-premium",
    category: "Panduan",
    readTime: "5 menit",
    date: "15 Mei 2026",
    title: "5 Fasilitas Wajib di Kost Premium Modern",
    subtitle:
      "Standar kost premium terus berkembang. Penghuni kini mencari hunian yang bukan hanya nyaman, tapi juga mendukung produktivitas dan keamanan sehari-hari.",
    author: {
      name: "Tim Operasional Kost",
      role: "Resident Experience",
    },
    content: [
      {
        type: "paragraph",
        text: "Harga tinggi tidak selalu berarti kualitas tinggi. Pastikan kost premium pilihan Anda benar-benar menyediakan fasilitas yang relevan dengan kebutuhan modern.",
      },
      {
        type: "heading",
        text: "Lima Fasilitas Penting",
      },
      {
        type: "list",
        items: [
          "Internet stabil dengan kecepatan memadai untuk kerja dan belajar.",
          "Keamanan 24 jam dan akses masuk yang terkontrol.",
          "Kamar ber-AC dengan sirkulasi udara baik.",
          "Area komunal yang bersih dan terawat.",
          "Lokasi strategis dekat kebutuhan harian.",
        ],
      },
      {
        type: "paragraph",
        text: "Jika semua fasilitas ini tersedia dan dikelola dengan baik, penghuni biasanya merasakan kualitas hidup yang jauh lebih baik serta biaya tak terduga yang lebih minim.",
      },
    ],
    tags: ["Kost Premium", "Fasilitas", "Hunian Modern", "Jakarta"],
  },
  "keuntungan-kost-pusat-bisnis": {
    slug: "keuntungan-kost-pusat-bisnis",
    category: "Gaya Hidup",
    readTime: "5 menit",
    date: "18 Mei 2026",
    title: "Keuntungan Tinggal di Kost Dekat Pusat Bisnis",
    subtitle:
      "Tinggal di area strategis memberi lebih dari sekadar kemudahan mobilitas. Anda juga mendapat akses yang lebih baik ke peluang kerja dan jaringan profesional.",
    author: {
      name: "Tim Riset Lokasi",
      role: "Urban Living Analyst",
    },
    content: [
      {
        type: "paragraph",
        text: "Waktu tempuh yang pendek bisa meningkatkan kualitas hidup secara signifikan. Energi yang biasanya habis di jalan dapat dialihkan untuk istirahat, belajar, atau aktivitas produktif lainnya.",
      },
      {
        type: "heading",
        text: "Manfaat Tinggal di Lokasi Strategis",
      },
      {
        type: "list",
        items: [
          "Menghemat waktu dan biaya transportasi harian.",
          "Lebih mudah mengikuti aktivitas profesional setelah jam kerja.",
          "Akses cepat ke fasilitas kesehatan, kuliner, dan layanan publik.",
          "Meningkatkan peluang networking karena dekat pusat aktivitas.",
        ],
      },
      {
        type: "quote",
        text: "Lokasi yang tepat sering kali menjadi investasi gaya hidup terbaik, bahkan sebelum Anda menghitung nilai uangnya.",
      },
      {
        type: "paragraph",
        text: "Jika Anda berencana tinggal minimal 1 tahun, memilih kost di lokasi strategis biasanya memberi dampak positif yang paling terasa dalam jangka panjang.",
      },
    ],
    tags: ["Lokasi", "Pusat Bisnis", "Produktivitas", "Kost"],
  },
  "budget-bulanan-anak-kost": {
    slug: "budget-bulanan-anak-kost",
    category: "Keuangan",
    readTime: "7 menit",
    date: "19 Juni 2026",
    title: "Cara Mengatur Budget Bulanan untuk Anak Kost",
    subtitle:
      "Tinggal di kost artinya Anda harus mandiri mengatur keuangan. Dengan perencanaan yang tepat, Anda bisa hidup nyaman tanpa kehabisan uang di akhir bulan.",
    author: {
      name: "Tim Hunian Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Property Advisor",
    },
    content: [
      {
        type: "paragraph",
        text: "Salah satu tantangan terbesar bagi penghuni kost, terutama mahasiswa dan pekerja muda, adalah mengelola keuangan bulanan. Tanpa perencanaan yang matang, pengeluaran bisa membengkak dan mengganggu kenyamanan hidup sehari-hari.",
      },
      {
        type: "heading",
        text: "Langkah-Langkah Mengatur Budget",
      },
      {
        type: "list",
        items: [
          "Catat semua pemasukan bulanan Anda — gaji, uang saku, atau pendapatan freelance.",
          "Pisahkan pengeluaran tetap (sewa kost, listrik, internet) dan pengeluaran variabel (makan, transportasi, hiburan).",
          "Terapkan aturan 50/30/20: 50% kebutuhan, 30% keinginan, 20% tabungan.",
          "Gunakan aplikasi pencatat keuangan untuk memantau pengeluaran harian.",
          "Siapkan dana darurat minimal 1 bulan biaya hidup.",
        ],
      },
      {
        type: "heading",
        text: "Tips Hemat Saat Tinggal di Kost",
      },
      {
        type: "list",
        items: [
          "Masak sendiri — investasikan rice cooker atau kompor listrik kecil untuk menghemat biaya makan.",
          "Manfaatkan promo dan diskon dari aplikasi pesan makanan secara bijak.",
          "Cuci pakaian sendiri jika kost menyediakan mesin cuci bersama.",
          "Gabung iuran internet atau streaming dengan teman satu kost.",
          "Batasi pengeluaran hiburan dengan menentukan anggaran maksimal per minggu.",
        ],
      },
      {
        type: "quote",
        text: "Hemat bukan berarti pelit. Hemat adalah seni mengelola uang agar setiap rupiah memberikan nilai terbaik untuk kualitas hidup Anda.",
      },
      {
        type: "heading",
        text: "Kapan Harus Pindah Kost?",
      },
      {
        type: "paragraph",
        text: "Jika biaya kost Anda menghabiskan lebih dari 30-35% total pemasukan bulanan, pertimbangkan untuk mencari alternatif yang lebih terjangkau. Kost yang terlalu mahal akan membuat pos pengeluaran lain menjadi terlalu ketat dan mengorbankan kualitas hidup.",
      },
      {
        type: "paragraph",
        text: "Kost Gemini menawarkan hunian nyaman dengan harga transparan — tanpa biaya tersembunyi. Hubungi kami untuk informasi kamar yang tersedia.",
      },
    ],
    tags: ["Keuangan", "Budget", "Anak Kost", "Tips Hemat"],
  },
  "dekorasi-kamar-kost-nyaman": {
    slug: "dekorasi-kamar-kost-nyaman",
    category: "Dekorasi",
    readTime: "6 menit",
    date: "19 Juni 2026",
    title: "Dekorasi Kamar Kost: Bikin Nyaman Tanpa Mahal",
    subtitle:
      "Kamar kost yang ditata dengan baik bisa meningkatkan mood dan produktivitas. Simak tips dekorasi sederhana yang bisa Anda terapkan hari ini.",
    author: {
      name: "Tim Hunian Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Resident Experience",
    },
    content: [
      {
        type: "paragraph",
        text: "Kamar kost biasanya berukuran terbatas, tapi bukan berarti tidak bisa nyaman dan estetik. Dengan sedikit kreativitas dan budget yang wajar, Anda bisa mengubah kamar kost menjadi ruang yang menyenangkan untuk istirahat dan bekerja.",
      },
      {
        type: "heading",
        text: "Prinsip Dasar Dekorasi Kamar Kost",
      },
      {
        type: "list",
        items: [
          "Pilih warna terang dan netral — warna putih, krem, atau pastel membuat ruangan terasa lebih luas.",
          "Manfaatkan vertikal — gunakan rak dinding, hook, dan organizer gantung untuk menghemat lantai.",
          "Less is more — hindari menumpuk barang. Simpan hanya yang benar-benar digunakan.",
          "Pencahayaan yang tepat — tambahkan lampu meja atau LED strip untuk suasana yang lebih hangat.",
        ],
      },
      {
        type: "heading",
        text: "Ide Dekorasi Budget-Friendly",
      },
      {
        type: "list",
        items: [
          "Pasang fairy light atau LED strip di sekitar tempat tidur atau meja belajar untuk ambient lighting.",
          "Gunakan tanaman hias kecil (sukulen, pothos) untuk mempercantik dan menyegarkan udara.",
          "Tata buku dan barang koleksi di rak minimalis sebagai elemen dekoratif.",
          "Gunakan karpet kecil atau rug di samping tempat tidur untuk sentuhan hangat.",
          "Tambahkan cermin — cermin memberi ilusi ruangan yang lebih besar dan terang.",
          "Pasang poster, foto, atau artwork dengan frame sederhana di dinding.",
        ],
      },
      {
        type: "heading",
        text: "Zona dalam Kamar Kost",
      },
      {
        type: "paragraph",
        text: "Meskipun ruangnya terbatas, coba bagi kamar Anda menjadi 'zona' yang berbeda: zona tidur, zona kerja/belajar, dan zona penyimpanan. Pemisahan fungsi ini membantu otak Anda membedakan waktu istirahat dan waktu produktif, sehingga kualitas tidur dan fokus kerja sama-sama meningkat.",
      },
      {
        type: "quote",
        text: "Kamar yang rapi dan tertata adalah investasi untuk kesehatan mental. Lingkungan fisik Anda mempengaruhi cara Anda berpikir dan merasa.",
      },
      {
        type: "paragraph",
        text: "Kamar-kamar di Kost Gemini dirancang dengan layout yang efisien dan pencahayaan alami yang baik, sehingga Anda punya fondasi yang sempurna untuk mendekorasi sesuai selera. Kunjungi kami untuk melihat unit yang tersedia.",
      },
    ],
    tags: ["Dekorasi", "Kamar Kost", "Interior", "Budget"],
  },
};
