import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "2",
  title: "Mengapa Podcast adalah Medium yang Tepat untuk Bisnis Anda",
  excerpt: "Podcast bukan hanya sarana hiburan. Medium ini efektif untuk membangun otoritas, kedekatan, dan kepercayaan audiens terhadap brand Anda.",
  date: "18 Mei 2026",
  category: "Bisnis",
  slug: "podcast-untuk-bisnis",
  readTime: "6 menit",
  subtitle: "Podcast memberi ruang bagi bisnis untuk membangun kedekatan dan otoritas melalui percakapan yang lebih dalam daripada format konten singkat.",
  author: {
        name: "Tim Strategi Konten",
        role: "Brand Communication",
      },
  content: [
        {
          type: "paragraph",
          text: "Berbeda dari iklan konvensional, podcast memungkinkan brand hadir lewat percakapan yang lebih santai dan bernilai. Audiens tidak merasa dijual, melainkan diajak memahami cara berpikir, pengalaman, dan nilai yang dipegang oleh bisnis Anda.",
        },
        {
          type: "heading",
          text: "Nilai Podcast untuk Brand",
        },
        {
          type: "list",
          items: [
            "Membangun kredibilitas melalui insight yang konsisten.",
            "Memperkuat hubungan dengan audiens lewat format yang intim.",
            "Membuka peluang kolaborasi melalui tamu dan jaringan baru.",
            "Menghasilkan aset konten yang bisa dipotong ke berbagai platform.",
          ],
        },
        {
          type: "paragraph",
          text: "Podcast juga sangat fleksibel. Satu episode dapat diturunkan menjadi klip video, kutipan media sosial, artikel blog, dan newsletter. Artinya, investasi produksi audio bisa memberi dampak jauh lebih luas dibanding satu kanal saja.",
        },
      ],
  tags: ["Podcast", "Bisnis", "Branding", "Marketing"],
};
