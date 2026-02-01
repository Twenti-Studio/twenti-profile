'use client';

import {
    ArrowRight,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const productLinks = [
        { name: 'Semua Produk', href: '/produk' },
        // { name: 'Tasky', href: '/produk#tasky' },
        // { name: 'FinTrack', href: '/produk#fintrack' },
        // { name: 'EduLearn', href: '/produk#edulearn' },
    ];

    const serviceLinks = [
        { name: 'Web Development', href: '/layanan/web-development' },
        { name: 'Mobile App', href: '/layanan/mobile-app' },
        { name: 'UI/UX Design', href: '/layanan/design' },
        { name: 'Konsultasi', href: '/layanan/konsultasi' },
    ];

    const socialLinks = [
        // {
        //     name: 'Instagram',
        //     href: 'https://instagram.com/twentistudio',
        //     icon: <Instagram className="w-5 h-5" />,
        // },
        // {
        //     name: 'LinkedIn',
        //     href: 'https://linkedin.com/company/twentistudio',
        //     icon: <Linkedin className="w-5 h-5" />,
        // },
        {
            name: 'GitHub',
            href: 'https://github.com/Twenti-Studio',
            icon: <Github className="w-5 h-5" />,
        },
        // {
        //     name: 'WhatsApp',
        //     href: 'https://wa.me/6281234567890',
        //     icon: <MessageCircle className="w-5 h-5" />,
        // },
    ];

    return (
        <footer className="bg-dark-800 border-t border-white/5">
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
                                <span className="gradient-text">Studio</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            App studio yang memproduksi aplikasi inovatif dan menyediakan
                            layanan pengembangan web profesional untuk bisnis Anda.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-dark-600 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-navy-700 hover:to-orange-500 hover:border-transparent transition-all duration-300"
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
                            Produk
                        </h4>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                            Layanan
                        </h4>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <a href="mailto:twentistudio@gmail.com" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                                    twentistudio@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-400">
                                    Jakarta, Indonesia
                                </span>
                            </li>
                        </ul>
                        <Link
                            href="/kontak"
                            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-dark-600 border border-orange-500/30 text-orange-500 text-sm font-medium rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
                        >
                            <span>Hubungi Kami</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {currentYear} Twenti Studio. Hak cipta dilindungi.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-orange-500 transition-colors">
                            Kebijakan Privasi
                        </Link>
                        <span className="opacity-30">•</span>
                        <Link href="/terms" className="hover:text-orange-500 transition-colors">
                            Syarat & Ketentuan
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
