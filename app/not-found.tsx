import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan | Twenti Studio",
  description:
    "Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Twenti Studio.",
  robots: { index: false, follow: true },
};

// Halaman 404. Sengaja menyertakan tautan ke halaman utama
// agar pengunjung (dan crawler) tidak menemui jalan buntu.
export default function NotFound() {
  const links = [
    { href: "/produk", label: "Produk" },
    { href: "/portofolio", label: "Portofolio" },
    { href: "/layanan", label: "Layanan" },
    { href: "/paket-harga", label: "Paket & Harga" },
    { href: "/tentang", label: "Tentang Twenti" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-900 px-4 py-32">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-7xl sm:text-8xl font-bold text-orange-500 mb-4">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-400 leading-relaxed mb-10">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tautannya
          keliru.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
        >
          Kembali ke Beranda
        </Link>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-4">
            Atau kunjungi halaman berikut:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 bg-dark-800 border border-white/10 rounded-full hover:text-white hover:border-orange-500/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
