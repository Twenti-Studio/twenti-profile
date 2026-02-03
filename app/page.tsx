'use client';

import {
  ArrowRight,
  CheckCircle,
  Laptop,
  Layout,
  Palette,
  Smartphone,
  Star
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Products from './components/Products/Products';
import { useLanguage } from './context/LanguageContext';

// Loading skeleton for hydration
const LoadingSkeleton = () => (
  <div className="min-h-screen bg-dark-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <div className="w-48 h-4 bg-dark-700 rounded animate-pulse mx-auto" />
    </div>
  </div>
);

export default function Home() {
  const { t, language, isHydrated } = useLanguage();

  // Show loading skeleton until hydrated to prevent hydration mismatch
  if (!isHydrated) {
    return <LoadingSkeleton />;
  }

  const features = [
    {
      icon: <Laptop className="w-8 h-8" />,
      titleKey: 'home.features.webDev.title',
      descKey: 'home.features.webDev.desc',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      titleKey: 'home.features.mobile.title',
      descKey: 'home.features.mobile.desc',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      titleKey: 'home.features.saas.title',
      descKey: 'home.features.saas.desc',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      titleKey: 'home.features.design.title',
      descKey: 'home.features.design.desc',
    },
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'CEO, TechStartup',
      content: {
        id: 'Twenti Studio membantu kami membangun platform yang solid dan scalable. Tim yang profesional dengan komunikasi yang baik sepanjang proyek.',
        en: 'Twenti Studio helped us build a solid and scalable platform. Professional team with great communication throughout the project.'
      },
      avatar: 'BS',
    },
    {
      name: 'Siti Rahayu',
      role: 'Founder, EduTech',
      content: {
        id: 'Aplikasi yang dibangun Twenti Studio sangat membantu bisnis kami berkembang. Proses pengembangan terstruktur dan hasilnya memuaskan.',
        en: 'The application built by Twenti Studio has greatly helped our business grow. Structured development process with satisfying results.'
      },
      avatar: 'SR',
    },
    {
      name: 'Ahmad Hidayat',
      role: 'Manager, FinCorp',
      content: {
        id: 'Kualitas kerja yang sangat baik dengan timeline yang realistis. Kami sangat puas dengan sistem yang dihasilkan.',
        en: 'Excellent work quality with realistic timeline. We are very satisfied with the resulting system.'
      },
      avatar: 'AH',
    },
  ];

  const faqs = [
    { qKey: 'faq.q1', aKey: 'faq.a1' },
    { qKey: 'faq.q2', aKey: 'faq.a2' },
    { qKey: 'faq.q3', aKey: 'faq.a3' },
    { qKey: 'faq.q5', aKey: 'faq.a5' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-navy-700/30 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            {t('home.hero.title1')}
            <br />
            <span className="text-orange-500">{t('home.hero.title2')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/produk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
            >
              <span>{t('home.hero.cta1')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/layanan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-orange-500 text-white font-semibold rounded-full hover:bg-orange-500/10 transition-all duration-300"
            >
              <span>{t('home.hero.cta2')}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                {t('home.about.label')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                {t('home.about.title')}{' '}
                <span className="text-orange-500">{t('home.about.titleHighlight')}</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                {t('home.about.desc1')}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                {t('home.about.desc2')}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {t('home.about.desc3')}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {t('home.about.desc4')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/produk"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                >
                  <span>{t('home.about.viewProducts')}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 text-gray-400 font-semibold hover:text-white transition-colors"
                >
                  <span>{t('home.about.learnServices')}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Visual Logo */}
            <div className="relative">
              <div className="aspect-square bg-dark-700 rounded-3xl p-8 border border-white/5">
                <div className="w-full h-full bg-dark-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      <Image
                        src="/logo.png"
                        alt="Twenti Studio Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-white">Twenti Studio</h3>
                    <p className="text-gray-400 text-lg">{t('home.about.tagline')}</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-700/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      <Products />

      {/* Features Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t('home.features.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t('home.features.title')}{' '}
              <span className="text-orange-500">{t('home.features.titleHighlight')}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t('home.features.subtitle')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.titleKey}
                className="p-8 bg-dark-800 border border-white/5 rounded-2xl card-hover group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-dark-700 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
            >
              <span>{t('home.features.viewAllServices')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t('home.testimonials.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t('home.testimonials.title')}{' '}
              <span className="text-orange-500">{t('home.testimonials.titleHighlight')}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-8 bg-dark-700 border border-white/5 rounded-2xl card-hover"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-dark-600 rounded-full text-white font-bold text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">&ldquo;{testimonial.content[language]}&rdquo;</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t('home.faq.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t('home.faq.title')}{' '}
              <span className="text-orange-500">{t('home.faq.titleHighlight')}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t('home.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.qKey} className="bg-dark-700 border border-white/10 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-white">{t(faq.qKey)}</h3>
                <p className="text-gray-400 leading-relaxed">{t(faq.aKey)}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            >
              <span>{t('home.faq.moreQuestions')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-700" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-800 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <span>{t('home.cta.button')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/produk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <span>{t('home.cta.secondary')}</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>{t('home.cta.freeConsultation')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>{t('home.cta.professionalTeam')}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
