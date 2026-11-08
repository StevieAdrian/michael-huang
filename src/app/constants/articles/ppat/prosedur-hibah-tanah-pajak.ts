import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "4",
  title: "Prosedur Hibah Tanah dan Ketentuan Pajaknya",
  excerpt: "Ingin memberikan tanah kepada anak atau kerabat dekat? Pahami perbedaan hibah dengan jual beli, tata cara pembuatan Akta Hibah di PPAT, dan aturan pajaknya.",
  date: "15 Juni 2026",
  category: "Panduan",
  slug: "prosedur-hibah-tanah-pajak",
  readTime: "7 menit",
  subtitle: "Pemberian tanah secara hibah wajib dicatatkan melalui Akta Hibah yang dibuat oleh PPAT agar sah secara hukum.",
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
};
