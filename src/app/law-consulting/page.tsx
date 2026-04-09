import type { Metadata } from "next";
import { LawConsultingClientPage } from "./law-consulting-client";

export const metadata: Metadata = {
  title: "Konsultasi Hukum | Michael Huang",
  description:
    "Advisory hukum strategis untuk melindungi, menstrukturisasi, dan mengakselerasi pertumbuhan bisnis Anda.",
};

export default function LawConsultingPage() {
  return <LawConsultingClientPage />;
}
