'use client';

import { ArrowRight, Globe, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { language, setLanguage, t, isHydrated } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Static nav links - translation happens on render
    const navLinks = [
        { key: 'nav.home', href: '/' },
        { key: 'nav.about', href: '/tentang' },
        { key: 'nav.products', href: '/produk' },
        { key: 'nav.services', href: '/layanan' },
        { key: 'nav.contact', href: '/kontak' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'id' ? 'en' : 'id');
    };

    // Show skeleton during hydration to prevent mismatch
    if (!isHydrated) {
        return (
            <nav className="fixed top-4 left-4 right-4 z-50 rounded-2xl border bg-dark-900/50 backdrop-blur-sm border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-dark-700 rounded-lg animate-pulse" />
                            <div className="w-24 h-5 bg-dark-700 rounded animate-pulse" />
                        </div>
                        <div className="hidden md:flex items-center gap-1 bg-dark-800/50 rounded-full p-1">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className="w-16 h-8 bg-dark-700 rounded-full animate-pulse" />
                            ))}
                        </div>
                        <div className="hidden md:flex items-center gap-3">
                            <div className="w-16 h-9 bg-dark-700 rounded-full animate-pulse" />
                            <div className="w-28 h-10 bg-dark-700 rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <>
            {/* Modern Navbar with glassmorphism effect */}
            <nav
                className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl border ${isScrolled
                        ? 'bg-dark-900/80 backdrop-blur-md border-white/10 shadow-2xl'
                        : 'bg-dark-900/50 backdrop-blur-sm border-white/5'
                    }`}
                style={{
                    boxShadow: isScrolled ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : 'none'
                }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-9 h-9 relative transition-transform group-hover:scale-110 duration-300">
                                <Image
                                    src="/logo.png"
                                    alt="Twenti Studio Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-lg font-bold">
                                <span className="text-white">Twenti</span>
                                <span className="text-orange-500">Studio</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1 bg-dark-800/50 rounded-full p-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full ${isActive(link.href)
                                            ? 'text-white bg-orange-500/20 border border-orange-500/30'
                                            : 'text-gray-400 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {t(link.key)}
                                </Link>
                            ))}
                        </div>

                        {/* Right side buttons */}
                        <div className="hidden md:flex items-center gap-3">
                            {/* Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 px-3 py-2 bg-dark-700/50 border border-white/10 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:border-orange-500/30 transition-all duration-300"
                            >
                                <Globe className="w-4 h-4" />
                                <span>{language.toUpperCase()}</span>
                            </button>

                            {/* CTA Button */}
                            <Link
                                href="/kontak"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors duration-300"
                            >
                                <span>{t('nav.startProject')}</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div 
                    className="absolute inset-0 bg-dark-900/95 backdrop-blur-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                <div className={`relative flex flex-col items-center justify-center h-full transition-transform duration-300 ${
                    isMobileMenuOpen ? 'translate-y-0' : 'translate-y-10'
                }`}>
                    <div className="bg-dark-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 mx-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block text-xl font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${isActive(link.href)
                                        ? 'text-orange-500 bg-orange-500/10'
                                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {t(link.key)}
                            </Link>
                        ))}
                        
                        {/* Language Toggle for Mobile */}
                        <button
                            onClick={toggleLanguage}
                            className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                        >
                            <Globe className="w-5 h-5" />
                            <span>{language === 'id' ? 'Indonesia' : 'English'}</span>
                        </button>
                        
                        <Link
                            href="/kontak"
                            className="block mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full text-center transition-colors"
                        >
                            {t('nav.startProject')}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
