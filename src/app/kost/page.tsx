import type { Metadata } from "next";
import { KostClientPage } from "./kost-client";

export const metadata: Metadata = {
  title: "Kost | Michael Huang",
  description:
    "Dua lokasi kost premium di Jakarta dengan kamar modern, fasilitas lengkap, dan lingkungan aman serta nyaman.",
};

export default function KostPage() {
  return <KostClientPage />;
}
