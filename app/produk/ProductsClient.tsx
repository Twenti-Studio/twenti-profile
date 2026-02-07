'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
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
//    - description: Deskripsi singkat produk (id & en)
//    - category: Kategori produk (Web App, Mobile App, SaaS, dll)
//    - status: 'coming-soon', 'available', atau 'beta'
//    - link: URL produk (internal /produk/nama-produk atau external https://...)
//    - isExternal: true jika link eksternal, false jika internal
//    - image: Path ke gambar produk (contoh: '/images/products/nama-produk.png')
//    - gradient: Warna gradient fallback jika gambar belum tersedia
// ============================================

interface Product {
    name: string;
    description: { id: string; en: string };
    category: string;
    status: 'coming-soon' | 'available' | 'development';
    link: string;
    isExternal: boolean;
    gradient: string;
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
        isExternal: true,
        gradient: 'from-blue-500 to-cyan-500',
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
        isExternal: true,
        gradient: 'from-orange-500 to-pink-500',
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
        isExternal: true,
        gradient: 'from-orange-500 to-pink-500',
        image: '/image/healti.png'
    },
    {
        name: 'Slipku',
        description: {
            id: 'Asisten AI yang membantu kamu mencatat pengeluaran dan pemasukan dengan mudah dan cepat.',
            en: 'AI assistant that helps you record expenses and income easily and quickly.'
        },
        category: 'AI Personal Finance Assistant',
        status: 'available',
        link: 'https://t.me/slipku_bot',
        isExternal: true,
        gradient: 'from-orange-500 to-pink-500',
        image: '/image/slipku.png'
    },
    
];

const ProductsClient = () => {
    const { t, language, isHydrated } = useLanguage();

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
                    <div className="grid md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} language={language} t={t} />
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
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
                </div>
            </section>
        </>
    );
};

// ============================================
// PRODUCT CARD COMPONENT
// ============================================
interface ProductCardProps {
    product: Product;
    language: 'id' | 'en';
    t: (key: string) => string;
}

const ProductCard = ({ product, language, t }: ProductCardProps) => {
    const statusConfig = {
        'available': {
            labelKey: 'products.available',
            color: 'bg-green-500',
        },
        'development': {
            labelKey: 'products.development',
            color: 'bg-blue-500',
        },
        'coming-soon': {
            labelKey: 'products.comingSoon',
            color: 'bg-orange-500',
        }
    };

    const status = statusConfig[product.status];
    const shouldShowStatus = product.status !== 'available';

    const cardContent = (
        <div 
            className="group relative h-full bg-dark-700 border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all duration-500 overflow-hidden flex flex-col"
        >
            {/* Status Badge */}
            {shouldShowStatus && (
                <div className={`absolute top-4 right-4 px-3 py-1.5 ${status.color} rounded-full z-10`}>
                    <span className="text-xs font-semibold text-white">
                        {t(status.labelKey)}
                    </span>
                </div>
            )}

            {/* Product Image Preview */}
            <div className="relative aspect-4/3 w-full overflow-hidden">
                {product.image ? (
                    <>
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain bg-dark-600 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-500" />
                    </>
                ) : (
                    <div className="w-full h-full bg-dark-600 flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-500">{product.name.charAt(0)}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
                {/* Category Tag */}
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-2">
                    {product.category}
                </span>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors duration-300">
                    {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {product.description[language]}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-orange-500 font-medium group-hover:text-orange-400 transition-colors">
                    <span className="text-sm">
                        {product.status === 'available' ? t('products.viewDetails') : t('products.learnMore')}
                    </span>
                    <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                        {product.isExternal ? (
                            <ExternalLink className="w-4 h-4" />
                        ) : (
                            <ArrowRight className="w-4 h-4" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    if (product.isExternal) {
        return (
            <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
            >
                {cardContent}
            </a>
        );
    }

    return (
        <Link href={product.link} className="block h-full">
            {cardContent}
        </Link>
    );
};

export default ProductsClient;
