import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "14",
  title: "Menulis Judul dan Deskripsi Episode Podcast yang Mudah Ditemukan",
  excerpt: "Judul yang jelas membantu calon pendengar memahami manfaat episode. Pelajari cara menyusun judul, deskripsi, dan kata kunci tanpa membuatnya terasa seperti clickbait.",
  date: "14 November 2026",
  category: "Pemasaran",
  slug: "judul-deskripsi-episode-podcast",
  readTime: "6 menit",
  subtitle: "Judul dan deskripsi yang informatif membuat episode lebih mudah dipahami, dicari, dan dipilih oleh pendengar yang tepat.",
  author: {
        name: "Tim Podcast Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Podcast Producer",
      },
  content: [
        {
          type: "paragraph",
          text: "Sebelum menekan tombol play, calon pendengar biasanya melihat judul dan deskripsi episode. Keduanya perlu menjelaskan topik serta alasan episode itu layak didengar, tanpa menjanjikan sesuatu yang tidak dibahas.",
        },
        {
          type: "heading",
          text: "Mulai dari Pertanyaan Pendengar",
        },
        {
          type: "paragraph",
          text: "Tentukan satu kebutuhan atau pertanyaan utama yang dijawab episode. Tempatkan topik penting di bagian awal judul, gunakan kata-kata yang biasa dipakai audiens, dan hindari istilah internal yang hanya dipahami tim produksi.",
        },
        {
          type: "list",
          items: [
            "Buat judul spesifik dan mudah dibaca di layar ponsel.",
            "Sebutkan nama tamu jika relevan dengan daya tarik episode.",
            "Hindari judul sensasional yang tidak sesuai isi percakapan.",
            "Gunakan pola judul yang konsisten agar identitas acara mudah dikenali.",
          ],
        },
        {
          type: "heading",
          text: "Tulis Deskripsi yang Berguna",
        },
        {
          type: "paragraph",
          text: "Dalam beberapa kalimat, ringkas pokok pembahasan, sebutkan narasumber, dan jelaskan hal yang akan dibawa pulang pendengar. Tambahkan tautan atau catatan pendukung bila diperlukan, lalu periksa kembali nama dan informasi sebelum episode diterbitkan.",
        },
        {
          type: "quote",
          text: "Metadata yang baik membantu pendengar menemukan isi yang tepat dan membantu kreator menyampaikan janji episode dengan jujur.",
        },
        {
          type: "paragraph",
          text: "Sesudah rilis, amati episode mana yang paling banyak ditemukan dan diselesaikan. Gunakan pola yang berhasil sebagai bahan belajar, bukan alasan untuk mengulang judul yang sama. Tim produksi kami dapat membantu merancang kemasan konten yang sesuai karakter podcast Anda.",
        },
      ],
  tags: ["Podcast", "Judul Episode", "Deskripsi", "Pemasaran Konten"],
};
