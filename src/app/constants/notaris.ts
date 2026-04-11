import { FileText, Shield, CheckCircle, Clock, Users, Phone, Mail, MapPin } from "lucide-react";
import type { Article } from "@/shared/components/article-cards";
import { NOTARIS_MAPS_EMBED_URL, WHATSAPP_PHONE, EMAIL_ADDRESS, LOCATION_ADDRESS } from "@/app/constants/links";

export const notarisHero = {
  title: "Jasa Notaris Profesional",
  subtitle:
    "Pembuatan akta autentik yang sah, cepat, dan terpercaya. Melayani individu dan korporasi di seluruh Indonesia.",
  align: "left" as const,
};

export const notarisServices = [
  {
    title: "Akta Jual Beli (AJB)",
    desc: "Pembuatan akta jual beli properti, kendaraan, dan aset lainnya yang sah secara hukum.",
  },
  {
    title: "Akta Pendirian PT & CV",
    desc: "Pendirian badan usaha dengan akta notaris yang diakui dan didaftarkan ke Kemenkumham.",
  },
  {
    title: "Akta Perjanjian",
    desc: "Perjanjian pinjam meminjam, sewa menyewa, kerjasama bisnis, dan perjanjian lainnya.",
  },
  {
    title: "Legalisasi Dokumen",
    desc: "Legalisasi dan pengesahan dokumen untuk keperluan dalam dan luar negeri.",
  },
  {
    title: "Akta Waris & Hibah",
    desc: "Pembuatan surat keterangan waris dan akta hibah untuk pengalihan hak secara resmi.",
  },
  {
    title: "RUPS & Corporate Action",
    desc: "Notarisasi risalah RUPS, perubahan anggaran dasar, dan aksi korporasi perusahaan.",
  },
];

export const notarisWhyUs = [
  {
    icon: Shield,
    label: "Terdaftar & Bersertifikat",
    desc: "Notaris terdaftar resmi di Kemenkumham RI dan Ikatan Notaris Indonesia (INI).",
  },
  {
    icon: Clock,
    label: "Proses Cepat & Tepat",
    desc: "Penyelesaian akta dalam waktu yang efisien tanpa mengorbankan ketelitian.",
  },
  {
    icon: Users,
    label: "Konsultasi Pribadi",
    desc: "Setiap klien mendapatkan perhatian penuh dari notaris berpengalaman kami.",
  },
  {
    icon: CheckCircle,
    label: "Kekuatan Pembuktian",
    desc: "Akta autentik memiliki kekuatan pembuktian sempurna di hadapan hukum.",
  },
];

export const notarisArticles: Article[] = [
  {
    id: "1",
    title: "Apa Itu Akta Autentik dan Mengapa Penting?",
    excerpt:
      "Akta autentik adalah akta yang dibuat oleh atau di hadapan pejabat umum yang berwenang. Kekuatan pembuktiannya sempurna di mata hukum.",
    date: "10 Maret 2025",
    category: "Panduan",
    slug: "apa-itu-akta-autentik",
  },
  {
    id: "2",
    title: "Prosedur Pendirian PT Melalui Notaris",
    excerpt:
      "Mendirikan perseroan terbatas memerlukan akta notaris sebagai dasar legalitas. Pelajari langkah-langkah prosesnya di sini.",
    date: "22 Feb 2025",
    category: "Bisnis",
    slug: "prosedur-pendirian-pt-notaris",
  },
  {
    id: "3",
    title: "Perbedaan Notaris dan PPAT: Mana yang Anda Butuhkan?",
    excerpt:
      "Banyak orang keliru membedakan notaris dan PPAT. Artikel ini menjelaskan perbedaan fungsi dan kewenangannya secara jelas.",
    date: "5 Jan 2025",
    category: "Edukasi",
    slug: "perbedaan-notaris-ppat",
  },
];

export const notarisContacts = [
  { icon: Phone, text: `+${WHATSAPP_PHONE}` },
  { icon: Mail, text: EMAIL_ADDRESS },
  { icon: MapPin, text: LOCATION_ADDRESS },
  { icon: Clock, text: "Senin-Jumat, 08:00-17:00 WIB" },
];

export const notarisMapEmbedUrl = NOTARIS_MAPS_EMBED_URL;

export const notarisReviews = [
  {
    stars: 5,
    text: "Proses pembuatan akta jual beli sangat cepat dan transparan. Staf sangat membantu menjelaskan setiap detailnya.",
    author: "Hendra W.",
  },
  {
    stars: 5,
    text: "Layanan notaris yang sangat profesional. Tempatnya nyaman dan protokol kerjanya sangat rapi.",
    author: "Siska Amelia",
  },
];

export const notarisGalleryImages = [
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    title: "Kantor Notaris Michael Huang - Keadilan & Hukum",
  },
  {
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200",
    title: "Tim Profesional Notaris Jakarta Michael Huang",
  },
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    title: "Konsultasi Strategis Notaris Jakarta Barat",
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1200",
    title: "Kemitraan Terpercaya Layanan Akta Notaris",
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    title: "Fasilitas Kantor Michael Huang Jakarta",
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1200",
    title: "Arsip & Legalitas Dokumen Notaris",
  },
];
