import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portofolio Klien | Twenti Studio",
  description:
    "Proyek dan sistem yang dibangun Twenti Studio untuk bisnis dan organisasi, mulai dari sistem operasional instansi hingga platform logistik B2B.",
  alternates: { canonical: "/portofolio" },
  openGraph: {
    title: "Portofolio Klien | Twenti Studio",
    description:
      "Proyek dan sistem yang dibangun Twenti Studio untuk bisnis dan organisasi, mulai dari sistem operasional instansi hingga platform logistik B2B.",
    url: "/portofolio",
    type: "website",
  },
};

export default function PortofolioPage() {
  return <PortfolioClient />;
}
