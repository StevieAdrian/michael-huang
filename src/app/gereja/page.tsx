import type { Metadata } from "next";
import { ChurchClientPage } from "./church-client";

export const metadata: Metadata = {
  title: "Gereja | Michael Huang",
  description:
    "Komunitas iman yang penuh kasih, harapan, dan sukacita dengan jadwal ibadah serta kegiatan mingguan.",
};

export default function ChurchPage() {
  return <ChurchClientPage />;
}
