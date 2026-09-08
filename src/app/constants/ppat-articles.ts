import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const ppatArticles: Article[] = [
  {
    id: "1",
    title: "Cara Balik Nama Sertifikat Tanah Setelah Jual Beli",
    excerpt:
      "Balik nama sertifikat adalah langkah wajib setelah transaksi jual beli tanah. Pelajari prosedur lengkapnya bersama PPAT kami.",
    date: "11 Mei 2026",
    category: "Panduan",
    slug: "cara-balik-nama-sertifikat-tanah",
  },
  {
    id: "2",
    title: "Dokumen yang Diperlukan untuk AJB di PPAT",
    excerpt:
      "Sebelum datang ke PPAT, pastikan seluruh dokumen Anda sudah lengkap. Berikut daftar lengkap yang harus dipersiapkan.",
    date: "13 Mei 2026",
    category: "Tips",
    slug: "dokumen-ajb-ppat",
  },
  {
    id: "3",
    title: "Apa Itu Hak Tanggungan dan Bagaimana Cara Kerjanya?",
    excerpt:
      "Hak tanggungan adalah jaminan atas tanah yang sering digunakan dalam kredit bank. Pahami hak dan kewajiban Anda sebagai debitur.",
    date: "13 Mei 2026",
    category: "Edukasi",
    slug: "hak-tanggungan-pengertian",
  },
  {
    id: "4",
    title: "Prosedur Hibah Tanah dan Ketentuan Pajaknya",
    excerpt:
      "Ingin memberikan tanah kepada anak atau kerabat dekat? Pahami perbedaan hibah dengan jual beli, tata cara pembuatan Akta Hibah di PPAT, dan aturan pajaknya.",
    date: "15 Juni 2026",
    category: "Panduan",
    slug: "prosedur-hibah-tanah-pajak",
  },
  {
    id: "5",
    title: "Memahami Pembuatan Akta Pembagian Hak Bersama (APHB)",
    excerpt:
      "Sertifikat tanah masih atas nama waris bersama? Temukan fungsi APHB di PPAT untuk memisahkan bagian hak masing-masing ahli waris secara resmi.",
    date: "18 Juni 2026",
    category: "Edukasi",
    slug: "akta-pembagian-hak-bersama-aphb",
  },
  {
    id: "6",
    title: "Cek Sertifikat Tanah Sebelum Transaksi: 5 Hal yang Wajib Diverifikasi",
    excerpt:
      "Sebelum menandatangani AJB, lakukan due diligence sertifikat untuk mencegah sengketa, tumpang tindih hak, dan risiko blokir di kemudian hari.",
    date: "4 Juli 2026",
    category: "Tips",
    slug: "cek-sertifikat-sebelum-transaksi",
  },
  {
    id: "7",
    title: "Split Sertifikat Tanah: Kapan Perlu Pemecahan dan Bagaimana Prosesnya?",
    excerpt:
      "Pemecahan sertifikat diperlukan saat sebagian tanah akan dijual, dihibahkan, atau dibagi waris. Pahami alur legalnya agar tidak terkendala di BPN.",
    date: "4 Juli 2026",
    category: "Panduan",
    slug: "split-sertifikat-tanah-proses",
  },
  {
    id: "8",
    title: "Simulasi Biaya AJB: BPHTB, PPh, dan Komponen Lain yang Sering Terlewat",
    excerpt:
      "Banyak pembeli baru kaget di akhir transaksi karena belum menghitung komponen biaya AJB secara utuh. Pelajari struktur biayanya dari awal.",
    date: "7 Agustus 2026",
    category: "Tips",
    slug: "simulasi-biaya-ajb-bphtb-pph",
  },
  {
    id: "9",
    title: "Cek Zona Tata Ruang Sebelum Beli Tanah: Langkah Penting yang Sering Dilupakan",
    excerpt:
      "Tanah yang terlihat ideal belum tentu sesuai peruntukan wilayah. Pastikan status zonasi dicek sebelum transaksi agar rencana pembangunan tidak terhambat.",
    date: "7 Agustus 2026",
    category: "Edukasi",
    slug: "cek-zona-tata-ruang-tanah",
  },
  {
    id: "10",
    title: "Konversi Girik Menjadi Sertifikat: Prosedur dan Risiko yang Perlu Diketahui",
    excerpt:
      "Tanah dengan bukti kepemilikan Girik belum terlindungi secara penuh secara hukum. Pelajari langkah konversi ke sertifikat resmi melalui PPAT dan BPN.",
    date: "8 September 2026",
    category: "Panduan",
    slug: "konversi-girik-sertifikat-ppat",
  },
  {
    id: "11",
    title: "Perpanjangan dan Peningkatan HGB Menjadi SHM: Panduan Lengkap",
    excerpt:
      "Hak Guna Bangunan memiliki batas waktu dan perlu diperpanjang atau ditingkatkan ke Sertifikat Hak Milik. Ketahui prosedur, biaya, dan persyaratannya.",
    date: "8 September 2026",
    category: "Panduan",
    slug: "perpanjangan-peningkatan-hgb-shm",
  },
];

export const ppatArticleDetails: Record<string, ArticleDetail> = {
  "cara-balik-nama-sertifikat-tanah": {
    slug: "cara-balik-nama-sertifikat-tanah",
    category: "Panduan",
    readTime: "6 menit",
    date: "11 Mei 2026",
    title: "Cara Balik Nama Sertifikat Tanah Setelah Jual Beli",
    subtitle:
      "Balik nama sertifikat memastikan pemilik baru tercatat resmi di BPN. Proses ini penting untuk kepastian hukum dan perlindungan hak atas tanah.",
    author: {
      name: "Tim PPAT Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Konsultan Pertanahan",
    },
    content: [
      {
        type: "paragraph",
        text: "Setelah akta jual beli ditandatangani, proses belum selesai. Pemilik baru wajib mengurus balik nama agar data sertifikat sesuai dengan kondisi kepemilikan yang sebenarnya.",
      },
      {
        type: "heading",
        text: "Tahapan Umum Balik Nama",
      },
      {
        type: "list",
        items: [
          "Penandatanganan AJB di hadapan PPAT.",
          "Pelunasan BPHTB dan kewajiban pajak terkait.",
          "Pengajuan berkas balik nama ke kantor BPN.",
          "Penerbitan sertifikat dengan nama pemilik baru.",
        ],
      },
      {
        type: "paragraph",
        text: "Jika dokumen lengkap dan tidak ada hambatan administratif, proses biasanya berjalan lebih cepat. Pendampingan PPAT membantu meminimalkan risiko berkas dikembalikan karena kekurangan syarat.",
      },
      {
        type: "quote",
        text: "Kepastian hukum atas tanah dimulai dari data kepemilikan yang tercatat dengan benar.",
      },
    ],
    tags: ["PPAT", "Balik Nama", "Sertifikat Tanah", "AJB"],
  },
  "dokumen-ajb-ppat": {
    slug: "dokumen-ajb-ppat",
    category: "Tips",
    readTime: "5 menit",
    date: "13 Mei 2026",
    title: "Dokumen yang Diperlukan untuk AJB di PPAT",
    subtitle:
      "Kelengkapan dokumen adalah kunci agar proses AJB berjalan lancar. Persiapan yang tepat menghemat waktu dan menghindari penundaan penandatanganan.",
    author: {
      name: "Tim Administrasi PPAT",
      role: "Legal Documentation",
    },
    content: [
      {
        type: "paragraph",
        text: "Sebelum transaksi jual beli tanah dilakukan, para pihak perlu menyiapkan dokumen identitas dan dokumen objek tanah secara lengkap. Kekurangan satu dokumen saja bisa membuat proses tertunda.",
      },
      {
        type: "heading",
        text: "Dokumen Wajib yang Umum Diminta",
      },
      {
        type: "list",
        items: [
          "Sertifikat tanah asli.",
          "KTP, KK, dan NPWP para pihak.",
          "Bukti lunas PBB tahun berjalan.",
          "Surat persetujuan pasangan (jika diperlukan).",
          "Dokumen pendukung lain sesuai kondisi objek.",
        ],
      },
      {
        type: "paragraph",
        text: "Selain dokumen, penting juga memastikan data nama dan nomor identitas konsisten di semua berkas. Validasi awal ini membantu mencegah revisi di tahap akhir.",
      },
    ],
    tags: ["AJB", "Dokumen", "PPAT", "Jual Beli Tanah"],
  },
  "hak-tanggungan-pengertian": {
    slug: "hak-tanggungan-pengertian",
    category: "Edukasi",
    readTime: "6 menit",
    date: "15 Mei 2026",
    title: "Apa Itu Hak Tanggungan dan Bagaimana Cara Kerjanya?",
    subtitle:
      "Hak tanggungan adalah jaminan kebendaan atas tanah untuk pelunasan utang tertentu. Instrumen ini umum digunakan dalam pembiayaan perbankan.",
    author: {
      name: "Tim Legal PPAT",
      role: "Ahli Hak Atas Tanah",
    },
    content: [
      {
        type: "paragraph",
        text: "Dalam praktik pembiayaan, bank membutuhkan jaminan yang memiliki kekuatan eksekutorial. Hak tanggungan memberikan kepastian hukum bagi kreditur sekaligus memperjelas posisi debitur atas objek jaminan.",
      },
      {
        type: "heading",
        text: "Unsur Penting Hak Tanggungan",
      },
      {
        type: "list",
        items: [
          "Objek jaminan berupa hak atas tanah yang dapat dibebani.",
          "Adanya utang pokok yang dijamin pelunasannya.",
          "Pembuatan APHT di hadapan PPAT.",
          "Pendaftaran hak tanggungan ke BPN.",
        ],
      },
      {
        type: "quote",
        text: "Hak tanggungan bukan hanya formalitas kredit, tetapi instrumen legal untuk menjaga kepastian hak para pihak.",
      },
      {
        type: "paragraph",
        text: "Memahami hak dan kewajiban sejak awal membantu debitur mengambil keputusan pembiayaan dengan lebih aman dan terukur.",
      },
    ],
    tags: ["Hak Tanggungan", "APHT", "PPAT", "Kredit Bank"],
  },
  "prosedur-hibah-tanah-pajak": {
    slug: "prosedur-hibah-tanah-pajak",
    category: "Panduan",
    readTime: "7 menit",
    date: "15 Juni 2026",
    title: "Prosedur Hibah Tanah dan Ketentuan Pajaknya",
    subtitle:
      "Pemberian tanah secara hibah wajib dicatatkan melalui Akta Hibah yang dibuat oleh PPAT agar sah secara hukum.",
    author: {
      name: "Tim PPAT Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Konsultan Pertanahan",
    },
    content: [
      {
        type: "paragraph",
        text: "Hibah tanah adalah pengalihan hak atas tanah dari satu pihak (pemberi hibah) ke pihak lain (penerima hibah) yang dilakukan secara sukarela semasa hidup tanpa adanya kontraprestasi uang. Untuk memastikan pengalihan ini sah di mata hukum, prosesnya harus dituangkan dalam Akta Hibah yang dibuat oleh PPAT.",
      },
      {
        type: "heading",
        text: "Persyaratan Pengurusan Akta Hibah di PPAT",
      },
      {
        type: "list",
        items: [
          "Sertifikat Tanah Asli untuk divalidasi.",
          "KTP, KK, and NPWP dari pemberi dan penerima hibah.",
          "Bukti pembayaran PBB tahun berjalan.",
          "Persetujuan dari ahli waris atau pasangan (apabila tanah merupakan harta bersama).",
        ],
      },
      {
        type: "heading",
        text: "Ketentuan Pajak Hibah Tanah",
      },
      {
        type: "paragraph",
        text: "Meskipun sifatnya pemberian cuma-cuma, hibah tanah tetap dikenakan pajak. Penerima hibah dikenakan BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan). Sementara pemberi hibah dikenakan PPh (Pajak Penghasilan) Final, kecuali jika hibah dilakukan kepada keluarga sedarah dalam garis keturunan lurus satu derajat, yang memenuhi syarat tertentu untuk dikecualikan.",
      },
    ],
    tags: ["Hibah Tanah", "Akta Hibah", "PPAT", "Pajak Properti"],
  },
  "akta-pembagian-hak-bersama-aphb": {
    slug: "akta-pembagian-hak-bersama-aphb",
    category: "Edukasi",
    readTime: "6 menit",
    date: "18 Juni 2026",
    title: "Memahami Pembuatan Akta Pembagian Hak Bersama (APHB)",
    subtitle:
      "APHB digunakan untuk membagi tanah yang dimiliki bersama (seperti warisan) menjadi hak individu.",
    author: {
      name: "Tim Legal PPAT",
      role: "Ahli Hak Atas Tanah",
    },
    content: [
      {
        type: "paragraph",
        text: "Tanah warisan sering kali tercatat atas nama beberapa orang ahli waris dalam satu sertifikat (kepemilikan bersama). Untuk membaginya agar masing-masing ahli waris memiliki sertifikat sendiri yang sah secara mandiri, diperlukan pembuatan Akta Pembagian Hak Bersama (APHB) oleh PPAT.",
      },
      {
        type: "heading",
        text: "Kapan APHB Diperlukan?",
      },
      {
        type: "paragraph",
        text: "APHB diperlukan ketika para pemegang hak bersama sepakat untuk melepaskan haknya kepada pemegang hak lainnya, baik dengan pembayaran kompensasi maupun tanpa kompensasi. Ini adalah dokumen dasar sebelum BPN melakukan pemecahan sertifikat.",
      },
      {
        type: "heading",
        text: "Langkah Pengurusan APHB",
      },
      {
        type: "list",
        items: [
          "Pendaftaran Kematian & Balik Nama Waris: Mengubah nama sertifikat dari pewaris ke para ahli waris bersama terlebih dahulu.",
          "Pembuatan APHB di PPAT: Kesepakatan pembagian dituangkan dalam akta resmi PPAT.",
          "Pendaftaran ke BPN: Mengajukan pemisahan nama kepemilikan individu berdasarkan akta APHB tersebut.",
        ],
      },
    ],
    tags: ["APHB", "Waris", "Sertifikat Tanah", "PPAT"],
  },
  "cek-sertifikat-sebelum-transaksi": {
    slug: "cek-sertifikat-sebelum-transaksi",
    category: "Tips",
    readTime: "6 menit",
    date: "4 Juli 2026",
    title:
      "Cek Sertifikat Tanah Sebelum Transaksi: 5 Hal yang Wajib Diverifikasi",
    subtitle:
      "Banyak sengketa tanah berawal dari pemeriksaan dokumen yang terburu-buru. Verifikasi awal yang tepat dapat menyelamatkan waktu, biaya, dan keamanan transaksi.",
    author: {
      name: "Tim PPAT Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Property Transaction Desk",
    },
    content: [
      {
        type: "paragraph",
        text: "Dalam transaksi properti, harga sering menjadi fokus utama, padahal validitas dokumen adalah fondasi paling penting. Sertifikat yang tampak lengkap belum tentu bersih dari masalah hukum. Karena itu, pengecekan sebelum transaksi wajib dilakukan secara sistematis.",
      },
      {
        type: "heading",
        text: "Lima Poin Verifikasi Utama",
      },
      {
        type: "list",
        items: [
          "Kesesuaian identitas pemegang hak dengan data KTP dan dokumen pendukung.",
          "Jenis hak atas tanah (SHM, HGB, Hak Pakai) serta masa berlaku jika hak berjangka.",
          "Status blokir, sita, atau sengketa yang dapat menghambat peralihan hak.",
          "Kesesuaian luas dan batas bidang dengan kondisi fisik serta peta bidang.",
          "Riwayat peralihan hak dan beban jaminan seperti Hak Tanggungan.",
        ],
      },
      {
        type: "heading",
        text: "Kenapa Harus Lewat PPAT?",
      },
      {
        type: "paragraph",
        text: "PPAT berperan memastikan legalitas proses peralihan hak dan menyusun akta yang sah. Dengan pemeriksaan awal yang memadai, PPAT dapat memberi peringatan dini atas risiko yang mungkin tidak terlihat oleh pembeli atau penjual.",
      },
      {
        type: "quote",
        text: "Transaksi tanah yang aman dimulai dari verifikasi dokumen yang disiplin, bukan dari tanda tangan yang cepat.",
      },
      {
        type: "paragraph",
        text: "Jika Anda berencana membeli tanah atau rumah, lakukan pre-check dokumen sebelum pembayaran uang muka. Langkah ini membantu Anda bernegosiasi dengan posisi yang lebih kuat dan menghindari kerugian hukum di kemudian hari.",
      },
    ],
    tags: ["Sertifikat Tanah", "PPAT", "AJB", "Due Diligence"],
  },
  "split-sertifikat-tanah-proses": {
    slug: "split-sertifikat-tanah-proses",
    category: "Panduan",
    readTime: "7 menit",
    date: "4 Juli 2026",
    title:
      "Split Sertifikat Tanah: Kapan Perlu Pemecahan dan Bagaimana Prosesnya?",
    subtitle:
      "Pemecahan sertifikat adalah proses administratif penting saat satu bidang tanah akan dipisah menjadi beberapa hak baru yang berdiri sendiri.",
    author: {
      name: "Tim Legal PPAT",
      role: "Land Administration Advisory",
    },
    content: [
      {
        type: "paragraph",
        text: "Pemecahan sertifikat (split) dilakukan ketika pemilik ingin memisahkan sebagian bidang tanah untuk tujuan tertentu, seperti dijual sebagian, dihibahkan kepada keluarga, dibagi waris, atau kebutuhan pengembangan proyek. Tanpa pemecahan resmi, transaksi atas sebagian bidang akan sulit diproses secara legal.",
      },
      {
        type: "heading",
        text: "Kapan Pemecahan Sertifikat Diperlukan?",
      },
      {
        type: "list",
        items: [
          "Penjualan sebagian luas tanah kepada pihak lain.",
          "Pembagian aset keluarga atau warisan kepada beberapa pihak.",
          "Pengembangan kawasan menjadi beberapa kavling.",
          "Pengaturan ulang batas bidang agar sesuai rencana penggunaan.",
        ],
      },
      {
        type: "heading",
        text: "Tahapan Umum Proses Split",
      },
      {
        type: "list",
        items: [
          "Persiapan dokumen kepemilikan dan identitas pemilik.",
          "Permohonan pemecahan ke kantor pertanahan melalui prosedur yang berlaku.",
          "Pengukuran lapangan dan pembuatan peta bidang baru.",
          "Penerbitan sertifikat hasil pemecahan untuk tiap bidang.",
        ],
      },
      {
        type: "heading",
        text: "Hal yang Perlu Diantisipasi",
      },
      {
        type: "list",
        items: [
          "Perbedaan data luas antara sertifikat dan kondisi lapangan.",
          "Keberatan batas dari pemilik bidang yang berbatasan.",
          "Kebutuhan penyesuaian pajak dan biaya administrasi tambahan.",
        ],
      },
      {
        type: "quote",
        text: "Pemecahan sertifikat yang direncanakan dengan baik akan mempercepat transaksi lanjutan dan mengurangi risiko sengketa batas di masa depan.",
      },
      {
        type: "paragraph",
        text: "Pendampingan PPAT sejak tahap perencanaan membantu Anda menentukan skema pemecahan yang paling efisien, termasuk kesiapan dokumen untuk transaksi berikutnya seperti AJB, hibah, atau pembebanan Hak Tanggungan.",
      },
    ],
    tags: ["Split Sertifikat", "Pemecahan Tanah", "PPAT", "BPN"],
  },
  "simulasi-biaya-ajb-bphtb-pph": {
    slug: "simulasi-biaya-ajb-bphtb-pph",
    category: "Tips",
    readTime: "6 menit",
    date: "7 Agustus 2026",
    title:
      "Simulasi Biaya AJB: BPHTB, PPh, dan Komponen Lain yang Sering Terlewat",
    subtitle:
      "Perencanaan biaya transaksi yang akurat membantu pembeli dan penjual menghindari kejutan finansial menjelang penandatanganan AJB.",
    author: {
      name: "Tim PPAT Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Transaction Advisory",
    },
    content: [
      {
        type: "paragraph",
        text: "Dalam jual beli tanah, harga kesepakatan hanyalah satu bagian dari total biaya. Banyak pihak baru menghitung komponen lain di tahap akhir, sehingga proses tertunda karena dana belum siap.",
      },
      {
        type: "heading",
        text: "Komponen Biaya yang Perlu Disiapkan",
      },
      {
        type: "list",
        items: [
          "BPHTB dari sisi perolehan hak pembeli.",
          "PPh final dari sisi pengalihan hak penjual.",
          "Biaya jasa PPAT dan administrasi pendukung.",
          "Biaya pengecekan sertifikat dan proses balik nama.",
        ],
      },
      {
        type: "quote",
        text: "Transaksi properti yang lancar dimulai dari kalkulasi biaya yang realistis sejak awal negosiasi.",
      },
      {
        type: "paragraph",
        text: "Sebelum menandatangani PPJB atau AJB, lakukan simulasi biaya bersama PPAT agar pembagian kewajiban pajak dan biaya administrasi jelas untuk kedua belah pihak.",
      },
    ],
    tags: ["AJB", "BPHTB", "PPh", "PPAT"],
  },
  "cek-zona-tata-ruang-tanah": {
    slug: "cek-zona-tata-ruang-tanah",
    category: "Edukasi",
    readTime: "6 menit",
    date: "7 Agustus 2026",
    title:
      "Cek Zona Tata Ruang Sebelum Beli Tanah: Langkah Penting yang Sering Dilupakan",
    subtitle:
      "Kesesuaian zonasi menentukan apa yang boleh dibangun di atas bidang tanah. Pemeriksaan awal mencegah kerugian jangka panjang.",
    author: {
      name: "Tim Legal PPAT",
      role: "Land Use Advisory",
    },
    content: [
      {
        type: "paragraph",
        text: "Tidak sedikit transaksi tanah bermasalah karena pembeli baru mengetahui belakangan bahwa peruntukan lahannya tidak sesuai rencana. Zonasi adalah aspek legal yang harus diperiksa sebelum kesepakatan harga final.",
      },
      {
        type: "heading",
        text: "Kenapa Cek Zonasi Itu Krusial",
      },
      {
        type: "list",
        items: [
          "Mengetahui jenis bangunan yang diperbolehkan di lokasi.",
          "Menghindari risiko penolakan izin pembangunan.",
          "Memastikan tanah sesuai kebutuhan bisnis atau hunian.",
          "Mengurangi potensi sengketa administratif dengan pemerintah daerah.",
        ],
      },
      {
        type: "quote",
        text: "Harga tanah bisa terlihat menarik, tetapi kepatuhan zonasi menentukan apakah tanah tersebut benar-benar bernilai bagi rencana Anda.",
      },
      {
        type: "paragraph",
        text: "Libatkan PPAT dan lakukan pengecekan data peruntukan wilayah sebelum pembayaran uang muka. Langkah ini sederhana, namun sangat menentukan keamanan investasi properti.",
      },
    ],
    tags: ["Zonasi", "Tata Ruang", "PPAT", "Properti"],
  },
  "konversi-girik-sertifikat-ppat": {
    slug: "konversi-girik-sertifikat-ppat",
    category: "Panduan",
    readTime: "8 menit",
    date: "8 September 2026",
    title: "Konversi Girik Menjadi Sertifikat: Prosedur dan Risiko yang Perlu Diketahui",
    subtitle:
      "Girik bukan sertifikat tanah dan tidak memberikan perlindungan hukum penuh. Konversi ke sertifikat resmi adalah langkah yang wajib dilakukan sesegera mungkin.",
    author: {
      name: "Tim PPAT Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Konsultan Pertanahan",
    },
    content: [
      {
        type: "paragraph",
        text: "Girik (atau Petok D/Letter C) adalah bukti pembayaran pajak tanah dari era sebelum diberlakukannya UUPA (Undang-Undang Pokok Agraria) tahun 1960. Meskipun sering disebut sebagai 'surat tanah', girik bukanlah bukti kepemilikan tanah yang sah di mata hukum modern. Tanpa konversi ke sertifikat resmi, tanah girik sangat rentan terhadap sengketa dan sulit dijual, diwariskan, atau dijadikan agunan.",
      },
      {
        type: "heading",
        text: "Risiko Kepemilikan Tanah Girik",
      },
      {
        type: "list",
        items: [
          "Tidak dapat digunakan sebagai jaminan kredit bank.",
          "Rawan sengketa karena tidak tercatat di BPN (Badan Pertanahan Nasional).",
          "Bisa diklaim oleh pihak lain karena tidak ada bukti kepemilikan formal.",
          "Proses jual beli tidak dapat dilakukan melalui AJB di hadapan PPAT.",
          "Risiko tanah diklaim sebagai tanah negara jika tidak segera dikonversikan.",
        ],
      },
      {
        type: "heading",
        text: "Prosedur Konversi Girik ke Sertifikat",
      },
      {
        type: "list",
        items: [
          "Kumpulkan bukti kepemilikan historis: girik asli, riwayat jual beli sebelumnya, dan surat keterangan riwayat tanah dari kelurahan.",
          "Pastikan tanah tidak dalam sengketa dan tidak tumpang tindih dengan hak pihak lain.",
          "Lakukan pengukuran tanah oleh petugas BPN untuk penerbitan Peta Bidang Tanah.",
          "Ajukan permohonan pendaftaran tanah pertama kali ke Kantor Pertanahan setempat.",
          "Ikuti proses pengumuman selama 60 hari untuk memberi kesempatan pihak lain mengajukan keberatan.",
          "Setelah masa pengumuman selesai tanpa keberatan, sertifikat diterbitkan atas nama pemohon.",
        ],
      },
      {
        type: "quote",
        text: "Konversi girik ke sertifikat bukan hanya formalitas — ini adalah perlindungan nyata atas tanah warisan keluarga Anda.",
      },
      {
        type: "paragraph",
        text: "Proses konversi girik memerlukan waktu dan pemahaman prosedur yang tepat. PPAT dapat membantu mempersiapkan dokumen, berkoordinasi dengan BPN, dan memastikan proses berjalan tanpa hambatan hukum. Jangan tunda langkah ini — semakin lama ditunda, semakin kompleks proses penelusuran riwayat tanahnya.",
      },
    ],
    tags: ["Girik", "Sertifikat", "BPN", "PPAT"],
  },
  "perpanjangan-peningkatan-hgb-shm": {
    slug: "perpanjangan-peningkatan-hgb-shm",
    category: "Panduan",
    readTime: "7 menit",
    date: "8 September 2026",
    title: "Perpanjangan dan Peningkatan HGB Menjadi SHM: Panduan Lengkap",
    subtitle:
      "Banyak pemilik properti tidak mengetahui bahwa HGB mereka akan kedaluwarsa. Pahami batas waktu, prosedur perpanjangan, dan cara meningkatkannya ke Sertifikat Hak Milik.",
    author: {
      name: "Tim PPAT Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
      role: "Konsultan Pertanahan",
    },
    content: [
      {
        type: "paragraph",
        text: "Hak Guna Bangunan (HGB) adalah hak untuk mendirikan dan memiliki bangunan di atas tanah yang bukan miliknya sendiri, dengan jangka waktu tertentu. HGB umumnya diberikan untuk masa 30 tahun dan dapat diperpanjang hingga 20 tahun. Namun, banyak pemilik properti tidak sadar bahwa HGB mereka mendekati masa berakhir, yang bisa berdampak serius pada status kepemilikan.",
      },
      {
        type: "heading",
        text: "Perbedaan HGB dan SHM",
      },
      {
        type: "paragraph",
        text: "Sertifikat Hak Milik (SHM) adalah bukti kepemilikan tanah tertinggi dan paling kuat yang diakui oleh hukum Indonesia, berlaku tanpa batas waktu. HGB bersifat sementara dan hanya memberikan hak atas bangunan, bukan tanahnya. Dalam transaksi properti, SHM memiliki nilai jual lebih tinggi dan lebih mudah dijadikan agunan di bank.",
      },
      {
        type: "heading",
        text: "Kapan Sebaiknya Mengajukan Perpanjangan HGB?",
      },
      {
        type: "list",
        items: [
          "Idealnya 2 tahun sebelum masa HGB berakhir untuk menghindari kedaruratan administrasi.",
          "Pastikan semua kewajiban PBB (Pajak Bumi dan Bangunan) sudah lunas sebelum mengajukan permohonan.",
          "Persiapkan dokumen identitas pemilik, sertifikat asli HGB, dan IMB/PBG bangunan di atasnya.",
        ],
      },
      {
        type: "heading",
        text: "Prosedur Peningkatan HGB Menjadi SHM",
      },
      {
        type: "list",
        items: [
          "Pastikan status tanah di bawah HGB adalah Tanah Negara atau Tanah Hak Pengelolaan yang dapat ditingkatkan.",
          "Ajukan permohonan peningkatan hak ke Kantor Pertanahan setempat.",
          "Bayar Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB) sesuai nilai transaksi.",
          "Proses penerbitan SHM baru biasanya memakan waktu 30–90 hari kerja.",
        ],
      },
      {
        type: "quote",
        text: "Meningkatkan HGB ke SHM adalah investasi satu kali yang memberikan ketenangan pikiran seumur hidup atas aset properti Anda.",
      },
      {
        type: "paragraph",
        text: "PPAT dapat memfasilitasi seluruh proses perpanjangan maupun peningkatan hak ini dengan efisien. Jika properti Anda masih berstatus HGB, segera periksa tanggal jatuh temponya dan rencanakan langkah hukum yang tepat bersama tim kami.",
      },
    ],
    tags: ["HGB", "SHM", "Sertifikat", "PPAT"],
  },
};
