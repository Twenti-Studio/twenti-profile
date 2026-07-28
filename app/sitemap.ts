import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

// ============================================
// SITEMAP
// ============================================
// Sitemap membantu mesin pencari menemukan halaman selain homepage.
// Tambahkan entri baru di sini setiap kali membuat route baru.
//
// TENTANG lastModified:
// Sebelumnya berkas ini memakai new Date(), yang berarti tiap kali
// situs di-deploy semua halaman terlihat "baru diubah", termasuk yang
// isinya tidak disentuh. Google membandingkan klaim itu dengan isi
// halaman yang sebenarnya; kalau sering meleset, tanggalnya berhenti
// dipercaya dan perubahan yang benar-benar penting jadi ikut diabaikan.
//
// Karena itu tanggalnya ditulis manual per halaman. Ubah tanggal sebuah
// halaman HANYA ketika isi halaman itu memang berubah.
// ============================================

type Route = {
  path: string;
  /** Tanggal isi halaman terakhir benar-benar berubah (YYYY-MM-DD). */
  lastModified: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

const routes: Route[] = [
  { path: "", lastModified: "2026-07-29", priority: 1.0, changeFrequency: "monthly" },
  { path: "/produk", lastModified: "2026-07-29", priority: 0.9, changeFrequency: "monthly" },
  { path: "/portofolio", lastModified: "2026-07-29", priority: 0.9, changeFrequency: "monthly" },
  { path: "/layanan", lastModified: "2026-07-29", priority: 0.8, changeFrequency: "monthly" },
  { path: "/paket-harga", lastModified: "2026-07-29", priority: 0.8, changeFrequency: "monthly" },
  { path: "/kontak", lastModified: "2026-07-29", priority: 0.7, changeFrequency: "yearly" },
  { path: "/tentang", lastModified: "2026-07-29", priority: 0.6, changeFrequency: "yearly" },
  { path: "/insight", lastModified: "2026-07-29", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privasi", lastModified: "2026-02-01", priority: 0.2, changeFrequency: "yearly" },
  { path: "/syarat", lastModified: "2026-02-01", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}
