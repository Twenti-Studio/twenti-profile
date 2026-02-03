'use client';

import {
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Products = () => {
    const { language } = useLanguage();
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

    const content = {
        id: {
            title: 'Butuh Solusi Custom?',
            desc: 'Selain produk yang kami kembangkan, tim kami juga siap membantu membangun solusi khusus yang disesuaikan dengan kebutuhan bisnis Anda.',
            cta: 'Lihat Layanan'
        },
        en: {
            title: 'Need a Custom Solution?',
            desc: 'In addition to our products, our team is also ready to help build custom solutions tailored to your business needs.',
            cta: 'View Services'
        }
    };

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
                    <div className="p-8 sm:p-12 bg-dark-700 border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-orange-500/30 transition-all duration-300">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">{content[language].title}</h3>
                            <p className="text-gray-400">
                                {content[language].desc}
                            </p>
                        </div>
                        <Link 
                            href="/layanan" 
                            className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors duration-300"
                        >
                            <span>{content[language].cta}</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
