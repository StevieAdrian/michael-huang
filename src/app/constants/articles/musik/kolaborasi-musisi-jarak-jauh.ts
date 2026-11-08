import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "11",
  title: "Kolaborasi Musisi di Era Digital: Cara Kerja Bareng Jarak Jauh",
  excerpt: "Internet membuka peluang kolaborasi tanpa batas geografis. Simak alat, platform, dan workflow terbaik untuk mengerjakan proyek musik bersama secara remote.",
  date: "8 September 2026",
  category: "Studio",
  slug: "kolaborasi-musisi-jarak-jauh",
  readTime: "6 menit",
  subtitle: "Kolaborasi musik lintas kota bahkan lintas negara kini lebih mudah dari sebelumnya. Dengan workflow dan alat yang tepat, jarak bukan lagi hambatan kreativitas.",
  author: {
        name: "Tim Produksi Michael Musik Production",
        role: "Audio Engineer",
      },
  content: [
        {
          type: "paragraph",
          text: "Pandemi mengajarkan industri musik bahwa kolaborasi tidak harus terjadi dalam satu ruangan. Kini, musisi dari Jakarta dan produser dari Bandung, atau bahkan dari dua negara berbeda, bisa mengerjakan satu proyek secara real-time dengan kualitas yang tidak kalah dari sesi studio langsung.",
        },
        {
          type: "heading",
          text: "Platform dan Alat Kolaborasi Remote Terbaik",
        },
        {
          type: "list",
          items: [
            "Splice: platform berbagi stem dan file proyek DAW secara cloud, mendukung banyak format populer.",
            "Bandlab: DAW berbasis browser gratis dengan fitur kolaborasi real-time yang cocok untuk pemula.",
            "Audiomovers Listento: streaming audio berkualitas tinggi untuk session real-time dengan latensi minimal.",
            "Dropbox atau Google Drive: untuk berbagi file stem, bounce, dan referensi secara cepat dan terorganisir.",
            "Notion (app musik): untuk kolaborasi pada partitur dan notasi musik secara real-time.",
          ],
        },
        {
          type: "heading",
          text: "Workflow Remote Session yang Efisien",
        },
        {
          type: "list",
          items: [
            "Tentukan DAW utama yang digunakan bersama sejak awal untuk menghindari masalah kompatibilitas.",
            "Buat folder struktur proyek yang konsisten: stems, bounce, reference, mix, master.",
            "Gunakan naming convention yang jelas pada setiap file agar tidak ada kebingungan versi.",
            "Jadwalkan sesi review bersama via video call setiap beberapa iterasi agar arah kreatif tetap selaras.",
          ],
        },
        {
          type: "quote",
          text: "Kolaborasi terbaik bukan yang paling lancar teknisnya, tapi yang paling jelas komunikasi kreatifnya.",
        },
        {
          type: "heading",
          text: "Hal yang Perlu Disepakati di Awal",
        },
        {
          type: "paragraph",
          text: "Sebelum memulai proyek kolaborasi, sepakati pembagian kredit lagu, hak kepemilikan rekaman (master rights), persentase royalti, dan rencana distribusi. Ketidakjelasan di awal sering menjadi sumber konflik setelah lagu sukses. Jika perlu, tuangkan dalam perjanjian tertulis yang ditandatangani kedua belah pihak.",
        },
      ],
  tags: ["Kolaborasi", "Remote", "Studio", "Produksi Musik"],
};
