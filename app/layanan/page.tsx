import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Layanan Pembuatan Website, Aplikasi & Sistem Bisnis | Twenti Studio",
  description:
    "Twenti Studio membantu bisnis dan organisasi membangun website, aplikasi, MVP, dan sistem internal yang disesuaikan dengan kebutuhan operasional.",
  alternates: { canonical: "/layanan" },
  openGraph: {
    title:
      "Layanan Pembuatan Website, Aplikasi & Sistem Bisnis | Twenti Studio",
    description:
      "Twenti Studio membantu bisnis dan organisasi membangun website, aplikasi, MVP, dan sistem internal yang disesuaikan dengan kebutuhan operasional.",
    url: "/layanan",
    type: "website",
  },
};

export default function LayananPage() {
  return <ServicesClient />;
}
