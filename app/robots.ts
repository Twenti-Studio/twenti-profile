import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Route API tidak perlu dirayapi.
      // Catatan: disallow hanya mencegah perayapan, bukan pengindeksan.
      // Untuk menyembunyikan sebuah halaman dari hasil pencarian, pakai
      // metadata robots { index: false } di halaman itu (lihat
      // app/not-found.tsx), bukan baris ini.
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
