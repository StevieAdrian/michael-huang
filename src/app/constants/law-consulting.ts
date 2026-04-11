import {
  BookOpen,
  FileSearch,
  Briefcase,
  Scale,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { LAW_FIRM_MAPS_EMBED_URL, WHATSAPP_PHONE, EMAIL_ADDRESS, LOCATION_ADDRESS } from "@/app/constants/links";

export const lawConsultingHero = {
  title: "Konsultasi Hukum",
  subtitle:
    "Advisory hukum strategis untuk melindungi, menstrukturisasi, dan mengakselerasi pertumbuhan bisnis Anda.",
  align: "left" as const,
};

export const lawConsultingServices = [
  {
    icon: BookOpen,
    title: "Opini Hukum",
    desc: "Analisis mendalam dan pendapat hukum tertulis atas permasalahan atau transaksi bisnis Anda.",
  },
  {
    icon: FileSearch,
    title: "Legal Due Diligence",
    desc: "Pemeriksaan menyeluruh aspek hukum perusahaan target sebelum akuisisi, investasi, atau merger.",
  },
  {
    icon: Briefcase,
    title: "Penyusunan Kontrak",
    desc: "Drafting dan review kontrak komersial, perjanjian kerja sama, SLA, NDA, dan berbagai perjanjian bisnis.",
  },
  {
    icon: Scale,
    title: "Kepatuhan & Regulasi",
    desc: "Audit kepatuhan hukum perusahaan, penyusunan SOP hukum, dan advisory regulasi industri.",
  },
  {
    icon: Users,
    title: "Hukum Ketenagakerjaan",
    desc: "Advisory hubungan industrial, pembuatan peraturan perusahaan, dan penanganan perselisihan kerja.",
  },
  {
    icon: Globe,
    title: "Transaksi & M&A",
    desc: "Pendampingan hukum dalam transaksi M&A, joint venture, pembiayaan, dan restrukturisasi bisnis.",
  },
];

export const lawConsultingFaqs = [
  {
    q: "Apa perbedaan konsultan hukum dan advokat?",
    a: "Konsultan hukum fokus pada advisory, analisis risiko, dan pembuatan dokumen hukum. Advokat mencakup itu semua ditambah representasi di pengadilan. Konsultan hukum kami dapat merekomendasikan advokat bila perkara masuk ranah litigasi.",
  },
  {
    q: "Berapa lama proses legal due diligence?",
    a: "Tergantung kompleksitas perusahaan target. Untuk UKM biasanya 2-3 minggu, sedangkan korporasi besar bisa 4-8 minggu. Kami menyediakan laporan interim agar proses tidak tertunda.",
  },
  {
    q: "Apakah layanan konsultasi hukum bisa dilakukan online?",
    a: "Ya, kami melayani konsultasi virtual melalui video call, email, dan WhatsApp. Dokumen dapat dikirimkan secara digital dan ditandatangani secara elektronik.",
  },
  {
    q: "Bagaimana menghitung biaya jasa konsultan hukum?",
    a: "Kami menawarkan model retainer bulanan untuk perusahaan, project-based fee untuk transaksi spesifik, dan hourly rate untuk konsultasi ad-hoc. Hubungi kami untuk penawaran yang disesuaikan.",
  },
];

export const lawConsultingContacts = [
  { icon: Phone, text: `+${WHATSAPP_PHONE}` },
  { icon: Mail, text: EMAIL_ADDRESS },
  { icon: MapPin, text: LOCATION_ADDRESS },
  { icon: Clock, text: "Senin-Jumat, 08:00-17:00 WIB" },
];

export const lawConsultingMapEmbedUrl = LAW_FIRM_MAPS_EMBED_URL;

export const lawConsultingReviews = [
  {
    stars: 5,
    text: "Konsultan yang sangat tajam dalam menganalisis risiko bisnis. Laporan due diligence mereka sangat membantu keputusan investasi kami.",
    author: "Irwan S., Direktur Keuangan",
  },
  {
    stars: 5,
    text: "Penyusunan kontrak kerja sama yang sangat detail dan melindungi kepentingan perusahaan kami. Sangat profesional.",
    author: "Mega W., Head of Legal",
  },
];

export const lawConsultingGalleryImages = [
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    title: "Konsultasi Hukum Bisnis Michael Huang Jakarta",
  },
  {
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200",
    title: "Tim Legal Michael Huang - Ahli Konsultan Hukum",
  },
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    title: "Pendampingan Strategis Legal Due Diligence",
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1200",
    title: "Kemitraan Terpercaya Penyusunan Kontrak Bisnis",
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    title: "Kantor Konsultan Hukum Michael Huang Jakarta",
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1200",
    title: "Manajemen Dokumen & Compliance Hukum Perusahaan",
  },
];
