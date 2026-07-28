import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const notarisArticles: Article[] = [
  {
    id: "1",
    title: "Apa Itu Akta Autentik dan Mengapa Penting?",
    excerpt:
      "Akta autentik adalah akta yang dibuat oleh atau di hadapan pejabat umum yang berwenang. Kekuatan pembuktiannya sempurna di mata hukum.",
    date: "11 Mei 2026",
    category: "Panduan",
    slug: "apa-itu-akta-autentik",
  },
  {
    id: "2",
    title: "Prosedur Pendirian PT Melalui Notaris",
    excerpt:
      "Mendirikan perseroan terbatas memerlukan akta notaris sebagai dasar legalitas. Pelajari langkah-langkah prosesnya di sini.",
    date: "15 Mei 2026",
    category: "Bisnis",
    slug: "prosedur-pendirian-pt-notaris",
  },
  {
    id: "3",
    title: "Perbedaan Notaris dan PPAT: Mana yang Anda Butuhkan?",
    excerpt:
      "Banyak orang keliru membedakan notaris dan PPAT. Artikel ini menjelaskan perbedaan fungsi dan kewenangannya secara jelas.",
    date: "16 Mei 2026",
    category: "Edukasi",
    slug: "perbedaan-notaris-ppat",
  },
  {
    id: "4",
    title: "Pentingnya Akta Pendirian Yayasan dan Prosedurnya",
    excerpt:
      "Ingin mendirikan yayasan sosial, keagamaan, atau kemanusiaan? Pahami syarat dan prosedur pembuatan akta pendirian yayasan secara lengkap.",
    date: "10 Juni 2026",
    category: "Panduan",
    slug: "akta-pendirian-yayasan-prosedur",
  },
  {
    id: "5",
    title: "Fungsi Legalisasi, Waarmerking, dan Pencocokan Fotokopi oleh Notaris",
    excerpt:
      "Kenali perbedaan legalisasi tanda tangan, pendaftaran surat (waarmerking), dan pencocokan dokumen fotokopi dengan aslinya di kantor notaris.",
    date: "12 April 2026",
    category: "Edukasi",
    slug: "fungsi-legalisasi-waarmerking-notaris",
  },
  {
    id: "6",
    title: "Perjanjian Pranikah Setelah Menikah: Masih Bisa Dibuat?",
    excerpt:
      "Banyak pasangan baru sadar pentingnya pemisahan harta setelah menikah. Simak dasar hukum dan prosedur pembuatan perjanjian perkawinan pasca-nikah melalui notaris.",
    date: "4 Juli 2026",
    category: "Panduan",
    slug: "perjanjian-pranikah-setelah-menikah",
  },
  {
    id: "7",
    title: "Checklist Legalisasi Dokumen untuk Keperluan Studi dan Kerja di Luar Negeri",
    excerpt:
      "Agar dokumen Indonesia diakui di luar negeri, proses legalisasi harus tepat urutannya. Pahami peran notaris, kementerian, hingga apostille.",
    date: "4 Juli 2026",
    category: "Edukasi",
    slug: "checklist-legalisasi-dokumen-luar-negeri",
  },
];

export const notarisArticleDetails: Record<string, ArticleDetail> = {
  "apa-itu-akta-autentik": {
    slug: "apa-itu-akta-autentik",
    category: "Panduan",
    readTime: "7 menit",
    date: "11 Mei 2026",
    title: "Apa Itu Akta Autentik dan Mengapa Penting?",
    subtitle:
      "Akta autentik memiliki kekuatan pembuktian sempurna di pengadilan. Memahami jenis akta ini sangat penting untuk melindungi hak dan kepentingan hukum Anda.",
    author: {
      name: "Kantor Notaris Dr. Michael, S.H., S.T., M.Kn.",
      role: "Tim Redaksi Notaris",
    },
    content: [
      {
        type: "paragraph",
        text: "Dalam kehidupan sehari-hari, kita sering menandatangani berbagai dokumen — dari surat perjanjian hingga kwitansi. Namun tidak semua dokumen memiliki kekuatan hukum yang sama. Akta autentik adalah jenis dokumen hukum tertinggi yang memiliki kekuatan pembuktian sempurna (volledig bewijs) di hadapan pengadilan.",
      },
      {
        type: "heading",
        text: "Definisi Akta Autentik",
      },
      {
        type: "paragraph",
        text: "Berdasarkan Pasal 1868 KUH Perdata, akta autentik adalah akta yang dibuat dalam bentuk yang ditentukan oleh undang-undang, oleh atau di hadapan pejabat umum yang berwenang di tempat akta tersebut dibuat. Dalam konteks ini, notaris adalah pejabat umum yang diberi wewenang oleh negara untuk membuat akta autentik.",
      },
      {
        type: "heading",
        text: "Perbedaan Akta Autentik dan Akta di Bawah Tangan",
      },
      {
        type: "list",
        items: [
          "Akta autentik dibuat oleh atau di hadapan notaris, sedangkan akta di bawah tangan dibuat sendiri oleh para pihak tanpa pejabat berwenang.",
          "Akta autentik memiliki kekuatan pembuktian sempurna — hakim wajib mempercayai isi akta tanpa perlu bukti tambahan, kecuali ada bukti sebaliknya.",
          "Akta di bawah tangan baru memiliki kekuatan pembuktian sempurna jika diakui oleh pihak yang bertanda tangan. Jika disangkal, pihak yang mengajukan harus membuktikan keabsahannya.",
          "Akta autentik memiliki tanggal yang pasti (date certaine), sementara akta di bawah tangan tidak.",
        ],
      },
      {
        type: "heading",
        text: "Kapan Anda Membutuhkan Akta Autentik?",
      },
      {
        type: "list",
        items: [
          "Pendirian badan usaha (PT, CV, Firma, Yayasan, Koperasi).",
          "Jual beli properti dan tanah — akta jual beli (AJB) wajib dibuat oleh PPAT.",
          "Perjanjian penting seperti perjanjian pra-nikah, perjanjian pinjaman, atau perjanjian kerjasama bisnis bernilai besar.",
          "Wasiat dan hibah — pengalihan hak atas harta wajib melalui akta notaris.",
          "Kuasa hukum — surat kuasa untuk tindakan hukum tertentu memerlukan akta notariil.",
          "Fidusia — jaminan atas benda bergerak harus didaftarkan dengan akta notaris.",
        ],
      },
      {
        type: "quote",
        text: "Akta autentik bukan sekadar formalitas. Ia adalah perisai hukum terkuat yang melindungi hak-hak Anda dari sengketa di kemudian hari.",
      },
      {
        type: "heading",
        text: "Konsekuensi Tidak Menggunakan Akta Autentik",
      },
      {
        type: "paragraph",
        text: "Banyak orang memilih membuat perjanjian secara informal untuk menghemat biaya. Namun ketika terjadi sengketa, dokumen tanpa kekuatan autentik sangat sulit dijadikan dasar pembuktian di pengadilan. Anda mungkin kehilangan hak atas properti, aset, atau klaim bisnis hanya karena tidak memiliki akta yang sah.",
      },
      {
        type: "paragraph",
        text: "Dengan biaya pembuatan akta yang relatif terjangkau dibandingkan nilai aset yang dilindungi, membuat akta autentik melalui notaris adalah investasi perlindungan hukum yang sangat bijak. Hubungi kantor notaris kami untuk konsultasi mengenai jenis akta yang Anda butuhkan.",
      },
    ],
    tags: ["Akta Autentik", "Notaris", "Hukum Perdata", "Pembuktian"],
  },
  "prosedur-pendirian-pt-notaris": {
    slug: "prosedur-pendirian-pt-notaris",
    category: "Bisnis",
    readTime: "8 menit",
    date: "15 Mei 2026",
    title: "Prosedur Pendirian PT Melalui Notaris",
    subtitle:
      "Langkah demi langkah mendirikan Perseroan Terbatas (PT) yang legal dan sesuai peraturan, mulai dari persiapan dokumen hingga pengesahan di Kemenkumham.",
    author: {
      name: "Kantor Notaris Dr. Michael, S.H., S.T., M.Kn.",
      role: "Corporate Legal Division",
    },
    content: [
      {
        type: "paragraph",
        text: "Mendirikan Perseroan Terbatas (PT) adalah langkah penting bagi pelaku usaha yang ingin menjalankan bisnis secara profesional dan terlindungi secara hukum. PT memberikan pemisahan harta pribadi dan perusahaan, meningkatkan kredibilitas bisnis, serta membuka akses ke pendanaan dan kontrak yang lebih besar.",
      },
      {
        type: "heading",
        text: "Syarat Dasar Pendirian PT",
      },
      {
        type: "list",
        items: [
          "Minimal 2 (dua) orang pendiri sebagai pemegang saham, baik perorangan maupun badan hukum.",
          "Modal dasar sesuai kesepakatan pendiri (sejak UU Cipta Kerja, tidak ada minimal modal dasar untuk usaha kecil dan menengah).",
          "Minimal 25% dari modal dasar harus ditempatkan dan disetor.",
          "Memiliki nama PT yang belum digunakan dan sesuai ketentuan Kemenkumham.",
          "Memiliki alamat kantor yang jelas di wilayah Indonesia.",
        ],
      },
      {
        type: "heading",
        text: "Langkah-Langkah Pendirian PT",
      },
      {
        type: "list",
        items: [
          "Pemesanan nama PT — dilakukan melalui sistem AHU Online Kemenkumham. Nama harus unik dan memenuhi syarat penamaan (minimal 3 kata).",
          "Penyusunan Anggaran Dasar — notaris akan menyusun akta pendirian yang memuat tujuan, struktur modal, susunan pengurus, dan ketentuan lainnya.",
          "Penandatanganan Akta Pendirian — para pendiri menandatangani akta di hadapan notaris. Dokumen identitas (KTP, NPWP) para pendiri dan pengurus harus disiapkan.",
          "Pengesahan oleh Kemenkumham — notaris mengajukan permohonan pengesahan badan hukum PT melalui sistem AHU Online.",
          "Pengurusan NPWP Perusahaan — setelah mendapat SK Kemenkumham, PT wajib memiliki NPWP badan usaha.",
          "Pengurusan NIB dan Izin Usaha — melalui sistem OSS (Online Single Submission) untuk mendapatkan Nomor Induk Berusaha dan izin usaha sesuai KBLI.",
        ],
      },
      {
        type: "heading",
        text: "Dokumen yang Perlu Disiapkan",
      },
      {
        type: "list",
        items: [
          "KTP dan NPWP seluruh pendiri dan pengurus (Direktur, Komisaris).",
          "Pas foto terbaru seluruh pendiri dan pengurus.",
          "Bukti kepemilikan atau sewa alamat kantor.",
          "Rencana susunan modal dan pembagian saham.",
          "Deskripsi kegiatan usaha yang akan dijalankan.",
        ],
      },
      {
        type: "quote",
        text: "Mendirikan PT bukan sekadar formalitas bisnis — ini adalah fondasi legal yang menentukan bagaimana perusahaan Anda akan beroperasi, berkembang, dan dilindungi secara hukum.",
      },
      {
        type: "heading",
        text: "Berapa Lama Prosesnya?",
      },
      {
        type: "paragraph",
        text: "Dengan kelengkapan dokumen yang baik, proses pendirian PT melalui kantor notaris kami biasanya memakan waktu 7-14 hari kerja, tergantung kompleksitas struktur dan kecepatan verifikasi dari Kemenkumham. Kami akan mendampingi Anda di setiap tahapan untuk memastikan proses berjalan lancar dan sesuai regulasi.",
      },
      {
        type: "paragraph",
        text: "Jika Anda berencana mendirikan PT, CV, atau badan usaha lainnya, hubungi kantor notaris kami untuk konsultasi awal tanpa biaya. Kami siap membantu Anda membangun fondasi bisnis yang kuat secara hukum.",
      },
    ],
    tags: ["Pendirian PT", "Notaris", "Badan Usaha", "Kemenkumham"],
  },
  "perbedaan-notaris-ppat": {
    slug: "perbedaan-notaris-ppat",
    category: "Edukasi",
    readTime: "6 menit",
    date: "16 Mei 2026",
    title: "Perbedaan Notaris dan PPAT: Mana yang Anda Butuhkan?",
    subtitle:
      "Banyak masyarakat mengira notaris dan PPAT adalah profesi yang sama. Padahal, keduanya memiliki kewenangan, dasar hukum, dan lingkup kerja yang berbeda.",
    author: {
      name: "Kantor Notaris Dr. Michael, S.H., S.T., M.Kn.",
      role: "Tim Edukasi Hukum",
    },
    content: [
      {
        type: "paragraph",
        text: "Saat akan membeli rumah, membuat perjanjian bisnis, atau mengurus sertifikat tanah, Anda mungkin diminta mengunjungi notaris atau PPAT. Banyak orang menganggap keduanya sama, padahal secara hukum, notaris dan PPAT memiliki tugas, wewenang, dan dasar hukum yang berbeda. Memahami perbedaan ini akan membantu Anda menentukan profesional mana yang tepat untuk kebutuhan hukum Anda.",
      },
      {
        type: "heading",
        text: "Apa Itu Notaris?",
      },
      {
        type: "paragraph",
        text: "Notaris adalah pejabat umum yang diangkat oleh Menteri Hukum dan HAM berdasarkan Undang-Undang Nomor 2 Tahun 2014 tentang Jabatan Notaris. Notaris memiliki kewenangan untuk membuat akta autentik untuk hampir semua jenis perbuatan hukum, termasuk perjanjian, pendirian badan usaha, wasiat, fidusia, dan banyak lagi.",
      },
      {
        type: "heading",
        text: "Apa Itu PPAT?",
      },
      {
        type: "paragraph",
        text: "PPAT (Pejabat Pembuat Akta Tanah) adalah pejabat umum yang diangkat oleh Menteri ATR/BPN berdasarkan Peraturan Pemerintah Nomor 24 Tahun 2016. PPAT memiliki kewenangan khusus dan terbatas untuk membuat akta-akta yang berkaitan dengan peralihan dan pembebanan hak atas tanah.",
      },
      {
        type: "heading",
        text: "Perbedaan Utama Notaris dan PPAT",
      },
      {
        type: "list",
        items: [
          "Dasar hukum: Notaris berdasarkan UU Jabatan Notaris, PPAT berdasarkan PP tentang PPAT.",
          "Kewenangan: Notaris berwenang membuat akta untuk berbagai jenis transaksi hukum. PPAT hanya berwenang membuat akta terkait hak atas tanah.",
          "Pengangkatan: Notaris diangkat oleh Menteri Hukum dan HAM. PPAT diangkat oleh Menteri ATR/BPN.",
          "Wilayah kerja: Notaris memiliki wilayah jabatan di tingkat provinsi. PPAT memiliki wilayah kerja di tingkat kabupaten/kota.",
          "Jenis akta PPAT: Jual beli tanah, tukar menukar, hibah, pemasukan ke perusahaan, pembagian hak bersama, pemberian Hak Tanggungan, dan pemberian kuasa Hak Tanggungan.",
          "Organisasi profesi: Notaris bergabung di INI (Ikatan Notaris Indonesia). PPAT bergabung di IPPAT (Ikatan Pejabat Pembuat Akta Tanah).",
        ],
      },
      {
        type: "heading",
        text: "Kapan Ke Notaris, Kapan Ke PPAT?",
      },
      {
        type: "list",
        items: [
          "Ke Notaris: pendirian PT/CV, perjanjian bisnis, surat kuasa, wasiat, fidusia, legalisasi dokumen, RUPS.",
          "Ke PPAT: jual beli tanah/rumah, balik nama sertifikat, hibah tanah, pembebanan Hak Tanggungan (KPR).",
          "Ke keduanya: Jika transaksi properti melibatkan perjanjian pengikatan jual beli (PPJB) sebelum AJB, Anda akan membutuhkan notaris untuk PPJB dan PPAT untuk AJB.",
        ],
      },
      {
        type: "quote",
        text: "Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D. merangkap jabatan sebagai Notaris dan PPAT, sehingga seluruh kebutuhan hukum terkait properti dan bisnis Anda dapat ditangani di satu tempat.",
      },
      {
        type: "paragraph",
        text: "Dengan memilih profesional yang tepat untuk setiap kebutuhan, Anda memastikan bahwa dokumen hukum Anda memiliki kekuatan yang sah dan tidak menimbulkan masalah di kemudian hari. Jika masih ragu, jangan segan untuk menghubungi kantor kami — konsultasi awal tanpa biaya.",
      },
    ],
    tags: ["Notaris", "PPAT", "Hukum Properti", "Edukasi Hukum"],
  },
  "akta-pendirian-yayasan-prosedur": {
    slug: "akta-pendirian-yayasan-prosedur",
    category: "Panduan",
    readTime: "7 menit",
    date: "10 Juni 2026",
    title: "Pentingnya Akta Pendirian Yayasan dan Prosedurnya",
    subtitle:
      "Yayasan adalah badan hukum nirlaba. Pendiriannya memerlukan akta notaris dan pengesahan Kemenkumham agar sah secara hukum.",
    author: {
      name: "Kantor Notaris Dr. Michael, S.H., S.T., M.Kn.",
      role: "Tim Redaksi Notaris",
    },
    content: [
      {
        type: "paragraph",
        text: "Yayasan merupakan badan hukum yang terdiri atas kekayaan yang dipisahkan dan diperuntukkan untuk mencapai tujuan tertentu di bidang sosial, keagamaan, dan kemanusiaan, yang tidak mempunyai anggota. Untuk mendirikan yayasan yang sah dan diakui negara, para pendiri wajib membuat akta pendirian di hadapan Notaris.",
      },
      {
        type: "heading",
        text: "Syarat Administrasi Pendirian Yayasan",
      },
      {
        type: "list",
        items: [
          "Nama Yayasan: Terdiri dari minimal 3 kata dan tidak boleh menggunakan nama yang sudah terdaftar.",
          "Dokumen Identitas: KTP dan NPWP dari Pendiri, Pembina, Pengurus, dan Pengawas.",
          "Kekayaan Awal: Adanya pemisahan kekayaan pribadi pendiri untuk modal awal yayasan (berdasarkan surat pernyataan).",
          "Alamat Kantor: Surat domisili atau keterangan alamat kantor yayasan yang jelas.",
        ],
      },
      {
        type: "heading",
        text: "Tahapan Pembuatan Akta dan Pengesahan",
      },
      {
        type: "paragraph",
        text: "Proses dimulai dari pemesanan nama yayasan, dilanjutkan penandatanganan Akta Pendirian Yayasan oleh para pendiri (atau kuasanya) di hadapan Notaris. Setelah itu, Notaris mengajukan permohonan pengesahan badan hukum ke Menteri Hukum dan HAM. Yayasan resmi menjadi badan hukum setelah SK Pengesahan diterbitkan.",
      },
    ],
    tags: ["Yayasan", "Notaris", "Badan Hukum", "Nirlaba"],
  },
  "fungsi-legalisasi-waarmerking-notaris": {
    slug: "fungsi-legalisasi-waarmerking-notaris",
    category: "Edukasi",
    readTime: "6 menit",
    date: "12 Juni 2026",
    title: "Fungsi Legalisasi, Waarmerking, dan Pencocokan Fotokopi oleh Notaris",
    subtitle:
      "Sering diminta dokumen yang dilegalisasi Notaris? Ketahui jenis pengesahan dokumen di bawah tangan agar tidak salah paham.",
    author: {
      name: "Kantor Notaris Dr. Michael, S.H., S.T., M.Kn.",
      role: "Tim Edukasi Hukum",
    },
    content: [
      {
        type: "paragraph",
        text: "Dalam urusan perbankan, visa, atau transaksi komersial, kita sering kali diminta untuk melegalisasi dokumen di hadapan Notaris. Namun, terdapat beberapa istilah pengesahan dokumen di bawah tangan yang memiliki konsekuensi hukum berbeda.",
      },
      {
        type: "heading",
        text: "1. Legalisasi (Legalisation)",
      },
      {
        type: "paragraph",
        text: "Tindakan Notaris mensertifikasi tanda tangan para pihak pada dokumen di bawah tangan. Notaris memastikan identitas para pihak, dan bahwa tanda tangan tersebut dibubuhkan langsung di hadapan Notaris pada tanggal yang tertera.",
      },
      {
        type: "heading",
        text: "2. Waarmerking (Registrasi)",
      },
      {
        type: "paragraph",
        text: "Pendaftaran surat di bawah tangan ke dalam buku khusus Notaris. Notaris tidak menjamin keabsahan tanda tangan atau isi surat, melainkan hanya mendaftarkan tanggal keberadaan surat tersebut agar para pihak tidak dapat memanipulasi tanggal di kemudian hari.",
      },
      {
        type: "heading",
        text: "3. Pencocokan Fotokopi (Legalisir)",
      },
      {
        type: "paragraph",
        text: "Notaris mencocokkan dokumen fotokopi dengan dokumen aslinya, lalu membubuhkan cap dan tanda tangan untuk menyatakan bahwa fotokopi tersebut sesuai dengan dokumen aslinya.",
      },
    ],
    tags: ["Legalisasi", "Waarmerking", "Notaris", "Edukasi Hukum"],
  },
  "perjanjian-pranikah-setelah-menikah": {
    slug: "perjanjian-pranikah-setelah-menikah",
    category: "Panduan",
    readTime: "7 menit",
    date: "4 Juli 2026",
    title: "Perjanjian Pranikah Setelah Menikah: Masih Bisa Dibuat?",
    subtitle:
      "Putusan Mahkamah Konstitusi membuka ruang perjanjian perkawinan dibuat setelah pernikahan berlangsung. Berikut poin penting yang wajib dipahami pasangan suami istri.",
    author: {
      name: "Kantor Notaris Dr. Michael, S.H., S.T., M.Kn.",
      role: "Family and Civil Law Desk",
    },
    content: [
      {
        type: "paragraph",
        text: "Selama bertahun-tahun, banyak orang mengira perjanjian perkawinan hanya bisa dibuat sebelum pernikahan. Padahal, perkembangan hukum di Indonesia memungkinkan pasangan membuat perjanjian perkawinan setelah menikah (postnuptial agreement), sepanjang memenuhi syarat hukum dan dibuat melalui akta notaris.",
      },
      {
        type: "heading",
        text: "Dasar Hukum Perjanjian Perkawinan Pasca-Nikah",
      },
      {
        type: "paragraph",
        text: "Perubahan penting ini merujuk pada Putusan Mahkamah Konstitusi yang menafsirkan bahwa perjanjian perkawinan dapat dibuat sebelum, pada saat, atau selama ikatan perkawinan berlangsung. Artinya, pasangan tetap memiliki opsi legal untuk mengatur pemisahan harta dan tanggung jawab keuangan setelah menikah.",
      },
      {
        type: "heading",
        text: "Manfaat Praktis untuk Pasangan",
      },
      {
        type: "list",
        items: [
          "Memberikan kejelasan status harta bawaan dan harta yang diperoleh selama perkawinan.",
          "Mengurangi risiko sengketa harta jika terjadi perceraian atau pewarisan.",
          "Membantu perlindungan aset ketika salah satu pihak menjalankan usaha berisiko.",
          "Mempermudah pengelolaan aset lintas negara atau pernikahan campuran.",
        ],
      },
      {
        type: "heading",
        text: "Tahapan Penyusunan Melalui Notaris",
      },
      {
        type: "list",
        items: [
          "Konsultasi awal untuk memetakan kebutuhan dan struktur kepemilikan harta para pihak.",
          "Penyusunan klausul perjanjian secara seimbang dan tidak melanggar hukum, agama, serta kesusilaan.",
          "Penandatanganan akta di hadapan notaris oleh suami dan istri.",
          "Pendaftaran atau pencatatan sesuai ketentuan yang berlaku agar memiliki kekuatan mengikat terhadap pihak ketiga.",
        ],
      },
      {
        type: "quote",
        text: "Perjanjian perkawinan yang baik bukan soal ketidakpercayaan, tetapi tentang kepastian hukum dan perlindungan masa depan keluarga.",
      },
      {
        type: "paragraph",
        text: "Sebelum menandatangani, pastikan seluruh klausul dipahami secara utuh oleh kedua pihak. Pendampingan notaris membantu memastikan redaksi perjanjian tidak multitafsir dan dapat dijalankan secara efektif ketika dibutuhkan.",
      },
    ],
    tags: ["Perjanjian Perkawinan", "Notaris", "Hukum Keluarga", "Aset"],
  },
  "checklist-legalisasi-dokumen-luar-negeri": {
    slug: "checklist-legalisasi-dokumen-luar-negeri",
    category: "Edukasi",
    readTime: "6 menit",
    date: "4 Juli 2026",
    title:
      "Checklist Legalisasi Dokumen untuk Keperluan Studi dan Kerja di Luar Negeri",
    subtitle:
      "Ijazah, transkrip, akta kelahiran, dan dokumen perdata lainnya sering ditolak karena legalisasi tidak sesuai urutan. Gunakan checklist ini agar proses lebih aman.",
    author: {
      name: "Kantor Notaris Dr. Michael, S.H., S.T., M.Kn.",
      role: "Document Legalization Desk",
    },
    content: [
      {
        type: "paragraph",
        text: "Saat mengurus studi, pekerjaan, atau migrasi ke luar negeri, dokumen dari Indonesia sering perlu melalui proses legalisasi berlapis. Kesalahan urutan dapat menyebabkan dokumen ditolak dan menghambat timeline keberangkatan.",
      },
      {
        type: "heading",
        text: "Dokumen yang Umumnya Diminta",
      },
      {
        type: "list",
        items: [
          "Ijazah dan transkrip nilai.",
          "Akta kelahiran, akta nikah, atau akta cerai.",
          "Surat keterangan kerja atau reference letter.",
          "SKCK dan dokumen pendukung identitas lainnya.",
        ],
      },
      {
        type: "heading",
        text: "Urutan Proses yang Perlu Diperhatikan",
      },
      {
        type: "list",
        items: [
          "Verifikasi dokumen asli dan salinan, lalu lakukan legalisasi notaris bila diperlukan.",
          "Legalisasi di kementerian teknis sesuai jenis dokumen (misalnya Kemendikbud untuk ijazah).",
          "Legalisasi di Kementerian Hukum atau Kementerian Luar Negeri sesuai mekanisme negara tujuan.",
          "Apostille atau legalisasi kedutaan/konsulat negara tujuan bila disyaratkan.",
        ],
      },
      {
        type: "heading",
        text: "Kesalahan yang Sering Terjadi",
      },
      {
        type: "list",
        items: [
          "Mengajukan fotokopi tanpa validasi kesesuaian dengan dokumen asli.",
          "Salah menentukan instansi legalisasi berdasarkan jenis dokumen.",
          "Tidak menyiapkan terjemahan tersumpah untuk dokumen berbahasa Indonesia.",
          "Mengabaikan masa berlaku beberapa dokumen administratif.",
        ],
      },
      {
        type: "quote",
        text: "Dalam legalisasi dokumen lintas negara, urutan proses sama pentingnya dengan isi dokumen itu sendiri.",
      },
      {
        type: "paragraph",
        text: "Agar proses lebih cepat dan minim penolakan, lakukan pengecekan kebutuhan negara tujuan sejak awal. Tim notaris kami dapat membantu validasi awal dan penyusunan alur legalisasi yang paling efisien sesuai jenis dokumen Anda.",
      },
    ],
    tags: ["Legalisasi Dokumen", "Apostille", "Notaris", "Studi Luar Negeri"],
  },
};
