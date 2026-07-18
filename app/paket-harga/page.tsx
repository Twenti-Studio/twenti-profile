import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Paket & Harga Pembuatan Website dan Aplikasi | Twenti Studio",
  description:
    "Estimasi biaya pembuatan website, web application, MVP, dan sistem bisnis oleh Twenti Studio. Harga mulai Rp3.500.000 dengan ruang lingkup yang jelas.",
  alternates: { canonical: "/paket-harga" },
  openGraph: {
    title: "Paket & Harga Pembuatan Website dan Aplikasi | Twenti Studio",
    description:
      "Estimasi biaya pembuatan website, web application, MVP, dan sistem bisnis oleh Twenti Studio. Harga mulai Rp3.500.000 dengan ruang lingkup yang jelas.",
    url: "/paket-harga",
    type: "website",
  },
};

export default function PaketHargaPage() {
  return <PricingClient />;
}
