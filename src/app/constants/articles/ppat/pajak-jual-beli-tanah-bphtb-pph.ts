import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "12",
  title: "Memahami Pajak dalam Transaksi Jual Beli Tanah: BPHTB dan PPh",
  excerpt: "Setiap transaksi properti memiliki kewajiban pajak bagi penjual dan pembeli. Pahami cara menghitung BPHTB dan PPh agar transaksi berjalan lancar.",
  date: "10 Oktober 2026",
  category: "Panduan",
  slug: "pajak-jual-beli-tanah-bphtb-pph",
  readTime: "7 menit",
  subtitle: "Pajak adalah bagian tak terpisahkan dari transaksi properti. Memahami kewajiban pajak sejak awal membantu Anda menghindari denda dan hambatan proses balik nama.",
  author: {
        name: "Tim PPAT Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Konsultan Pertanahan",
      },
  content: [
        {
          type: "paragraph",
          text: "Dalam transaksi jual beli tanah dan bangunan, selain harga tanah itu sendiri, terdapat dua kewajiban pajak utama yang harus dipenuhi: Pajak Penghasilan (PPh) bagi penjual dan Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB) bagi pembeli. Keduanya wajib dibayar sebelum PPAT menandatangani akta jual beli.",
        },
        {
          type: "heading",
          text: "PPh Final untuk Penjual",
        },
        {
          type: "paragraph",
          text: "Penjual dikenakan PPh final sebesar 2,5% dari nilai transaksi (nilai bruto pengalihan hak). Pajak ini wajib dibayar dan disetorkan sebelum akta ditandatangani, dibuktikan dengan validasi dari kantor pajak.",
        },
        {
          type: "heading",
          text: "BPHTB untuk Pembeli",
        },
        {
          type: "list",
          items: [
            "BPHTB dihitung sebesar 5% dari nilai transaksi dikurangi Nilai Perolehan Objek Pajak Tidak Kena Pajak (NPOPTKP).",
            "Besaran NPOPTKP berbeda-beda tiap daerah, umumnya berkisar Rp60 juta hingga Rp80 juta.",
            "Rumus: BPHTB = 5% x (Nilai Transaksi - NPOPTKP).",
            "BPHTB wajib dibayar dan divalidasi sebelum akta jual beli ditandatangani PPAT.",
          ],
        },
        {
          type: "quote",
          text: "Jangan pernah menandatangani akta jual beli sebelum kewajiban pajak diselesaikan — PPAT dilarang memproses akta tanpa bukti pelunasan pajak.",
        },
        {
          type: "heading",
          text: "Peran PPAT dalam Validasi Pajak",
        },
        {
          type: "paragraph",
          text: "PPAT berperan memastikan kedua pajak telah dibayar dan divalidasi sebelum menandatangani akta. Setelah akta jadi, PPAT juga membantu proses pendaftaran peralihan hak ke Kantor Pertanahan. Dengan pemahaman pajak yang jelas, transaksi properti Anda akan berjalan lancar dan terhindar dari sanksi.",
        },
        {
          type: "paragraph",
          text: "Konsultasikan perhitungan pajak transaksi properti Anda dengan tim PPAT kami agar Anda memperoleh estimasi biaya yang akurat sejak awal.",
        },
      ],
  tags: ["Pajak", "BPHTB", "PPh", "Jual Beli Tanah"],
};
