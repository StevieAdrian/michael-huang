import { Landmark, Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Article } from "@/shared/components/article-cards";

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

export const ppatArticles: Article[] = [
  {
    id: "1",
    title: "Cara Balik Nama Sertifikat Tanah Setelah Jual Beli",
    excerpt:
      "Balik nama sertifikat adalah langkah wajib setelah transaksi jual beli tanah. Pelajari prosedur lengkapnya bersama PPAT kami.",
    date: "15 Maret 2025",
    category: "Panduan",
    slug: "cara-balik-nama-sertifikat-tanah",
  },
  {
    id: "2",
    title: "Dokumen yang Diperlukan untuk AJB di PPAT",
    excerpt:
      "Sebelum datang ke PPAT, pastikan seluruh dokumen Anda sudah lengkap. Berikut daftar lengkap yang harus dipersiapkan.",
    date: "28 Feb 2025",
    category: "Tips",
    slug: "dokumen-ajb-ppat",
  },
  {
    id: "3",
    title: "Apa Itu Hak Tanggungan dan Bagaimana Cara Kerjanya?",
    excerpt:
      "Hak tanggungan adalah jaminan atas tanah yang sering digunakan dalam kredit bank. Pahami hak dan kewajiban Anda sebagai debitur.",
    date: "10 Jan 2025",
    category: "Edukasi",
    slug: "hak-tanggungan-pengertian",
  },
];

export const ppatContacts = [
  { icon: Phone, text: "+62 812 3456 7890" },
  { icon: Mail, text: "ppat@michael.com" },
  { icon: MapPin, text: "Jl. Jend. Sudirman No. 1, Jakarta Pusat" },
  { icon: Clock, text: "Senin-Jumat, 08:00-17:00 WIB" },
];

export const ppatMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81532607507515!3d-6.201900993790556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid";
