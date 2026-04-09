import { FileText, Shield, CheckCircle, Clock, Users, Phone, Mail, MapPin } from "lucide-react";
import type { Article } from "@/shared/components/article-cards";

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
  { icon: Phone, text: "+62 812 3456 7890" },
  { icon: Mail, text: "notaris@michael.com" },
  { icon: MapPin, text: "Jl. Jend. Sudirman No. 1, Jakarta Pusat" },
  { icon: Clock, text: "Senin-Jumat, 08:00-17:00 WIB" },
];

export const notarisMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81532607507515!3d-6.201900993790556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid";
