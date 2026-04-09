import type { Metadata } from "next";
import { LawFirmClientPage } from "./law-firm-client";

export const metadata: Metadata = {
  title: "Law Firm | Michael Huang",
  description:
    "Protecting your interests with uncompromising excellence and strategic precision.",
};

export default function LawFirmPage() {
  return <LawFirmClientPage />;
}
