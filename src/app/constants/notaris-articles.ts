import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const notarisArticles: Article[] = [
  {
    id: "1",
    title: "Apa Itu Akta Autentik dan Mengapa Penting?",
    excerpt:
      "Akta autentik adalah akta yang dibuat oleh atau di hadapan pejabat umum yang berwenang. Kekuatan pembuktiannya sempurna di mata hukum.",
    date: "10 Maret 2025",
    category: "Panduan",
    slug: "apa-itu-akta-autentik",
  },
  {
    id: "2",
    title: "Prosedur Pendirian PT Melalui Notaris",
    excerpt:
      "Mendirikan perseroan terbatas memerlukan akta notaris sebagai dasar legalitas. Pelajari langkah-langkah prosesnya di sini.",
    date: "22 Feb 2025",
    category: "Bisnis",
    slug: "prosedur-pendirian-pt-notaris",
  },
  {
    id: "3",
    title: "Perbedaan Notaris dan PPAT: Mana yang Anda Butuhkan?",
    excerpt:
      "Banyak orang keliru membedakan notaris dan PPAT. Artikel ini menjelaskan perbedaan fungsi dan kewenangannya secara jelas.",
    date: "5 Jan 2025",
    category: "Edukasi",
    slug: "perbedaan-notaris-ppat",
  },
];

export const notarisArticleDetails: Record<string, ArticleDetail> = {
  "apa-itu-akta-autentik": {
    slug: "apa-itu-akta-autentik",
    category: "Panduan",
    readTime: "7 menit",
    date: "10 Maret 2025",
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
    date: "22 Feb 2025",
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
    date: "5 Jan 2025",
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
};
