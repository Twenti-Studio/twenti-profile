import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

const SITE_URL = "https://twenti.studio";

// Judul homepage: positioning app studio tetap di depan, tetapi kata kunci
// pencarian ("jasa pembuatan website/aplikasi") ikut tertangkap Google.
const HOME_TITLE =
  "Twenti Studio | App Studio & Jasa Pembuatan Website, Aplikasi, Sistem Bisnis";
const HOME_DESCRIPTION =
  "Twenti Studio adalah app studio yang membangun produk digital sendiri dan membantu bisnis membangun website, aplikasi, webstore, serta sistem internal sesuai kebutuhan operasional.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    // Halaman lain menetapkan judulnya sendiri; template ini hanya cadangan.
    template: "%s",
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "app studio",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "pengembangan sistem bisnis",
    "web development",
    "software house",
    "Balikpapan",
    "Indonesia",
    "Twenti Studio",
    "PT Twenti Studio Nusantara",
  ],
  authors: [{ name: "PT Twenti Studio Nusantara" }],
  creator: "PT Twenti Studio Nusantara",
  publisher: "PT Twenti Studio Nusantara",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
    type: "website",
    locale: "id_ID",
    siteName: "Twenti Studio",
    // Gambar pratinjau dibuat otomatis oleh app/opengraph-image.tsx (1200x630).
    // Sengaja tidak diisi di sini supaya file itu yang dipakai, bukan logo persegi.
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

// Structured data: membantu Google mengenali entitas perusahaan.
// Menyebut badan hukum resmi PT Twenti Studio Nusantara.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Twenti Studio",
  legalName: "PT Twenti Studio Nusantara",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description: HOME_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balikpapan",
    addressRegion: "Kalimantan Timur",
    addressCountry: "ID",
  },
  areaServed: "ID",
  parentOrganization: {
    "@type": "Organization",
    name: "Interdots Group",
  },
  sameAs: [SITE_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Structured data Organization / ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="bg-dark-900 text-white">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
