import {
  Wifi,
  Wind,
  MapPin,
  ShieldCheck,
  Waves,
  Coffee,
} from "lucide-react";
import type { Article } from "@/shared/components/article-cards";
import {
  KOST_GEMINI_MAPS_EMBED_URL,
  KOST_MERUYA_MAPS_EMBED_URL,
} from "@/app/constants/links";

export const kostHero = {
  title: "Kost Premium Michael",
  subtitle:
    "Dua lokasi strategis di Jakarta dengan kamar modern, fasilitas lengkap, dan lingkungan yang aman dan nyaman.",
  imageSrc: "/images/kost-hero.png",
};

export const kostFacilities = [
  { icon: Wind, label: "AC" },
  { icon: Wifi, label: "WiFi Kencang" },
  { icon: Waves, label: "Laundry" },
  { icon: ShieldCheck, label: "Keamanan 24 Jam" },
  { icon: MapPin, label: "Lokasi Strategis" },
  { icon: Coffee, label: "Dapur Bersama" },
];

export const kostPlaces = [
  {
    id: "kost-gemini",
    name: "Warteg & Kos Nyaman Gemini",
    tagline: "Nyaman, strategis, dan hemat dengan fasilitas makan di tempat",
    address: "Jl. Outer Ring Road, Cengkareng, Jakarta Barat",
    price: "Mulai Rp 1.500.000 / bulan",
    description:
      "Kost yang menyatu dengan area Warteg Gemini, memberikan kemudahan makan sehari-hari. Lokasi strategis dekat dengan pusat perbelanjaan dan jalan utama Cengkareng.",
    features: [
      "Dekat jalan utama",
      "Parkir motor",
      "Kamar mandi dalam / luar",
      "Fasilitas makan warteg (opsional)",
      "Laundry terdekat",
      "Keamanan 24 jam",
    ],
    roomTypes: [
      { type: "Kamar Standar", size: "3x3 m", price: "Rp 1.500.000" },
      { type: "Kamar AC", size: "3x4 m", price: "Rp 2.000.000" },
    ],
    mapSrc: KOST_GEMINI_MAPS_EMBED_URL,
    waMsg: "Halo, saya ingin tanya tentang kamar di Kos Nyaman Gemini",
  },
  {
    id: "kost-meruya",
    name: "KoolKost near Mercu Buana University",
    tagline: "Hunian ideal bagi mahasiswa dan karyawan di Meruya",
    address: "KoolKost, dekat Universitas Mercu Buana, Meruya Selatan",
    price: "Mulai Rp 1.800.000 / bulan",
    description:
      "Terletak sangat dekat dengan Universitas Mercu Buana, kost ini sangat cocok untuk mahasiswa maupun karyawan. Menyediakan lingkungan belajar yang tenang namun tetap dekat dengan kuliner lokal.",
    features: [
      "Dekat kampus Mercu Buana",
      "Parkir motor & mobil (terbatas)",
      "Akses 24 jam",
      "WiFi cepat untuk mahasiswa",
      "Mini market terdekat",
      "Ruang komunal",
    ],
    roomTypes: [
      { type: "Kamar Standar", size: "3x3 m", price: "Rp 1.800.000" },
      { type: "Kamar AC + Mandi Dalam", size: "3x4 m", price: "Rp 2.500.000" },
    ],
    mapSrc: KOST_MERUYA_MAPS_EMBED_URL,
    waMsg: "Halo, saya ingin tanya tentang kamar di KoolKost Meruya",
  },
];

export const kostTestimonials = [
  {
    name: "Rini Agustina",
    role: "Penghuni Gemini - 8 bulan",
    text: "Kost paling nyaman yang pernah saya tinggali. Kamarnya bersih, keamanannya baik, dan lokasinya sangat strategis untuk kerja.",
  },
  {
    name: "David Kurniawan",
    role: "Penghuni Meruya - 1 tahun",
    text: "Harga sangat sebanding dengan fasilitas yang diberikan. Pengelolanya responsif dan peduli dengan kenyamanan penghuni.",
  },
  {
    name: "Sinta Maharani",
    role: "Penghuni Gemini - 6 bulan",
    text: "WiFi kencang, kamar luas, AC dingin. Semua yang dibutuhkan tersedia. Tidak mau pindah ke tempat lain!",
  },
];

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
