import type { Metadata } from "next";
import { clients } from "../data/showcase";
import {
  buildBreadcrumbJsonLd,
  jsonLdScriptProps,
  SITE_URL,
} from "../lib/seo";
import PortfolioClient from "./PortfolioClient";

const TITLE = "Portofolio Klien | Twenti Studio";
const DESCRIPTION =
  "Proyek dan sistem yang dibangun Twenti Studio untuk bisnis dan organisasi, mulai dari sistem operasional instansi hingga platform logistik B2B.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/portofolio" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/portofolio",
    type: "website",
  },
};

// Tiap proyek dinyatakan sebagai CreativeWork dengan `creator` Twenti
// dan `about` nama kliennya. Ini yang menghubungkan nama klien dengan
// Twenti Studio di mata Google, sehingga pencarian nama proyek
// (misalnya "Simaggot Balkot") bisa ikut memunculkan studio pembuatnya.
const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/portofolio#portfolio`,
  name: "Portofolio Klien Twenti Studio",
  description: DESCRIPTION,
  numberOfItems: clients.length,
  itemListElement: clients.map((work, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: work.name,
      description: work.description.id,
      genre: work.category,
      url: work.link,
      ...(work.image ? { image: `${SITE_URL}${work.image}` } : {}),
      creator: { "@id": `${SITE_URL}/#organization` },
      about: { "@type": "Organization", name: work.client },
    },
  })),
};

export default function PortofolioPage() {
  return (
    <>
      <script {...jsonLdScriptProps(portfolioJsonLd)} />
      <script
        {...jsonLdScriptProps(
          buildBreadcrumbJsonLd([{ name: "Portofolio", path: "/portofolio" }]),
        )}
      />
      <PortfolioClient />
    </>
  );
}
