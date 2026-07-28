"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

// ============================================

// SHOWCASE CARD
// ============================================
// Kartu ringkas untuk produk (/produk) dan proyek klien (/portofolio).
// Mengklik kartu membuka ShowcaseModal, bukan langsung ke URL,
// supaya pengunjung melihat ringkasan dulu sebelum keluar dari situs.
// ============================================

interface ShowcaseCardProps {
  name: string;
  category: string;
  description: string;
  image?: string;
  /** Baris kecil di bawah judul, mis. nama klien */
  subtitle?: string;
  status?: "coming-soon" | "available" | "development";
  /** 'label.twentiProduct' | 'label.clientProject' | dst. */
  typeLabelKey?: string;
  onClick: () => void;
  t: (key: string) => string;
}

const statusConfig = {
  available: { labelKey: "products.available", color: "bg-green-500" },
  development: { labelKey: "products.development", color: "bg-blue-500" },
  "coming-soon": { labelKey: "products.comingSoon", color: "bg-orange-500" },
};

const ShowcaseCard = ({
  name,
  category,
  description,
  image,
  subtitle,
  status,
  typeLabelKey,
  onClick,
  t,
}: ShowcaseCardProps) => {
  // Badge status hanya ditampilkan kalau belum 'available'
  const showStatus = status && status !== "available";
  const statusStyle = showStatus ? statusConfig[status] : null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative text-left w-full h-full bg-dark-700 border border-white/10 rounded-xl hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Label tipe: membedakan produk Twenti vs proyek klien */}
      {typeLabelKey && (
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-dark-900/80 backdrop-blur-sm border border-white/10 rounded-full z-10">
          <span className="text-[10px] font-semibold text-gray-300">
            {t(typeLabelKey)}
          </span>
        </div>
      )}

      {/* Status */}
      {statusStyle && (
        <div
          className={`absolute top-3 right-3 px-2.5 py-1 ${statusStyle.color} rounded-full z-10`}
        >
          <span className="text-[10px] font-semibold text-white">
            {t(statusStyle.labelKey)}
          </span>
        </div>
      )}

      {/* Preview */}
      <div className="relative aspect-video w-full overflow-hidden bg-dark-600">
        {image ? (
          // next/image mengecilkan dan mengubah format gambar secara
          // otomatis, sekaligus tetap menunda pemuatan seperti
          // loading="lazy" sebelumnya.
          <Image
            src={image}
            alt={`Tampilan proyek ${name} oleh Twenti Studio`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-500">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Konten */}
      <div className="flex-1 p-5 flex flex-col">
        <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider mb-1.5">
          {category}
        </span>

        <h3 className="text-base font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
          {name}
        </h3>

        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}

        <p className="text-gray-400 text-xs leading-relaxed mt-2 mb-4 line-clamp-2 flex-1">
          {description}
        </p>

        <div className="flex items-center gap-1.5 text-orange-500 text-xs font-medium group-hover:text-orange-400 transition-colors">
          <span>{t("products.viewDetails")}</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </button>
  );
};

export default ShowcaseCard;
