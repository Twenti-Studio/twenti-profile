'use client';

import {
    ArrowRight,
    CheckCircle2,
    Code2,
    Laptop,
    Lightbulb,
    Palette,
    PenTool,
    Rocket,
    Search,
    Smartphone
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const ServicesClient = () => {
    const [activeStep, setActiveStep] = useState(0);

    const services = [
        {
            id: 'web-development',
            title: 'Web Development',
            tagline: 'Website Modern & Responsif',
            description: 'Membangun website profesional dengan teknologi terkini. Dari landing page hingga web application kompleks, kami siap membantu mewujudkan kebutuhan digital bisnis Anda.',
            icon: <Laptop className="w-10 h-10" />,
            features: [
                'Website Company Profile',
                'Landing Page & Marketing Site',
                'E-Commerce Platform',
                'Web Application (SaaS)',
                'Portal & Dashboard',
                'Blog & Content Platform',
            ],
            technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Laravel', 'PostgreSQL'],
        },
        {
            id: 'mobile-app',
            title: 'Mobile App Development',
            tagline: 'Aplikasi iOS & Android',
            description: 'Mengembangkan aplikasi mobile cross-platform dengan performa native. Desain yang intuitif dan user experience yang optimal untuk pengguna Anda.',
            icon: <Smartphone className="w-10 h-10" />,
            features: [
                'Native iOS & Android App',
                'Cross-Platform (React Native/Flutter)',
                'Progressive Web App (PWA)',
                'App Store Optimization',
                'Push Notifications',
                'Offline Functionality',
            ],
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
        },
        {
            id: 'design',
            title: 'UI/UX Design',
            tagline: 'Desain yang Memikat',
            description: 'Menciptakan desain antarmuka yang tidak hanya cantik tetapi juga fungsional. Fokus pada user experience untuk meningkatkan engagement dan konversi.',
            icon: <Palette className="w-10 h-10" />,
            features: [
                'User Research & Analysis',
                'Wireframing & Prototyping',
                'Visual Design System',
                'Interaction Design',
                'Usability Testing',
                'Design Handoff',
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'Framer', 'InVision'],
        },
        {
            id: 'konsultasi',
            title: 'Konsultasi Teknologi',
            tagline: 'Strategi Digital yang Tepat',
            description: 'Memberikan panduan strategis untuk transformasi digital bisnis Anda. Analisis kebutuhan, rekomendasi teknologi, dan roadmap pengembangan.',
            icon: <Lightbulb className="w-10 h-10" />,
            features: [
                'Technology Assessment',
                'Digital Strategy Planning',
                'Architecture Design',
                'Security Audit',
                'Performance Optimization',
                'Team Mentoring',
            ],
            technologies: ['Cloud Architecture', 'DevOps', 'Security', 'Scalability', 'CI/CD', 'Microservices'],
        },
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Discovery',
            icon: <Search className="w-6 h-6" />,
            description: 'Kami memulai dengan mendengarkan kebutuhan Anda secara mendalam.',
            duration: '1-2 Hari',
            deliverables: ['Project Brief', 'Requirement Document', 'Timeline Estimasi'],
        },
        {
            number: '02',
            title: 'Perencanaan',
            icon: <PenTool className="w-6 h-6" />,
            description: 'Tim kami menyusun strategi dan membuat desain wireframe serta prototype.',
            duration: '1-2 Minggu',
            deliverables: ['Wireframes', 'UI Design', 'Interactive Prototype'],
        },
        {
            number: '03',
            title: 'Development',
            icon: <Code2 className="w-6 h-6" />,
            description: 'Proses pengembangan dengan metodologi agile dan testing berkelanjutan.',
            duration: '4-12 Minggu',
            deliverables: ['Working Application', 'Quality Assurance', 'Bug Fixes'],
        },
        {
            number: '04',
            title: 'Launch',
            icon: <Rocket className="w-6 h-6" />,
            description: 'Peluncuran produk dengan persiapan matang dan dukungan post-launch.',
            duration: 'Ongoing',
            deliverables: ['Deployment', 'Documentation', 'Technical Support'],
        },
    ];

    const pricingPlans = [
        {
            name: 'Starter',
            description: 'Cocok untuk bisnis kecil atau startup',
            price: 'Mulai dari',
            amount: '5 Juta',
            features: [
                'Landing Page / Company Profile',
                'Desain responsif',
                '5 halaman',
                'Contact form',
                'SEO basic',
                'Support 1 bulan',
            ],
            highlighted: false,
        },
        {
            name: 'Professional',
            description: 'Untuk bisnis yang membutuhkan lebih',
            price: 'Mulai dari',
            amount: '15 Juta',
            features: [
                'Web Application Custom',
                'Desain UI/UX premium',
                'Dashboard admin',
                'Database integration',
                'API development',
                'Support 3 bulan',
            ],
            highlighted: true,
        },
        {
            name: 'Enterprise',
            description: 'Solusi lengkap untuk perusahaan besar',
            price: 'Custom',
            amount: 'Quote',
            features: [
                'Full-stack development',
                'Mobile app development',
                'Complex integrations',
                'Scalable architecture',
                'Priority support',
                'Dedicated team',
            ],
            highlighted: false,
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-dark-900 relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Layanan Pengembangan{' '}
                        <span className="gradient-text">Web & Aplikasi</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                        Tim profesional kami siap membantu mewujudkan visi digital bisnis Anda.
                        Dari perencanaan hingga deployment, kami handle semuanya.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className="group p-8 bg-dark-700 border border-white/5 rounded-2xl card-hover"
                            >
                                <div className="flex items-start gap-5 mb-6">
                                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-navy-700/30 to-orange-500/30 rounded-xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-orange-500 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-orange-500 font-medium">{service.tagline}</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                                        Yang Termasuk:
                                    </h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                                                <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-dark-600 text-gray-400 text-xs rounded-full border border-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                            Alur Kerja
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                            Bagaimana Kami{' '}
                            <span className="gradient-text">Bekerja</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Proses yang terstruktur dan transparan untuk memastikan proyek
                            Anda berjalan lancar dari awal hingga akhir.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-dark-600 z-0">
                            <div className="h-full bg-gradient-to-r from-navy-700 to-orange-500 transition-all duration-700" style={{ width: `${(activeStep / 3) * 100}%` }} />
                        </div>

                        {processSteps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`relative z-10 flex flex-col items-center text-center cursor-pointer group transition-all duration-300 ${index <= activeStep ? 'opacity-100' : 'opacity-40'
                                    }`}
                                onClick={() => setActiveStep(index)}
                            >
                                <div className={`w-24 h-24 flex items-center justify-center rounded-full border-4 transition-all duration-500 mb-6 ${index <= activeStep ? 'bg-dark-800 border-orange-500 text-orange-500' : 'bg-dark-700 border-dark-600 text-gray-500'
                                    }`}>
                                    {step.icon}
                                </div>
                                <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full mb-3">
                                    {step.number} | {step.duration}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {step.description}
                                </p>
                                <ul className="space-y-1">
                                    {step.deliverables.map((item) => (
                                        <li key={item} className="text-xs text-gray-500 flex items-center justify-center gap-1">
                                            <CheckCircle2 className="w-3 h-3 text-orange-500/50" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section (HIDDEN/COMMENTED OUT BY PREVIOUS REQUEST) */}
            {/* 
      <section className="py-24 bg-dark-800">
        ... (omitted content as it's commented out)
      </section> 
      */}

            {/* CTA Section */}
            <section className="py-24 bg-dark-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="p-12 bg-gradient-to-br from-navy-700/30 to-orange-500/20 border border-white/10 rounded-3xl">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Siap Memulai Proyek Anda?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            Ceritakan kebutuhan Anda kepada kami. Konsultasi pertama gratis tanpa
                            komitmen. Tim kami siap membantu mewujudkan visi digital Anda.
                        </p>
                        <Link
                            href="/kontak"
                            className="inline-flex items-center gap-2 px-8 py-4 btn-gradient text-white font-semibold rounded-full transition-transform hover:scale-105"
                        >
                            <span>Hubungi Kami Sekarang</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesClient;
