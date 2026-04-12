import {
  Scale,
  Home as HomeIcon,
  Coffee,
  Heart,
  FileText,
  Landmark,
  BookOpen,
  Mic2,
  Mic,
} from "lucide-react";

export const services = [
  {
    title: "Law Firm",
    description:
      "Konsultasi hukum korporat, litigasi, dan pendampingan hukum strategis untuk individu dan perusahaan.",
    icon: Scale,
    href: "/law-firm",
    color: "from-blue-900/50 to-slate-900/50",
    border: "group-hover:border-blue-500/50",
    tag: "Hukum",
  },
  {
    title: "Notaris",
    description:
      "Pembuatan akta autentik, legalisasi dokumen, dan layanan notarisasi resmi berstandar hukum Indonesia.",
    icon: FileText,
    href: "/notaris",
    color: "from-indigo-900/50 to-slate-900/50",
    tag: "Hukum",
    border: "group-hover:border-indigo-500/50",
  },
  {
    title: "PPAT",
    description:
      "Akta jual beli tanah, balik nama sertifikat, hibah, dan seluruh transaksi hak atas tanah resmi.",
    icon: Landmark,
    href: "/ppat",
    color: "from-violet-900/50 to-slate-900/50",
    border: "group-hover:border-violet-500/50",
    tag: "Hukum",
  },
  {
    title: "Konsultasi Hukum",
    description:
      "Advisory hukum bisnis, legal due diligence, penyusunan kontrak, dan kepatuhan regulasi korporat.",
    icon: BookOpen,
    href: "/law-consulting",
    color: "from-purple-900/50 to-slate-900/50",
    border: "group-hover:border-purple-500/50",
    tag: "Hukum",
  },
  {
    title: "Kost Premium",
    description:
      "Dua lokasi hunian premium di Jakarta — kamar modern, fasilitas lengkap, lingkungan aman dan nyaman.",
    icon: HomeIcon,
    href: "/kost",
    color: "from-orange-900/50 to-slate-900/50",
    border: "group-hover:border-orange-500/50",
    tag: "Properti",
  },
  {
    title: "Warteg",
    description:
      "Masakan lokal autentik yang diangkat dengan bahan premium dan presentasi modern. Catering tersedia.",
    icon: Coffee,
    href: "/warteg",
    color: "from-red-900/50 to-slate-900/50",
    border: "group-hover:border-red-500/50",
    tag: "Kuliner",
  },
  {
    title: "Gereja",
    description:
      "Komunitas iman yang penuh kasih. Jadwal ibadah, kegiatan, dan persembahan online tersedia.",
    icon: Heart,
    href: "/gereja",
    color: "from-rose-900/50 to-slate-900/50",
    border: "group-hover:border-rose-500/50",
    tag: "Ibadah",
  },
  {
    title: "Music Production",
    description:
      "Studio rekaman profesional, aransemen, mixing & mastering untuk artis, korporat, dan gereja.",
    icon: Mic2,
    href: "/musik",
    color: "from-yellow-900/50 to-slate-900/50",
    border: "group-hover:border-yellow-500/50",
    tag: "Seni",
  },
  {
    title: "Podcast",
    description:
      "Obrolan mendalam tentang iman, bisnis, dan kehidupan. Baru setiap Senin dan Kamis.",
    icon: Mic,
    href: "/podcast",
    color: "from-teal-900/50 to-slate-900/50",
    border: "group-hover:border-teal-500/50",
    tag: "Konten",
  },
];
