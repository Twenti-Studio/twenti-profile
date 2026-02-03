import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://twenti.studio"),
  description: "Twenti Studio adalah app studio yang memproduksi aplikasi inovatif dan menyediakan layanan pengembangan web profesional. Solusi digital terbaik untuk bisnis Anda.",
  keywords: ["app studio", "web development", "aplikasi", "software house", "Indonesia", "Balikpapan", "Twenti Studio"],
  authors: [{ name: "Twenti Studio" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Twenti Studio | App Studio & Web Development",
    description: "Twenti Studio adalah app studio yang memproduksi aplikasi inovatif dan menyediakan layanan pengembangan web profesional.",
    type: "website",
    locale: "id_ID",
    siteName: "Twenti Studio",
    images: [{ url: "/logo.png" }],
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-900 text-white">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
