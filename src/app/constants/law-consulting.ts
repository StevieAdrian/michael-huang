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
import type { Article } from "@/shared/components/article-cards";

export const lawConsultingHero = {
  title: "Konsultasi Hukum Bisnis",
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

export const lawConsultingArticles: Article[] = [
  {
    id: "1",
    title: "Pentingnya Legal Due Diligence Sebelum Akuisisi Bisnis",
    excerpt:
      "LDD yang komprehensif dapat mengungkap risiko tersembunyi yang berpotensi menggagalkan transaksi Anda. Pelajari apa saja yang diperiksa dalam proses ini.",
    date: "20 Maret 2025",
    category: "M&A",
    slug: "legal-due-diligence-akuisisi",
  },
  {
    id: "2",
    title: "5 Klausul Penting yang Wajib Ada dalam Kontrak Bisnis",
    excerpt:
      "Kontrak yang lemah bisa menjadi sumber sengketa di kemudian hari. Pastikan kontrak Anda memuat klausul-klausul perlindungan berikut ini.",
    date: "1 Mar 2025",
    category: "Kontrak",
    slug: "klausul-penting-kontrak-bisnis",
  },
  {
    id: "3",
    title: "Kepatuhan Hukum untuk Startup: Dari Awal Hingga Skalabilitas",
    excerpt:
      "Banyak startup mengabaikan aspek hukum di fase awal. Artikel ini menjelaskan fondasi legalitas yang perlu dibangun sejak hari pertama.",
    date: "14 Jan 2025",
    category: "Startup",
    slug: "kepatuhan-hukum-startup",
  },
];

export const lawConsultingContacts = [
  { icon: Phone, text: "+62 812 3456 7890" },
  { icon: Mail, text: "legal@michael.com" },
  { icon: MapPin, text: "Jl. Jend. Sudirman No. 1, Jakarta Pusat" },
  { icon: Clock, text: "Senin-Jumat, 08:00-17:00 WIB" },
];

export const lawConsultingMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81532607507515!3d-6.201900993790556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid";
