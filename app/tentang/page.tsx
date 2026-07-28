import type { Metadata } from "next";
import {
  buildBreadcrumbJsonLd,
  jsonLdScriptProps,
  SITE_URL,
} from "../lib/seo";
import AboutClient from "./AboutClient";

const TITLE =
  "Tentang Twenti Studio | App Studio di Bawah PT Twenti Studio Nusantara";
const DESCRIPTION =
  "Twenti Studio adalah app studio yang membangun produk digital sendiri sekaligus menerima pengembangan sistem untuk klien. Beroperasi di bawah PT Twenti Studio Nusantara.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tentang" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tentang",
    type: "website",
  },
};

// AboutPage yang secara eksplisit menyatakan halaman ini "tentang"
// entitas Organization di layout. Halaman inilah yang biasanya dipakai
// Google sebagai rujukan identitas resmi perusahaan.
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/tentang#about`,
  url: `${SITE_URL}/tentang`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "id-ID",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <script {...jsonLdScriptProps(aboutJsonLd)} />
      <script
        {...jsonLdScriptProps(
          // Label disamakan dengan yang tertulis di navbar, karena
          // breadcrumb seharusnya mencerminkan navigasi yang dilihat
          // pengunjung.
          buildBreadcrumbJsonLd([
            { name: "Tentang Twenti", path: "/tentang" },
          ]),
        )}
      />
      <AboutClient />
    </>
  );
}
