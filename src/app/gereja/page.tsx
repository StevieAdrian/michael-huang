import type { Metadata } from "next";
import { ChurchClientPage } from "./church-client";
import { fetchLiveTitheData } from "@/app/utils/fetchTithe";

export const metadata: Metadata = {
  title: "Gereja | Michael Huang",
  description:
    "Komunitas iman yang penuh kasih, harapan, dan sukacita dengan jadwal ibadah serta kegiatan mingguan.",
};

export default async function ChurchPage() {
  const initialTitheData = await fetchLiveTitheData();
  return <ChurchClientPage initialTitheData={initialTitheData} />;
}
