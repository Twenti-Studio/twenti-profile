import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";
import {
  CONTACT,
  jsonLdScriptProps,
  LEGAL_NAME,
  SAME_AS,
  SITE_NAME,
  SITE_URL,
} from "./lib/seo";

// Font dimuat lewat next/font, bukan <link> ke fonts.googleapis.com.
// Bedanya penting untuk SEO: <link> stylesheet memblokir render halaman
// sampai Google Fonts merespons, sedangkan cara ini menaruh berkas font
// satu domain dengan situs dan menyuntikkan CSS-nya langsung.
// display: "swap" membuat teks tetap tampil memakai font cadangan
// selama font utama diunduh, jadi konten tidak pernah kosong.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Judul homepage: positioning app studio tetap di depan, tetapi kata kunci
// pencarian ("jasa pembuatan website/aplikasi") ikut tertangkap Google.
const HOME_TITLE =
  "Twenti Studio | App Studio & Jasa Pembuatan Website, Aplikasi, Sistem Bisnis";
const HOME_DESCRIPTION =
  "Twenti Studio adalah app studio yang membangun produk digital sendiri dan membantu bisnis membangun website, aplikasi, webstore, serta sistem internal sesuai kebutuhan operasional.";

export const viewport: Viewport = {
  themeColor: "#0B0F17",
  width: "device-width",
  initialScale: 1,
};

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
  authors: [{ name: LEGAL_NAME }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  applicationName: SITE_NAME,
  category: "technology",
  alternates: { canonical: "/" },
  // Verifikasi kepemilikan domain untuk Google Search Console.
  // Isi lewat environment variable NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  // dengan kode dari Search Console > Setelan > Verifikasi kepemilikan
  // > "Tag HTML" (ambil hanya nilai content="..." nya).
  // Kalau verifikasi sudah lewat DNS atau berkas HTML, biarkan kosong.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      // Membiarkan Google memakai cuplikan teks sepanjang yang dia perlu,
      // bukan dipotong ke panjang default.
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
    siteName: SITE_NAME,
    // Gambar pratinjau dibuat otomatis oleh app/opengraph-image.tsx (1200x630).
    // Sengaja tidak diisi di sini supaya file itu yang dipakai, bukan logo persegi.
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

// ============================================
// STRUCTURED DATA TINGKAT SITUS
// ============================================
// Dua objek di bawah dipasang di semua halaman lewat layout ini.
// Keduanya diberi "@id" supaya structured data di halaman lain bisa
// menunjuk ke entitas yang sama alih-alih mendeklarasikan ulang.
// ============================================

// Identitas perusahaan. Ini yang dipakai Google untuk mengenali
// "Twenti Studio" sebagai sebuah entitas, bukan sekadar rangkaian kata.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  alternateName: ["Twenti", LEGAL_NAME],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },
  image: `${SITE_URL}/opengraph-image`,
  description: HOME_DESCRIPTION,
  email: CONTACT.email,
  telephone: CONTACT.whatsapp,
  priceRange: "Rp3.500.000+",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balikpapan",
    addressRegion: "Kalimantan Timur",
    addressCountry: "ID",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: CONTACT.whatsapp,
      email: CONTACT.email,
      availableLanguage: ["id", "en"],
      areaServed: "ID",
    },
  ],
  knowsAbout: [
    "Pengembangan website",
    "Pengembangan aplikasi mobile",
    "Sistem informasi bisnis",
    "Minimum viable product",
    "UI/UX design",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Interdots Group",
  },
  sameAs: SAME_AS,
};

// Identitas situsnya sendiri, terpisah dari perusahaan. Membantu Google
// menampilkan nama "Twenti Studio" di hasil pencarian alih-alih
// menebaknya dari judul halaman.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: HOME_DESCRIPTION,
  inLanguage: "id-ID",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        {/* Structured data Organization / ProfessionalService */}
        <script {...jsonLdScriptProps(organizationJsonLd)} />
        {/* Structured data WebSite */}
        <script {...jsonLdScriptProps(websiteJsonLd)} />
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
