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
};
