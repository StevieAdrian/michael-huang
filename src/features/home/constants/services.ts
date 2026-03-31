import {
  Scale,
  TrendingUp,
  Home as HomeIcon,
  Coffee,
  Heart,
} from "lucide-react";

export const services = [
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
    title: "Consulting",
    description:
      "Strategic insights and financial audits driving measurable revenue growth and transformation.",
    icon: TrendingUp,
    href: "/consulting",
    color: "from-emerald-900/50 to-slate-900/50",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Kost Premium",
    description:
      "High-end boarding houses with real-time availability, luxury facilities, and transparent pricing.",
    icon: HomeIcon,
    href: "/kost",
    color: "from-orange-900/50 to-slate-900/50",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Warteg Modern",
    description:
      "Vibrant, appetizing local cuisine elevated with modern presentation and premium catering services.",
    icon: Coffee,
    href: "/warteg",
    color: "from-red-900/50 to-slate-900/50",
    border: "group-hover:border-red-500/50",
  },
  {
    title: "Gereja",
    description:
      "A welcoming community space, service schedules, media archives, and charity initiatives.",
    icon: Heart,
    href: "/gereja",
    color: "from-purple-900/50 to-slate-900/50",
    border: "group-hover:border-purple-500/50",
  },
];
