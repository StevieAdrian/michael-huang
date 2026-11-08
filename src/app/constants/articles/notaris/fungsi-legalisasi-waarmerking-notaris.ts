import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "5",
  title: "Fungsi Legalisasi, Waarmerking, dan Pencocokan Fotokopi oleh Notaris",
  excerpt: "Kenali perbedaan legalisasi tanda tangan, pendaftaran surat (waarmerking), dan pencocokan dokumen fotokopi dengan aslinya di kantor notaris.",
  date: "12 April 2026",
  category: "Edukasi",
  slug: "fungsi-legalisasi-waarmerking-notaris",
  readTime: "6 menit",
  subtitle: "Sering diminta dokumen yang dilegalisasi Notaris? Ketahui jenis pengesahan dokumen di bawah tangan agar tidak salah paham.",
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
  detailOverrides: {
    date: "12 Juni 2026",
  },
};
