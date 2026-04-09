import type { Metadata } from "next";
import { WartegClientPage } from "./warteg-client";

export const metadata: Metadata = {
  title: "Warteg | Michael Huang",
  description:
    "Warteg modern dengan menu harian autentik, kualitas premium, dan layanan catering untuk personal maupun korporat.",
};

export default function WartegPage() {
  return <WartegClientPage />;
}
