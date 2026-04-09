import type { Metadata } from "next";
import { PPATClientPage } from "./ppat-client";

export const metadata: Metadata = {
  title: "PPAT | Michael Huang",
  description:
    "Layanan pembuatan akta tanah yang legal, akurat, dan terdaftar resmi di Badan Pertanahan Nasional (BPN).",
};

export default function PPATPage() {
  return <PPATClientPage />;
}
