'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

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

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Produk', href: '/produk' },
        { name: 'Layanan', href: '/layanan' },
        { name: 'Kontak', href: '/kontak' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-dark-900/90 backdrop-blur-custom border-b border-white/10'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 relative">
                            <Image
                                src="/logo.png"
                                alt="Twenti Studio Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold">
                            <span className="text-white">Twenti</span>
                            <span className="gradient-text">Studio</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors duration-200 py-2 ${isActive(link.href)
                                        ? 'text-orange-500'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.href) && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-navy-700 to-orange-500 rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <Link
                        href="/kontak"
                        className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 btn-gradient text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform"
                    >
                        <span>Mulai Proyek</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 top-20 bg-dark-900/98 backdrop-blur-custom transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-2xl font-semibold transition-colors duration-200 ${isActive(link.href)
                                    ? 'text-orange-500'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/kontak"
                        className="mt-4 px-8 py-3 btn-gradient text-white text-lg font-semibold rounded-full"
                    >
                        Mulai Proyek
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
