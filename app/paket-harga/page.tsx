import type { Metadata } from "next";
import {
  buildBreadcrumbJsonLd,
  jsonLdScriptProps,
  SITE_URL,
} from "../lib/seo";
import PricingClient from "./PricingClient";

const TITLE = "Paket & Harga Pembuatan Website dan Aplikasi | Twenti Studio";
const DESCRIPTION =
  "Estimasi biaya pembuatan website, web application, MVP, dan sistem bisnis oleh Twenti Studio. Harga mulai Rp3.500.000 dengan ruang lingkup yang jelas.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/paket-harga" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/paket-harga",
    type: "website",
  },
};

// Harga di sini HARUS sama dengan array `packages` di PricingClient.
// Kalau berbeda, Google menganggap halaman menampilkan harga berbeda
// dari yang dijanjikan structured data, dan rich result bisa dicabut.
//
// Semua angka adalah harga AWAL, jadi dipakai sebagai lowPrice pada
// AggregateOffer, bukan sebagai harga pasti.
const PACKAGES = [
  { name: "Website Development", price: 3_500_000 },
  { name: "Website with Content Management", price: 5_500_000 },
  { name: "Custom Web Application", price: 12_000_000 },
  { name: "MVP Development", price: 20_000_000 },
];

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/paket-harga#offers`,
  name: "Paket & Harga Twenti Studio",
  description: DESCRIPTION,
  url: `${SITE_URL}/paket-harga`,
  itemListElement: PACKAGES.map((pkg, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: pkg.name,
    priceSpecification: {
      "@type": "PriceSpecification",
      // minPrice, bukan price, karena angkanya harga mulai dari.
      minPrice: pkg.price,
      priceCurrency: "IDR",
      valueAddedTaxIncluded: false,
    },
    seller: { "@id": `${SITE_URL}/#organization` },
    availability: "https://schema.org/InStock",
    areaServed: { "@type": "Country", name: "Indonesia" },
  })),
};

export default function PaketHargaPage() {
  return (
    <>
      <script {...jsonLdScriptProps(offerCatalogJsonLd)} />
      <script
        {...jsonLdScriptProps(
          buildBreadcrumbJsonLd([
            { name: "Paket & Harga", path: "/paket-harga" },
          ]),
        )}
      />
      <PricingClient />
    </>
  );
}
