import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Kontak Twenti Studio | Konsultasi Gratis Proyek Digital",
  description:
    "Hubungi Twenti Studio untuk konsultasi gratis seputar pembuatan website, aplikasi, dan sistem bisnis. Kami merespons dalam 1x24 jam.",
  alternates: { canonical: "/kontak" },
  openGraph: {
    title: "Kontak Twenti Studio | Konsultasi Gratis Proyek Digital",
    description:
      "Hubungi Twenti Studio untuk konsultasi gratis seputar pembuatan website, aplikasi, dan sistem bisnis. Kami merespons dalam 1x24 jam.",
    url: "/kontak",
    type: "website",
  },
};

export default function KontakPage() {
  return <ContactClient />;
}
