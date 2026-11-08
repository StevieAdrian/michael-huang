import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "2",
  title: "Mixing vs Mastering: Apa Bedanya?",
  excerpt: "Banyak musisi bingung membedakan mixing dan mastering. Artikel ini menjelaskan peran masing-masing dalam rantai produksi audio.",
  date: "15 Mei 2026",
  category: "Teknis",
  slug: "mixing-vs-mastering",
  readTime: "6 menit",
  subtitle: "Keduanya sering disamakan, padahal fungsi mixing dan mastering berbeda. Memahami perbedaannya membantu musisi mengambil keputusan produksi yang tepat.",
  author: {
        name: "Tim Audio Michael Music",
        role: "Mixing Engineer",
      },
  content: [
        {
          type: "paragraph",
          text: "Mixing bekerja di level multitrack: vokal, drum, bass, gitar, synth, dan elemen lain diolah agar terdengar seimbang. Mastering bekerja di level stereo final untuk memoles hasil akhir dan memastikan kualitas terjaga lintas perangkat.",
        },
        {
          type: "heading",
          text: "Apa yang Terjadi Saat Mixing?",
        },
        {
          type: "list",
          items: [
            "Mengatur level volume antar instrumen.",
            "Membentuk karakter tonal dengan EQ.",
            "Mengontrol dinamika menggunakan kompresor.",
            "Memberi ruang dimensi dengan reverb dan delay.",
          ],
        },
        {
          type: "heading",
          text: "Apa yang Terjadi Saat Mastering?",
        },
        {
          type: "list",
          items: [
            "Menyeimbangkan tonal keseluruhan lagu.",
            "Menjaga loudness agar sesuai standar platform.",
            "Meningkatkan konsistensi antar lagu dalam satu EP/album.",
            "Menyiapkan format final untuk distribusi digital.",
          ],
        },
        {
          type: "paragraph",
          text: "Jika mixing adalah menyusun tiap komponen masakan, mastering adalah plating terakhir sebelum disajikan. Keduanya perlu agar karya terdengar matang dan kompetitif.",
        },
      ],
  tags: ["Audio", "Mixing", "Mastering", "Produksi Musik"],
};
