// ============================================
// SUMBER DATA TUNGGAL: FAQ
// ============================================
// Dipindahkan ke sini dari LanguageContext karena teks yang sama harus
// dibaca dua pihak yang berbeda:
//   1. Komponen client (homepage & /kontak) untuk ditampilkan.
//   2. Server component untuk menyusun structured data FAQPage.
//
// LanguageContext masih menyediakan kunci "faq.q1"/"faq.a1" seperti
// sebelumnya, hanya saja isinya kini dibangun dari berkas ini.
//
// PENTING: structured data hanya boleh memuat FAQ yang benar-benar
// terlihat di halaman. Jangan menyusun daftar JSON-LD sendiri, pakai
// pickFaq() dengan kunci yang sama seperti yang dirender.
//
// Framing sengaja mengombinasikan dua identitas Twenti: studio yang
// membangun produk sendiri (maker) DAN membantu bisnis membangun
// produknya (jasa). Jawaban menghindari nada "vendor terima order",
// dan menekankan bahwa standar yang dipakai pada produk sendiri itulah
// yang dibawa saat mengerjakan proyek klien.
// ============================================

export type FaqKey = "q1" | "q2" | "q3" | "q4" | "q5" | "q6";

export interface FaqEntry {
  key: FaqKey;
  question: { id: string; en: string };
  answer: { id: string; en: string };
}

export const faqs: FaqEntry[] = [
  {
    key: "q1",
    question: {
      id: "Twenti Studio itu bikin produk sendiri atau penyedia jasa?",
      en: "Is Twenti Studio a product maker or a service provider?",
    },
    answer: {
      id: "Keduanya, dan itu memang inti kami. Twenti adalah app studio: kami membangun dan menjalankan produk kami sendiri seperti FiNot dan Games Twenti. Tim, standar, dan cara kerja yang kami pakai untuk produk itu jugalah yang kami bawa saat membantu bisnis membangun produknya. Jadi Anda tidak sedang menyewa vendor yang sekadar mengeksekusi permintaan, tapi berkolaborasi dengan orang yang tiap hari benar-benar memakai dan merawat produk buatannya sendiri.",
      en: "Both, and that is the whole point. Twenti is an app studio: we build and run our own products like FiNot and Games Twenti. The same team, standards, and way of working we use on those products are exactly what we bring when we help businesses build theirs. So you are not hiring a vendor that just executes orders, you are collaborating with people who actually use and maintain the products they build every day.",
    },
  },
  {
    key: "q2",
    question: {
      id: "Apa bedanya kerja sama dengan studio yang punya produk sendiri?",
      en: "What is different about working with a studio that has its own products?",
    },
    answer: {
      id: "Karena kami ikut menanggung produk kami sendiri, kami berpikir seperti pemilik, bukan tukang. Biaya perawatan, kemudahan dipakai, dan skalabilitas adalah masalah kami juga, bukan cuma milik Anda. Itu artinya kami cenderung menahan fitur yang tidak perlu, memilih solusi yang tahan lama, dan jujur soal trade-off, karena keputusan seperti itu tiap hari kami rasakan sendiri di produk kami.",
      en: "Because we carry our own products, we think like owners, not like hired hands. Maintenance cost, ease of use, and scalability are our problems too, not just yours. That means we tend to resist unnecessary features, pick solutions that last, and be honest about trade-offs, because we feel those same decisions every day in our own products.",
    },
  },
  {
    key: "q3",
    question: {
      id: "Berapa lama waktu pengembangan produk?",
      en: "How long does product development take?",
    },
    answer: {
      id: "Bergantung kompleksitasnya. Landing page atau website sederhana biasanya 1-3 minggu, web app dengan fitur standar 4-8 minggu, dan produk kompleks dengan integrasi sistem bisa 2-4 bulan atau lebih. Alih-alih membangun semuanya sekaligus, kami cenderung merilis versi inti lebih dulu lalu mengembangkannya bertahap, pendekatan yang sama seperti saat kami membesarkan produk kami sendiri.",
      en: "It depends on complexity. A landing page or simple website usually takes 1-3 weeks, a web app with standard features 4-8 weeks, and a complex product with system integration can take 2-4 months or more. Instead of building everything at once, we tend to ship a core version first and grow it in stages, the same approach we use when growing our own products.",
    },
  },
  {
    key: "q4",
    question: {
      id: "Bagaimana proses kerja samanya, dan bisakah lanjut dari yang sudah ada?",
      en: "How does the collaboration work, and can you continue from something existing?",
    },
    answer: {
      id: "Prosesnya dimulai dari konsultasi gratis untuk memahami masalah yang ingin Anda selesaikan, lalu kami susun proposal dan timeline, dan pengerjaan berjalan dengan update berkala serta pembayaran bertahap sesuai milestone. Kami juga terbuka melanjutkan produk yang sudah ada: memperbaiki, menata ulang, atau mengintegrasikannya dengan sistem seperti ERP, CRM, payment gateway, dan API pihak ketiga, karena kami memperlakukan produk Anda sama seperti produk kami sendiri.",
      en: "It starts with a free consultation to understand the problem you want to solve, then we prepare a proposal and timeline, and the work runs with regular updates and staged payments tied to milestones. We are also happy to continue an existing product: fixing, restructuring, or integrating it with systems like ERP, CRM, payment gateways, and third-party APIs, because we treat your product the same way we treat our own.",
    },
  },
  {
    key: "q5",
    question: {
      id: "Apakah produk dan source code menjadi milik saya?",
      en: "Do the product and source code belong to me?",
    },
    answer: {
      id: "Ya. Untuk proyek klien, 100% source code, database, dan hak ciptanya menjadi milik Anda setelah proyek selesai dan pembayaran lunas, lengkap dengan dokumentasi dan pelatihan bila diperlukan. Produk yang kami bangun untuk diri sendiri tetap milik kami, tapi apa pun yang kami kerjakan untuk Anda adalah milik Anda sepenuhnya.",
      en: "Yes. For client projects, 100% of the source code, database, and copyright become yours once the project is completed and payment is settled, along with documentation and training if needed. The products we build for ourselves stay ours, but anything we build for you is fully yours.",
    },
  },
  {
    key: "q6",
    question: {
      id: "Bagaimana perawatan dan skalabilitas setelah produk rilis?",
      en: "What about maintenance and scalability after the product launches?",
    },
    answer: {
      id: "Rilis itu awal, bukan akhir. Kami memakai arsitektur modern yang mudah di-scale dan menyediakan perawatan berkelanjutan berupa backup, security update, perbaikan bug, dan dukungan teknis. Ini bukan janji kosong: kami menjaga produk kami sendiri tetap hidup dengan cara yang sama, jadi kami paham betul apa yang dibutuhkan agar sebuah produk bertahan dan berkembang seiring pertumbuhan bisnis.",
      en: "Launch is the beginning, not the end. We use modern, easy-to-scale architecture and offer ongoing maintenance such as backups, security updates, bug fixes, and technical support. This is not an empty promise: we keep our own products alive the same way, so we know exactly what it takes for a product to last and grow along with the business.",
    },
  },
];

/**
 * Mengambil FAQ tertentu, urut sesuai kunci yang diminta.
 * Dipakai halaman untuk memastikan structured data dan tampilan
 * memuat pertanyaan yang persis sama.
 */
export function pickFaq(keys: FaqKey[]): FaqEntry[] {
  return keys
    .map((key) => faqs.find((faq) => faq.key === key))
    .filter((faq): faq is FaqEntry => faq !== undefined);
}

/**
 * Bentuk yang dipahami LanguageContext: { "faq.q1": {id, en}, ... }
 * Ada supaya komponen lama tetap bisa memakai t("faq.q1").
 */
export const faqTranslations = Object.fromEntries(
  faqs.flatMap((faq) => [
    [`faq.${faq.key}`, faq.question],
    [`faq.${faq.key.replace("q", "a")}`, faq.answer],
  ]),
) as Record<string, { id: string; en: string }>;
