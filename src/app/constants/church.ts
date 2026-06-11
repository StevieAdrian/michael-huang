export const churchReviews = [
  { id: "1", name: "Elvis Saputra", comment: "", rating: 5, avatarInitials: "ES", time: "2 years ago" },
  { id: "2", name: "Widodo", comment: "", rating: 5, avatarInitials: "W", time: "3 years ago" },
  { id: "3", name: "Hart Rajalahu", comment: "", rating: 5, avatarInitials: "HR", time: "3 years ago" },
  { id: "4", name: "Ribka Kamelia", comment: "", rating: 5, avatarInitials: "RK", time: "3 years ago" },
  { id: "5", name: "Marny Hya", comment: "", rating: 5, avatarInitials: "MH", time: "3 years ago" },
  { id: "6", name: "Agusman Tatubeket", comment: "", rating: 5, avatarInitials: "AT", time: "3 years ago" },
  { id: "7", name: "Argo moneter", comment: "", rating: 5, avatarInitials: "AM", time: "3 years ago" },
  { id: "8", name: "Ga desman", comment: "", rating: 5, avatarInitials: "GD", time: "3 years ago" },
  { id: "9", name: "Mohammad Guntur", comment: "", rating: 5, avatarInitials: "MG", time: "3 years ago" },
  { id: "10", name: "Anatasya Halim", comment: "", rating: 5, avatarInitials: "AH", time: "3 years ago" },
  { id: "11", name: "Junelshia", comment: "", rating: 5, avatarInitials: "J", time: "3 years ago" },
  { id: "12", name: "Nindya", comment: "", rating: 5, avatarInitials: "N", time: "3 years ago" },
  { id: "13", name: "Muhammad Aldie Saputra", comment: "", rating: 5, avatarInitials: "MAS", time: "3 years ago" },
  { id: "14", name: "Vikall Al", comment: "", rating: 5, avatarInitials: "VA", time: "3 years ago" },
  { id: "15", name: "Damai yohanes", comment: "", rating: 5, avatarInitials: "DY", time: "3 years ago" },
  { id: "16", name: "Yestika Waruwu", comment: "", rating: 5, avatarInitials: "YW", time: "3 years ago" },
  { id: "17", name: "Amril B", comment: "", rating: 5, avatarInitials: "AB", time: "3 years ago" },
  { id: "18", name: "Jimmy Mendrofa", comment: "", rating: 5, avatarInitials: "JM", time: "3 years ago" },
  { id: "19", name: "Polinstar Polinstar", comment: "", rating: 5, avatarInitials: "PP", time: "3 years ago" },
  { id: "20", name: "Rietta Star", comment: "", rating: 5, avatarInitials: "RS", time: "7 months ago" },
  { id: "21", name: "Aditya Farhan Syahputra", comment: "", rating: 5, avatarInitials: "AFS", time: "11 months ago" },
  { id: "22", name: "ester Simamora", comment: "", rating: 5, avatarInitials: "ES", time: "a year ago" },
  { id: "23", name: "ahmad audrey", comment: "", rating: 5, avatarInitials: "AA", time: "2 years ago" },
  { id: "24", name: "Brian Hia", comment: "Go", rating: 5, avatarInitials: "BH", time: "3 years ago" },
  { id: "25", name: "Apriaman Buulolo", comment: "Puji Tuhan", rating: 5, avatarInitials: "AB", time: "3 years ago" },
  { id: "26", name: "Jhohan Putra", comment: "Bagus", rating: 5, avatarInitials: "JP", time: "3 years ago" },
  { id: "27", name: "Marchelline Firman", comment: "Awesome church...", rating: 5, avatarInitials: "MF", time: "3 years ago" },
  { id: "28", name: "Nurmala Sari", comment: "pelayanan sangat baik", rating: 5, avatarInitials: "NS", time: "3 months ago" },
  { id: "29", name: "Watirina Zalukhu", comment: "Aku masih punya Tuhan, Tuhan pengharapan aku tetap beriman🙏😇 …", rating: 5, avatarInitials: "WZ", time: "3 years ago" },
  { id: "30", name: "Geby Cristy", comment: "Komunitas yg membangun Iman❤", rating: 5, avatarInitials: "GC", time: "a year ago" },
];
import { YOUTUBE_CHANNEL_URL, CHURCH_MAPS_EMBED_URL, CHURCH_MAPS_URL, CHURCH_WHATSAPP_URL } from "./links";

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
  mapsUrl: string;
}

export interface ChurchTestimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatarInitials: string;
}

export interface ChurchWeeklyPhoto {
  label: string;
  image?: string;
}

export const churchSchedules: ChurchSchedule[] = [
  { name: "Ibadah Pemuda", time: "Sabtu 18:00 WIB" },
  { name: "Ibadah Mingguan", time: "Minggu 10:00 WIB" },
  { name: "Sekolah Minggu", time: "Minggu 10:00 WIB" },
];

export const churchAnnouncements: ChurchAnnouncement[] = [
  {
    date: "15 Okt",
    title: "Registrasi Youth Camp 2026",
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

export const churchWeeklyPhotos: ChurchWeeklyPhoto[] = [
  { label: "Minggu ke-1", image: "/images/weekly-church-pic1.jpg" },
  { label: "Minggu ke-2", image: "/images/weekly-church-pic2.jpeg" },
  { label: "Minggu ke-3", image: "/images/weekly-church-pic3.jpeg" },
  { label: "Minggu ke-4", image: "/images/weekly-church-pic4.jpeg" },
  { label: "Minggu ke-5", image: "/images/weekly-church-pic5.jpeg" },
  { label: "Minggu ke-6", image: "/images/weekly-church-pic6.jpeg" },
  { label: "Minggu ke-7", image: "/images/weekly-church-pic7.jpeg" },
  { label: "Minggu ke-8", image: "/images/weekly-church-pic8.jpeg" },
];

export const churchYoutubeVideos: ChurchYoutubeVideo[] = [
  {
    title: "Ibadah Hari Minggu - Glory Ministry Church",
    description:
      "Tonton rekaman ibadah lengkap kami. Mari bersekutu dan dikuatkan oleh Firman Tuhan.",
    href: "https://www.youtube.com/watch?v=iWonkzOLS7w",
  },
];

export const churchDonationItems: ChurchDonationItem[] = [
  {
    key: "perpuluhan",
    title: "Perpuluhan (Tithe)",
    subtitle: "10% dari penghasilan sebagai bentuk ketaatan iman",
    accounts: [
      { bank: "BTN", no: "12101880000973", name: "Michael" },
      //{ bank: "Mandiri", no: "9876 5432 10", name: "Glory Ministry Church" },
      //{ bank: "BNI", no: "4567 8901 23", name: "Glory Ministry Church" },
    ],
  }
  /*{
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
  },*/
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
  phone: "+62 821 2385 595",
  email: "contact@michaelhuang.id",
  address: "Perum Ruko Mutiara Taman Palem, Jl. Kamal Raya Outer Ring Road Jl. Kamal Raya No.23-25 Blok C8, Cengkareng Tim., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730",
  mapsEmbedUrl: CHURCH_MAPS_EMBED_URL,
  mapsUrl: CHURCH_MAPS_URL,
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

export interface ChurchTitheRow {
  date: string;
  name: string;
  paymentType: string;
  amount: number;
}

export interface ChurchTitheMonth {
  month: string;
  year: number;
  total: number;
  rows: ChurchTitheRow[];
}

export const churchTitheData: ChurchTitheMonth[] = [
  {
    month: "April",
    year: 2026,
    total: 3500000,
    rows: [
      { date: "2026-04-05", name: "Jemaat A", paymentType: "QRIS", amount: 1500000 },
      { date: "2026-04-05", name: "Anonym", paymentType: "Transfer BCA", amount: 1000000 },
      { date: "2026-04-12", name: "Keluarga Budi", paymentType: "Tunai", amount: 1000000 },
    ],
  },
  {
    month: "Maret",
    year: 2026,
    total: 4200000,
    rows: [
      { date: "2026-03-01", name: "Anonym", paymentType: "Transfer BNI", amount: 1200000 },
      { date: "2026-03-08", name: "Jemaat B", paymentType: "QRIS", amount: 2000000 },
      { date: "2026-03-15", name: "Jemaat C", paymentType: "Transfer Mandiri", amount: 1000000 },
    ],
  },
];

export interface ChurchPastor {
  name: string;
  role: string;
  image: string;
  isMain: boolean;
}

export const churchPastors: ChurchPastor[] = [
  {
    name: "Pdt. Dr. Michael H., S.H., S.T., M.Kn., M.Th., P.hD",
    role: "Gembala Sidang",
    image: "/images/pdt-michael.jpg",
    isMain: true,
  },
  {
    name: "Pdm. Calvin L.",
    role: "Pendeta Muda",
    image: "/images/pdm-calvin.png",
    isMain: false,
  },
  {
    name: "Pdm. Marojahan S.",
    role: "Pendeta Muda",
    image: "/images/pdm-marojahan.jpg",
    isMain: false,
  },
  {
    name: "Pdm. Lany S.",
    role: "Pendeta Muda",
    image: "/images/pdm-lany.jpg",
    isMain: false,
  },
  {
    name: "Pdm. Nova P.",
    role: "Pendeta Muda",
    image: "https://i.pravatar.cc/300?img=5",
    isMain: false,
  },
];

export const churchVisionMission = {
  vision: "Menjadi gereja yang memancarkan kemuliaan Tuhan dan membawa pemulihan bagi kota dan bangsa.",
  mission: [
    "Membangun komunitas penyembah yang intim dengan Tuhan.",
    "Melengkapi jemaat dengan kebenaran Firman Tuhan.",
    "Mengembangkan potensi setiap individu untuk melayani sesuai panggilan.",
    "Menjangkau mereka yang terhilang dan membawa mereka kepada Kristus."
  ]
};

export interface ChurchTheme {
  monthId: number; // 1 to 12
  monthName: string;
  themeText: string;
  bibleVerse: string;
  description: string;
  picture: string;
}

export const churchMonthlyThemes: ChurchTheme[] = [
  { monthId: 1, monthName: "Januari", themeText: "Tahun Penuh Pengharapan", bibleVerse: "Yeremia 29:11", description: "Memulai tahun dengan keyakinan penuh akan rencana Tuhan.", picture: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80" },
  { monthId: 2, monthName: "Februari", themeText: "Kasih yang Menyelamatkan", bibleVerse: "Yohanes 3:16", description: "Meresapi kembali kasih agape dalam hidup sehari-hari.", picture: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&q=80" },
  { monthId: 3, monthName: "Maret", themeText: "Kuasa Doa Bersama", bibleVerse: "Matius 18:20", description: "Kesatuan hati dalam doa mendatangkan mujizat.", picture: "https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?w=500&q=80" },
  { monthId: 4, monthName: "April", themeText: "Janji Kebangkitan", bibleVerse: "1 Korintus 15:20", description: "Merayakan Paskah dan kemenangan atas maut.", picture: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=500&q=80" },
  { monthId: 5, monthName: "Mei", themeText: "Keluarga yang Diberkati", bibleVerse: "Yosua 24:15", description: "Membangun fondasi ilahi dalam rumah tangga.", picture: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&q=80" },
  { monthId: 6, monthName: "Juni", themeText: "Buah Roh Harian", bibleVerse: "Galatia 5:22-23", description: "Karakter yang memuliakan Tuhan di tengah dunia.", picture: "/images/theme-juni.png" },
  { monthId: 7, monthName: "Juli", themeText: "Menjadi SaksiNya", bibleVerse: "Kisah Para Rasul 1:8", description: "Berani membagikan kabar baik kepada sesama.", picture: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ae?w=500&q=80" },
  { monthId: 8, monthName: "Agustus", themeText: "Kemerdekaan Sejati", bibleVerse: "Yohanes 8:36", description: "Bebas dari belenggu dosa dan hidup dalam rahmat.", picture: "https://images.unsplash.com/photo-1464817739973-1002fc5fdfc5?w=500&q=80" },
  { monthId: 9, monthName: "September", themeText: "Melayani dengan Segenap Hati", bibleVerse: "Kolose 3:23", description: "Panggilan hidup untuk melayani sebagai bentuk penyembahan.", picture: "https://images.unsplash.com/photo-1593113568858-aab35b542037?w=500&q=80" },
  { monthId: 10, monthName: "Oktober", themeText: "Pemulihan Ekonomi Ilahi", bibleVerse: "Filipi 4:19", description: "Janji pemeliharaan Tuhan dalam hidup secara utuh.", picture: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?w=500&q=80" },
  { monthId: 11, monthName: "November", themeText: "Hati yang Bersyukur", bibleVerse: "1 Tesalonika 5:18", description: "Mengucap syukur dalam segala hal kepada Tuhan.", picture: "https://images.unsplash.com/photo-1506461944888-b80c107bebdd?w=500&q=80" },
  { monthId: 12, monthName: "Desember", themeText: "Terang Telah Datang", bibleVerse: "Yesaya 9:1", description: "Merayakan Natal dan menyongsong tahun yang baru.", picture: "https://images.unsplash.com/photo-1512351735230-a07eb108ca78?w=500&q=80" },
];