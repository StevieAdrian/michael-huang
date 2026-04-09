import { Briefcase, Scale, Users, FileText, ShieldCheck, Star, Award } from "lucide-react";
import type { TestimonialItem } from "@/shared/components/testimonials";

export const lawFirmHero = {
  title: "Authoritative Legal Counsel",
  subtitle:
    "Protecting your interests with uncompromising excellence and strategic precision.",
  imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000",
  align: "left" as const,
};

export const lawFirmPracticeAreas = [
  {
    title: "Corporate Law",
    icon: Briefcase,
    desc: "Mergers, acquisitions, and comprehensive corporate structuring.",
  },
  {
    title: "Litigation",
    icon: Scale,
    desc: "Aggressive and strategic representation in civil and commercial disputes.",
  },
  {
    title: "Family Law",
    icon: Users,
    desc: "Discreet handling of sensitive family matters and wealth preservation.",
  },
  {
    title: "Property Law",
    icon: FileText,
    desc: "Real estate transactions, development zoning, and property disputes.",
  },
];

export const lawFirmStats = [
  "Over 500+ successful litigations",
  "Top Tier Corporate Counsel 2024",
  "Nationwide Legal Network",
];

export const lawFirmTeam = [
  {
    name: "Michael H., Esq.",
    role: "Managing Partner",
    spec: "Corporate & M&A",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sarah Jenkins",
    role: "Senior Partner",
    spec: "Litigation",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "David Chen",
    role: "Partner",
    spec: "Property Law",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
  },
];

export const lawFirmGalleryImages = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  "https://images.unsplash.com/photo-1553484771-047a44eee27a?w=600&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
];

export const lawFirmArticles = [
  {
    title: "Cara Melindungi Aset Bisnis Anda",
    category: "Corporate",
    excerpt: "Strategi legal untuk melindungi aset perusahaan dari sengketa bisnis.",
  },
  {
    title: "Panduan Hukum Kontrak Kerja 2025",
    category: "Employment",
    excerpt: "Perubahan terbaru dalam regulasi ketenagakerjaan dan dampaknya.",
  },
  {
    title: "5 Hak Anda Saat Menghadapi Sengketa",
    category: "Litigation",
    excerpt: "Pahami hak hukum Anda sebelum memasuki proses pengadilan.",
  },
];

export const lawFirmFAQs = [
  {
    question: "Berapa biaya konsultasi pertama?",
    answer: "Konsultasi pertama kami gratis dan bersifat rahasia.",
  },
  {
    question: "Apakah saya bisa berkonsultasi via WhatsApp?",
    answer: "Ya, kami melayani konsultasi awal via WhatsApp.",
  },
  {
    question: "Berapa lama proses persidangan biasanya berlangsung?",
    answer:
      "Lama proses sangat bergantung pada kompleksitas kasus, namun kami selalu berupaya efisien.",
  },
  {
    question: "Apakah firma menangani kasus di luar Jakarta?",
    answer: "Ya, kami menangani kasus di seluruh wilayah Indonesia dengan jaringan kami.",
  },
  {
    question: "Bagaimana sistem pembayaran jasanya?",
    answer:
      "Kami menawarkan struktur biaya yang fleksibel, baik berbasis jam maupun flat fee.",
  },
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
    author: "Rina P., Business Owner",
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
    role: "Business Owner",
    comment:
      "Kami merasa aman didampingi dari awal hingga akhir. Komunikasinya jelas, cepat, dan sangat profesional.",
    rating: 5,
    avatarInitials: "RP",
  },
  {
    id: "3",
    name: "Andre Wijaya",
    role: "Director",
    comment:
      "Tim ini memahami kebutuhan bisnis sekaligus aspek legal secara mendalam. Sangat direkomendasikan.",
    rating: 5,
    avatarInitials: "AW",
  },
];
