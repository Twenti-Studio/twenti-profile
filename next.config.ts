import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  devIndicators: false,

  images: {
    // AVIF lebih kecil dari WebP, WebP lebih kecil dari PNG. Browser
    // memilih yang pertama ia dukung. Gambar di /public adalah PNG
    // berukuran ratusan KB sampai 2 MB, dan konversi ini yang memangkas
    // ukuran unduhannya paling banyak.
    formats: ["image/avif", "image/webp"],
    // Hasil konversi boleh disimpan lama karena berkas sumbernya
    // jarang berubah; kalau diganti, nama berkasnya ikut berubah.
    minimumCacheTTL: 31_536_000,
  },

  // Header keamanan. Bukan faktor peringkat langsung, tetapi ikut
  // dinilai saat Google menimbang kelayakan sebuah situs, dan mencegah
  // konten situs dibingkai ulang orang lain.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
