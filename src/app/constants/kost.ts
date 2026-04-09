import {
  Wifi,
  Wind,
  MapPin,
  ShieldCheck,
  Waves,
  Coffee,
} from "lucide-react";
import type { Article } from "@/shared/components/article-cards";

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
    id: "kost-a",
    name: "Kost Michael - Sudirman",
    tagline: "Premium living di jantung bisnis Jakarta",
    address: "Jl. Jend. Sudirman No. 12, Jakarta Pusat",
    price: "Mulai Rp 3.500.000 / bulan",
    description:
      "Kost premium 4 lantai dengan 30 kamar eksklusif, dirancang untuk profesional muda dan eksekutif. Berlokasi tepat di kawasan bisnis Sudirman, hanya 5 menit berjalan kaki ke halte Transjakarta.",
    features: [
      "30 unit kamar",
      "Parkir motor & mobil",
      "CCTV 24 jam",
      "Resepsionis pagi",
      "Laundry room",
      "Rooftop garden",
    ],
    roomTypes: [
      { type: "Kamar Standar", size: "3x4 m", price: "Rp 3.500.000" },
      { type: "Kamar Deluxe", size: "4x4 m", price: "Rp 4.500.000" },
      { type: "Kamar Suite", size: "5x5 m", price: "Rp 6.000.000" },
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81532607507515!3d-6.201900993790556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
    waMsg: "Halo, saya ingin tanya tentang kamar di Kost Michael Sudirman",
  },
  {
    id: "kost-b",
    name: "Kost Michael - Kelapa Gading",
    tagline: "Hunian nyaman di kawasan perumahan elite",
    address: "Jl. Boulevard Raya, Kelapa Gading, Jakarta Utara",
    price: "Mulai Rp 2.800.000 / bulan",
    description:
      "Kost nyaman 3 lantai dengan 24 kamar di kawasan residensial Kelapa Gading yang tenang. Dekat dengan mal, restoran, dan akses tol, cocok untuk keluarga kecil dan pasangan.",
    features: [
      "24 unit kamar",
      "Area parkir luas",
      "Taman belakang",
      "Ruang belajar",
      "Mini market terdekat 100m",
      "Keamanan 24 jam",
    ],
    roomTypes: [
      { type: "Kamar Standar", size: "3x4 m", price: "Rp 2.800.000" },
      { type: "Kamar Deluxe", size: "4x4 m", price: "Rp 3.800.000" },
      { type: "Kamar Keluarga", size: "5x6 m", price: "Rp 5.200.000" },
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1!2d106.9!3d-6.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e9a9a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sKelapa%20Gading%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
    waMsg: "Halo, saya ingin tanya tentang kamar di Kost Michael Kelapa Gading",
  },
];

export const kostTestimonials = [
  {
    name: "Rini Agustina",
    role: "Penghuni Sudirman - 8 bulan",
    text: "Kost paling nyaman yang pernah saya tinggali. Kamarnya bersih, keamanannya baik, dan lokasinya sangat strategis untuk kerja.",
  },
  {
    name: "David Kurniawan",
    role: "Penghuni Kelapa Gading - 1 tahun",
    text: "Harga sangat sebanding dengan fasilitas yang diberikan. Pengelolanya responsif dan peduli dengan kenyamanan penghuni.",
  },
  {
    name: "Sinta Maharani",
    role: "Penghuni Sudirman - 6 bulan",
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
