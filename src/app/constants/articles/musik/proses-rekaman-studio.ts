import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "1",
  title: "Proses Rekaman Studio: Dari Konsep Hingga Master",
  excerpt: "Rekaman profesional bukan hanya soal memasang mikrofon. Pelajari tahapan lengkap produksi musik dari pre-production hingga mastering.",
  date: "12 Mei 2026",
  category: "Studio",
  slug: "proses-rekaman-studio",
  readTime: "7 menit",
  subtitle: "Produksi musik yang rapi selalu dimulai dari perencanaan yang jelas. Dari ide lagu sampai file final, setiap tahap punya peran penting.",
  author: {
        name: "Tim Produksi Michael Music",
        role: "Studio Engineer",
      },
  content: [
        {
          type: "paragraph",
          text: "Banyak musisi mengira proses rekaman selesai ketika vokal sudah terekam. Padahal, hasil akhir yang profesional bergantung pada rangkaian kerja yang disiplin: pre-production, tracking, editing, mixing, hingga mastering.",
        },
        {
          type: "heading",
          text: "Tahap 1: Pre-Production",
        },
        {
          type: "list",
          items: [
            "Menyusun aransemen dan menentukan tempo final.",
            "Membuat demo untuk menguji struktur lagu.",
            "Menetapkan referensi sound sesuai genre.",
            "Menyiapkan jadwal take per instrumen agar sesi efisien.",
          ],
        },
        {
          type: "heading",
          text: "Tahap 2: Tracking dan Editing",
        },
        {
          type: "paragraph",
          text: "Di tahap tracking, kualitas performa dan pemilihan mikrofon sangat menentukan karakter audio. Setelah itu, engineer melakukan comping, tuning seperlunya, dan pembersihan noise agar materi siap masuk tahap mixing.",
        },
        {
          type: "quote",
          text: "Rekaman yang baik bukan yang paling keras, tetapi yang paling jujur menangkap emosi lagu.",
        },
        {
          type: "heading",
          text: "Tahap 3: Mixing dan Mastering",
        },
        {
          type: "paragraph",
          text: "Mixing menyeimbangkan semua elemen lagu agar saling menyatu, sementara mastering menyiapkan hasil akhir agar konsisten di berbagai platform seperti Spotify, YouTube, dan Apple Music. Kombinasi keduanya menentukan pengalaman dengar pendengar.",
        },
      ],
  tags: ["Studio", "Recording", "Mixing", "Mastering"],
};
