export interface WartegMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  isSpecialToday?: boolean;
}

export interface WartegTestimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatarInitials: string;
}

export const wartegHero = {
  title: "Warteg Modern",
  subtitle:
    "Masakan lokal autentik dengan bahan premium, dapur higienis, dan rasa yang selalu konsisten.",
  imageSrc:
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=2000",
};

export const wartegOperatingHours = {
  openHour: 7,
  closeHour: 21,
  label: "07:00 - 21:00 WIB",
};

export const wartegMenuItems: WartegMenuItem[] = [];

export const wartegTestimonials: WartegTestimonial[] = [
  {
    id: "1",
    name: "Andi Pratama",
    role: "Karyawan Swasta",
    comment:
      "Rasa makanannya konsisten enak, tempatnya bersih, dan pelayanan cepat. Jadi langganan tiap makan siang.",
    rating: 5,
    avatarInitials: "AP",
  },
  {
    id: "2",
    name: "Nadia Putri",
    role: "Ibu Rumah Tangga",
    comment:
      "Porsi pas, bumbu berasa, dan pilihan lauknya banyak. Anak-anak saya juga suka banget.",
    rating: 5,
    avatarInitials: "NP",
  },
  {
    id: "3",
    name: "Riko Susanto",
    role: "Entrepreneur",
    comment:
      "Catering kantor selalu tepat waktu dan presentasinya rapi. Cocok untuk meeting maupun acara keluarga.",
    rating: 5,
    avatarInitials: "RS",
  },
];
