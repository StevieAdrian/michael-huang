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
  {
    id: "6",
    title: "Checklist Sebelum Masuk Kost Baru: Supaya Tidak Boncos di Awal",
    excerpt:
      "Masuk kost tanpa persiapan sering bikin biaya awal membengkak. Gunakan checklist ini agar kebutuhan utama sudah aman dari hari pertama.",
    date: "4 Juli 2026",
    category: "Panduan",
    slug: "checklist-sebelum-masuk-kost-baru",
  },
  {
    id: "7",
    title: "Etika Tinggal di Kost Bersama: Cara Nyaman Tanpa Drama",
    excerpt:
      "Kenyamanan kost bukan hanya soal fasilitas, tapi juga perilaku penghuni. Pahami etika dasar hidup bersama agar suasana tetap harmonis.",
    date: "4 Juli 2026",
    category: "Gaya Hidup",
    slug: "etika-tinggal-di-kost-bersama",
  },
  {
    id: "8",
    title: "Cara Memilih Teman Sekamar yang Cocok untuk Produktivitas dan Privasi",
    excerpt:
      "Salah pilih teman sekamar bisa bikin stres harian. Pelajari indikator kecocokan agar tinggal bersama tetap nyaman dan saling menghargai.",
    date: "7 Agustus 2026",
    category: "Tips",
    slug: "memilih-teman-sekamar-cocok",
  },
  {
    id: "9",
    title: "Tips Menjaga Kamar Kost Tetap Kering dan Anti Lembap",
    excerpt:
      "Kamar lembap memicu bau dan jamur yang mengganggu kesehatan. Ikuti langkah sederhana ini untuk menjaga kamar tetap segar sepanjang musim.",
    date: "7 Agustus 2026",
    category: "Panduan",
    slug: "kamar-kost-anti-lembap",
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
  "checklist-sebelum-masuk-kost-baru": {
    slug: "checklist-sebelum-masuk-kost-baru",
    category: "Panduan",
    readTime: "6 menit",
    date: "4 Juli 2026",
    title:
      "Checklist Sebelum Masuk Kost Baru: Supaya Tidak Boncos di Awal",
    subtitle:
      "Minggu pertama di kost sering jadi fase paling boros. Dengan persiapan yang tepat, Anda bisa mulai hidup mandiri tanpa pengeluaran yang tidak perlu.",
    author: {
      name: "Tim Hunian Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Resident Setup Advisor",
    },
    content: [
      {
        type: "paragraph",
        text: "Banyak penghuni baru fokus pada biaya sewa bulanan, tetapi lupa menghitung biaya setup awal seperti perlengkapan kamar, deposit, transportasi pindahan, dan kebutuhan harian. Akibatnya, anggaran bulan pertama cepat jebol.",
      },
      {
        type: "heading",
        text: "Daftar Prioritas Kebutuhan Hari Pertama",
      },
      {
        type: "list",
        items: [
          "Dokumen administrasi: identitas, salinan kontrak, dan bukti pembayaran sewa.",
          "Perlengkapan tidur: sprei, bantal, selimut, dan pelindung kasur.",
          "Peralatan kebersihan dasar: sapu kecil, cairan pembersih, kantong sampah.",
          "Kebutuhan mandi dan laundry minggu pertama.",
          "Peralatan makan sederhana serta stok makanan ringan darurat.",
        ],
      },
      {
        type: "heading",
        text: "Tips Menekan Biaya Setup Awal",
      },
      {
        type: "list",
        items: [
          "Pisahkan kebutuhan wajib dan keinginan dekoratif agar belanja tidak impulsif.",
          "Belanja bertahap selama 2-3 minggu pertama sesuai pemakaian nyata.",
          "Manfaatkan paket bundling kebutuhan rumah tangga untuk harga lebih hemat.",
          "Tanyakan fasilitas bawaan kost agar tidak membeli barang yang sebenarnya sudah tersedia.",
        ],
      },
      {
        type: "quote",
        text: "Masuk kost dengan rencana yang jelas membuat Anda lebih tenang, hemat, dan cepat beradaptasi.",
      },
      {
        type: "paragraph",
        text: "Sebelum pindah, buat anggaran setup awal dan catat semua pengeluaran selama 30 hari pertama. Kebiasaan ini membantu Anda mengendalikan biaya sejak awal dan menjaga cashflow bulanan tetap sehat.",
      },
    ],
    tags: ["Checklist Kost", "Anak Kost", "Budget", "Panduan"],
  },
  "etika-tinggal-di-kost-bersama": {
    slug: "etika-tinggal-di-kost-bersama",
    category: "Gaya Hidup",
    readTime: "5 menit",
    date: "4 Juli 2026",
    title: "Etika Tinggal di Kost Bersama: Cara Nyaman Tanpa Drama",
    subtitle:
      "Konflik antar penghuni kost sering bermula dari hal kecil. Menjaga etika bersama membuat lingkungan tinggal lebih aman dan menyenangkan.",
    author: {
      name: "Tim Operasional Kost",
      role: "Community Experience",
    },
    content: [
      {
        type: "paragraph",
        text: "Tinggal di kost berarti berbagi ruang, aturan, dan ritme hidup dengan orang lain. Walau sederhana, etika dasar seperti menjaga kebersihan dan menghormati privasi sangat menentukan kualitas hidup semua penghuni.",
      },
      {
        type: "heading",
        text: "Etika Dasar yang Wajib Dijaga",
      },
      {
        type: "list",
        items: [
          "Jaga volume suara, terutama pada malam hari dan pagi buta.",
          "Gunakan area bersama secara tertib dan bersihkan setelah dipakai.",
          "Hormati privasi penghuni lain, termasuk soal tamu dan penggunaan barang.",
          "Patuhi aturan keamanan gedung seperti akses pintu dan jam kunjungan.",
        ],
      },
      {
        type: "heading",
        text: "Cara Menyelesaikan Gesekan Kecil",
      },
      {
        type: "paragraph",
        text: "Jika ada masalah, sampaikan langsung dengan nada sopan dan fokus pada perilaku, bukan menyerang pribadi. Bila perlu, libatkan pengelola kost sebagai mediator agar solusi lebih objektif dan cepat.",
      },
      {
        type: "quote",
        text: "Kost yang nyaman dibangun dari kebiasaan kecil yang saling menghargai setiap hari.",
      },
      {
        type: "paragraph",
        text: "Lingkungan tinggal yang harmonis akan membantu Anda lebih fokus belajar, bekerja, dan beristirahat. Mulailah dari diri sendiri, karena etika baik menular ke seluruh komunitas kost.",
      },
    ],
    tags: ["Etika Kost", "Komunitas", "Gaya Hidup", "Hunian"],
  },
  "memilih-teman-sekamar-cocok": {
    slug: "memilih-teman-sekamar-cocok",
    category: "Tips",
    readTime: "6 menit",
    date: "7 Agustus 2026",
    title:
      "Cara Memilih Teman Sekamar yang Cocok untuk Produktivitas dan Privasi",
    subtitle:
      "Kecocokan gaya hidup adalah faktor utama saat berbagi kamar. Komunikasi ekspektasi sejak awal dapat mencegah konflik jangka panjang.",
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
  },
  "kamar-kost-anti-lembap": {
    slug: "kamar-kost-anti-lembap",
    category: "Panduan",
    readTime: "5 menit",
    date: "7 Agustus 2026",
    title: "Tips Menjaga Kamar Kost Tetap Kering dan Anti Lembap",
    subtitle:
      "Kelembapan berlebih membuat kamar tidak nyaman dan berisiko bagi kesehatan. Perawatan rutin kecil bisa memberi dampak besar.",
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
  },
};
