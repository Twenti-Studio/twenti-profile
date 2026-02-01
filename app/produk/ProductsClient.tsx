'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// ============================================
// TEMPLATE: CARA MENAMBAH PRODUK BARU
// ============================================
// 1. Tambahkan object produk baru ke array 'products' di bawah
// 2. Isi semua field yang diperlukan:
//    - name: Nama produk
//    - description: Deskripsi singkat produk
//    - category: Kategori produk (Web App, Mobile App, SaaS, dll)
//    - status: 'coming-soon', 'available', atau 'beta'
//    - link: URL produk (internal /produk/nama-produk atau external https://...)
//    - isExternal: true jika link eksternal, false jika internal
//    - features: Array fitur-fitur produk (max 3-4)
//    - image: Path ke gambar produk (contoh: '/images/products/nama-produk.png')
//             Gambar akan ditampilkan sebagai preview produk
//    - gradient: Warna gradient fallback jika gambar belum tersedia
// ============================================

interface Product {
    name: string;
    description: string;
    category: string;
    status: 'coming-soon' | 'available' | 'beta';
    link: string;
    isExternal: boolean;
    features: string[];
    gradient: string; // Tailwind gradient class - fallback jika tidak ada image
    image?: string; // Path ke gambar produk
}

const products: Product[] = [
    {
        name: 'Games Twenti',
        description: 'Web Store resmi untuk berbagai kebutuhan digital siap memenuhi hiburan Anda kapan saja.',
        category: 'Business',
        status: 'available',
        link: 'https://games.twenti.studio',
        isExternal: true,
        features: [
            'Tempat Top-up Game',
            'Tersedia Beragam Voucher',
            'E-Books & Digital Goods',
            'Social Media Services'
        ],
        gradient: 'from-blue-500 to-cyan-500',
        image: '/image/games-twenti.png'
    },
    
    {
        name: 'Mita',
        description: 'Mita adalah platform mikro tasking yang memberikan tugas-tugas kecil kepada pengguna untuk diselesaikan dengan imbalan tertentu.',
        // icon: Bell,
        category: 'Tasking',
        status: 'beta',
        link: 'https://mita.twenti.studio/',
        isExternal: true,
        features: [
            'Micro tasking',
            'Auto earnings',
            'Diverse tasks',
            'Many rewards'
        ],
        gradient: 'from-orange-500 to-pink-500',
        image: '/image/mita.png'
    },

    // {
    //     name: 'TwentiPay',
    //     description: 'Solusi pembayaran digital yang aman dan cepat untuk bisnis online Anda dengan integrasi payment gateway lengkap.',
    //     // icon: Sparkles,
    //     category: 'Finance',
    //     status: 'available',
    //     link: '/produk/twentipay',
    //     isExternal: false,
    //     features: [
    //         'Multiple Payment Methods',
    //         'Secure Transactions',
    //         'Auto Settlement',
    //         'Detailed Reports'
    //     ],
    //     gradient: 'from-green-500 to-emerald-500'
    // },

    // TAMBAHKAN PRODUK BARU DI SINI
    // {
    //     name: 'Nama Produk',
    //     description: 'Deskripsi produk...',
    //     category: 'Kategori',
    //     status: 'coming-soon',
    //     link: '/produk/nama-produk',
    //     isExternal: false,
    //     features: ['Fitur 1', 'Fitur 2', 'Fitur 3'],
    //     gradient: 'from-purple-500 to-indigo-500',
    //     image: '/images/products/nama-produk.jpg' // Path ke gambar produk
    // },
];

const ProductsClient = () => {
    // Hitung jumlah produk berdasarkan status
    const availableCount = products.filter(p => p.status === 'available').length;
    const betaCount = products.filter(p => p.status === 'beta').length;
    const comingSoonCount = products.filter(p => p.status === 'coming-soon').length;

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[55vh] flex items-center justify-center bg-dark-900 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-navy-700/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-5">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Produk Kami{' '}
                        <span className="gradient-text">untuk Bisnis Anda</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Rangkaian aplikasi inovatif yang dirancang khusus untuk meningkatkan produktivitas dan efisiensi bisnis Anda.
                    </p>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Jelajahi <span className="gradient-text">Produk Kami</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Pilih solusi yang tepat untuk kebutuhan bisnis Anda
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <div className="inline-block p-8 bg-dark-900 border border-white/10 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4">Butuh Solusi Custom?</h3>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Tim kami siap membantu mengembangkan aplikasi sesuai kebutuhan spesifik bisnis Anda
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/layanan"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 btn-gradient text-white font-semibold rounded-full transition-transform hover:scale-105"
                                >
                                    <span>Lihat Layanan</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/kontak"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300"
                                >
                                    <span>Hubungi Kami</span>
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
}

const ProductCard = ({ product }: ProductCardProps) => {
    const statusConfig = {
        'available': {
            label: 'Available',
            color: 'bg-green-500',
            textColor: 'text-green-400',
            borderColor: 'border-green-500/20'
        },
        'beta': {
            label: 'Beta',
            color: 'bg-blue-500',
            textColor: 'text-blue-400',
            borderColor: 'border-blue-500/20'
        },
        'coming-soon': {
            label: 'Coming Soon',
            color: 'bg-orange-500',
            textColor: 'text-orange-400',
            borderColor: 'border-orange-500/20'
        }
    };

    const status = statusConfig[product.status];

    const cardContent = (
        <div className="group relative h-full bg-dark-900 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/5 overflow-hidden flex flex-col">
            {/* Status Badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 ${status.color}/10 ${status.borderColor} border rounded-full z-10 backdrop-blur-sm`}>
                <span className={`text-xs font-semibold ${status.textColor}`}>
                    {status.label}
                </span>
            </div>

            {/* Product Image Preview */}
            <div className="relative h-48 w-full overflow-hidden">
                {product.image ? (
                    <>
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                    </>
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                        <span className="text-4xl font-bold text-white/20">{product.name.charAt(0)}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {product.description}
                    </p>
                </div>

                {/* Features */}
                <div className="mb-6 flex-1">
                <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                            <span>{feature}</span>
                        </li>
                    ))}
                    {product.features.length > 3 && (
                        <li className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                            <span>+{product.features.length - 3} more features</span>
                        </li>
                    )}
                </ul>
            </div>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-3 transition-all mt-auto">
                    <span>{product.status === 'available' ? 'Lihat Detail' : 'Pelajari Lebih Lanjut'}</span>
                    {product.isExternal ? (
                        <ExternalLink className="w-4 h-4" />
                    ) : (
                        <ArrowRight className="w-4 h-4" />
                    )}
                </div>
            </div>
        </div>
    );

    // Render as Link or external anchor based on isExternal
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
