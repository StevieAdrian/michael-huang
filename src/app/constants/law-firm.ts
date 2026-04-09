import { Briefcase, Scale, Users, FileText, ShieldCheck, Star, Award, Phone, Mail, MapPin, Clock } from "lucide-react";
import type { TestimonialItem } from "@/shared/components/testimonials";
import { LAW_FIRM_MAPS_EMBED_URL, WHATSAPP_PHONE, EMAIL_ADDRESS, LOCATION_ADDRESS } from "@/app/constants/links";

export const lawFirmHero = {
  title: "Penasihat Hukum",
  subtitle:
    "Melindungi kepentingan Anda dengan keunggulan tanpa kompromi dan presisi strategis.",
  imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000",
  align: "left" as const,
};

export const lawFirmPracticeAreas = [
  {
    title: "Hukum Korporasi",
    icon: Briefcase,
    desc: "Merger, akuisisi, dan penataan struktur perusahaan yang komprehensif.",
  },
  {
    title: "Litigasi & Sengketa",
    icon: Scale,
    desc: "Representasi agresif dan strategis dalam sengketa perdata maupun komersial.",
  },
  {
    title: "Hukum Keluarga",
    icon: Users,
    desc: "Penanganan masalah keluarga yang sensitif dan pelestarian kekayaan dengan diskresi tinggi.",
  },
  {
    title: "Hukum Properti",
    icon: FileText,
    desc: "Transaksi real estat, zonasi pembangunan, dan penyelesaian sengketa properti.",
  },
];

export const lawFirmStats = [
  "Lebih dari 500+ Litigasi Berhasil",
  "Penasihat Korporat Papan Atas 2024",
  "Jaringan Hukum Nasional",
];

export const lawFirmTeam = [
  {
    name: "Michael Antonius, S.H., M.Kn.",
    role: "Managing Partner",
    spec: "Hukum Korporasi & M&A",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sarah Jenkins",
    role: "Senior Partner",
    spec: "Litigasi",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "David Chen",
    role: "Partner",
    spec: "Hukum Properti",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
  },
];

export const lawFirmGalleryImages = [
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    title: "Keadilan & Hukum",
  },
  {
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200",
    title: "Tim Profesional",
  },
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    title: "Konsultasi Strategis",
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1200",
    title: "Kemitraan Terpercaya",
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    title: "Fasilitas Kantor",
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1200",
    title: "Arsip & Legalitas",
  },
];

export const lawFirmArticles = [
  {
    title: "Cara Melindungi Aset Bisnis Anda",
    category: "Korporat",
    excerpt: "Strategi legal untuk melindungi aset perusahaan dari sengketa bisnis.",
  },
  {
    title: "Panduan Hukum Kontrak Kerja 2025",
    category: "Ketenagakerjaan",
    excerpt: "Perubahan terbaru dalam regulasi ketenagakerjaan dan dampaknya.",
  },
  {
    title: "5 Hak Anda Saat Menghadapi Sengketa",
    category: "Litigasi",
    excerpt: "Pahami hak hukum Anda sebelum memasuki proses pengadilan.",
  },
];

export const lawFirmFAQs = [
  {
    question: "Berapa biaya konsultasi pertama?",
    answer: "Konsultasi pertama kami bersifat rahasia dan dapat dijadwalkan melalui tim kami.",
  },
  {
    question: "Apakah saya bisa berkonsultasi via WhatsApp?",
    answer: "Ya, kami melayani konsultasi awal via WhatsApp untuk kenyamanan Anda.",
  },
  {
    question: "Berapa lama proses persidangan biasanya berlangsung?",
    answer:
      "Lama proses sangat bergantung pada kompleksitas kasus, namun kami selalu berupaya mencapai resolusi yang paling efisien.",
  },
  {
    question: "Apakah firma menangani kasus di luar Jakarta?",
    answer: "Ya, kami menangani kasus di seluruh wilayah Indonesia melalui jaringan kemitraan kami.",
  },
  {
    question: "Bagaimana sistem pembayaran jasanya?",
    answer:
      "Kami menawarkan struktur biaya yang fleksibel, baik berbasis proyek (fixed fee) maupun tarif per jam.",
  },
];

export const lawFirmContacts = [
  { icon: Phone, text: `+${WHATSAPP_PHONE}` },
  { icon: Mail, text: EMAIL_ADDRESS },
  { icon: MapPin, text: LOCATION_ADDRESS },
  { icon: Clock, text: "Senin-Jumat, 08:00-17:00 WIB" },
];

export const lawFirmReviews = [
  {
    stars: 5,
    text: "Sangat profesional dan membantu dalam penyelesaian sengketa perusahaan kami dengan hasil yang sangat memuaskan.",
    author: "Budi S., CEO",
  },
  {
    stars: 5,
    text: "Tim legal yang responsif dan memberikan solusi terbaik untuk kasus perdata kami. Highly recommended!",
    author: "Rina P., Pemilik Bisnis",
  },
];

export const lawFirmTestimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "CEO",
    comment:
      "Pendekatan strategis tim Law Firm sangat membantu penyelesaian sengketa perusahaan kami dengan hasil yang optimal.",
    rating: 5,
    avatarInitials: "BS",
  },
  {
    id: "2",
    name: "Rina Pramesti",
    role: "Pemilik Bisnis",
    comment:
      "Kami merasa aman didampingi dari awal hingga akhir. Komunikasinya jelas, cepat, dan sangat profesional.",
    rating: 5,
    avatarInitials: "RP",
  },
  {
    id: "3",
    name: "Andre Wijaya",
    role: "Direktur",
    comment:
      "Tim ini memahami kebutuhan bisnis sekaligus aspek legal secara mendalam. Sangat direkomendasikan.",
    rating: 5,
    avatarInitials: "AW",
  },
];

export const lawFirmMapEmbedUrl = LAW_FIRM_MAPS_EMBED_URL;
