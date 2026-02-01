'use client';

import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  History,
  Laptop,
  Layout,
  Palette,
  Smartphone,
  Star,
  Trophy,
  Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Products from './components/Products/Products';

export default function Home() {
  const stats = [
    { number: '50+', label: 'Proyek Selesai', icon: <Briefcase className="w-5 h-5" /> },
    { number: '30+', label: 'Klien Puas', icon: <Users className="w-5 h-5" /> },
    { number: '5+', label: 'Produk Aktif', icon: <Trophy className="w-5 h-5" /> },
    { number: '3+', label: 'Tahun Pengalaman', icon: <History className="w-5 h-5" /> },
  ];

  const features = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Pengembangan Web',
      description: 'Membangun website modern dan responsif dengan teknologi terkini untuk kebutuhan bisnis Anda.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Aplikasi Mobile',
      description: 'Membuat aplikasi mobile cross-platform yang cepat, elegan, dan user-friendly.',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Produk SaaS',
      description: 'Mengembangkan produk software siap pakai yang dapat langsung digunakan untuk berbagai kebutuhan.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Mendesain antarmuka yang intuitif dan pengalaman pengguna yang menarik serta memorable.',
    },
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'CEO, TechStartup',
      content: 'Twenti Studio membantu kami membangun platform e-commerce yang luar biasa. Tim yang profesional dan hasil yang memuaskan!',
      avatar: 'BS',
    },
    {
      name: 'Siti Rahayu',
      role: 'Founder, EduTech',
      content: 'Aplikasi pembelajaran yang dibuat Twenti Studio sangat membantu bisnis kami berkembang. Highly recommended!',
      avatar: 'SR',
    },
    {
      name: 'Ahmad Hidayat',
      role: 'Manager, FinCorp',
      content: 'Kualitas kerja yang sangat baik dengan timeline yang tepat. Kami sangat puas dengan hasilnya.',
      avatar: 'AH',
    },
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
            Building Scalable
            <br />
            <span className="gradient-text">Digital Products</span>
          </h1>

          {/* Subheadline */}
          {/* <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Twenti Studio adalah app studio dan partner teknologi yang membantu bisnis membangun website, aplikasi web, dan produk SaaS yang stabil, terstruktur, dan siap berkembang.
          </p> */}

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Kami merancang solusi digital bukan hanya untuk digunakan hari ini, tetapi untuk mendukung pertumbuhan jangka panjang.          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/produk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 btn-gradient text-white font-semibold rounded-full transition-transform hover:scale-105"
            >
              <span>Produk Kami</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/layanan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-orange-500 text-white font-semibold rounded-full hover:bg-orange-500/10 transition-all duration-300"
            >
              <span>Jelajahi Layanan</span>
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-2xl group hover:border-orange-500/30 transition-colors">
                <div className="flex justify-center mb-2 text-orange-500 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-pulse" />
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
        </div> */}
      </section>

      {/* About Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                Tentang Kami
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Studio Pengembangan Aplikasi{' '}
                <span className="gradient-text">Terpercaya</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Twenti Studio adalah app studio yang berfokus pada pengembangan produk digital dan aplikasi yang dirancang untuk membantu menyelesaikan permasalahan nyata pengguna.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Kami membangun berbagai aplikasi dan solusi digital dengan pendekatan berbasis produk mulai dari perancangan, pengembangan, hingga iterasi berkelanjutan dengan tujuan menciptakan sistem yang fungsional, stabil, dan relevan untuk digunakan dalam jangka panjang.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Selain mengembangkan produk, Twenti Studio juga menyediakan layanan pengembangan website dan aplikasi bagi bisnis dan organisasi yang membutuhkan partner teknologi dengan pendekatan yang terstruktur dan berorientasi solusi.              
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Twenti Studio beroperasi di bawah PT Twenti Studio Nusantara. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                <Link
                  href="/produk"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                >
                  <span>Lihat Produk</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 text-gray-400 font-semibold hover:text-white transition-colors"
                >
                  <span>Pelajari Layanan</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Visual Logo */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy-700/20 to-orange-500/20 rounded-3xl p-8 border border-white/5">
                <div className="w-full h-full bg-dark-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-700/30 to-orange-500/30" />
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
                    <p className="text-gray-400 text-lg">Building Digital Excellence</p>
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
              Apa yang Kami Tawarkan
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Solusi Digital{' '}
              <span className="gradient-text">Lengkap</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Dari produk siap pakai hingga layanan pengembangan custom,
              kami menyediakan solusi untuk setiap kebutuhan digital bisnis Anda.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-dark-800 border border-white/5 rounded-2xl card-hover group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-dark-700 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 px-8 py-4 btn-gradient text-white font-semibold rounded-full transition-transform hover:scale-105"
            >
              <span>Lihat Semua Layanan</span>
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
              Testimonial
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Apa Kata{' '}
              <span className="gradient-text">Klien Kami</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Kepuasan klien adalah prioritas utama kami. Berikut adalah beberapa
              testimoni dari klien yang telah bekerja sama dengan kami.
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
                <p className="text-gray-300 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-700" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Siap Memulai Proyek Digital Anda?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis. Kami siap membantu
            mewujudkan visi digital bisnis Anda menjadi kenyataan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-800 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/produk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <span>Produk</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Konsultasi Gratis</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Respon Cepat</span>
            </div> */}
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Tim Profesional</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
