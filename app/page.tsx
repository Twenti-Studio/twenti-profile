"use client";

import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Code2,
  Laptop,
  Layout,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Products from "./components/Products/Products";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();
  // Indeks FAQ yang jawabannya sedang terbuka (null = semua tertutup)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Empat kemampuan inti studio, bukan daftar jasa.
  // Framing-nya: kemampuan ini kami asah lewat produk sendiri
  // lalu dipakai juga saat berkolaborasi dengan pihak lain.
  const capabilities = [
    {
      icon: <Palette className="w-8 h-8" />,
      titleKey: "home.whatWeBuild.design.title",
      descKey: "home.whatWeBuild.design.desc",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      titleKey: "home.whatWeBuild.development.title",
      descKey: "home.whatWeBuild.development.desc",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      titleKey: "home.whatWeBuild.quality.title",
      descKey: "home.whatWeBuild.quality.desc",
    },
    {
      icon: <Server className="w-8 h-8" />,
      titleKey: "home.whatWeBuild.infrastructure.title",
      descKey: "home.whatWeBuild.infrastructure.desc",
    },
  ];

  // Tiga bentuk kolaborasi, ditampilkan sebagai kompetensi studio
  // bukan identitas utama perusahaan.
  const collaborationForms = [
    {
      icon: <Laptop className="w-7 h-7" />,
      titleKey: "work.forms.website.title",
      descKey: "work.forms.website.desc",
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      titleKey: "work.forms.product.title",
      descKey: "work.forms.product.desc",
    },
    {
      icon: <Layout className="w-7 h-7" />,
      titleKey: "work.forms.improve.title",
      descKey: "work.forms.improve.desc",
    },
  ];

  // ============================================
  // TESTIMONI
  // ============================================
  // Hanya entri dengan `approved: true` yang tampil di situs.
  //
  // ATURANNYA: jangan set approved menjadi true sebelum orang yang
  // namanya dicantumkan benar-benar menyetujui kalimatnya. Kutipan
  // karangan yang diatasnamakan orang asli adalah testimoni palsu,
  // dan gampang runtuh begitu ada calon klien yang mengonfirmasi.
  //
  // Alur pakainya: kalimat draft di bawah dikirim ke orangnya lewat
  // WhatsApp, dia boleh mengubah sesukanya, lalu tinggal ubah
  // approved menjadi true.
  // ============================================
  const allTestimonials: {
    name: string;
    role: string;
    content: { id: string; en: string };
    avatar: string;
    /** Hanya yang `true` yang tampil di situs. Lihat catatan di atas. */
    approved: boolean;
  }[] = [
    {
      name: "Ramlan",
      role: "Camat, Kecamatan Balikpapan Kota",
      content: {
        id: "Hasil pengerjaan bagus dan bekerja dengan baik.",
        en: "The work was done well and it runs well.",
      },
      avatar: "R",
      approved: true,
    },
    {
      name: "Juan",
      role: "Pengguna FiNot",
      content: {
        id: "Sejak pakai FiNot, catat pemasukan dan pengeluaran jadi kebiasaan. Prosesnya cepat, tinggal ketik lalu selesai.",
        en: "Since using FiNot, tracking my income and expenses has become a habit. It is quick, I just type it in and I am done.",
      },
      avatar: "J",
      approved: true,
    },
    {
      name: "Saman",
      role: "Pengguna Games Twenti",
      content: {
        id: "Proses top-upnya cepat dan alurnya jelas, jadi tidak ragu waktu transaksi.",
        en: "Top-ups are fast and the flow is clear, so I have no doubts when making a transaction.",
      },
      avatar: "S",
      approved: true,
    },
  ];

  const testimonials = allTestimonials.filter((item) => item.approved);

  // Klien nyata yang sudah berjalan, ini bukti faktual, bukan klaim.
  const trustedBy = [
    {
      name: "Kecamatan Balikpapan Kota",
      project: "Simaggot Balkot",
      image: "/image/simaggot.png",
    },
    {
      name: "KlirLogistik",
      project: "KlirLogistik",
      image: "/image/klirlogistik.png",
    },
  ];

  const faqs = [
    { qKey: "faq.q1", aKey: "faq.a1" },
    { qKey: "faq.q2", aKey: "faq.a2" },
    { qKey: "faq.q3", aKey: "faq.a3" },
    { qKey: "faq.q5", aKey: "faq.a5" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-navy-700/30 rounded-full blur-[100px] animate-float" />
          <div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px] animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            {t("home.hero.title1")}
            <br />
            <span className="text-orange-500">{t("home.hero.title2")}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t("home.hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/produk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
            >
              <span>{t("home.hero.cta1")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/layanan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-orange-500 text-white font-semibold rounded-full hover:bg-orange-500/10 transition-all duration-300"
            >
              <span>{t("home.hero.cta2")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Produk Twenti, tampil lebih dulu daripada layanan.
          Ini yang membedakan app studio dengan agency. */}
      <Products />

      {/* About / Studio Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                {t("home.about.label")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                {t("home.about.title")}{" "}
                <span className="text-orange-500">
                  {t("home.about.titleHighlight")}
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                {t("home.about.desc1")}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {t("home.about.desc2")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/produk"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                >
                  <span>{t("home.about.viewProducts")}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 text-gray-400 font-semibold hover:text-white transition-colors"
                >
                  <span>{t("home.about.learnServices")}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Visual Logo */}
            <div className="relative">
              <div className="aspect-square bg-dark-700 rounded-3xl p-8 border border-white/5">
                <div className="w-full h-full bg-dark-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      <Image
                        src="/logo.png"
                        alt="Twenti Studio Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-white">
                      Twenti Studio
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {t("home.about.tagline")}
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-700/30 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Build, kemampuan studio, bukan daftar jasa */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t("home.whatWeBuild.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t("home.whatWeBuild.title")}{" "}
              <span className="text-orange-500">
                {t("home.whatWeBuild.titleHighlight")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t("home.whatWeBuild.subtitle")}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.titleKey}
                className="p-8 bg-dark-800 border border-white/5 rounded-2xl card-hover group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-dark-700 rounded-xl text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {t(capability.titleKey)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(capability.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section, hanya tampil kalau ada kutipan yang sudah disetujui */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                {t("home.testimonials.label")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                {t("home.testimonials.title")}{" "}
                <span className="text-orange-500">
                  {t("home.testimonials.titleHighlight")}
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t("home.testimonials.subtitle")}
              </p>
            </div>

            {/* Testimonials Grid, grid menyesuaikan jumlah testimoni yang ada */}
            <div
              className={`grid gap-8 ${
                testimonials.length === 1
                  ? "max-w-xl mx-auto"
                  : testimonials.length === 2
                    ? "md:grid-cols-2 max-w-4xl mx-auto"
                    : "md:grid-cols-3"
              }`}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="p-8 bg-dark-700 border border-white/5 rounded-2xl card-hover"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-dark-600 rounded-full text-white font-bold text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">
                    &ldquo;{testimonial.content[language]}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trusted By, bukti faktual: klien yang sistemnya benar-benar berjalan */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t("home.trustedBy.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t("home.trustedBy.title")}{" "}
              <span className="text-orange-500">
                {t("home.trustedBy.titleHighlight")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t("home.trustedBy.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustedBy.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-4 px-6 py-4 bg-dark-700 border border-white/5 rounded-2xl card-hover"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-dark-600 flex items-center justify-center overflow-hidden">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={56}
                    height={56}
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">{client.name}</h4>
                  <p className="text-sm text-gray-400">{client.project}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            >
              <span>{t("home.trustedBy.viewPortfolio")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Work With Us, lini sekunder, ditempatkan SETELAH produk & studio.
          Framing: kemampuan kami juga terbuka untuk pihak lain. */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t("work.forms.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t("work.forms.title")}{" "}
              <span className="text-orange-500">
                {t("work.forms.titleHighlight")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg">{t("work.heroSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {collaborationForms.map((form) => (
              <div
                key={form.titleKey}
                className="p-8 bg-dark-800 border border-white/5 rounded-2xl card-hover group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-xl text-orange-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {form.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{t(form.titleKey)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(form.descKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-orange-500 text-white font-semibold rounded-full hover:bg-orange-500/10 transition-all duration-300"
            >
              <span>{t("home.hero.cta2")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t("home.faq.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t("home.faq.title")}{" "}
              <span className="text-orange-500">
                {t("home.faq.titleHighlight")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg">{t("home.faq.subtitle")}</p>
          </div>

          {/* Accordion: jawaban tersembunyi sampai pertanyaannya diklik */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.qKey}
                  className={`bg-dark-700 border rounded-xl overflow-hidden transition-colors duration-300 ${
                    isOpen
                      ? "border-orange-500/40"
                      : "border-white/10 hover:border-orange-500/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left p-6 sm:p-7 cursor-pointer"
                  >
                    <h3
                      className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                        isOpen ? "text-orange-500" : "text-white"
                      }`}
                    >
                      {t(faq.qKey)}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-orange-500" : "text-gray-500"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 -mt-1 animate-[dropdownIn_0.25s_ease-out]">
                      <p className="text-gray-400 leading-relaxed">
                        {t(faq.aKey)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            >
              <span>{t("home.faq.moreQuestions")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-700" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-800 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <span>{t("home.cta.button")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/produk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <span>{t("home.cta.secondary")}</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>{t("home.cta.freeConsultation")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>{t("home.cta.professionalTeam")}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
