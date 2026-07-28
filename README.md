This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SEO

Semua konstanta identitas situs (URL, nama, kontak, profil sosial) ada di
satu tempat: `app/lib/seo.ts`. Ubah di sana, bukan di masing-masing halaman.

**Berkas yang terlibat**

| Berkas | Isinya |
| --- | --- |
| `app/lib/seo.ts` | Konstanta situs + pembangun structured data |
| `app/layout.tsx` | Metadata default, schema `Organization` & `WebSite` |
| `app/robots.ts` | Menghasilkan `/robots.txt` |
| `app/sitemap.ts` | Menghasilkan `/sitemap.xml` |
| `app/opengraph-image.tsx` | Gambar pratinjau 1200x630 saat tautan dibagikan |
| `app/*/page.tsx` | Metadata + structured data per halaman |

**Aturan saat menambah halaman baru**

1. Buat `page.tsx` sebagai server component, taruh tampilannya di
   `XClient.tsx` kalau butuh `useState`/`useLanguage`.
2. Isi `metadata` lengkap dengan `alternates.canonical`.
3. Tambahkan `buildBreadcrumbJsonLd([...])`.
4. Daftarkan route-nya di `app/sitemap.ts` beserta tanggalnya.

**Aturan saat mengubah halaman yang sudah ada**

Perbarui `lastModified` route itu di `app/sitemap.ts`. Tanggalnya sengaja
ditulis manual, bukan `new Date()`, supaya tidak semua halaman terlihat
berubah tiap kali deploy.

**Verifikasi Google Search Console**

Kalau memakai metode "Tag HTML", simpan kodenya sebagai environment
variable (di Vercel: Settings → Environment Variables):

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=isi_dengan_kode_dari_search_console
```

Kalau verifikasi sudah lewat DNS atau unggah berkas HTML, variabel ini
tidak perlu diisi.

**Setelah deploy**

Kirim `https://twenti.studio/sitemap.xml` di Search Console → Sitemap, lalu
uji structured data di <https://search.google.com/test/rich-results>.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
