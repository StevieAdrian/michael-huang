import { Landmark, Phone, Mail, MapPin, Clock } from "lucide-react";
import { PPAT_MAPS_EMBED_URL, WHATSAPP_PHONE, EMAIL_ADDRESS, LOCATION_ADDRESS } from "@/app/constants/links";

export const ppatHero = {
  title: "PPAT — Pejabat Pembuat Akta Tanah",
  subtitle:
    "Layanan pembuatan akta tanah yang legal, akurat, dan terdaftar resmi di Badan Pertanahan Nasional (BPN).",
  align: "left" as const,
};

export const ppatServices = [
  {
    title: "Akta Jual Beli (AJB) Tanah",
    desc: "Pembuatan akta jual beli hak atas tanah dan bangunan yang sah dan dapat didaftarkan di BPN.",
  },
  {
    title: "Akta Hibah",
    desc: "Pembuatan akta hibah untuk pengalihan hak atas tanah secara cuma-cuma kepada pihak lain.",
  },
  {
    title: "Akta Pembagian Hak Bersama",
    desc: "Pemisahan hak atas tanah bersama menjadi hak perseorangan bagi masing-masing pihak.",
  },
  {
    title: "Hak Tanggungan (HT)",
    desc: "Pembebanan hak tanggungan sebagai jaminan kredit atas tanah dan objek yang terikat.",
  },
  {
    title: "Pemasukan ke Dalam Perusahaan (Inbreng)",
    desc: "Pengalihan tanah sebagai penyertaan modal ke dalam perusahaan dengan akta resmi.",
  },
  {
    title: "AJB Satuan Rumah Susun",
    desc: "Pembuatan akta jual beli untuk unit apartemen atau rumah susun (PPJB & AJB Rusun).",
  },
];

export const ppatProcess = [
  {
    step: "01",
    title: "Konsultasi Awal",
    desc: "Hubungi kami untuk membahas kebutuhan dan kelengkapan dokumen Anda.",
  },
  {
    step: "02",
    title: "Pemeriksaan Sertifikat",
    desc: "Kami memeriksa keaslian dan status hukum sertifikat tanah di BPN.",
  },
  {
    step: "03",
    title: "Penandatanganan Akta",
    desc: "Para pihak hadir untuk penandatanganan akta di hadapan PPAT kami.",
  },
  {
    step: "04",
    title: "Pendaftaran ke BPN",
    desc: "Kami mengurus pendaftaran balik nama sertifikat di Badan Pertanahan Nasional.",
  },
];

export const ppatContacts = [
  { icon: Phone, text: `+${WHATSAPP_PHONE}` },
  { icon: Mail, text: EMAIL_ADDRESS },
  { icon: MapPin, text: LOCATION_ADDRESS },
  { icon: Clock, text: "Senin-Jumat, 08:00-17:00 WIB" },
];

export const ppatMapEmbedUrl = PPAT_MAPS_EMBED_URL;

export const ppatReviews = [
  {
    stars: 5,
    text: "Penyelesaian sertifikat tanah saya sangat lancar. Komunikasi tim PPAT sangat proaktif dan informatif.",
    author: "Bambang J.",
  },
  {
    stars: 5,
    text: "Sangat terbantu dengan jasa pengecekan sertifikatnya. Cepat dan memberikan rasa aman dalam transaksi.",
    author: "Dewi Lestari",
  },
];

export const ppatGalleryImages = [
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    title: "Kantor PPAT Jakarta Michael Huang - Layanan Sertifikat Tanah",
  },
  {
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200",
    title: "Tim Profesional PPAT Jakarta Michael Huang",
  },
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    title: "Konsultasi Hukum Pertanahan & Agraria PPAT",
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1200",
    title: "Legalitas Akta Jual Beli (AJB) Tanah & Bangunan",
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    title: "Suasana Kantor PPAT Michael Huang",
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1200",
    title: "Pengurusan Balik Nama Sertifikat Tanah BPN",
  },
];
