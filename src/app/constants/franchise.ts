import { Store, TrendingUp, Users, ShieldCheck, MapPin, Phone, Mail, Clock } from "lucide-react";
import { WHATSAPP_PHONE, EMAIL_ADDRESS, LOCATION_ADDRESS } from "@/app/constants/links";

export const franchiseHero = {
  title: "Peluang Franchise Bisnis",
  subtitle:
    "Ekspansi portofolio bisnis Anda melalui kemitraan franchise unggulan kami dengan Return on Investment (ROI) yang terukur dan sistem operasional yang teruji.",
  align: "left" as const,
};

export const franchiseServices = [
  {
    icon: Store,
    title: "Franchise Warteg Gemini",
    desc: "Modernisasi citarasa lokal. Bisnis kuliner warteg dengan standar kebersihan, bahan premium, dan SOP yang mudah dijalankan.",
  },
  {
    icon: TrendingUp,
    title: "Potensi Skalabilitas",
    desc: "Kami terus mengembangkan model bisnis potensial lainnya di masa depan. Mari berkembang bersama ekosistem kami.",
  },
  {
    icon: Users,
    title: "Support Kemitraan",
    desc: "Pendampingan dari hari pertama. Mulai dari pencarian lokasi, training karyawan, hingga dukungan marketing pusat.",
  },
  {
    icon: ShieldCheck,
    title: "Sistem Teruji",
    desc: "Menggunakan POS modern, manajemen inventaris terintegrasi, dan quality control yang disempurnakan.",
  },
];

export const franchiseFaqs = [
  {
    q: "Berapa modal awal untuk Franchise Warteg Gemini?",
    a: "Modal bervariasi bergantung pada ukuran lokasi dan kondisi bangunan awal. Silakan hubungi tim kemitraan kami untuk mendapatkan penawaran proposal lengkap.",
  },
  {
    q: "Apakah lokasi usaha akan dicarikan atau harus mencari sendiri?",
    a: "Mitra bebas mengajukan lokasi, namun tim ekspansi kami harus menyetujui lokasinya berdasarkan analisis traffic dan potensi pasar. Kami juga memiliki daftar rekomendasi lokasi.",
  },
  {
    q: "Apakah biaya franchise fee bersifat sekali seumur hidup?",
    a: "Franchise fee umumnya berlaku untuk periode kontrak tertentu (e.g., 3-5 tahun), setelah itu bisa diperpanjang dengan ketentuan yang disepakati.",
  },
];

export const franchiseContacts = [
  { icon: Phone, text: `+${WHATSAPP_PHONE}` },
  { icon: Mail, text: EMAIL_ADDRESS },
  { icon: MapPin, text: LOCATION_ADDRESS },
  { icon: Clock, text: "Senin-Jumat, 08:00-17:00 WIB" },
];

export const franchiseReviews = [
  {
    stars: 5,
    text: "Konsep Warteg Gemini sangat brilian. Bersih, nyaman, dan return on investment jauh lebih cepat dari ekspektasi saya.",
    author: "Budi Santoso, Investor",
  },
  {
    stars: 5,
    text: "Sistem dari manajemen pusat membuat operasional sehari-hari sangat ringan. Saya hampir tidak perlu berada di outlet setiap hari.",
    author: "Grace L., Mitra Franchise",
  },
];

export const franchiseGalleryImages = [
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
    title: "Desain Interior Warteg Gemini Premium",
  },
  {
    url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    title: "Kualitas Bahan dan Kebersihan Makanan",
  },
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
    title: "Kunjungan & Training Tim Kemitraan",
  },
  {
    url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1200",
    title: "Sistem Layanan Mandiri Terpadu Kasir",
  },
];
