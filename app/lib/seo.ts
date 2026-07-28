// ============================================
// SUMBER DATA TUNGGAL UNTUK SEO
// ============================================
// Semua konstanta identitas situs (URL, nama, kontak) dan pembangun
// structured data ada di sini. Tujuannya supaya tidak ada nomor
// telepon atau URL yang beda-beda antar halaman, karena Google
// memakai konsistensi data itu untuk memastikan entitas perusahaan.
// ============================================

export const SITE_URL = "https://twenti.studio";
export const SITE_NAME = "Twenti Studio";
export const LEGAL_NAME = "PT Twenti Studio Nusantara";

// Nomor & email resmi. Harus sama persis dengan yang tampil di Footer
// dan halaman /kontak, termasuk formatnya.
export const CONTACT = {
  whatsapp: "+6285199131536",
  email: "twentistudio@gmail.com",
  github: "https://github.com/Twenti-Studio",
};

// Profil resmi di platform lain. Google memakai daftar ini untuk
// menghubungkan situs dengan entitas yang sama di tempat lain, yang
// membantu munculnya Knowledge Panel saat orang mencari "Twenti Studio".
// Tambahkan LinkedIn / Instagram / Google Business Profile di sini
// begitu akunnya sudah aktif.
export const SAME_AS = [CONTACT.github];

/**
 * Menyisipkan structured data ke HTML.
 *
 * Dipakai di dalam JSX seperti komponen biasa:
 *   <JsonLd data={buildFaqJsonLd(faqs)} />
 *
 * Aman dari XSS karena isinya selalu hasil JSON.stringify dari objek
 * yang kita susun sendiri, bukan input pengguna. Karakter `<` tetap
 * di-escape supaya string apa pun tidak bisa menutup tag <script>.
 */
export function jsonLdScriptProps(data: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  } as const;
}

// ============================================
// BREADCRUMB
// ============================================
// Mengubah tampilan hasil pencarian dari URL mentah
// ("twenti.studio > paket-harga") menjadi jalur berlabel
// ("Twenti Studio > Paket & Harga"). Google menampilkan ini
// menggantikan URL, jadi hasilnya lebih mudah dibaca dan diklik.

export type Crumb = { name: string; path: string };

export function buildBreadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Beranda", path: "" }, ...crumbs].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`,
      }),
    ),
  };
}

// ============================================
// FAQ
// ============================================
// Kalau Google menerima ini, pertanyaan bisa tampil langsung sebagai
// daftar yang bisa dibuka di halaman hasil pencarian. Syaratnya
// pertanyaan dan jawaban di sini harus benar-benar terlihat juga
// oleh pengunjung di halaman, bukan hanya ada di structured data.

export function buildFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
