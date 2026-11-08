import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "8",
  title: "Simulasi Biaya AJB: BPHTB, PPh, dan Komponen Lain yang Sering Terlewat",
  excerpt: "Banyak pembeli baru kaget di akhir transaksi karena belum menghitung komponen biaya AJB secara utuh. Pelajari struktur biayanya dari awal.",
  date: "7 Agustus 2026",
  category: "Tips",
  slug: "simulasi-biaya-ajb-bphtb-pph",
  readTime: "6 menit",
  subtitle: "Perencanaan biaya transaksi yang akurat membantu pembeli dan penjual menghindari kejutan finansial menjelang penandatanganan AJB.",
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
};
