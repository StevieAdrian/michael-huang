import type { Metadata } from "next";
import { NotarisClientPage } from "./notaris-client";

export const metadata: Metadata = {
  title: "Notaris | Michael Huang",
  description:
    "Pembuatan akta autentik yang sah, cepat, dan terpercaya. Melayani individu dan korporasi di seluruh Indonesia.",
};

export default function NotarisPage() {
  return <NotarisClientPage />;
}
