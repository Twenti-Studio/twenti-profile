import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title:
    "Tentang Twenti Studio | App Studio di Bawah PT Twenti Studio Nusantara",
  description:
    "Twenti Studio adalah app studio yang membangun produk digital sendiri sekaligus menerima pengembangan sistem untuk klien. Beroperasi di bawah PT Twenti Studio Nusantara.",
  alternates: { canonical: "/tentang" },
  openGraph: {
    title:
      "Tentang Twenti Studio | App Studio di Bawah PT Twenti Studio Nusantara",
    description:
      "Twenti Studio adalah app studio yang membangun produk digital sendiri sekaligus menerima pengembangan sistem untuk klien. Beroperasi di bawah PT Twenti Studio Nusantara.",
    url: "/tentang",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
