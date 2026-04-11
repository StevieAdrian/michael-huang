import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const kostArticles: Article[] = [
  {
    id: "1",
    title: "Tips Memilih Kost yang Tepat di Jakarta",
    excerpt:
      "Dengan ribuan pilihan kost di Jakarta, memilih yang terbaik bisa membingungkan. Inilah panduan lengkap memilih kost sesuai kebutuhan dan anggaran Anda.",
    date: "3 April 2025",
    category: "Tips",
    slug: "tips-memilih-kost-jakarta",
  },
  {
    id: "2",
    title: "5 Fasilitas Wajib di Kost Premium Modern",
    excerpt:
      "Kost premium bukan hanya soal harga - ini tentang kualitas hidup. Pastikan kost pilihan Anda memiliki 5 fasilitas penting ini.",
    date: "15 Mar 2025",
    category: "Panduan",
    slug: "fasilitas-wajib-kost-premium",
  },
  {
    id: "3",
    title: "Keuntungan Tinggal di Kost Dekat Pusat Bisnis",
    excerpt:
      "Lokasi adalah segalanya. Tinggal dekat pusat bisnis bukan hanya menghemat waktu - tapi juga membuka lebih banyak peluang karir.",
    date: "8 Feb 2025",
    category: "Gaya Hidup",
    slug: "keuntungan-kost-pusat-bisnis",
  },
];

export const kostArticleDetails: Record<string, ArticleDetail> = {
  "tips-memilih-kost-jakarta": {
    slug: "tips-memilih-kost-jakarta",
    category: "Tips",
    readTime: "6 menit",
    date: "3 April 2025",
    title: "Tips Memilih Kost yang Tepat di Jakarta",
    subtitle:
      "Memilih kost yang tepat bukan sekadar soal harga murah. Anda perlu mempertimbangkan lokasi, keamanan, dan kualitas fasilitas agar hidup harian lebih nyaman.",
    author: {
      name: "Tim Hunian Michael Huang",
      role: "Property Advisor",
    },
    content: [
      {
        type: "paragraph",
        text: "Di kota besar seperti Jakarta, keputusan memilih kost berdampak langsung ke produktivitas harian. Kost yang jauh dari aktivitas utama bisa menghabiskan waktu dan energi Anda setiap hari.",
      },
      {
        type: "heading",
        text: "Faktor Utama Saat Memilih Kost",
      },
      {
        type: "list",
        items: [
          "Jarak ke kantor atau kampus utama.",
          "Akses transportasi umum dan fasilitas publik.",
          "Kondisi keamanan lingkungan sekitar.",
          "Kualitas kamar, ventilasi, dan kebersihan area bersama.",
        ],
      },
      {
        type: "paragraph",
        text: "Selain itu, cek juga detail kontrak sejak awal: apakah ada biaya tambahan listrik, aturan jam malam, dan kebijakan tamu. Transparansi aturan akan menghindari konflik di kemudian hari.",
      },
      {
        type: "quote",
        text: "Kost yang baik tidak hanya nyaman ditempati hari ini, tetapi juga mendukung ritme hidup Anda dalam jangka panjang.",
      },
    ],
    tags: ["Kost", "Jakarta", "Hunian", "Tips"],
  },
  "fasilitas-wajib-kost-premium": {
    slug: "fasilitas-wajib-kost-premium",
    category: "Panduan",
    readTime: "5 menit",
    date: "15 Mar 2025",
    title: "5 Fasilitas Wajib di Kost Premium Modern",
    subtitle:
      "Standar kost premium terus berkembang. Penghuni kini mencari hunian yang bukan hanya nyaman, tapi juga mendukung produktivitas dan keamanan sehari-hari.",
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
  },
  "keuntungan-kost-pusat-bisnis": {
    slug: "keuntungan-kost-pusat-bisnis",
    category: "Gaya Hidup",
    readTime: "5 menit",
    date: "8 Feb 2025",
    title: "Keuntungan Tinggal di Kost Dekat Pusat Bisnis",
    subtitle:
      "Tinggal di area strategis memberi lebih dari sekadar kemudahan mobilitas. Anda juga mendapat akses yang lebih baik ke peluang kerja dan jaringan profesional.",
    author: {
      name: "Tim Riset Lokasi",
      role: "Urban Living Analyst",
    },
    content: [
      {
        type: "paragraph",
        text: "Waktu tempuh yang pendek bisa meningkatkan kualitas hidup secara signifikan. Energi yang biasanya habis di jalan dapat dialihkan untuk istirahat, belajar, atau aktivitas produktif lainnya.",
      },
      {
        type: "heading",
        text: "Manfaat Tinggal di Lokasi Strategis",
      },
      {
        type: "list",
        items: [
          "Menghemat waktu dan biaya transportasi harian.",
          "Lebih mudah mengikuti aktivitas profesional setelah jam kerja.",
          "Akses cepat ke fasilitas kesehatan, kuliner, dan layanan publik.",
          "Meningkatkan peluang networking karena dekat pusat aktivitas.",
        ],
      },
      {
        type: "quote",
        text: "Lokasi yang tepat sering kali menjadi investasi gaya hidup terbaik, bahkan sebelum Anda menghitung nilai uangnya.",
      },
      {
        type: "paragraph",
        text: "Jika Anda berencana tinggal minimal 1 tahun, memilih kost di lokasi strategis biasanya memberi dampak positif yang paling terasa dalam jangka panjang.",
      },
    ],
    tags: ["Lokasi", "Pusat Bisnis", "Produktivitas", "Kost"],
  },
};
