import { ImageResponse } from "next/og";

// ============================================
// OPEN GRAPH IMAGE
// ============================================
// Gambar pratinjau saat tautan situs dibagikan ke WhatsApp,
// LinkedIn, X, dan sejenisnya. Dibuat langsung dari kode dengan
// ukuran 1200x630 (rasio yang diharapkan platform-platform itu),
// jadi logo persegi tidak terpotong.
//
// Kalau nanti punya gambar OG buatan desainer, ganti file ini
// dengan opengraph-image.png berukuran 1200x630.
// ============================================

export const alt =
  "Twenti Studio, app studio pengembang produk digital dan jasa pembuatan website, aplikasi, serta sistem bisnis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#0B0F17",
        backgroundImage:
          "radial-gradient(circle at 78% 22%, rgba(240,138,60,0.20) 0%, transparent 45%)",
      }}
    >
      {/* Nama studio */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
        <div
          style={{
            width: 14,
            height: 56,
            backgroundColor: "#F08A3C",
            borderRadius: 999,
            marginRight: 24,
          }}
        />
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
          <span style={{ color: "#FFFFFF" }}>Twenti</span>
          <span style={{ color: "#F08A3C" }}>Studio</span>
        </div>
      </div>

      {/* Positioning utama */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 62,
          fontWeight: 700,
          lineHeight: 1.18,
          color: "#FFFFFF",
          marginBottom: 32,
        }}
      >
        <span>Dari Masalah,</span>
        <span style={{ color: "#F08A3C" }}>Jadi Produk</span>
      </div>

      {/* Lini sekunder */}
      <div style={{ display: "flex", fontSize: 28, color: "#9CA3AF" }}>
        App Studio · Website · Aplikasi · Sistem Bisnis
      </div>
    </div>,
    size,
  );
}
