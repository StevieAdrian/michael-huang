import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "2",
  title: "5 Klausul Penting yang Wajib Ada dalam Kontrak Bisnis",
  excerpt: "Kontrak yang lemah bisa menjadi sumber sengketa di kemudian hari. Pastikan kontrak Anda memuat klausul-klausul perlindungan berikut ini.",
  date: "14 Mei 2026",
  category: "Kontrak",
  slug: "klausul-penting-kontrak-bisnis",
  readTime: "6 menit",
  subtitle: "Kontrak yang baik bukan sekadar formalitas. Klausul yang tepat melindungi kepentingan bisnis Anda saat kondisi terbaik maupun terburuk.",
  author: {
        name: "Tim Drafting Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Contract Specialist",
      },
  content: [
        {
          type: "paragraph",
          text: "Banyak sengketa bisnis terjadi bukan karena niat buruk, tetapi karena kontrak yang ambigu. Menyusun klausul secara presisi sejak awal akan mengurangi celah interpretasi dan potensi konflik di masa depan.",
        },
        {
          type: "heading",
          text: "Klausul yang Harus Anda Prioritaskan",
        },
        {
          type: "list",
          items: [
            "Ruang lingkup pekerjaan dan standar deliverables.",
            "Skema pembayaran, denda keterlambatan, dan pajak terkait.",
            "Pembatasan tanggung jawab serta mekanisme ganti rugi.",
            "Ketentuan kerahasiaan dan perlindungan data.",
            "Mekanisme penyelesaian sengketa dan pilihan hukum.",
          ],
        },
        {
          type: "paragraph",
          text: "Selain mencantumkan klausul utama, penting juga memastikan konsistensi istilah antar pasal. Inkonsistensi kecil bisa menimbulkan interpretasi berbeda yang berujung sengketa.",
        },
        {
          type: "quote",
          text: "Kontrak yang kuat bukan yang paling panjang, tetapi yang paling jelas, seimbang, dan dapat dijalankan.",
        },
      ],
  tags: ["Kontrak", "Drafting", "Bisnis", "Sengketa"],
};
