'use client';

import {
    ArrowRight,
    Check,
    Loader2,
    Mail,
    MapPin,
    MessageCircle,
    Send
} from 'lucide-react';
import { FormEvent, useState } from 'react';

const ContactClient = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'Konsultasi Teknologi',
        'Lainnya',
    ];

    const budgets = [
        'Di bawah 5 Juta',
        '5 - 15 Juta',
        '15 - 50 Juta',
        'Di atas 50 Juta',
        'Belum ditentukan',
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
            // Create mailto link with form data
            const subject = encodeURIComponent(`[Twenti Studio] Permintaan Konsultasi dari ${formData.name}`);
            const body = encodeURIComponent(
                `Nama: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `No. Telepon: ${formData.phone}\n` +
                `Perusahaan: ${formData.company || '-'}\n` +
                `Layanan yang Diminati: ${formData.service}\n` +
                `Estimasi Budget: ${formData.budget}\n\n` +
                `Pesan:\n${formData.message}`
            );

            // Open mailto link
            window.location.href = `mailto:twentistudio@gmail.com?subject=${subject}&body=${body}`;

            // Show success state after a brief delay
            setTimeout(() => {
                setIsSubmitted(true);
                setIsSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    service: '',
                    budget: '',
                    message: '',
                });
            }, 1000);

        } catch {
            setError('Terjadi kesalahan. Silakan coba lagi.');
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: 'Email',
            value: 'twentistudio@gmail.com',
            href: 'mailto:twentistudio@gmail.com',
        },
        // {
        //     icon: <MessageCircle className="w-6 h-6" />,
        //     label: 'WhatsApp',
        //     value: '+62 812-3456-7890',
        //     href: 'https://wa.me/6281234567890',
        // },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: 'Lokasi',
            value: 'Balikpapan, Indonesia',
            href: 'https://share.google/EIZqkzWyJIWuBkiUZ',
        },
        // {
        //     icon: <Clock className="w-6 h-6" />,
        //     label: 'Jam Operasional',
        //     value: 'Senin - Jumat, 09:00 - 18:00',
        //     href: '#',
        // },
    ];

    const faqs = [
        {
            question: 'Berapa lama waktu pengerjaan proyek?',
            answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Landing page sederhana bisa selesai dalam 1-2 minggu, sementara web application kompleks bisa memakan waktu 2-3 bulan.',
        },
        {
            question: 'Apakah ada revisi setelah proyek selesai?',
            answer: 'Ya, kami menyediakan periode revisi setelah proyek selesai. Jumlah revisi dan durasinya tergantung pada paket yang dipilih.',
        },
        {
            question: 'Bagaimana sistem pembayaran?',
            answer: 'Kami menggunakan sistem pembayaran bertahap: 50% di awal proyek, dan 50% setelah proyek selesai. Untuk proyek besar, bisa dibagi menjadi beberapa milestone.',
        },
        {
            question: 'Apakah source code menjadi milik klien?',
            answer: 'Ya, setelah pembayaran lunas, seluruh source code dan aset digital menjadi milik klien sepenuhnya.',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-dark-900 relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Mari Wujudkan{' '}
                        <span className="gradient-text">Proyek Anda</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                        Ceritakan kebutuhan bisnis Anda kepada kami. Tim kami siap membantu
                        memberikan solusi digital terbaik untuk pertumbuhan bisnis Anda.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-dark-700 border border-white/5 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold mb-2">Kirim Pesan</h2>
                                <p className="text-gray-400 mb-8">
                                    Isi form berikut untuk mengirim pesan kepada kami. Kami akan
                                    merespons dalam 1x24 jam.
                                </p>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-green-500/10 rounded-full">
                                            <Check className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Pesan Terkirim!</h3>
                                        <p className="text-gray-400 mb-6">
                                            Terima kasih telah menghubungi kami. Tim kami akan segera
                                            merespons pesan Anda.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-6 py-3 btn-gradient text-white font-semibold rounded-full"
                                        >
                                            Kirim Pesan Lain
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
                                                    Nama Lengkap <span className="text-orange-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                    placeholder="Nama Anda"
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Email <span className="text-orange-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                    placeholder="email@anda.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Phone */}
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                                    No. Telepon <span className="text-orange-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                    placeholder="08xx-xxxx-xxxx"
                                                />
                                            </div>

                                            {/* Company */}
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Perusahaan / Organisasi
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                                    placeholder="Nama Perusahaan (opsional)"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Service */}
                                            <div>
                                                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Layanan yang Diminati <span className="text-orange-500">*</span>
                                                </label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors select-custom"
                                                >
                                                    <option value="">Pilih Layanan</option>
                                                    {services.map((service) => (
                                                        <option key={service} value={service}>{service}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Budget */}
                                            <div>
                                                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Estimasi Budget <span className="text-orange-500">*</span>
                                                </label>
                                                <select
                                                    id="budget"
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors select-custom"
                                                >
                                                    <option value="">Pilih Budget</option>
                                                    {budgets.map((budget) => (
                                                        <option key={budget} value={budget}>{budget}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                                Pesan <span className="text-orange-500">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                                                placeholder="Ceritakan kebutuhan proyek Anda..."
                                            />
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 btn-gradient text-white font-semibold rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-105"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin w-5 h-5" />
                                                    <span>Mengirim...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Kirim Pesan</span>
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
                            {/* Contact Cards */}
                            <div className="bg-dark-700 border border-white/5 rounded-2xl p-8">
                                <h3 className="text-xl font-bold mb-6">Informasi Kontak</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info) => (
                                        <a
                                            key={info.label}
                                            href={info.href}
                                            target={info.href.startsWith('http') ? '_blank' : undefined}
                                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-dark-600 rounded-lg text-orange-500 group-hover:bg-gradient-to-r group-hover:from-navy-700 group-hover:to-orange-500 group-hover:text-white transition-all duration-300">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">{info.label}</p>
                                                <p className="font-medium group-hover:text-white transition-colors">{info.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Response */}
                            <div className="bg-dark-700 border border-white/10 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-500/20 rounded-full">
                                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Respon Cepat</p>
                                        <p className="text-sm text-gray-400">Biasanya membalas dalam 1 jam</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-6">
                                    Tim kami selalu siap membantu Anda. Untuk respon lebih cepat,
                                    hubungi via WhatsApp.
                                </p>
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Chat via WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-dark-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                            FAQ
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4">
                            Pertanyaan yang Sering Diajukan
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-dark-800 border border-white/5 rounded-xl p-6 group hover:border-white/20 transition-colors"
                            >
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">{faq.question}</h3>
                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-400 mb-4">
                            Masih ada pertanyaan lain?
                        </p>
                        <a
                            href="mailto:twentistudio@gmail.com"
                            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                        >
                            <span>Email kami langsung</span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactClient;
