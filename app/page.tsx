import HomeClient from "./HomeClient";
import { pickFaq } from "./data/faq";
import { buildFaqJsonLd, jsonLdScriptProps } from "./lib/seo";

// Homepage memakai pola yang sama dengan halaman lain: berkas ini adalah
// server component tipis yang mengurus metadata dan structured data,
// sedangkan tampilannya ada di HomeClient.
//
// Metadata homepage sendiri tidak ditulis ulang di sini, cukup mewarisi
// title/description default dari app/layout.tsx supaya tidak ada dua
// sumber kebenaran untuk teks yang sama.

// Harus sama persis dengan daftar faqs di HomeClient. Structured data
// yang memuat pertanyaan tak terlihat di halaman dianggap pelanggaran
// oleh Google dan bisa membuat seluruh rich result diabaikan.
const HOME_FAQ_KEYS = ["q1", "q2", "q3", "q5"] as const;

export default function Home() {
  const faqJsonLd = buildFaqJsonLd(
    pickFaq([...HOME_FAQ_KEYS]).map((faq) => ({
      question: faq.question.id,
      answer: faq.answer.id,
    })),
  );

  return (
    <>
      <script {...jsonLdScriptProps(faqJsonLd)} />
      <HomeClient />
    </>
  );
}
