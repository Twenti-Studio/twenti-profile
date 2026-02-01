'use client';

import { ArrowRight, Bell, Clock, Rocket } from 'lucide-react';
import Link from 'next/link';

const ProductsClient = () => {
    return (
        <>
            {/* Hero Section - Coming Soon */}
            <section className="min-h-screen flex items-center justify-center bg-dark-900 relative overflow-hidden">
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

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                    {/* Animated Icon */}
                    {/* <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
                            <div className="relative w-24 h-24 flex items-center justify-center bg-gradient-to-br from-orange-500 to-pink-500 rounded-full">
                                <Rocket className="w-12 h-12 text-white" />
                            </div>
                        </div>
                    </div> */}

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Produk Kami{' '}
                        <span className="gradient-text">Segera Hadir</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Kami sedang mempersiapkan rangkaian aplikasi inovatif yang dirancang khusus untuk 
                        meningkatkan produktivitas dan efisiensi bisnis Anda. Nantikan peluncuran resmi kami!
                    </p>

                    {/* Feature Highlights */}
                    <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                        <div className="p-6 bg-dark-800/50 border border-white/5 rounded-xl backdrop-blur-sm">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg mb-4 mx-auto">
                                <Clock className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="font-semibold mb-2">Innovative</h3>
                            <p className="text-sm text-gray-500">Teknologi terkini</p>
                        </div>
                        <div className="p-6 bg-dark-800/50 border border-white/5 rounded-xl backdrop-blur-sm">
                            <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-lg mb-4 mx-auto">
                                <Rocket className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="font-semibold mb-2">Powerful</h3>
                            <p className="text-sm text-gray-500">Fitur lengkap</p>
                        </div>
                        <div className="p-6 bg-dark-800/50 border border-white/5 rounded-xl backdrop-blur-sm">
                            <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-lg mb-4 mx-auto">
                                <Bell className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="font-semibold mb-2">User-Friendly</h3>
                            <p className="text-sm text-gray-500">Mudah digunakan</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/layanan"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 btn-gradient text-white font-semibold rounded-full transition-transform hover:scale-105"
                        >
                            <span>Lihat Layanan Kami</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/kontak"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300"
                        >
                            <span>Hubungi Kami</span>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <p className="mt-12 text-sm text-gray-500">
                        Sambil menunggu, tim kami siap membantu Anda dengan{' '}
                        <Link href="/layanan" className="text-orange-500 hover:text-orange-400 transition-colors">
                            layanan pengembangan custom
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default ProductsClient;
