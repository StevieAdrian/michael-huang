import { YOUTUBE_CHANNEL_URL, CHURCH_MAPS_EMBED_URL } from "./links";

export interface ChurchSchedule {
  name: string;
  time: string;
}

export interface ChurchAnnouncement {
  date: string;
  title: string;
  desc: string;
  link: string;
}

export interface ChurchYoutubeVideo {
  title: string;
  description: string;
  href: string;
}

export interface ChurchDonationAccount {
  bank: string;
  no: string;
  name: string;
}

export interface ChurchDonationItem {
  key: string;
  title: string;
  subtitle: string;
  accounts: ChurchDonationAccount[];
}

export interface ChurchEvent {
  month: string;
  day: string;
  title: string;
  time: string;
  location: string;
}

export interface ChurchContactInfo {
  phone: string;
  email: string;
  address: string;
  mapsEmbedUrl: string;
}

export interface ChurchTestimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatarInitials: string;
}

export interface ChurchArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export const churchSchedules: ChurchSchedule[] = [
  { name: "Ibadah Umum", time: "Minggu 08:00 & 10:00 WIB" },
  { name: "Ibadah Pemuda", time: "Sabtu 17:00 WIB" },
  { name: "Doa Pagi", time: "Senin-Jumat 06:00 WIB" },
  { name: "Sekolah Minggu", time: "Minggu 10:00 WIB" },
];

export const churchAnnouncements: ChurchAnnouncement[] = [
  {
    date: "15 Okt",
    title: "Registrasi Youth Camp 2025",
    desc: "Pendaftaran awal youth camp tahunan kita sudah dibuka. Daftar sekarang dan dapatkan harga spesial!",
    link: "#",
  },
  {
    date: "20 Okt",
    title: "Pelatihan Volunteer Hospitality",
    desc: "Wajib hadir bagi tim hospitality. Pelatihan diadakan pada Sabtu pukul 14.00 WIB.",
    link: "#",
  },
  {
    date: "27 Okt",
    title: "Ibadah Baptisan Air",
    desc: "Rayakan kehidupan baru di dalam Kristus. Pendaftaran baptisan dibuka untuk bulan depan.",
    link: "#",
  },
];

export const churchWeeklyPhotoLabels = [
  "Minggu ke-1",
  "Minggu ke-2",
  "Minggu ke-3",
  "Minggu ke-4",
  "Minggu ke-5",
  "Minggu ke-6",
  "Minggu ke-7",
  "Minggu ke-8",
];

export const churchYoutubeVideos: ChurchYoutubeVideo[] = [
  {
    title: "Khotbah Minggu: Menemukan Tujuan di Tengah Proses",
    description:
      "Pdt. Michael - Ibadah Umum minggu lalu. Pesan penuh kuasa tentang iman di masa sukar.",
    href: YOUTUBE_CHANNEL_URL,
  },
  {
    title: "Ibadah Pujian dan Penyembahan Bersama",
    description:
      "Sesi pujian spesial dari ibadah bulan ini. Suasana yang mengharukan dan penuh semangat.",
    href: YOUTUBE_CHANNEL_URL,
  },
  {
    title: "Malam Doa Syafaat - Kebangunan Rohani 2025",
    description:
      "Rekaman lengkap malam doa bersama seluruh jemaat. Hadir dan rasakan hadirat-Nya.",
    href: YOUTUBE_CHANNEL_URL,
  },
];

export const churchDonationItems: ChurchDonationItem[] = [
  {
    key: "perpuluhan",
    title: "Perpuluhan (Tithe)",
    subtitle: "10% dari penghasilan sebagai bentuk ketaatan iman",
    accounts: [
      { bank: "BCA", no: "1234 5678 90", name: "Glory Ministry Church" },
      { bank: "Mandiri", no: "9876 5432 10", name: "Glory Ministry Church" },
      { bank: "BNI", no: "4567 8901 23", name: "Glory Ministry Church" },
    ],
  },
  {
    key: "persembahan",
    title: "Persembahan Umum",
    subtitle: "Persembahan sukarela untuk mendukung pelayanan gereja",
    accounts: [
      { bank: "BCA", no: "1234 5678 90", name: "Glory Ministry Church" },
      { bank: "BRI", no: "0123 4567 8901", name: "Glory Ministry Church" },
    ],
  },
  {
    key: "misi",
    title: "Dana Misi dan Sosial",
    subtitle: "Mendukung misionaris dan program sosial komunitas",
    accounts: [
      { bank: "BCA", no: "1111 2222 33", name: "Glory Ministry - Dana Misi" },
    ],
  },
];

export const churchUpcomingEvents: ChurchEvent[] = [
  {
    month: "Okt",
    day: "20",
    title: "Pelatihan Volunteer Hospitality",
    time: "14:00 WIB",
    location: "Gedung Utama Glory Ministry",
  },
  {
    month: "Okt",
    day: "27",
    title: "Ibadah Baptisan Air",
    time: "10:00 WIB",
    location: "Aula Ibadah",
  },
  {
    month: "Nov",
    day: "05",
    title: "Retret Spiritual Jemaat",
    time: "08:00 WIB",
    location: "Puncak, Jawa Barat",
  },
];

export const churchContactInfo: ChurchContactInfo = {
  phone: "+62 812 2179 370",
  email: "care@gloryministry.com",
  address: "Jl. Jend. Sudirman No. 1, Jakarta Pusat",
  mapsEmbedUrl: CHURCH_MAPS_EMBED_URL,
};

export const churchTestimonials: ChurchTestimonial[] = [
  {
    id: "1",
    name: "Maria Gunawan",
    role: "Jemaat",
    comment:
      "Saya menemukan komunitas yang hangat dan penuh perhatian di Glory Ministry. Setiap ibadah selalu menguatkan iman saya.",
    rating: 5,
    avatarInitials: "MG",
  },
  {
    id: "2",
    name: "Daniel Hartono",
    role: "Pelayan Musik",
    comment:
      "Bukan cuma tempat ibadah, tapi juga keluarga rohani yang mendorong saya bertumbuh dan melayani dengan sukacita.",
    rating: 5,
    avatarInitials: "DH",
  },
  {
    id: "3",
    name: "Ruth Santoso",
    role: "Koordinator Komsel",
    comment:
      "Pelayanan pastoral dan komunitas di gereja ini sangat nyata. Kami benar-benar diperlengkapi untuk hidup seturut firman.",
    rating: 5,
    avatarInitials: "RS",
  },
];

export const churchArticles: ChurchArticle[] = [
  {
    id: "1",
    title: "Makna Baptisan Air dalam Iman Kristen",
    excerpt:
      "Baptisan bukan sekadar ritual, melainkan pernyataan iman dan identitas baru sebagai pengikut Kristus.",
    date: "5 April 2025",
    category: "Iman",
    slug: "makna-baptisan-air",
  },
  {
    id: "2",
    title: "Pelayanan Sosial: Menjangkau Komunitas Sekitar",
    excerpt:
      "Gereja dipanggil menjadi berkat. Lihat bagaimana jemaat Glory Ministry menjangkau banyak jiwa melalui aksi nyata.",
    date: "20 Mar 2025",
    category: "Pelayanan",
    slug: "pelayanan-sosial-komunitas",
  },
  {
    id: "3",
    title: "Jadwal Retret Spiritual 2025 dan Persiapannya",
    excerpt:
      "Retret adalah waktu untuk berhenti, memulihkan hati, dan mendengar suara Tuhan dengan lebih jelas.",
    date: "10 Feb 2025",
    category: "Kegiatan",
    slug: "jadwal-retret-spiritual-2025",
  },
];
