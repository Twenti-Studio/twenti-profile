"use client";

import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  LayoutDashboard,
  Rocket,
  Globe as GlobeIcon,
  MonitorCog,
} from "lucide-react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

// ============================================

// HALAMAN PAKET & HARGA
// ============================================
// Angka di bawah adalah HARGA AWAL, bukan harga final.
// Ubah nilainya di array `packages` ini saja.
//
// price: null  -> tampil sebagai "berdasarkan ruang lingkup proyek"
// highlight    -> kartu ditandai sebagai paling diminati
// ============================================

const PricingClient = () => {
  const { t, language } = useLanguage();

  const packages = [
    {
      key: "website",
      icon: <GlobeIcon className="w-7 h-7" />,
      titleKey: "work.estimate.website.title",
      descKey: "work.estimate.website.desc",
      price: 3_500_000,
      highlight: false,
      includes: {
        id: [
          "Desain responsif",
          "Optimasi dasar SEO",
          "Formulir kontak",
          "Deployment & domain",
        ],
        en: [
          "Responsive design",
          "Basic SEO setup",
          "Contact form",
          "Deployment & domain",
        ],
      },
    },
    {
      key: "cms",
      icon: <LayoutDashboard className="w-7 h-7" />,
      titleKey: "work.estimate.cms.title",
      descKey: "work.estimate.cms.desc",
      price: 5_500_000,
      highlight: true,
      includes: {
        id: [
          "Semua fitur paket Website",
          "Dashboard pengelolaan konten",
          "Manajemen akun admin",
          "Panduan penggunaan",
        ],
        en: [
          "Everything in Website",
          "Content management dashboard",
          "Admin account management",
          "Usage guide",
        ],
      },
    },
    {
      key: "webapp",
      icon: <MonitorCog className="w-7 h-7" />,
      titleKey: "work.estimate.webapp.title",
      descKey: "work.estimate.webapp.desc",
      price: 12_000_000,
      highlight: false,
      includes: {
        id: [
          "Alur kerja sesuai proses bisnis",
          "Hak akses bertingkat",
          "Laporan & ekspor data",
          "Integrasi sistem terkait",
        ],
        en: [
          "Workflow tailored to your process",
          "Role-based access",
          "Reports & data export",
          "System integrations",
        ],
      },
    },
    {
      key: "mvp",
      icon: <Rocket className="w-7 h-7" />,
      titleKey: "work.estimate.mvp.title",
      descKey: "work.estimate.mvp.desc",
      price: 20_000_000,
      highlight: false,
      includes: {
        id: [
          "Product discovery & user flow",
          "Desain UI/UX",
          "Pengembangan versi awal",
          "Iterasi setelah rilis",
        ],
        en: [
          "Product discovery & user flow",
          "UI/UX design",
          "First version development",
          "Post-launch iteration",
        ],
      },
    },
    {
      key: "product",
      icon: <Boxes className="w-7 h-7" />,
      titleKey: "work.estimate.product.title",
      descKey: "work.estimate.product.desc",
      price: null,
      highlight: false,
      includes: {
        id: [
          "Arsitektur untuk skala besar",
          "Integrasi pihak ketiga",
          "Pengembangan bertahap",
          "Maintenance berkelanjutan",
        ],
        en: [
          "Architecture built to scale",
          "Third-party integrations",
          "Phased development",
          "Ongoing maintenance",
        ],
      },
    },
  ];

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("pricing.heroTitle")}{" "}
              <span className="text-orange-500">
                {t("pricing.heroHighlight")}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t("pricing.heroSubtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kartu paket: 2 per baris */}
      <section className="py-16 bg-dark-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg, index) => (
              <Reveal key={pkg.key} delay={index * 90} className="h-full">
                <div
                  className={`relative h-full flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${
                    pkg.highlight
                      ? "bg-dark-700 border-orange-500/50"
                      : "bg-dark-700 border-white/10 hover:border-orange-500/30"
                  }`}
                >
                  {/* Penanda paket paling diminati */}
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-7 px-3 py-1 bg-orange-500 rounded-full">
                      <span className="text-[11px] font-semibold text-white">
                        {t("pricing.popular")}
                      </span>
                    </div>
                  )}

                  {/* Ikon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-dark-600 rounded-xl text-orange-500 mb-5">
                    {pkg.icon}
                  </div>

                  {/* Judul & deskripsi */}
                  <h2 className="text-lg font-bold text-white mb-2">
                    {t(pkg.titleKey)}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {t(pkg.descKey)}
                  </p>

                  {/* Harga */}
                  <div className="pb-5 mb-5 border-b border-white/10">
                    {pkg.price !== null ? (
                      <>
                        <span className="block text-xs text-gray-500 mb-1">
                          {t("work.estimate.startFrom")}
                        </span>
                        <span className="text-2xl font-bold text-orange-500">
                          {formatPrice(pkg.price)}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="block text-xs text-gray-500 mb-1">
                          {t("work.estimate.startFrom")}
                        </span>
                        <span className="text-base font-semibold text-orange-500">
                          {t("work.estimate.scopeBased")}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Yang termasuk */}
                  <div className="flex-1 mb-6">
                    <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                      {t("pricing.includes")}
                    </h3>
                    <ul className="space-y-2">
                      {pkg.includes[language].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/kontak"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                      pkg.highlight
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-transparent border-2 border-white/20 text-white hover:border-orange-500 hover:bg-orange-500/5"
                    }`}
                  >
                    <span>{t("pricing.chooseThis")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Disclaimer: angka di atas bukan harga final */}
          <Reveal delay={120}>
            <p className="mt-10 text-sm text-gray-500 leading-relaxed text-center max-w-3xl mx-auto">
              {t("work.estimate.disclaimer")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="p-10 bg-dark-700 border border-white/10 rounded-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t("pricing.ctaTitle")}
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {t("pricing.ctaDesc")}
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <span>{t("services.cta.button")}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default PricingClient;
