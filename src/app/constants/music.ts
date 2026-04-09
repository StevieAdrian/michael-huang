import {
  Mic2,
  Music as MusicIcon,
  Headphones,
  Radio,
} from "lucide-react";
import type { Article } from "@/shared/components/article-cards";
import type { YoutubeVideoItem } from "@/app/constants/youtube";

export const musicHero = {
  title: "Michael Music Production",
  subtitle:
    "Studio produksi musik profesional berstandar internasional. Rekaman, aransemen, mixing, dan mastering untuk karya terbaik Anda.",
  align: "left" as const,
};

export const musicServices = [
  {
    icon: Mic2,
    title: "Rekaman Vokal & Instrumen",
    desc:
      "Studio rekaman profesional berstandar internasional dengan akustik sempurna dan peralatan terkini.",
  },
  {
    icon: MusicIcon,
    title: "Produksi & Aransemen",
    desc:
      "Produksi musik dari nol hingga master, termasuk aransemen, mixing, dan mastering berkualitas tinggi.",
  },
  {
    icon: Headphones,
    title: "Mixing & Mastering",
    desc:
      "Mixing dan mastering oleh sound engineer berpengalaman untuk hasil audio yang siap rilis di semua platform.",
  },
  {
    icon: Radio,
    title: "Jingle & Scoring",
    desc:
      "Pembuatan jingle komersial, background score untuk film, iklan, konten digital, dan media lainnya.",
  },
];

export const musicYoutubeVideos: YoutubeVideoItem[] = [
  {
    title: "Behind The Studio: Sesi Rekaman Eksklusif",
    description:
      "Saksikan proses rekaman di Michael Music Studio. Dari tracking vokal hingga mixing akhir.",
  },
  {
    title: "Original Composition - 'Fajar Kemuliaan'",
    description:
      "Karya original terbaru dari Michael Huang. Aransemen orkestra dan paduan suara kontemporer.",
  },
  {
    title: "Tips Produksi Musik untuk Pemula",
    description:
      "Panduan langkah demi langkah cara memulai produksi musik dari rumah dengan peralatan minimal.",
  },
];

export const musicTestimonials = [
  {
    name: "Indra Lesmana Jr.",
    role: "Penyanyi Solo",
    text:
      "Studio Michael adalah tempat terbaik untuk rekaman. Engineer-nya sangat profesional dan mengerti visi artistik saya.",
  },
  {
    name: "Paduan Suara GKI",
    role: "Choir Group",
    text:
      "Rekaman album rohani kami terasa luar biasa. Akustik ruangannya sempurna untuk suara paduan suara.",
  },
  {
    name: "Brand XYZ Indonesia",
    role: "Klien Korporat",
    text:
      "Jingle yang mereka buat langsung viral di iklan TV kami. Kreativitas dan kecepatan kerja mereka luar biasa.",
  },
];

export const musicArticles: Article[] = [
  {
    id: "1",
    title: "Proses Rekaman Studio: Dari Konsep Hingga Master",
    excerpt:
      "Rekaman profesional bukan hanya soal memasang mikrofon. Pelajari tahapan lengkap produksi musik dari pre-production hingga mastering.",
    date: "12 April 2025",
    category: "Studio",
    slug: "proses-rekaman-studio",
  },
  {
    id: "2",
    title: "Mixing vs Mastering: Apa Bedanya?",
    excerpt:
      "Banyak musisi bingung membedakan mixing dan mastering. Artikel ini menjelaskan peran masing-masing dalam rantai produksi audio.",
    date: "5 Maret 2025",
    category: "Teknis",
    slug: "mixing-vs-mastering",
  },
  {
    id: "3",
    title: "Cara Mendistribusikan Musik ke Spotify dan Apple Music",
    excerpt:
      "Setelah rekaman selesai, langkah berikutnya adalah distribusi digital. Pelajari cara mendaftarkan musik Anda ke platform streaming.",
    date: "20 Feb 2025",
    category: "Distribusi",
    slug: "distribusi-musik-streaming",
  },
];
