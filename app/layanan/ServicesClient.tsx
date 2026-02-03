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
import { useLanguage } from '../context/LanguageContext';

const ServicesClient = () => {
    const { t, language, isHydrated } = useLanguage();
    const [activeStep, setActiveStep] = useState(0);

    const services = [
        {
            id: 'web-development',
            titleKey: 'services.webDev.title',
            taglineKey: 'services.webDev.tagline',
            descKey: 'services.webDev.desc',
            icon: <Laptop className="w-10 h-10" />,
            features: {
                id: [
                    'Website Company Profile',
                    'Landing Page & Marketing Site',
                    'E-Commerce Platform',
                    'Web Application (SaaS)',
                    'Portal & Dashboard',
                    'Blog & Content Platform',
                ],
                en: [
                    'Company Profile Website',
                    'Landing Page & Marketing Site',
                    'E-Commerce Platform',
                    'Web Application (SaaS)',
                    'Portal & Dashboard',
                    'Blog & Content Platform',
                ]
            },
            technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Laravel', 'PostgreSQL'],
        },
        {
            id: 'mobile-app',
            titleKey: 'services.mobile.title',
            taglineKey: 'services.mobile.tagline',
            descKey: 'services.mobile.desc',
            icon: <Smartphone className="w-10 h-10" />,
            features: {
                id: [
                    'Native iOS & Android App',
                    'Cross-Platform (React Native/Flutter)',
                    'Progressive Web App (PWA)',
                    'App Store Optimization',
                    'Push Notifications',
                    'Offline Functionality',
                ],
                en: [
                    'Native iOS & Android App',
                    'Cross-Platform (React Native/Flutter)',
                    'Progressive Web App (PWA)',
                    'App Store Optimization',
                    'Push Notifications',
                    'Offline Functionality',
                ]
            },
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
        },
        {
            id: 'design',
            titleKey: 'services.design.title',
            taglineKey: 'services.design.tagline',
            descKey: 'services.design.desc',
            icon: <Palette className="w-10 h-10" />,
            features: {
                id: [
                    'User Research & Analysis',
                    'Wireframing & Prototyping',
                    'Visual Design System',
                    'Interaction Design',
                    'Usability Testing',
                    'Design Handoff',
                ],
                en: [
                    'User Research & Analysis',
                    'Wireframing & Prototyping',
                    'Visual Design System',
                    'Interaction Design',
                    'Usability Testing',
                    'Design Handoff',
                ]
            },
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'Framer', 'InVision'],
        },
        {
            id: 'konsultasi',
            titleKey: 'services.consulting.title',
            taglineKey: 'services.consulting.tagline',
            descKey: 'services.consulting.desc',
            icon: <Lightbulb className="w-10 h-10" />,
            features: {
                id: [
                    'Technology Assessment',
                    'Digital Strategy Planning',
                    'Architecture Design',
                    'Security Audit',
                    'Performance Optimization',
                    'Team Mentoring',
                ],
                en: [
                    'Technology Assessment',
                    'Digital Strategy Planning',
                    'Architecture Design',
                    'Security Audit',
                    'Performance Optimization',
                    'Team Mentoring',
                ]
            },
            technologies: ['Cloud Architecture', 'DevOps', 'Security', 'Scalability', 'CI/CD', 'Microservices'],
        },
    ];

    const processSteps = [
        {
            number: '01',
            titleKey: 'services.process.step1.title',
            icon: <Search className="w-6 h-6" />,
            descKey: 'services.process.step1.desc',
            durationKey: 'services.process.step1.duration',
            deliverables: {
                id: ['Project Brief', 'Requirement Document', 'Timeline Estimasi'],
                en: ['Project Brief', 'Requirement Document', 'Timeline Estimate'],
            },
        },
        {
            number: '02',
            titleKey: 'services.process.step2.title',
            icon: <PenTool className="w-6 h-6" />,
            descKey: 'services.process.step2.desc',
            durationKey: 'services.process.step2.duration',
            deliverables: {
                id: ['Wireframes', 'UI Design', 'Interactive Prototype'],
                en: ['Wireframes', 'UI Design', 'Interactive Prototype'],
            },
        },
        {
            number: '03',
            titleKey: 'services.process.step3.title',
            icon: <Code2 className="w-6 h-6" />,
            descKey: 'services.process.step3.desc',
            durationKey: 'services.process.step3.duration',
            deliverables: {
                id: ['Working Application', 'Quality Assurance', 'Bug Fixes'],
                en: ['Working Application', 'Quality Assurance', 'Bug Fixes'],
            },
        },
        {
            number: '04',
            titleKey: 'services.process.step4.title',
            icon: <Rocket className="w-6 h-6" />,
            descKey: 'services.process.step4.desc',
            durationKey: 'services.process.step4.duration',
            deliverables: {
                id: ['Deployment', 'Documentation', 'Technical Support'],
                en: ['Deployment', 'Documentation', 'Technical Support'],
            },
        },
    ];

    // Show loading skeleton until hydrated to prevent hydration mismatch
    if (!isHydrated) {
        return (
            <div className="min-h-screen bg-dark-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <div className="w-48 h-4 bg-dark-700 rounded animate-pulse mx-auto" />
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-dark-900 relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        {t('services.heroTitle')}{' '}
                        <span className="text-orange-500">{t('services.heroHighlight')}</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                        {t('services.heroSubtitle')}
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
                                    <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-dark-600 rounded-xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-orange-500 transition-colors">
                                            {t(service.titleKey)}
                                        </h3>
                                        <p className="text-sm text-orange-500 font-medium">{t(service.taglineKey)}</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {t(service.descKey)}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                                        {t('services.includes')}
                                    </h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {service.features[language].map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                                                <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
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
                            {t('services.process.label')}
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                            {t('services.process.title')}{' '}
                            <span className="text-orange-500">{t('services.process.titleHighlight')}</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            {t('services.process.subtitle')}
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-dark-600 z-0">
                            <div className="h-full bg-orange-500 transition-all duration-700" style={{ width: `${(activeStep / 3) * 100}%` }} />
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
                                    {step.number} | {t(step.durationKey)}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{t(step.titleKey)}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {t(step.descKey)}
                                </p>
                                <ul className="space-y-1">
                                    {step.deliverables[language].map((item) => (
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

            {/* CTA Section */}
            <section className="py-24 bg-dark-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="p-12 bg-dark-700 border border-white/10 rounded-3xl">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {t('services.cta.title')}
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            {t('services.cta.subtitle')}
                        </p>
                        <Link
                            href="/kontak"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
                        >
                            <span>{t('services.cta.button')}</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesClient;
