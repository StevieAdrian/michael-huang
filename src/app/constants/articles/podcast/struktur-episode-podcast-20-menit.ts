import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "6",
  title: "Struktur Episode Podcast 20 Menit yang Bikin Betah Didengar",
  excerpt: "Durasi pendek bisa sangat kuat jika strukturnya tepat. Pelajari format episode 20 menit agar flow pembahasan tetap padat dan engaging.",
  date: "4 Juli 2026",
  category: "Panduan",
  slug: "struktur-episode-podcast-20-menit",
  readTime: "6 menit",
  subtitle: "Pendengar menyukai episode yang jelas arahnya. Struktur yang rapi membantu host menyampaikan ide tanpa berputar-putar.",
  author: {
        name: "Tim Podcast Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Show Producer",
      },
  content: [
        {
          type: "paragraph",
          text: "Durasi 20 menit ideal untuk banyak audiens mobile yang mendengarkan saat perjalanan atau jeda kerja. Tantangannya adalah menjaga fokus topik tetap tajam tanpa kehilangan kedalaman pembahasan.",
        },
        {
          type: "heading",
          text: "Format Praktis 20 Menit",
        },
        {
          type: "list",
          items: [
            "Menit 0-2: Hook pembuka, konteks topik, dan janji nilai episode.",
            "Menit 3-12: Pembahasan inti dalam 2-3 poin utama.",
            "Menit 13-17: Contoh kasus atau pengalaman praktis.",
            "Menit 18-20: Ringkasan, call to action, dan teaser episode berikutnya.",
          ],
        },
        {
          type: "heading",
          text: "Agar Flow Tidak Kaku",
        },
        {
          type: "paragraph",
          text: "Gunakan outline poin, bukan naskah penuh. Teknik ini menjaga spontanitas bicara sambil memastikan Anda tetap on-track terhadap tujuan episode.",
        },
        {
          type: "quote",
          text: "Episode yang terstruktur membuat pendengar merasa waktunya dihargai.",
        },
        {
          type: "paragraph",
          text: "Sebelum publish, dengarkan ulang 1x sebagai audiens baru. Potong bagian repetitif dan sisakan poin yang paling bernilai agar retensi pendengar tetap tinggi sampai akhir episode.",
        },
      ],
  tags: ["Podcast", "Struktur Episode", "Host", "Konten"],
};
