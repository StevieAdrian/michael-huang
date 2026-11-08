import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "2",
  title: "5 Fasilitas Wajib di Kost Premium Modern",
  excerpt: "Kost premium bukan hanya soal harga - ini tentang kualitas hidup. Pastikan kost pilihan Anda memiliki 5 fasilitas penting ini.",
  date: "15 Mei 2026",
  category: "Panduan",
  slug: "fasilitas-wajib-kost-premium",
  readTime: "5 menit",
  subtitle: "Standar kost premium terus berkembang. Penghuni kini mencari hunian yang bukan hanya nyaman, tapi juga mendukung produktivitas dan keamanan sehari-hari.",
  author: {
        name: "Tim Operasional Kost",
        role: "Resident Experience",
      },
  content: [
        {
          type: "paragraph",
          text: "Harga tinggi tidak selalu berarti kualitas tinggi. Pastikan kost premium pilihan Anda benar-benar menyediakan fasilitas yang relevan dengan kebutuhan modern.",
        },
        {
          type: "heading",
          text: "Lima Fasilitas Penting",
        },
        {
          type: "list",
          items: [
            "Internet stabil dengan kecepatan memadai untuk kerja dan belajar.",
            "Keamanan 24 jam dan akses masuk yang terkontrol.",
            "Kamar ber-AC dengan sirkulasi udara baik.",
            "Area komunal yang bersih dan terawat.",
            "Lokasi strategis dekat kebutuhan harian.",
          ],
        },
        {
          type: "paragraph",
          text: "Jika semua fasilitas ini tersedia dan dikelola dengan baik, penghuni biasanya merasakan kualitas hidup yang jauh lebih baik serta biaya tak terduga yang lebih minim.",
        },
      ],
  tags: ["Kost Premium", "Fasilitas", "Hunian Modern", "Jakarta"],
};
