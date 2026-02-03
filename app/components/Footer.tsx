'use client';

import {
    ArrowRight,
    Github,
    Mail,
    MapPin
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t, isHydrated } = useLanguage();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/Twenti-Studio',
            icon: <Github className="w-5 h-5" />,
        },
    ];

    // Don't render until hydrated to prevent hydration mismatch
    if (!isHydrated) {
        return (
            <footer className="bg-dark-800 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="animate-pulse">
                        <div className="h-8 bg-dark-700 rounded w-32 mb-4" />
                        <div className="h-4 bg-dark-700 rounded w-48 mb-2" />
                        <div className="h-4 bg-dark-700 rounded w-40" />
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="bg-dark-800 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
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
                                <span className="text-orange-500">Studio</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-dark-600 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                            {t('footer.products')}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/produk"
                                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                >
                                    {t('footer.allProducts')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                            {t('footer.services')}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/layanan#web-development"
                                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                >
                                    {t('footer.webDev')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/layanan#mobile-app"
                                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                >
                                    {t('footer.mobileApp')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/layanan#design"
                                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                >
                                    {t('footer.uiuxDesign')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/layanan#konsultasi"
                                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                >
                                    {t('footer.consulting')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                            {t('footer.contactUs')}
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                                <a href="mailto:twentistudio@gmail.com" className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300">
                                    twentistudio@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                                <span className="text-sm text-gray-400">
                                    Balikpapan, Indonesia
                                </span>
                            </li>
                        </ul>
                        <Link
                            href="/kontak"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-full transition-colors duration-300"
                        >
                            <span>{t('footer.contactUs')}</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <p className='text-gray-400 text-sm mb-2'>{t('footer.partOf')}</p>
                        <p className="text-sm text-gray-500">
                            © {currentYear} Twenti Studio. {t('footer.rights')}
                        </p>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <Link href="/privasi" className="hover:text-orange-500 transition-colors duration-300">
                            {t('footer.privacy')}
                        </Link>
                        <span className="text-gray-600">•</span>
                        <Link href="/syarat" className="hover:text-orange-500 transition-colors duration-300">
                            {t('footer.terms')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
