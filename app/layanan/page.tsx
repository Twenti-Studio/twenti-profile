import type { Metadata } from "next";
import {
  buildBreadcrumbJsonLd,
  jsonLdScriptProps,
  SITE_NAME,
  SITE_URL,
} from "../lib/seo";
import ServicesClient from "./ServicesClient";

const TITLE =
  "Layanan Pembuatan Website, Aplikasi & Sistem Bisnis | Twenti Studio";
const DESCRIPTION =
  "Twenti Studio membantu bisnis dan organisasi membangun website, aplikasi, MVP, dan sistem internal yang disesuaikan dengan kebutuhan operasional.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/layanan" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/layanan",
    type: "website",
  },
};

// Daftar layanan dalam bentuk yang bisa dibaca mesin. Ini yang membantu
// Google mengaitkan pencarian seperti "jasa pembuatan aplikasi" dengan
// halaman ini, bukan sekadar mencocokkan kata di badan teks.
const SERVICES = [
  {
    name: "Pembuatan Website",
    description:
      "Company profile, landing page, dan website bisnis yang cepat, rapi di perangkat mobile, dan siap ditemukan mesin pencari.",
  },
  {
    name: "Pengembangan Aplikasi Web",
    description:
      "Web application dengan alur kerja khusus, mulai dari dashboard internal hingga platform yang dipakai pelanggan.",
  },
  {
    name: "Pengembangan Aplikasi Mobile",
    description:
      "Aplikasi mobile untuk kebutuhan produk maupun operasional, dibangun bersama tim yang juga merawat produknya sendiri.",
  },
  {
    name: "Pengembangan MVP",
    description:
      "Membangun versi inti sebuah produk agar ide bisa diuji ke pengguna nyata sebelum dikembangkan penuh.",
  },
  {
    name: "Sistem Bisnis & Integrasi",
    description:
      "Sistem internal serta integrasi dengan ERP, CRM, payment gateway, dan API pihak ketiga.",
  },
  {
    name: "UI/UX Design",
    description:
      "Perancangan antarmuka dan alur pemakaian, dari riset kebutuhan sampai desain siap dibangun.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/layanan#service`,
  name: "Pembuatan Website, Aplikasi, dan Sistem Bisnis",
  description: DESCRIPTION,
  serviceType: "Pengembangan perangkat lunak",
  // Menunjuk ke Organization yang dideklarasikan di layout, bukan
  // mendeklarasikan ulang perusahaan yang sama.
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Indonesia" },
  url: `${SITE_URL}/layanan`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Layanan ${SITE_NAME}`,
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
    })),
  },
};

export default function LayananPage() {
  return (
    <>
      <script {...jsonLdScriptProps(serviceJsonLd)} />
      <script
        {...jsonLdScriptProps(
          buildBreadcrumbJsonLd([{ name: "Layanan", path: "/layanan" }]),
        )}
      />
      <ServicesClient />
    </>
  );
}
