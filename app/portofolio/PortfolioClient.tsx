"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../components/Reveal";
import ShowcaseCard from "../components/ShowcaseCard";
import ShowcaseModal, { ShowcaseItem } from "../components/ShowcaseModal";
import { useLanguage } from "../context/LanguageContext";
import { clients } from "../data/showcase";

// ============================================

// HALAMAN PORTOFOLIO
// ============================================
// Khusus berisi PROYEK KLIEN. Produk milik Twenti sendiri
// ada di halaman terpisah (/produk). Pemisahan ini disengaja:
// pengunjung tidak boleh salah membaca produk internal sebagai
// portofolio jasa, atau sebaliknya.
// ============================================

const PortfolioClient = () => {
  const { t, language } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

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
              {t("portfolio.heroTitle")}{" "}
              <span className="text-orange-500">
                {t("portfolio.heroHighlight")}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t("portfolio.heroSubtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid proyek klien */}
      <section className="py-20 bg-dark-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {clients.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((work, index) => (
                <Reveal key={work.name} delay={index * 90} className="h-full">
                  <ShowcaseCard
                    name={work.name}
                    category={work.category}
                    description={work.description[language]}
                    image={work.image}
                    subtitle={work.client}
                    typeLabelKey="label.clientProject"
                    onClick={() =>
                      setSelectedItem({
                        name: work.name,
                        description: work.description,
                        category: work.category,
                        link: work.link,
                        image: work.image,
                        badge: { id: work.client, en: work.client },
                      })
                    }
                    t={t}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-3">
                {t("portfolio.emptyTitle")}
              </h2>
              <p className="text-gray-400">{t("portfolio.emptyDesc")}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="p-10 bg-dark-700 border border-white/10 rounded-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t("portfolio.ctaTitle")}
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {t("portfolio.ctaDesc")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/kontak"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  <span>{t("products.contactUs")}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/produk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300"
                >
                  <span>{t("portfolio.viewProducts")}</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ShowcaseModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
};

export default PortfolioClient;
