import {
  Scale,
  TrendingUp,
  Home as HomeIcon,
  Coffee,
  Heart,
  FileText,
  FileSignature,
  Music,
  Layers,
} from "lucide-react";

export const services = [
  {
    title: "Notaris",
    description:
      "Professional notarial services for documents, contracts, and legal certifications with trusted precision.",
    icon: FileText,
    href: "/notaris",
    color: "from-slate-900/50 to-blue-900/50",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "PPAT",
    description:
      "Land deed and property transfer specialists managing registration, certification, and transaction compliance.",
    icon: FileSignature,
    href: "/ppat",
    color: "from-emerald-900/50 to-slate-900/50",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "MH Consulting",
    description:
      "Business strategy and financial advisory services tailored to help your company grow with confidence.",
    icon: TrendingUp,
    href: "/mh-consulting",
    color: "from-cyan-900/50 to-slate-900/50",
    border: "group-hover:border-cyan-500/50",
  },
  {
    title: "Law Firm",
    description:
      "Authoritative legal counsel, corporate structuring, and litigation with a gold standard approach.",
    icon: Scale,
    href: "/law-firm",
    color: "from-blue-900/50 to-slate-900/50",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Warteg Gemini",
    description:
      "Authentic local dining with a modern twist, serving comfort food for families and business guests.",
    icon: Coffee,
    href: "/warteg-gemini",
    color: "from-red-900/50 to-slate-900/50",
    border: "group-hover:border-red-500/50",
  },
  {
    title: "Kos Nyaman Gemini",
    description:
      "Premium boarding options designed for comfort, safety, and a convenient Jakarta lifestyle.",
    icon: HomeIcon,
    href: "/kos-nyaman-gemini",
    color: "from-orange-900/50 to-slate-900/50",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Glory Ministry Church",
    description:
      "A welcoming community hub for worship, fellowship, and outreach activities in Jakarta Barat.",
    icon: Heart,
    href: "/glory-ministry-church",
    color: "from-purple-900/50 to-slate-900/50",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "MH Music Production",
    description:
      "Creative music production and media services for artists, events, and corporate campaigns.",
    icon: Music,
    href: "/mh-music-production",
    color: "from-fuchsia-900/50 to-slate-900/50",
    border: "group-hover:border-fuchsia-500/50",
  },
  {
    title: "DLL",
    description:
      "Additional business services and support across our ecosystem to meet evolving client needs.",
    icon: Layers,
    href: "/dll",
    color: "from-slate-700/50 to-slate-900/50",
    border: "group-hover:border-slate-500/50",
  },
];
