import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "3",
  title: "Tips Mendapatkan Tamu Podcast yang Berkualitas",
  excerpt: "Tamu yang tepat dapat menaikkan kualitas percakapan sekaligus memperluas jangkauan episode Anda. Persiapan pendekatan jadi faktor penentu.",
  date: "24 Mei 2026",
  category: "Tips",
  slug: "tips-tamu-podcast-berkualitas",
  readTime: "5 menit",
  subtitle: "Tamu yang relevan dapat meningkatkan kualitas diskusi dan memperluas jangkauan podcast Anda, tetapi pendekatan yang tepat tetap menjadi kunci.",
  author: {
        name: "Tim Host Development",
        role: "Show Researcher",
      },
  content: [
        {
          type: "paragraph",
          text: "Mengundang tamu bukan sekadar mencari nama besar. Tamu yang baik adalah mereka yang relevan dengan audiens, mampu bercerita dengan jelas, dan punya sudut pandang yang memperkaya percakapan.",
        },
        {
          type: "heading",
          text: "Strategi Mendekati Calon Tamu",
        },
        {
          type: "list",
          items: [
            "Jelaskan tema episode dan manfaat bagi audiens secara singkat.",
            "Tunjukkan kenapa calon tamu cocok untuk topik tersebut.",
            "Buat proses booking yang sederhana dan tidak bertele-tele.",
            "Siapkan brief sebelum rekaman agar tamu merasa lebih aman.",
          ],
        },
        {
          type: "quote",
          text: "Tamu yang merasa dihargai sebelum rekaman biasanya memberi percakapan yang jauh lebih terbuka saat rekaman berlangsung.",
        },
        {
          type: "paragraph",
          text: "Setelah episode tayang, jangan berhenti di situ. Bangun relasi lanjutan dengan tamu, karena jaringan yang baik sering menjadi sumber kolaborasi episode-episode terbaik berikutnya.",
        },
      ],
  tags: ["Podcast", "Interview", "Guest", "Host"],
};
