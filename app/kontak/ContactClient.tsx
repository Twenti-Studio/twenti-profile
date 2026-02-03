'use client';

import {
    ArrowRight,
    Check,
    Loader2,
    Mail,
    MapPin,
    Send
} from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactClient = () => {
    const { t, language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        projectType: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const services = [
        { key: 'contact.services.webDev', value: 'Web Development' },
        { key: 'contact.services.mobile', value: 'Mobile App Development' },
        { key: 'contact.services.design', value: 'UI/UX Design' },
        { key: 'contact.services.consulting', value: 'Technology Consulting' },
        { key: 'contact.services.other', value: 'Other' },
    ];

    const projectTypes = [
        { key: 'contact.projectType.new', value: 'New Project' },
        { key: 'contact.projectType.existing', value: 'Existing System Development' },
        { key: 'contact.projectType.integration', value: 'System Integration' },
        { key: 'contact.projectType.consultation', value: 'Consultation' },
        { key: 'contact.projectType.other', value: 'Other' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    language,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                projectType: '',
                message: '',
            });

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 
                (language === 'id' ? 'Terjadi kesalahan. Silakan coba lagi.' : 'An error occurred. Please try again.');
            setError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            labelKey: 'contact.emailLabel',
            value: 'twentistudio@gmail.com',
            href: 'mailto:twentistudio@gmail.com',
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            labelKey: 'contact.locationLabel',
            value: 'Balikpapan, Indonesia',
            href: 'https://share.google/EIZqkzWyJIWuBkiUZ',
        },
    ];

    const faqs = [
        { qKey: 'faq.q1', aKey: 'faq.a1' },
        { qKey: 'faq.q3', aKey: 'faq.a3' },
        { qKey: 'faq.q4', aKey: 'faq.a4' },
        { qKey: 'faq.q5', aKey: 'faq.a5' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-dark-900 relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        {t('contact.title')}{' '}
                        <span className="text-orange-500">{t('contact.titleHighlight')}</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section id="contact-form" className="py-16 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-dark-700 border border-white/5 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold mb-2">{t('contact.sendMessage')}</h2>
                                <p className="text-gray-400 mb-8">
                                    {t('contact.formSubtitle')}
                                </p>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-green-500/10 rounded-full">
                                            <Check className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{t('contact.success')}</h3>
                                        <p className="text-gray-400 mb-6">
                                            {t('contact.successDesc')}
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors"
                                        >
                                            {t('contact.sendAnother')}
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {error && (
                                            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                    {t('contact.name')} <span className="text-orange-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                    placeholder={t('contact.namePlaceholder')}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                    {t('contact.email')} <span className="text-orange-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                    placeholder={t('contact.emailPlaceholder')}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Phone */}
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                                    {t('contact.phone')} <span className="text-orange-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                    placeholder={t('contact.phonePlaceholder')}
                                                />
                                            </div>

                                            {/* Company */}
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                                    {t('contact.company')}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                    placeholder={t('contact.companyPlaceholder')}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Service */}
                                            <div>
                                                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                                                    {t('contact.service')} <span className="text-orange-500">*</span>
                                                </label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                >
                                                    <option value="">{t('contact.selectService')}</option>
                                                    {services.map((service) => (
                                                        <option key={service.value} value={service.value}>{t(service.key)}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Project Type */}
                                            <div>
                                                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                                                    {t('contact.projectType')} <span className="text-orange-500">*</span>
                                                </label>
                                                <select
                                                    id="projectType"
                                                    name="projectType"
                                                    value={formData.projectType}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                >
                                                    <option value="">{t('contact.selectProjectType')}</option>
                                                    {projectTypes.map((type) => (
                                                        <option key={type.value} value={type.value}>{t(type.key)}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                                {t('contact.message')} <span className="text-orange-500">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                                                placeholder={t('contact.messagePlaceholder')}
                                            />
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin w-5 h-5" />
                                                    <span>{t('contact.sending')}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>{t('contact.submit')}</span>
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-dark-700 border border-white/5 rounded-2xl p-8">
                                <h3 className="text-xl font-bold mb-6">{t('contact.infoTitle')}</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info) => (
                                        <a
                                            key={info.labelKey}
                                            href={info.href}
                                            target={info.href.startsWith('http') ? '_blank' : undefined}
                                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-dark-600 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">{t(info.labelKey)}</p>
                                                <p className="font-medium group-hover:text-white transition-colors">{info.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-dark-900 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                            {t('home.faq.label')}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
                            {t('home.faq.title')} <span className="text-orange-500">{t('home.faq.titleHighlight')}</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {t('home.faq.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div
                                key={faq.qKey}
                                className="bg-dark-700 border border-white/10 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold mb-4 text-white">{t(faq.qKey)}</h3>
                                <p className="text-gray-400 leading-relaxed">{t(faq.aKey)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <div className="bg-dark-700 border border-white/10 rounded-xl p-8">
                            <h3 className="text-xl font-semibold mb-3">
                                {language === 'id' ? 'Masih ada pertanyaan lain?' : 'Still have questions?'}
                            </h3>
                            <p className="text-gray-400 mb-6">
                                {language === 'id' 
                                    ? 'Tim kami siap membantu menjawab pertanyaan spesifik tentang proyek Anda' 
                                    : 'Our team is ready to help answer specific questions about your project'}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="mailto:twentistudio@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
                                >
                                    <span>{language === 'id' ? 'Email Kami' : 'Email Us'}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#contact-form"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                                >
                                    <span>{t('contact.sendMessage')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactClient;
