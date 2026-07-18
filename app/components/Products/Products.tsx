"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { products } from "../../data/showcase";

// ============================================
// ETALASE PRODUK DI HOMEPAGE
// ============================================
// Produk sengaja tampil lebih dulu daripada layanan.
// Identitas Twenti adalah app studio yang punya produk sendiri,
// bukan penyedia jasa, urutan di homepage harus mencerminkan itu.
// ============================================

const Products = () => {
  const { t, language, isHydrated } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentLang = isHydrated ? language : "id";

  return (
    <section
      id="products"
      ref={sectionRef}
      className={`py-24 bg-dark-900 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
            {t("home.products.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t("home.products.title")}{" "}
            <span className="text-orange-500">
              {t("home.products.titleHighlight")}
            </span>
          </h2>
          <p className="text-gray-400 text-lg">{t("home.products.subtitle")}</p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-dark-800 border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Label produk milik Twenti */}
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-dark-900/80 backdrop-blur-sm border border-white/10 rounded-full z-10">
                <span className="text-[10px] font-semibold text-gray-300">
                  {t("label.twentiProduct")}
                </span>
              </div>

              {/* Status hanya kalau belum rilis */}
              {product.status === "development" && (
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-blue-500 rounded-full z-10">
                  <span className="text-[10px] font-semibold text-white">
                    {t("label.inDevelopment")}
                  </span>
                </div>
              )}

              {/* Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-dark-700">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-500">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col">
                <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider mb-1.5">
                  {product.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mt-2 mb-4 line-clamp-2 flex-1">
                  {product.description[currentLang]}
                </p>
                <div className="flex items-center gap-1.5 text-orange-500 text-xs font-medium group-hover:text-orange-400 transition-colors">
                  <span>{t("home.products.visit")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA ke halaman produk lengkap */}
        <div className="text-center mt-12">
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
          >
            <span>{t("home.products.viewAll")}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
