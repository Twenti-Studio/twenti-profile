'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Language = 'id' | 'en';

interface Translations {
    [key: string]: {
        id: string;
        en: string;
    };
}

// All translations - Professional copywriting for Twenti Studio
export const translations: Translations = {
    
    // NAVBAR
    
    'nav.home': { id: 'Beranda', en: 'Home' },
    'nav.about': { id: 'Tentang', en: 'About' },
    'nav.products': { id: 'Produk', en: 'Products' },
    'nav.services': { id: 'Layanan', en: 'Services' },
    'nav.contact': { id: 'Kontak', en: 'Contact' },
    'nav.startProject': { id: 'Mulai Proyek', en: 'Start Project' },

    
    // HOME PAGE - HERO
    
    'home.hero.title1': { id: 'Membangun Aplikasi', en: 'Building Apps' },
    'home.hero.title2': { id: 'yang Menyelesaikan Masalah', en: 'That Solve Problems' },
    'home.hero.subtitle': { 
        id: 'Twenti Studio adalah app studio yang berfokus pada pengembangan aplikasi dan solusi digital untuk menyelesaikan permasalahan nyata yang dihadapi siapa saja.', 
        en: 'Twenti Studio is an app studio focused on developing applications and digital solutions to solve real problems faced by anyone.' 
    },
    'home.hero.cta1': { id: 'Lihat Produk', en: 'View Products' },
    'home.hero.cta2': { id: 'Jelajahi Layanan', en: 'Explore Services' },

    
    // HOME PAGE - ABOUT SECTION
    
    'home.about.label': { id: 'Tentang Kami', en: 'About Us' },
    'home.about.title': { id: 'App Studio', en: 'App Studio' },
    'home.about.titleHighlight': { id: 'Berbasis Solusi', en: 'Solution-Based' },
    'home.about.desc1': { 
        id: 'Twenti Studio adalah app studio yang berfokus pada pengembangan produk digital dan aplikasi yang dirancang untuk membantu menyelesaikan permasalahan nyata pengguna.', 
        en: 'Twenti Studio is an app studio focused on developing digital products and applications designed to help solve real user problems.' 
    },
    'home.about.desc2': { 
        id: 'Kami membangun berbagai aplikasi dan solusi digital dengan pendekatan berbasis produk—mulai dari perancangan, pengembangan, hingga iterasi berkelanjutan—dengan tujuan menciptakan sistem yang fungsional, stabil, dan relevan untuk digunakan dalam jangka panjang.', 
        en: 'We build various applications and digital solutions with a product-based approach—from design, development, to continuous iteration—with the goal of creating systems that are functional, stable, and relevant for long-term use.' 
    },
    'home.about.desc3': { 
        id: 'Selain mengembangkan produk internal, Twenti Studio juga menyediakan layanan pengembangan software bagi bisnis dan organisasi yang membutuhkan partner teknologi—baik untuk membangun sistem dari awal, mengembangkan sistem yang sudah ada, maupun menggunakan tools dari produk yang kami miliki.', 
        en: 'In addition to developing internal products, Twenti Studio also provides software development services for businesses and organizations that need a technology partner—whether to build systems from scratch, develop existing systems, or use tools from our products.' 
    },
    'home.about.desc4': { 
        id: 'Twenti Studio beroperasi di bawah PT Twenti Studio Nusantara.', 
        en: 'Twenti Studio operates under PT Twenti Studio Nusantara.' 
    },
    'home.about.viewProducts': { id: 'Lihat Produk', en: 'View Products' },
    'home.about.learnServices': { id: 'Pelajari Layanan', en: 'Learn Services' },
    'home.about.tagline': { id: 'Membangun Produk Unggulan', en: 'Building Product Excellence' },

    
    // HOME PAGE - FEATURES SECTION
    
    'home.features.label': { id: 'Apa yang Kami Tawarkan', en: 'What We Offer' },
    'home.features.title': { id: 'Solusi Digital', en: 'Digital Solutions' },
    'home.features.titleHighlight': { id: 'Lengkap', en: 'Complete' },
    'home.features.subtitle': { 
        id: 'Dari produk siap pakai hingga layanan pengembangan custom, kami menyediakan solusi untuk setiap kebutuhan digital Anda.', 
        en: 'From ready-to-use products to custom development services, we provide solutions for all your digital needs.' 
    },
    'home.features.webDev.title': { id: 'Pengembangan Web', en: 'Web Development' },
    'home.features.webDev.desc': { 
        id: 'Membangun website dan web application modern dengan teknologi terkini yang siap mendukung pertumbuhan bisnis Anda.', 
        en: 'Building modern websites and web applications with the latest technology ready to support your business growth.' 
    },
    'home.features.mobile.title': { id: 'Aplikasi Mobile', en: 'Mobile Applications' },
    'home.features.mobile.desc': { 
        id: 'Mengembangkan aplikasi mobile cross-platform yang cepat, stabil, dan memberikan pengalaman pengguna yang optimal.', 
        en: 'Developing fast, stable cross-platform mobile applications that deliver optimal user experience.' 
    },
    'home.features.saas.title': { id: 'Produk Digital', en: 'Digital Products' },
    'home.features.saas.desc': { 
        id: 'Mengembangkan produk dan tools digital siap pakai yang dapat langsung digunakan untuk berbagai kebutuhan.', 
        en: 'Developing ready-to-use digital products and tools for various needs.' 
    },
    'home.features.design.title': { id: 'UI/UX Design', en: 'UI/UX Design' },
    'home.features.design.desc': { 
        id: 'Mendesain antarmuka yang intuitif dan pengalaman pengguna yang menyenangkan serta efektif.', 
        en: 'Designing intuitive interfaces and pleasant, effective user experiences.' 
    },
    'home.features.viewAllServices': { id: 'Lihat Semua Layanan', en: 'View All Services' },

    
    // HOME PAGE - TESTIMONIALS
    'home.testimonials.label': { id: 'Testimonial', en: 'Testimonials' },
    'home.testimonials.title': { id: 'Apa Kata', en: 'What Our' },
    'home.testimonials.titleHighlight': { id: 'Klien Kami', en: 'Clients Said' },
    'home.testimonials.subtitle': { 
        id: 'Kepuasan klien adalah prioritas utama kami. Berikut adalah beberapa testimoni dari klien yang telah bekerja sama dengan kami.', 
        en: 'Client satisfaction is our top priority. Here are some testimonials from clients who have worked with us.' 
    },

    
    // HOME PAGE - FAQ
    
    'home.faq.label': { id: 'FAQ', en: 'FAQ' },
    'home.faq.title': { id: 'Pertanyaan yang', en: 'Frequently' },
    'home.faq.titleHighlight': { id: 'Sering Diajukan', en: 'Asked Questions' },
    'home.faq.subtitle': { 
        id: 'Temukan jawaban untuk pertanyaan umum tentang layanan kami', 
        en: 'Find answers to common questions about our services' 
    },
    'home.faq.moreQuestions': { id: 'Punya pertanyaan lain? Hubungi kami', en: 'Have other questions? Contact us' },

    // FAQ Items (without prices)
    'faq.q1': { id: 'Berapa lama waktu pengembangan aplikasi?', en: 'How long does application development take?' },
    'faq.a1': { 
        id: 'Waktu pengembangan bervariasi tergantung kompleksitas proyek. Landing page atau website sederhana biasanya membutuhkan 1-3 minggu. Web application dengan fitur standar memerlukan 4-8 minggu. Sedangkan aplikasi kompleks dengan integrasi sistem bisa memakan waktu 2-4 bulan atau lebih.', 
        en: 'Development time varies depending on project complexity. A landing page or simple website typically takes 1-3 weeks. Web applications with standard features require 4-8 weeks. Complex applications with system integration can take 2-4 months or more.' 
    },
    'faq.q2': { id: 'Apakah Twenti Studio menyediakan layanan maintenance?', en: 'Does Twenti Studio provide maintenance services?' },
    'faq.a2': { 
        id: 'Ya, kami menyediakan layanan maintenance berkelanjutan yang mencakup backup rutin, security updates, bug fixes, dan technical support. Periode maintenance bisa disesuaikan dengan kebutuhan bisnis Anda.', 
        en: 'Yes, we provide ongoing maintenance services that include regular backups, security updates, bug fixes, and technical support. Maintenance periods can be adjusted to your business needs.' 
    },
    'faq.q3': { id: 'Bagaimana proses kerja sama dengan Twenti Studio?', en: 'How does the collaboration process work with Twenti Studio?' },
    'faq.a3': { 
        id: 'Proses dimulai dengan konsultasi gratis untuk memahami kebutuhan Anda. Kemudian kami menyusun proposal dan timeline proyek. Setelah kesepakatan, tim kami akan memulai pengembangan dengan update berkala. Pembayaran dilakukan bertahap sesuai milestone yang dicapai.', 
        en: 'The process starts with a free consultation to understand your needs. Then we prepare a proposal and project timeline. After agreement, our team will begin development with regular updates. Payment is made in stages according to milestones achieved.' 
    },
    'faq.q4': { id: 'Bisakah mengintegrasikan dengan sistem yang sudah ada?', en: 'Can you integrate with existing systems?' },
    'faq.a4': { 
        id: 'Tentu! Tim kami berpengalaman mengintegrasikan aplikasi dengan berbagai sistem seperti ERP, CRM, payment gateway, dan API third-party lainnya. Kami juga bisa membangun custom API untuk menghubungkan sistem yang berbeda.', 
        en: 'Of course! Our team is experienced in integrating applications with various systems such as ERP, CRM, payment gateways, and other third-party APIs. We can also build custom APIs to connect different systems.' 
    },
    'faq.q5': { id: 'Apakah source code menjadi milik klien?', en: 'Does the client own the source code?' },
    'faq.a5': { 
        id: 'Ya, 100% source code, database, dan seluruh hak cipta menjadi milik klien setelah proyek selesai dan pembayaran lunas. Kami juga menyediakan dokumentasi lengkap dan pelatihan jika diperlukan.', 
        en: 'Yes, 100% of source code, database, and all copyrights belong to the client after the project is completed and payment is settled. We also provide complete documentation and training if needed.' 
    },
    'faq.q6': { id: 'Bagaimana dengan skalabilitas aplikasi?', en: 'What about application scalability?' },
    'faq.a6': { 
        id: 'Semua aplikasi yang kami bangun menggunakan arsitektur modern yang mudah di-scale. Kami menggunakan teknologi seperti cloud services dan best practices yang memastikan aplikasi Anda siap berkembang seiring pertumbuhan bisnis.', 
        en: 'All applications we build use modern architecture that is easy to scale. We use technologies like cloud services and best practices that ensure your application is ready to grow along with your business.' 
    },

    
    // HOME PAGE - CTA
    
    'home.cta.title': { id: 'Siap Memulai Proyek Digital Anda?', en: 'Ready to Start Your Digital Project?' },
    'home.cta.subtitle': { 
        id: 'Hubungi kami sekarang untuk konsultasi gratis. Kami siap membantu mewujudkan visi digital bisnis Anda.', 
        en: 'Contact us now for a free consultation. We are ready to help realize your business digital vision.' 
    },
    'home.cta.button': { id: 'Hubungi Kami', en: 'Contact Us' },
    'home.cta.secondary': { id: 'Produk', en: 'Products' },
    'home.cta.freeConsultation': { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    'home.cta.professionalTeam': { id: 'Tim Profesional', en: 'Professional Team' },

    
    // PRODUCTS PAGE
    
    'products.title': { id: 'Kami', en: 'Products' },
    'products.titlePrefix': { id: 'Produk', en: 'Our' },
    'products.subtitle': { 
        id: 'Aplikasi dan tools yang kami kembangkan untuk menyelesaikan berbagai permasalahan sehari-hari.', 
        en: 'Applications and tools we develop to solve various everyday problems.' 
    },
    'products.explore': { id: 'Jelajahi', en: 'Explore' },
    'products.exploreHighlight': { id: 'Produk Kami', en: 'Our Products' },
    'products.chooseRight': { id: 'Pilih solusi yang tepat untuk kebutuhan Anda', en: 'Choose the right solution for your needs' },
    'products.viewDetails': { id: 'Lihat Detail', en: 'View Details' },
    'products.learnMore': { id: 'Pelajari Lebih Lanjut', en: 'Learn More' },
    'products.customSolution': { id: 'Butuh Solusi Custom?', en: 'Need a Custom Solution?' },
    'products.customDesc': { 
        id: 'Tim kami siap membantu mengembangkan aplikasi sesuai kebutuhan spesifik bisnis Anda', 
        en: 'Our team is ready to help develop applications according to your specific business needs' 
    },
    'products.viewServices': { id: 'Lihat Layanan', en: 'View Services' },
    'products.contactUs': { id: 'Hubungi Kami', en: 'Contact Us' },
    'products.available': { id: 'Tersedia', en: 'Available' },
    'products.beta': { id: 'Beta', en: 'Beta' },
    'products.comingSoon': { id: 'Segera Hadir', en: 'Coming Soon' },

    
    // SERVICES PAGE
    
    'services.heroTitle': { id: 'Layanan Pengembangan', en: 'Development Services' },
    'services.heroHighlight': { id: 'Software & Aplikasi', en: 'Software & Applications' },
    'services.heroSubtitle': { 
        id: 'Kami membantu bisnis dan organisasi membangun sistem dari awal, mengembangkan sistem yang sudah ada, atau mengintegrasikan dengan tools yang kami miliki.', 
        en: 'We help businesses and organizations build systems from scratch, develop existing systems, or integrate with our tools.' 
    },

    // Services Items
    'services.webDev.title': { id: 'Web Development', en: 'Web Development' },
    'services.webDev.tagline': { id: 'Website & Web Application', en: 'Website & Web Application' },
    'services.webDev.desc': { 
        id: 'Membangun website dan web application profesional dengan teknologi modern. Dari company profile hingga sistem kompleks dengan dashboard dan integrasi.', 
        en: 'Building professional websites and web applications with modern technology. From company profiles to complex systems with dashboards and integration.' 
    },
    'services.mobile.title': { id: 'Mobile App Development', en: 'Mobile App Development' },
    'services.mobile.tagline': { id: 'Aplikasi iOS & Android', en: 'iOS & Android Apps' },
    'services.mobile.desc': { 
        id: 'Mengembangkan aplikasi mobile cross-platform dengan performa optimal. Desain yang intuitif dan user experience yang menyenangkan untuk pengguna Anda.', 
        en: 'Developing cross-platform mobile applications with optimal performance. Intuitive design and pleasant user experience for your users.' 
    },
    'services.design.title': { id: 'UI/UX Design', en: 'UI/UX Design' },
    'services.design.tagline': { id: 'Desain yang Fungsional', en: 'Functional Design' },
    'services.design.desc': { 
        id: 'Menciptakan desain antarmuka yang tidak hanya menarik tetapi juga fungsional. Fokus pada user experience untuk meningkatkan engagement.', 
        en: 'Creating interface designs that are not only attractive but also functional. Focus on user experience to increase engagement.' 
    },
    'services.consulting.title': { id: 'Konsultasi Teknologi', en: 'Technology Consulting' },
    'services.consulting.tagline': { id: 'Strategi Digital yang Tepat', en: 'Right Digital Strategy' },
    'services.consulting.desc': { 
        id: 'Memberikan panduan strategis untuk kebutuhan teknologi bisnis Anda. Analisis kebutuhan, rekomendasi solusi, dan roadmap pengembangan.', 
        en: 'Providing strategic guidance for your business technology needs. Needs analysis, solution recommendations, and development roadmap.' 
    },
    'services.includes': { id: 'Yang Termasuk:', en: 'Includes:' },

    // Process Steps
    'services.process.label': { id: 'Alur Kerja', en: 'Workflow' },
    'services.process.title': { id: 'Bagaimana Kami', en: 'How We' },
    'services.process.titleHighlight': { id: 'Bekerja', en: 'Work' },
    'services.process.subtitle': { 
        id: 'Proses yang terstruktur dan transparan untuk memastikan proyek Anda berjalan lancar dari awal hingga akhir.', 
        en: 'A structured and transparent process to ensure your project runs smoothly from start to finish.' 
    },
    'services.process.step1.title': { id: 'Discovery', en: 'Discovery' },
    'services.process.step1.desc': { id: 'Kami memulai dengan mendengarkan kebutuhan Anda secara mendalam.', en: 'We start by listening deeply to your needs.' },
    'services.process.step1.duration': { id: '1-2 Hari', en: '1-2 Days' },
    'services.process.step2.title': { id: 'Perencanaan', en: 'Planning' },
    'services.process.step2.desc': { id: 'Tim kami menyusun strategi dan membuat desain wireframe serta prototype.', en: 'Our team develops strategy and creates wireframe designs and prototypes.' },
    'services.process.step2.duration': { id: '1-2 Minggu', en: '1-2 Weeks' },
    'services.process.step3.title': { id: 'Development', en: 'Development' },
    'services.process.step3.desc': { id: 'Proses pengembangan dengan metodologi agile dan testing berkelanjutan.', en: 'Development process with agile methodology and continuous testing.' },
    'services.process.step3.duration': { id: '4-12 Minggu', en: '4-12 Weeks' },
    'services.process.step4.title': { id: 'Launch', en: 'Launch' },
    'services.process.step4.desc': { id: 'Peluncuran produk dengan persiapan matang dan dukungan post-launch.', en: 'Product launch with thorough preparation and post-launch support.' },
    'services.process.step4.duration': { id: 'Ongoing', en: 'Ongoing' },

    // Services CTA
    'services.cta.title': { id: 'Siap Memulai Proyek Anda?', en: 'Ready to Start Your Project?' },
    'services.cta.subtitle': { 
        id: 'Ceritakan kebutuhan Anda kepada kami. Konsultasi pertama gratis. Tim kami siap membantu mewujudkan visi digital Anda.', 
        en: 'Tell us about your needs. First consultation is free. Our team is ready to help realize your digital vision.' 
    },
    'services.cta.button': { id: 'Hubungi Kami Sekarang', en: 'Contact Us Now' },

    
    // CONTACT PAGE
    
    'contact.title': { id: 'Mari Wujudkan', en: "Let's Realize" },
    'contact.titleHighlight': { id: 'Proyek Anda', en: 'Your Project' },
    'contact.subtitle': { 
        id: 'Ceritakan kebutuhan Anda kepada kami. Tim kami siap membantu memberikan solusi terbaik untuk bisnis Anda.', 
        en: 'Tell us about your needs. Our team is ready to help provide the best solution for your business.' 
    },
    'contact.sendMessage': { id: 'Kirim Pesan', en: 'Send Message' },
    'contact.formSubtitle': { 
        id: 'Isi form berikut untuk mengirim pesan kepada kami. Kami akan merespons dalam 1x24 jam.', 
        en: 'Fill out the form below to send us a message. We will respond within 24 hours.' 
    },
    'contact.name': { id: 'Nama Lengkap', en: 'Full Name' },
    'contact.namePlaceholder': { id: 'Nama Anda', en: 'Your Name' },
    'contact.email': { id: 'Email', en: 'Email' },
    'contact.emailPlaceholder': { id: 'email@anda.com', en: 'your@email.com' },
    'contact.phone': { id: 'No. Telepon', en: 'Phone Number' },
    'contact.phonePlaceholder': { id: '08xx-xxxx-xxxx', en: '+62 xxx-xxxx-xxxx' },
    'contact.company': { id: 'Perusahaan / Organisasi', en: 'Company / Organization' },
    'contact.companyPlaceholder': { id: 'Nama Perusahaan (opsional)', en: 'Company Name (optional)' },
    'contact.service': { id: 'Layanan yang Diminati', en: 'Service of Interest' },
    'contact.selectService': { id: 'Pilih Layanan', en: 'Select Service' },
    'contact.projectType': { id: 'Jenis Proyek', en: 'Project Type' },
    'contact.selectProjectType': { id: 'Pilih Jenis Proyek', en: 'Select Project Type' },
    'contact.message': { id: 'Pesan', en: 'Message' },
    'contact.messagePlaceholder': { id: 'Ceritakan kebutuhan proyek Anda...', en: 'Tell us about your project needs...' },
    'contact.submit': { id: 'Kirim Pesan', en: 'Send Message' },
    'contact.sending': { id: 'Mengirim...', en: 'Sending...' },
    'contact.success': { id: 'Pesan Terkirim!', en: 'Message Sent!' },
    'contact.successDesc': { 
        id: 'Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.', 
        en: 'Thank you for contacting us. Our team will respond to your message shortly.' 
    },
    'contact.sendAnother': { id: 'Kirim Pesan Lain', en: 'Send Another Message' },
    'contact.infoTitle': { id: 'Informasi Kontak', en: 'Contact Information' },
    'contact.emailLabel': { id: 'Email', en: 'Email' },
    'contact.locationLabel': { id: 'Lokasi', en: 'Location' },

    // Services Options
    'contact.services.webDev': { id: 'Web Development', en: 'Web Development' },
    'contact.services.mobile': { id: 'Mobile App Development', en: 'Mobile App Development' },
    'contact.services.design': { id: 'UI/UX Design', en: 'UI/UX Design' },
    'contact.services.consulting': { id: 'Konsultasi Teknologi', en: 'Technology Consulting' },
    'contact.services.other': { id: 'Lainnya', en: 'Other' },

    // Project Type Options
    'contact.projectType.new': { id: 'Proyek Baru', en: 'New Project' },
    'contact.projectType.existing': { id: 'Pengembangan Sistem Existing', en: 'Existing System Development' },
    'contact.projectType.integration': { id: 'Integrasi Sistem', en: 'System Integration' },
    'contact.projectType.consultation': { id: 'Konsultasi', en: 'Consultation' },
    'contact.projectType.other': { id: 'Lainnya', en: 'Other' },

    
    // ABOUT PAGE
    
    'about.hero.title1': { id: 'Tentang', en: 'About' },
    'about.hero.title2': { id: 'Twenti Studio', en: 'Twenti Studio' },
    'about.hero.subtitle': { 
        id: 'Twenti Studio adalah app studio yang membangun produk digital untuk menyelesaikan permasalahan nyata pengguna, sebagai bagian dari ekosistem teknologi Interdots Group.', 
        en: 'Twenti Studio is an app studio that builds digital products to solve real user problems, as part of the Interdots Group technology ecosystem.' 
    },
    'about.purpose.title': { id: 'Tujuan Kami', en: 'Our Purpose' },
    'about.purpose.desc1': { 
        id: 'Tujuan kami adalah membangun produk digital yang benar-benar membantu pengguna menyelesaikan masalah nyata melalui desain yang matang dan teknologi yang andal.', 
        en: 'Our purpose is to build digital products that genuinely help users solve real problems through thoughtful design and reliable technology.' 
    },
    'about.purpose.desc2': { 
        id: 'Kami fokus mengembangkan aplikasi dengan pola pikir produk—di mana setiap keputusan didorong oleh kebutuhan pengguna, kegunaan jangka panjang, dan pertumbuhan berkelanjutan, bukan pengiriman jangka pendek.', 
        en: 'We focus on developing applications with a product mindset—where every decision is driven by user needs, long-term usability, and sustainable growth, rather than short-term delivery.' 
    },
    'about.whatWeDo.title': { id: 'Apa yang Kami Lakukan', en: 'What We Do' },
    'about.whatWeDo.web.title': { id: 'Aplikasi Web', en: 'Web Applications' },
    'about.whatWeDo.web.desc': { 
        id: 'Kami merancang dan membangun aplikasi berbasis web yang terstruktur, mudah dipelihara, dan siap berkembang seiring dengan kebutuhan pengguna.', 
        en: 'We design and build web-based applications that are structured, maintainable, and ready to evolve as user needs grow.' 
    },
    'about.whatWeDo.mobile.title': { id: 'Pengembangan Mobile', en: 'Mobile Development' },
    'about.whatWeDo.mobile.desc': { 
        id: 'Kami mengembangkan solusi mobile dengan fokus pada kegunaan dan konsistensi, memastikan produk tetap praktis dan mudah dipelihara.', 
        en: 'We develop mobile-ready solutions with a focus on usability and consistency, ensuring products remain practical and easy to maintain.' 
    },
    'about.whatWeDo.uiux.title': { id: 'UI/UX Design', en: 'UI/UX Design' },
    'about.whatWeDo.uiux.desc': { 
        id: 'Kami memandang UI/UX sebagai bagian dari produk itu sendiri—fokus pada kejelasan, alur pengguna, dan penggunaan nyata, bukan hanya tren visual.', 
        en: 'We approach UI/UX as part of the product itself—focusing on clarity, user flow, and real usage rather than visual trends alone.' 
    },
    'about.whatWeDo.consulting.title': { id: 'Konsultasi', en: 'Consulting' },
    'about.whatWeDo.consulting.desc': { 
        id: 'Kami menyediakan konsultasi produk dan teknis untuk membantu tim dan organisasi mengklarifikasi masalah, menentukan arah produk, dan membuat keputusan yang tepat sebelum dan selama pengembangan.', 
        en: 'We provide product and technical consulting to help teams and organizations clarify problems, define product direction, and make informed decisions before and during development.' 
    },
    'about.cta.title': { id: 'Siap Membangun Sesuatu yang Bermakna?', en: 'Ready to Build Something Meaningful?' },
    'about.cta.desc': { 
        id: 'Jika Anda memiliki ide produk atau masalah yang layak diselesaikan, kami terbuka untuk mendiskusikan bagaimana hal itu dapat didekati, dibangun, dan dikembangkan secara bertanggung jawab.', 
        en: 'If you have a product idea or a problem worth solving, we\'re open to discussing how it can be approached, built, and developed responsibly.' 
    },
    'about.cta.contact': { id: 'Hubungi Kami', en: 'Get in Touch' },
    'about.cta.interdots': { id: 'Interdots Group', en: 'Interdots Group' },

    
    // FOOTER
    
    'footer.description': { 
        id: 'App studio yang mengembangkan aplikasi untuk menyelesaikan masalah dan menyediakan layanan pengembangan software profesional.', 
        en: 'App studio that develops applications to solve problems and provides professional software development services.' 
    },
    'footer.products': { id: 'Produk', en: 'Products' },
    'footer.services': { id: 'Layanan', en: 'Services' },
    'footer.contactUs': { id: 'Hubungi Kami', en: 'Contact Us' },
    'footer.allProducts': { id: 'Semua Produk', en: 'All Products' },
    'footer.webDev': { id: 'Web Development', en: 'Web Development' },
    'footer.mobileApp': { id: 'Mobile App', en: 'Mobile App' },
    'footer.uiuxDesign': { id: 'UI/UX Design', en: 'UI/UX Design' },
    'footer.consulting': { id: 'Konsultasi', en: 'Consulting' },
    'footer.partOf': { id: 'Part of Interdots Group ecosystem', en: 'Part of Interdots Group ecosystem' },
    'footer.rights': { id: 'All rights reserved.', en: 'All rights reserved.' },
    'footer.privacy': { id: 'Kebijakan Privasi', en: 'Privacy Policy' },
    'footer.terms': { id: 'Syarat & Ketentuan', en: 'Terms & Conditions' },

    
    // COMMON / SHARED
    
    'common.viewAll': { id: 'Lihat Semua', en: 'View All' },
    'common.learnMore': { id: 'Pelajari Lebih Lanjut', en: 'Learn More' },
    'common.getStarted': { id: 'Mulai Sekarang', en: 'Get Started' },
    'common.required': { id: 'Wajib', en: 'Required' },
    'common.optional': { id: 'Opsional', en: 'Optional' },
    'common.select': { id: 'Pilih', en: 'Select' },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
    isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Always start with 'id' to match server render and avoid hydration mismatch
    const [language, setLanguageState] = useState<Language>('id');
    const [isHydrated, setIsHydrated] = useState(false);

    // Load saved language from localStorage AFTER component mounts
    // Using useEffect with a callback to avoid React Compiler warning
    useEffect(() => {
        const loadLanguage = () => {
            const saved = localStorage.getItem('language') as Language;
            if (saved && (saved === 'id' || saved === 'en')) {
                setLanguageState(saved);
            }
            setIsHydrated(true);
        };
        // Use requestAnimationFrame to defer state updates
        requestAnimationFrame(loadLanguage);
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const toggleLanguage = () => {
        const newLang = language === 'id' ? 'en' : 'id';
        handleSetLanguage(newLang);
    };

    const t = (key: string): string => {
        const translation = translations[key];
        if (!translation) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        return translation[language];
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, t, isHydrated }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};