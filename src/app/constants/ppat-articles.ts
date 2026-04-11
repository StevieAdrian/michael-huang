import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const ppatArticles: Article[] = [
  {
    id: "1",
    title: "Cara Balik Nama Sertifikat Tanah Setelah Jual Beli",
    excerpt:
      "Balik nama sertifikat adalah langkah wajib setelah transaksi jual beli tanah. Pelajari prosedur lengkapnya bersama PPAT kami.",
    date: "15 Maret 2025",
    category: "Panduan",
    slug: "cara-balik-nama-sertifikat-tanah",
  },
  {
    id: "2",
    title: "Dokumen yang Diperlukan untuk AJB di PPAT",
    excerpt:
      "Sebelum datang ke PPAT, pastikan seluruh dokumen Anda sudah lengkap. Berikut daftar lengkap yang harus dipersiapkan.",
    date: "28 Feb 2025",
    category: "Tips",
    slug: "dokumen-ajb-ppat",
  },
  {
    id: "3",
    title: "Apa Itu Hak Tanggungan dan Bagaimana Cara Kerjanya?",
    excerpt:
      "Hak tanggungan adalah jaminan atas tanah yang sering digunakan dalam kredit bank. Pahami hak dan kewajiban Anda sebagai debitur.",
    date: "10 Jan 2025",
    category: "Edukasi",
    slug: "hak-tanggungan-pengertian",
  },
];

export const ppatArticleDetails: Record<string, ArticleDetail> = {
  "cara-balik-nama-sertifikat-tanah": {
    slug: "cara-balik-nama-sertifikat-tanah",
    category: "Panduan",
    readTime: "6 menit",
    date: "15 Maret 2025",
    title: "Cara Balik Nama Sertifikat Tanah Setelah Jual Beli",
    subtitle:
      "Balik nama sertifikat memastikan pemilik baru tercatat resmi di BPN. Proses ini penting untuk kepastian hukum dan perlindungan hak atas tanah.",
    author: {
      name: "Tim PPAT Michael Huang",
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
    date: "28 Feb 2025",
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
    date: "10 Jan 2025",
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
};
