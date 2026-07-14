'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ShowcaseModal, { ShowcaseItem } from '../components/ShowcaseModal';
import { useLanguage } from '../context/LanguageContext';

// Loading skeleton for hydration
const LoadingSkeleton = () => (
  <div className="min-h-screen bg-dark-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <div className="w-48 h-4 bg-dark-700 rounded animate-pulse mx-auto" />
    </div>
  </div>
);

// ============================================
// TEMPLATE: CARA MENAMBAH PRODUK BARU
// ============================================
// 1. Tambahkan object produk baru ke array 'products' di bawah
// 2. Isi semua field yang diperlukan:
//    - name: Nama produk
//    - description: Ringkasan singkat produk (id & en) -> tampil di modal
//    - category: Kategori produk (Web App, Digital Store, dll)
//    - status: 'coming-soon', 'available', atau 'development'
//    - link: URL produk. Ini yang dibuka tombol "Kunjungi Sekarang" di modal
//    - image: Path ke logo/gambar produk (contoh: '/image/nama-produk.png')
// ============================================

interface Product {
    name: string;
    description: { id: string; en: string };
    category: string;
    status: 'coming-soon' | 'available' | 'development';
    link: string;
    image?: string;
}

const products: Product[] = [
    {
        name: 'Games Twenti',
        description: {
            id: 'Platform digital store resmi untuk berbagai kebutuhan digital—mulai dari top-up game, voucher, e-books, hingga layanan media sosial.',
            en: 'Official digital store platform for various digital needs—from game top-ups, vouchers, e-books, to social media services.'
        },
        category: 'Digital Store',
        status: 'available',
        link: 'https://games.twenti.studio',
        image: '/image/games.png'
    },
    {
        name: 'MiTa | Mikro Task',
        description: {
            id: 'Platform mikro tasking yang memberikan tugas-tugas sederhana kepada pengguna untuk diselesaikan dengan imbalan tertentu.',
            en: 'A micro tasking platform that provides simple tasks for users to complete with certain rewards.'
        },
        category: 'Task Platform',
        status: 'development',
        link: 'https://mita.twenti.studio/',
        image: '/image/mita-test.png'
    },
    {
        name: 'Healthify',
        description: {
            id: 'Asisten AI yang membantu kamu memverifikasi klaim kesehatan dalam hitungan detik, bukan berdasarkan opini, tapi berdasarkan ribuan publikasi ilmiah.',
            en: 'AI assistant that helps you verify health claims in seconds, not based on opinions, but based on thousands of scientific publications.'
        },
        category: 'AI Health Hoax Detector',
        status: 'available',
        link: 'https://healthify.twenti.studio',
        image: '/image/healti.png'
    },
    {
        name: 'FiNot | Finance Notes',
        description: {
            id: 'Asisten AI yang membantu kamu mencatat pengeluaran dan pemasukan dengan mudah dan cepat.',
            en: 'AI assistant that helps you record expenses and income easily and quickly.'
        },
        category: 'AI Personal Finance Assistant',
        status: 'available',
        link: 'https://fi-note.app',
        image: '/image/FiNot.png'
    },
    {
        name: 'Well Track',
        description: {
            id: 'Sehat itu harusnya semudah bercerita.',
            en: 'Health should be as easy as telling a story.'
        },
        category: 'AI Personal Health Assistant',
        status: 'available',
        link: 'https://welltrack.twenti.studio',
        image: '/image/welltrack.png'
    },
];

// ============================================
// TEMPLATE: CARA MENAMBAH PORTOFOLIO KLIEN
// ============================================
// Tambahkan object ke array 'clients' di bawah:
//    - name: Nama project/website milik klien
//    - client: Nama klien / perusahaan pemilik project
//    - description: Ringkasan singkat project (id & en) -> tampil di modal
//    - category: Jenis project (Company Profile, Web App, E-Commerce, dll)
//    - link: URL live project. Dibuka tombol "Kunjungi Sekarang" di modal
//    - image: Path ke logo/screenshot project (contoh: '/image/nama.png')
//
// Contoh:
// {
//     name: 'Slipku',
//     client: 'PT Contoh Sejahtera',
//     description: {
//         id: 'Ringkasan singkat project dalam bahasa Indonesia.',
//         en: 'Short project summary in English.'
//     },
//     category: 'Web App',
//     link: 'https://slipku.example.com',
//     image: '/image/slipku.png'
// },
// ============================================

interface ClientWork {
    name: string;
    client: string;
    description: { id: string; en: string };
    category: string;
    link: string;
    image?: string;
}

const clients: ClientWork[] = [
    {
        name: 'Simaggot Balkot',
        client: 'Kecamatan Balikpapan Kota',
        description: {
            id: 'Sistem digitalisasi operasional budidaya maggot Kecamatan Balikpapan Kota. Menyatukan pendataan lapangan, koordinasi petugas, pencatatan aset, dan tabungan sampah warga dalam satu alur—dengan perhitungan setoran warga yang terhitung otomatis, sehingga pengelola bisa mengambil keputusan dari data yang utuh.',
            en: 'A system that digitizes maggot cultivation operations for the Balikpapan Kota District. It unifies field data collection, officer coordination, asset tracking, and residents\' waste savings into a single flow—with resident deposits calculated automatically, so managers can make decisions based on complete data.'
        },
        category: 'Waste Management System',
        link: 'https://simaggotbalkot.com',
        image: '/image/simaggot.png'
    },
    {
        name: 'KlirLogistik',
        client: 'KlirLogistik',
        description: {
            id: 'Layanan logistik dan ekspedisi B2B berbasis langganan dirancang untuk bisnis yang mengirim rutin dan butuh alur pengiriman yang tertata, bukan sekali jalan.',
            en: 'A subscription-based B2B logistics and shipping service built for businesses that ship regularly and need a structured delivery flow, not one-off runs.'
        },
        category: 'B2B Logistics',
        link: 'https://klirlogistik.technocrats.studio',
        image: '/image/klirlogistik.png'
    },
];

const ProductsClient = () => {
    const { t, language, isHydrated } = useLanguage();
    const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

    // Show loading skeleton until hydrated to prevent hydration mismatch
    if (!isHydrated) {
        return <LoadingSkeleton />;
    }

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[55vh] flex items-center justify-center bg-dark-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-5">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {t('products.titlePrefix')}{' '}
                        <span className="text-orange-500">{t('products.title')}</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                        {t('products.subtitle')}
                    </p>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className="py-20 bg-dark-800 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                            {t('products.explore')} <span className="text-orange-500">{t('products.exploreHighlight')}</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {t('products.chooseRight')}
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ShowcaseCard
                                key={product.name}
                                name={product.name}
                                category={product.category}
                                description={product.description[language]}
                                image={product.image}
                                status={product.status}
                                onClick={() => setSelectedItem({
                                    name: product.name,
                                    description: product.description,
                                    category: product.category,
                                    link: product.link,
                                    image: product.image,
                                })}
                                t={t}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Portfolio Section */}
            {clients.length > 0 && (
                <section className="py-20 bg-dark-900 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                                {t('portfolio.label')}
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">
                                {t('portfolio.title')} <span className="text-orange-500">{t('portfolio.titleHighlight')}</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                {t('portfolio.subtitle')}
                            </p>
                        </div>

                        {/* Clients Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {clients.map((work) => (
                                <ShowcaseCard
                                    key={work.name}
                                    name={work.name}
                                    category={work.category}
                                    description={work.description[language]}
                                    image={work.image}
                                    subtitle={work.client}
                                    onClick={() => setSelectedItem({
                                        name: work.name,
                                        description: work.description,
                                        category: work.category,
                                        link: work.link,
                                        image: work.image,
                                        badge: { id: work.client, en: work.client },
                                    })}
                                    t={t}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block p-8 bg-dark-700 border border-white/10 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">{t('products.customSolution')}</h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            {t('products.customDesc')}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/layanan"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
                            >
                                <span>{t('products.viewServices')}</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/kontak"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300"
                            >
                                <span>{t('products.contactUs')}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detail Modal: logo, nama, ringkasan, tombol Kunjungi Sekarang */}
            <ShowcaseModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </>
    );
};

// ============================================
// SHOWCASE CARD (dipakai produk & portofolio klien)
// ============================================
interface ShowcaseCardProps {
    name: string;
    category: string;
    description: string;
    image?: string;
    subtitle?: string;
    status?: 'coming-soon' | 'available' | 'development';
    onClick: () => void;
    t: (key: string) => string;
}

const statusConfig = {
    'available': { labelKey: 'products.available', color: 'bg-green-500' },
    'development': { labelKey: 'products.development', color: 'bg-blue-500' },
    'coming-soon': { labelKey: 'products.comingSoon', color: 'bg-orange-500' },
};

const ShowcaseCard = ({ name, category, description, image, subtitle, status, onClick, t }: ShowcaseCardProps) => {
    // Badge status hanya ditampilkan kalau produk belum 'available'
    const showStatus = status && status !== 'available';
    const statusStyle = showStatus ? statusConfig[status] : null;

    return (
        <button
            type="button"
            onClick={onClick}
            className="group relative text-left w-full h-full bg-dark-700 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
        >
            {/* Status Badge */}
            {statusStyle && (
                <div className={`absolute top-3 right-3 px-2.5 py-1 ${statusStyle.color} rounded-full z-10`}>
                    <span className="text-[10px] font-semibold text-white">
                        {t(statusStyle.labelKey)}
                    </span>
                </div>
            )}

            {/* Image Preview */}
            <div className="relative aspect-video w-full overflow-hidden bg-dark-600">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-gray-500">{name.charAt(0)}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col">
                {/* Category Tag */}
                <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider mb-1.5">
                    {category}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                    {name}
                </h3>

                {/* Subtitle (nama klien, kalau ada) */}
                {subtitle && (
                    <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
                )}

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed mt-2 mb-4 line-clamp-2 flex-1">
                    {description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-orange-500 text-xs font-medium group-hover:text-orange-400 transition-colors">
                    <span>{t('products.viewDetails')}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
            </div>
        </button>
    );
};

export default ProductsClient;
