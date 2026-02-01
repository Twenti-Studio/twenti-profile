'use client';

import {
    ArrowRight,
    BarChart3,
    CheckSquare,
    Users2
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Products = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const products = [
        {
            name: 'Twenti Analytics',
            tagline: 'Data Insights Platform',
            description: 'Platform analitik bisnis yang powerful untuk melacak, menganalisis, dan memvisualisasikan data Anda secara real-time.',
            icon: <BarChart3 className="w-8 h-8" />,
            status: 'Coming Soon',
            features: ['Dashboard interaktif', 'Laporan otomatis', 'Integrasi API'],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'Twenti CRM',
            tagline: 'Customer Relationship Manager',
            description: 'Kelola hubungan pelanggan dengan lebih efektif. Lacak leads, kelola pipeline penjualan, dan tingkatkan retensi pelanggan.',
            icon: <Users2 className="w-8 h-8" />,
            status: 'Coming Soon',
            features: ['Manajemen kontak', 'Pipeline visual', 'Email automation'],
            color: 'from-emerald-500 to-teal-500',
        },
        {
            name: 'Twenti Tasks',
            tagline: 'Project Management Tool',
            description: 'Aplikasi manajemen proyek dan tugas dengan fitur AI untuk prioritisasi otomatis. Kolaborasi tim jadi lebih mudah.',
            icon: <CheckSquare className="w-8 h-8" />,
            status: 'Coming Soon',
            features: ['Kanban board', 'Time tracking', 'Team collaboration'],
            color: 'from-purple-500 to-indigo-500',
        },
    ];

    return (
        <section
            id="products"
            ref={sectionRef}
            className={`py-24 bg-dark-900 relative overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Bottom CTA */}
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 sm:p-12 bg-dark-800 border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">Butuh Solusi Custom?</h3>
                            <p className="text-gray-400">
                                Sambil menunggu produk kami rilis, tim kami siap membangun
                                solusi khusus yang disesuaikan dengan kebutuhan bisnis Anda.
                            </p>
                        </div>
                        <Link 
                            href="/layanan" 
                            className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-4 btn-gradient text-white font-bold rounded-full transition-transform hover:scale-105"
                        >
                            <span>Lihat Layanan Custom</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
