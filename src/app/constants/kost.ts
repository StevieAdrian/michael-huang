import {
  Wifi,
  Wind,
  MapPin,
  ShieldCheck,
  Waves,
  Coffee,
} from "lucide-react";
import {
  KOST_GEMINI_MAPS_EMBED_URL,
  KOST_MERUYA_MAPS_EMBED_URL,
} from "@/app/constants/links";
import type { Testimonial } from "@/shared/types/testimonial";

export const kostHero = {
  title: "Kost Premium",
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

export const kostTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Zahra Amanda",
    comment:
      "",
    rating: 5,
    avatarInitials: "ZA",
    time: "2 bulan lalu",
  },
  {
    id: "2",
    name: "Halifah Irma",
    comment:
      "",
    rating: 5,
    avatarInitials: "HI",
    time: "2 bulan lalu",
  },
  {
    id: "3",
    name: "Khusnul Ashfiya",
    comment:
      "",
    rating: 5,
    avatarInitials: "KA",
    time: "2 bulan lalu",
  },
  {
    id: "4",
    name: "Denny Thamida",
    comment:
      "",
    rating: 5,
    avatarInitials: "DT",
    time: "2 bulan lalu",
  },
  {
    id: "5",
    name: "Benson Fadli",
    comment:
      "",
    rating: 5,
    avatarInitials: "BF",
    time: "1 bulan lalu",
  },
  {
    id: "6",
    name: "IRFAN LIMBONG",
    comment:
      "Warteg dan Apalagi kosnya paling NYAMAN secengkareng",
    rating: 5,
    avatarInitials: "IL",
    time: "1 bulan lalu",
  },
  {
    id: "7",
    name: "Ucok Tasro",
    comment:
      "",
    rating: 5,
    avatarInitials: "UT",
    time: "2 hari lalu",
  },
  {
    id: "8",
    name: "Rian Hidayat",
    comment:
      "mantap",
    rating: 5,
    avatarInitials: "RH",
    time: "2 bulan lalu",
  },
  {
    id: "9",
    name: "Nurmala Sari",
    comment:
      "kos nya bersih",
    rating: 5,
    avatarInitials: "NS",
    time: "3 bulan lalu",
  },
  {
    id: "10",
    name: "Guskar17 02",
    comment:
      "Kosnya nyaman, bersih, semua fasilitas lengkap 👍👍👍",
    rating: 5,
    avatarInitials: "GK",
    time: "3 bulan lalu",
  },
  {
    id: "11",
    name: "Didik Setyawan",
    comment:
      "Tempatnya nyaman & bersih👍🏻",
    rating: 5,
    avatarInitials: "DS",
    time: "2 bulan lalu",
  },
  {
    id: "12",
    name: "Jihan Saya",
    comment:
      "Wartegnya makanannya enak enak dan kosnya nyamann 👍👍",
    rating: 5,
    avatarInitials: "JS",
    time: "2 bulan lalu",
  },
  {
    id: "13",
    name: "Reni Angraini",
    comment:
      "Makanannya enak banget, murah, tempat bersih banget, pelayanannya oke bangettttt💗💗💗💗😍😍😍",
    rating: 5,
    avatarInitials: "RA",
    time: "2 bulan lalu",
  },
  {
    id: "14",
    name: "Siti Azizah Azahra",
    comment:
      "Kosnya enak, nyaman, bersih, wifinya lancar ga lemot, udah ada laundry juga, fasilitas lengkap, makanan wartegnya enak2, kakak kosnya juga baik banget, cepat tanggap, recommend bgttt pokoknya🫶",
    rating: 5,
    avatarInitials: "SA",
    time: "2 bulan lalu",
  },
  {
    id: "15",
    name: "Ferdinand Zendrato",
    comment:
      "Kostnya bersih, fasilitas lengkap (AC & WiFi kencang), dan lokasinya strategis banget. Owner-nya juga ramah. Recommended!",
    rating: 5,
    avatarInitials: "FZ",
    time: "3 bulan lalu",
  },
];

