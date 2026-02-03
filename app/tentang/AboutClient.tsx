'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutClient = () => {
    const { t, isHydrated } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    if (!isHydrated) {
        return (
            <div className="min-h-screen bg-dark-900 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center bg-dark-900 relative overflow-hidden pt-24">
                <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {t('about.hero.title1')}{' '}
                        <span className="text-orange-500">{t('about.hero.title2')}</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                        {t('about.hero.subtitle')}
                    </p>

                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Our Purpose */}
                    <div className="bg-dark-700 border border-white/10 rounded-xl p-8 mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-orange-500">{t('about.purpose.title')}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {t('about.purpose.desc1')}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {t('about.purpose.desc2')}
                        </p>
                    </div>

                    {/* What We Do */}
                    <div className="bg-dark-700 border border-white/10 rounded-xl p-8 mb-12">
                        <h2 className="text-3xl font-bold mb-6">{t('about.whatWeDo.title')}</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-orange-500">{t('about.whatWeDo.web.title')}</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('about.whatWeDo.web.desc')}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-orange-500">{t('about.whatWeDo.mobile.title')}</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('about.whatWeDo.mobile.desc')}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-orange-500">{t('about.whatWeDo.uiux.title')}</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('about.whatWeDo.uiux.desc')}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-orange-500">{t('about.whatWeDo.consulting.title')}</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('about.whatWeDo.consulting.desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <div className="bg-dark-700 border border-white/10 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4">
                                {t('about.cta.title')}
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                {t('about.cta.desc')}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/kontak"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
                                >
                                    <span>{t('about.cta.contact')}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="https://interdots.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                                >
                                    <span>{t('about.cta.interdots')}</span>
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutClient;
