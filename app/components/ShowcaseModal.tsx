"use client";

import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

// ============================================

// SHOWCASE MODAL
// ============================================
// Dipakai bersama oleh list Produk dan Portofolio Klien.
// Alur: user klik card -> modal ini muncul menampilkan
// logo, nama, kategori, ringkasan, dan tombol "Kunjungi Sekarang"
// yang mengarahkan ke URL web terkait.
// ============================================

export interface ShowcaseItem {
  name: string;
  description: { id: string; en: string };
  category: string;
  link: string;
  image?: string;
  /** Label kecil di atas nama, mis. nama klien atau status produk */
  badge?: { id: string; en: string };
}

interface ShowcaseModalProps {
  item: ShowcaseItem | null;
  onClose: () => void;
}

const ShowcaseModal = ({ item, onClose }: ShowcaseModalProps) => {
  const { t, language } = useLanguage();

  // Tutup dengan tombol Escape + kunci scroll body selama modal terbuka
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="showcase-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-dark-700 border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-[scaleIn_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol tutup */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t("showcase.close")}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-dark-900/70 text-gray-400 hover:text-white hover:bg-dark-900 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 text-center">
          {/* Logo */}
          <div className="relative w-24 h-24 mx-auto mb-5 rounded-2xl bg-dark-600 border border-white/5 flex items-center justify-center overflow-hidden">
            {item.image ? (
              // Ditampilkan hanya 96x96 px, jadi next/image cukup
              // mengirim versi kecilnya alih-alih berkas aslinya.
              <Image
                src={item.image}
                alt={`Logo ${item.name}`}
                fill
                sizes="96px"
                className="object-contain p-2"
              />
            ) : (
              <span className="text-3xl font-bold text-gray-500">
                {item.name.charAt(0)}
              </span>
            )}
          </div>

          {/* Kategori */}
          <span className="inline-block text-xs font-semibold text-orange-500 uppercase tracking-wider mb-2">
            {item.category}
          </span>

          {/* Nama */}
          <h3
            id="showcase-modal-title"
            className="text-2xl font-bold text-white mb-2"
          >
            {item.name}
          </h3>

          {/* Badge opsional (nama klien / status) */}
          {item.badge && (
            <p className="text-sm text-gray-500 mb-4">{item.badge[language]}</p>
          )}

          {/* Ringkasan */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            {item.description[language]}
          </p>

          {/* CTA: Kunjungi Sekarang */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
          >
            <span>{t("showcase.visitNow")}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseModal;
