"use client";

import { useEffect, useRef, useState } from "react";

// ============================================
// REVEAL
// ============================================
// Membungkus elemen agar muncul dengan animasi fadeUp
// saat pertama kali masuk viewport. Animasi hanya dijalankan
// sekali (tidak berulang saat scroll naik-turun).
//
// Pakai `delay` untuk efek berurutan pada grid:
//   items.map((x, i) => <Reveal key={x} delay={i * 80}>...</Reveal>)
//
// Pengguna yang mengaktifkan "reduce motion" di OS-nya otomatis
// mendapat versi tanpa animasi (diatur di globals.css).
// ============================================

interface RevealProps {
  children: React.ReactNode;
  /** Jeda mulai animasi dalam milidetik */
  delay?: number;
  className?: string;
}

const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
