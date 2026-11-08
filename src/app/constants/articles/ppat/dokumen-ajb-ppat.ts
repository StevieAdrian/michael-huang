import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "2",
  title: "Dokumen yang Diperlukan untuk AJB di PPAT",
  excerpt: "Sebelum datang ke PPAT, pastikan seluruh dokumen Anda sudah lengkap. Berikut daftar lengkap yang harus dipersiapkan.",
  date: "13 Mei 2026",
  category: "Tips",
  slug: "dokumen-ajb-ppat",
  readTime: "5 menit",
  subtitle: "Kelengkapan dokumen adalah kunci agar proses AJB berjalan lancar. Persiapan yang tepat menghemat waktu dan menghindari penundaan penandatanganan.",
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
};
