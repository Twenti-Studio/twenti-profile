"use client";

import { ArrowRight, ChevronDown, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// ============================================
// NAVBAR
// ============================================
// Item dikelompokkan agar tidak berjejer panjang:
//
//   Beranda | Karya v | Layanan v | Studio v | Kontak
//
// URUTAN PENTING: grup "Karya" (produk sendiri + portofolio klien)
// diletakkan sebelum "Layanan". Twenti adalah app studio yang
// membangun produk sendiri lebih dulu; layanan adalah lini sekunder.
// Di dalam grup Karya pun, Produk Twenti berada di atas Portofolio Klien.
//
// Cara menambah menu: tambahkan entri ke `navGroups` di bawah.
// Entri tanpa `items` tampil sebagai tautan biasa.
// ============================================

interface NavItem {
  key: string;
  href: string;
  descKey?: string;
}

interface NavGroup {
  key: string;
  /** Tautan langsung (grup tanpa dropdown) */
  href?: string;
  /** Isi dropdown */
  items?: NavItem[];
}

const navGroups: NavGroup[] = [
  { key: "nav.home", href: "/" },
  {
    key: "nav.group.work",
    items: [
      { key: "nav.products", href: "/produk", descKey: "nav.desc.products" },
      {
        key: "nav.portfolio",
        href: "/portofolio",
        descKey: "nav.desc.portfolio",
      },
    ],
  },
  {
    key: "nav.group.services",
    items: [
      { key: "nav.services", href: "/layanan", descKey: "nav.desc.services" },
      { key: "nav.pricing", href: "/paket-harga", descKey: "nav.desc.pricing" },
    ],
  },
  {
    key: "nav.group.studio",
    items: [
      { key: "nav.about", href: "/tentang", descKey: "nav.desc.about" },
      { key: "nav.insight", href: "/insight", descKey: "nav.desc.insight" },
    ],
  },
  { key: "nav.contact", href: "/kontak" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  /** Grup yang dropdown-nya sedang terbuka di desktop */
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  /** Grup yang accordion-nya terbuka di menu mobile */
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup dropdown saat klik di luar navbar atau menekan Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Menu ditutup lewat handler klik, bukan lewat effect yang memantau
  // pathname. Memanggil setState langsung di dalam effect akan memicu
  // render berantai yang tidak perlu.
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileGroup(null);
  };

  const closeAllMenus = () => {
    setOpenGroup(null);
    closeMobileMenu();
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /** Grup dianggap aktif kalau salah satu anaknya aktif */
  const isGroupActive = (group: NavGroup) => {
    if (group.href) return isActive(group.href);
    return group.items?.some((item) => isActive(item.href)) ?? false;
  };

  // Jeda singkat sebelum menutup, supaya kursor sempat bergerak
  // dari tombol menuju isi dropdown tanpa menu keburu hilang.
  const handleGroupEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(key);
  };

  const handleGroupLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 150);
  };

  const toggleLanguage = () => setLanguage(language === "id" ? "en" : "id");

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl border ${
          isScrolled
            ? "bg-dark-900/80 backdrop-blur-md border-white/10 shadow-2xl"
            : "bg-dark-900/50 backdrop-blur-sm border-white/5"
        }`}
        style={{
          boxShadow: isScrolled
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-9 h-9 relative transition-transform group-hover:scale-110 duration-300">
                <Image
                  src="/logo.png"
                  alt="Logo Twenti Studio"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold">
                <span className="text-white">Twenti</span>
                <span className="text-orange-500">Studio</span>
              </span>
            </Link>

            {/* Navigasi desktop */}
            <div className="hidden lg:flex items-center gap-1 bg-dark-800/50 rounded-full p-1">
              {navGroups.map((group, index) => {
                const active = isGroupActive(group);
                const isOpen = openGroup === group.key;

                // Tautan biasa (tanpa dropdown)
                if (group.href) {
                  return (
                    <Link
                      key={group.key}
                      href={group.href}
                      onClick={closeAllMenus}
                      style={{ animationDelay: `${index * 45}ms` }}
                      className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap animate-[navItemIn_0.4s_ease-out_backwards] ${
                        active
                          ? "text-white bg-orange-500/20 border border-orange-500/30"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {t(group.key)}
                    </Link>
                  );
                }

                // Grup dengan dropdown
                return (
                  <div
                    key={group.key}
                    className="relative"
                    onMouseEnter={() => handleGroupEnter(group.key)}
                    onMouseLeave={handleGroupLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenGroup(isOpen ? null : group.key)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      style={{ animationDelay: `${index * 45}ms` }}
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap animate-[navItemIn_0.4s_ease-out_backwards] ${
                        active || isOpen
                          ? "text-white bg-orange-500/20 border border-orange-500/30"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{t(group.key)}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Isi dropdown.
                        Selalu ada di DOM (disembunyikan lewat CSS), bukan
                        dipasang-lepas dengan `isOpen &&`. Kalau dilepas, tautan
                        di dalamnya hilang dari HTML dan mesin pencari tidak
                        menemukan halaman Portofolio, Paket & Harga, dan lainnya.

                        Animasi dipasang di lapisan dalam. Kalau digabung dengan
                        -translate-x-1/2 di lapisan luar, transform animasi akan
                        menimpanya dan dropdown melompat ke samping saat muncul. */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 transition-opacity duration-200 ${
                        isOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible pointer-events-none"
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <div
                        className={`bg-dark-800 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-2 overflow-hidden ${
                          isOpen ? "animate-[dropdownIn_0.22s_ease-out]" : ""
                        }`}
                      >
                        {group.items?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeAllMenus}
                            className={`block px-4 py-3 rounded-xl transition-colors duration-200 ${
                              isActive(item.href)
                                ? "bg-orange-500/10"
                                : "hover:bg-white/5"
                            }`}
                          >
                            <span
                              className={`block text-sm font-semibold mb-0.5 ${
                                isActive(item.href)
                                  ? "text-orange-500"
                                  : "text-white"
                              }`}
                            >
                              {t(item.key)}
                            </span>
                            {item.descKey && (
                              <span className="block text-xs text-gray-500 leading-relaxed">
                                {t(item.descKey)}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tombol kanan */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 bg-dark-700/50 border border-white/10 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:border-orange-500/30 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>

              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors duration-300"
              >
                <span>{t("nav.startProject")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tombol menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Buka menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-dark-900/95 backdrop-blur-md"
          onClick={closeMobileMenu}
        />
        <div
          className={`relative flex flex-col items-center justify-center h-full transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "translate-y-10"
          }`}
        >
          <div className="w-full max-w-sm bg-dark-800/60 backdrop-blur-md rounded-2xl p-5 border border-white/10 mx-4 max-h-[80vh] overflow-y-auto">
            {navGroups.map((group, index) => {
              const active = isGroupActive(group);

              // Tautan biasa
              if (group.href) {
                return (
                  <Link
                    key={group.key}
                    href={group.href}
                    onClick={closeMobileMenu}
                    style={{
                      animationDelay: isMobileMenuOpen
                        ? `${index * 40}ms`
                        : "0ms",
                    }}
                    className={`block text-base font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "animate-[navItemIn_0.35s_ease-out_backwards]"
                        : ""
                    } ${
                      active
                        ? "text-orange-500 bg-orange-500/10"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {t(group.key)}
                  </Link>
                );
              }

              // Grup: accordion
              const isExpanded = openMobileGroup === group.key;
              return (
                <div
                  key={group.key}
                  style={{
                    animationDelay: isMobileMenuOpen
                      ? `${index * 40}ms`
                      : "0ms",
                  }}
                  className={
                    isMobileMenuOpen
                      ? "animate-[navItemIn_0.35s_ease-out_backwards]"
                      : ""
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileGroup(isExpanded ? null : group.key)
                    }
                    aria-expanded={isExpanded}
                    className={`w-full flex items-center justify-between text-base font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                      active
                        ? "text-orange-500"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{t(group.key)}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Sama seperti dropdown desktop: tetap di DOM, disembunyikan
                      lewat CSS agar tautannya terbaca mesin pencari. */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                    aria-hidden={!isExpanded}
                  >
                    <div className="pl-3 pb-2 space-y-1">
                      {group.items?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={`block py-2.5 px-4 rounded-lg border-l-2 transition-colors duration-200 ${
                            isActive(item.href)
                              ? "border-orange-500 text-orange-500 bg-orange-500/10"
                              : "border-white/10 text-gray-400 hover:text-white hover:border-orange-500/40"
                          }`}
                        >
                          <span className="block text-sm font-medium">
                            {t(item.key)}
                          </span>
                          {item.descKey && (
                            <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">
                              {t(item.descKey)}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Pengalih bahasa */}
            <button
              onClick={toggleLanguage}
              className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-dark-700/50 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>{language === "id" ? "Indonesia" : "English"}</span>
            </button>

            <Link
              href="/kontak"
              onClick={closeMobileMenu}
              className="block mt-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full text-center transition-colors"
            >
              {t("nav.startProject")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
