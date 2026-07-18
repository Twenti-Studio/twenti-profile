import type { MetadataRoute } from "next";

const SITE_URL = "https://twenti.studio";

// Sitemap membantu mesin pencari menemukan halaman selain homepage.
// Tambahkan entri baru di sini setiap kali membuat route baru.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/produk", priority: 0.9, changeFrequency: "weekly" },
    { path: "/portofolio", priority: 0.9, changeFrequency: "weekly" },
    { path: "/layanan", priority: 0.8, changeFrequency: "monthly" },
    { path: "/paket-harga", priority: 0.8, changeFrequency: "monthly" },
    { path: "/tentang", priority: 0.6, changeFrequency: "monthly" },
    { path: "/insight", priority: 0.5, changeFrequency: "weekly" },
    { path: "/kontak", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privasi", priority: 0.2, changeFrequency: "yearly" },
    { path: "/syarat", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
