import type { Testimonial } from "@/shared/types/testimonial";

export interface WartegMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  isSpecialToday?: boolean;
}

export const wartegHero = {
  title: "Warteg Modern",
  subtitle:
    "Masakan lokal autentik dengan bahan premium, dapur higienis, dan rasa yang selalu konsisten.",
  imageSrc:
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=2000",
};

export const wartegOperatingHours = {
  openHour: 0,
  closeHour: 24,
  label: "Buka 24 Jam",
};

export const wartegMenuItems: WartegMenuItem[] = [];

export const wartegTestimonials: Testimonial[] = [
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
    name: "Hindi Wang",
    comment:
      "Mantap Makanannya 👍🏻👍🏻👍🏻",
    rating: 5,
    avatarInitials: "HW",
    time: "2 bulan lalu",
  },
  {
    id: "10",
    name: "Resha nanda",
    comment:
      "nyaman dan makanan nya enak",
    rating: 5,
    avatarInitials: "RN",
    time: "1 bulan lalu",
  },
  {
    id: "11",
    name: "Jihan Saya",
    comment:
      "Wartegnya makanannya enak enak dan kosnya nyamann 👍👍",
    rating: 5,
    avatarInitials: "JS",
    time: "2 bulan lalu",
  },
  {
    id: "12",
    name: "Paulustaufangunawan setio",
    comment:
      "Makanan selera nusantara , buka 24 jam , harga terjangkau. 👍😁",
    rating: 5,
    avatarInitials: "PS",
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
    name: "AO. tAniA",
    comment:
      "Mantap euy 👍 cabenya sukaa, dpt byk lg, pas pedesnya di saya ya; cumi asin baladonya udah pasti bakal beli lg sihh ❤ tengkyuuu …",
    rating: 5,
    avatarInitials: "AT",
    time: "2 bulan lalu",
  },
  {
    id: "15",
    name: "Peri Budiman",
    comment:
      "Mantap enak sekali , pelayan ramah ramah sekali , warteg nya bagus bersih nyaman untuk makan di tempat",
    rating: 5,
    avatarInitials: "PB",
    time: "2 bulan lalu",
  },


];
