import type { Metadata } from "next";
import {
  buildBreadcrumbJsonLd,
  CONTACT,
  jsonLdScriptProps,
  SITE_URL,
} from "../lib/seo";
import ContactClient from "./ContactClient";

const TITLE = "Kontak Twenti Studio | Konsultasi Gratis Proyek Digital";
const DESCRIPTION =
  "Hubungi Twenti Studio untuk konsultasi gratis seputar pembuatan website, aplikasi, dan sistem bisnis. Kami merespons dalam 1x24 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/kontak" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/kontak",
    type: "website",
  },
};

// ContactPage memberi tahu Google bahwa inilah halaman kontak resmi.
// Nomor dan email diambil dari lib/seo agar tidak pernah berbeda dengan
// yang tertulis di Footer, karena data kontak yang tidak konsisten
// justru melemahkan keyakinan Google terhadap entitas perusahaan.
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/kontak#contact`,
  url: `${SITE_URL}/kontak`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "id-ID",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: {
    "@id": `${SITE_URL}/#organization`,
    "@type": "ProfessionalService",
    name: "Twenti Studio",
    telephone: CONTACT.whatsapp,
    email: CONTACT.email,
  },
};

export default function KontakPage() {
  return (
    <>
      <script {...jsonLdScriptProps(contactJsonLd)} />
      <script
        {...jsonLdScriptProps(
          buildBreadcrumbJsonLd([{ name: "Kontak", path: "/kontak" }]),
        )}
      />
      <ContactClient />
    </>
  );
}
