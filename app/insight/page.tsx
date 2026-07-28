import type { Metadata } from "next";
import {
  buildBreadcrumbJsonLd,
  jsonLdScriptProps,
  SITE_URL,
} from "../lib/seo";
import InsightClient from "./InsightClient";

const TITLE = "Insight | Twenti Studio";
const DESCRIPTION =
  "Catatan proses, riset produk, dan eksperimen pengembangan dari tim Twenti Studio.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/insight" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/insight",
    type: "website",
  },
};

// Saat halaman ini sudah berisi artikel, ganti CollectionPage dengan
// Blog dan tambahkan BlogPosting per artikel di route-nya
// masing-masing (app/insight/[slug]/page.tsx).
const insightJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/insight#collection`,
  url: `${SITE_URL}/insight`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "id-ID",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function InsightPage() {
  return (
    <>
      <script {...jsonLdScriptProps(insightJsonLd)} />
      <script
        {...jsonLdScriptProps(
          buildBreadcrumbJsonLd([{ name: "Insight", path: "/insight" }]),
        )}
      />
      <InsightClient />
    </>
  );
}
