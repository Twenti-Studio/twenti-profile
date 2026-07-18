"use client";

import { ArrowRight, PenLine } from "lucide-react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

// ============================================

// HALAMAN INSIGHT
// ============================================
// Belum ada artikel. Halaman ini sengaja menampilkan keterangan
// apa adanya, BUKAN artikel karangan. Begitu tulisan pertama siap,
// ganti blok "belum ada artikel" dengan daftar artikel.
// ============================================

const InsightClient = () => {
  const { t } = useLanguage();

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
              {t("insight.heroTitle")}{" "}
              <span className="text-orange-500">
                {t("insight.heroHighlight")}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t("insight.heroSubtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Belum ada artikel */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="p-12 bg-dark-700 border border-white/10 rounded-3xl">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-dark-600 rounded-2xl text-orange-500">
                <PenLine className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                {t("insight.emptyTitle")}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {t("insight.emptyDesc")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/produk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  <span>{t("portfolio.viewProducts")}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/portofolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300"
                >
                  <span>{t("home.trustedBy.viewPortfolio")}</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default InsightClient;
