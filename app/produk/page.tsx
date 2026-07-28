import type { Metadata } from "next";
import { products } from "../data/showcase";
import {
  buildBreadcrumbJsonLd,
  jsonLdScriptProps,
  SITE_URL,
} from "../lib/seo";
import ProductsClient from "./ProductsClient";

const TITLE =
  "Produk Digital Twenti Studio | Aplikasi & Platform Buatan Sendiri";
const DESCRIPTION =
  "Produk digital yang dirancang, dibangun, dan dikembangkan sendiri oleh Twenti Studio: Games Twenti, MiTa, Healthify, FiNot, dan Well Track.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/produk" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/produk",
    type: "website",
  },
};

// Daftar produk dibaca langsung dari data yang dirender halaman, jadi
// structured data tidak bisa ketinggalan saat ada produk baru.
// Setiap produk dinyatakan sebagai SoftwareApplication supaya Google
// paham ini aplikasi milik Twenti, bukan sekadar tautan keluar.
const productListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/produk#products`,
  name: "Produk Digital Twenti Studio",
  description: DESCRIPTION,
  numberOfItems: products.length,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: product.name,
      description: product.description.id,
      applicationCategory: product.category,
      url: product.link,
      ...(product.image ? { image: `${SITE_URL}${product.image}` } : {}),
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  })),
};

export default function ProdukPage() {
  return (
    <>
      <script {...jsonLdScriptProps(productListJsonLd)} />
      <script
        {...jsonLdScriptProps(
          buildBreadcrumbJsonLd([{ name: "Produk", path: "/produk" }]),
        )}
      />
      <ProductsClient />
    </>
  );
}
