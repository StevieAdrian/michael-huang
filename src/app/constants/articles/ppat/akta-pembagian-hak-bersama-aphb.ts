import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "5",
  title: "Memahami Pembuatan Akta Pembagian Hak Bersama (APHB)",
  excerpt: "Sertifikat tanah masih atas nama waris bersama? Temukan fungsi APHB di PPAT untuk memisahkan bagian hak masing-masing ahli waris secara resmi.",
  date: "18 Juni 2026",
  category: "Edukasi",
  slug: "akta-pembagian-hak-bersama-aphb",
  readTime: "6 menit",
  subtitle: "APHB digunakan untuk membagi tanah yang dimiliki bersama (seperti warisan) menjadi hak individu.",
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
};
