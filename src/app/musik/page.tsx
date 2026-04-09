import type { Metadata } from "next";
import { MusicClientPage } from "./music-client";

export const metadata: Metadata = {
  title: "Musik | Michael Huang",
  description:
    "Studio produksi musik profesional untuk rekaman, aransemen, mixing, mastering, dan distribusi karya terbaik Anda.",
};

export default function MusicPage() {
  return <MusicClientPage />;
}
