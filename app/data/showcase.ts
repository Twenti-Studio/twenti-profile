// ============================================
// SUMBER DATA TUNGGAL: PRODUK & PROYEK KLIEN
// ============================================
// Dipakai bersama oleh homepage dan halaman /produk.
// Ubah di sini, kedua halaman ikut berubah.
//
// PENTING, bedakan keduanya:
//   products : produk digital MILIK Twenti Studio sendiri.
//   clients  : proyek yang dikerjakan UNTUK klien.
// Pemisahan ini yang membedakan app studio dengan agency,
// jadi jangan campur salah satu ke array yang lain.
// ============================================

export interface Product {
  name: string;
  description: { id: string; en: string };
  category: string;
  status: "coming-soon" | "available" | "development";
  link: string;
  image?: string;
}

export interface ClientWork {
  name: string;
  /** Nama klien / organisasi pemilik proyek */
  client: string;
  description: { id: string; en: string };
  category: string;
  link: string;
  image?: string;
}

// ============================================
// PRODUK TWENTI STUDIO
// ============================================
// Cara menambah: salin salah satu object di bawah, lalu isi:
//   - name        : Nama produk
//   - description : Ringkasan singkat (id & en) -> tampil di modal
//   - category    : Kategori produk (Digital Store, Task Platform, dll)
//   - status      : 'available' | 'development' | 'coming-soon'
//   - link        : URL produk, dibuka tombol "Kunjungi Sekarang"
//   - image       : Path logo di /public (contoh: '/image/nama.png')
// ============================================

export const products: Product[] = [
  {
    name: "Games Twenti",
    description: {
      id: "Platform digital store resmi untuk berbagai kebutuhan digital, mulai dari top-up game, voucher, e-books, hingga layanan media sosial.",
      en: "Official digital store platform for various digital needs, from game top-ups, vouchers, e-books, to social media services.",
    },
    category: "Digital Store",
    status: "available",
    link: "https://games.twenti.studio",
    image: "/image/games.png",
  },
  {
    name: "MiTa | Mikro Task",
    description: {
      id: "Platform mikro tasking yang memberikan tugas-tugas sederhana kepada pengguna untuk diselesaikan dengan imbalan tertentu.",
      en: "A micro tasking platform that provides simple tasks for users to complete with certain rewards.",
    },
    category: "Task Platform",
    status: "development",
    link: "https://mita.twenti.studio/",
    image: "/image/mita-test.png",
  },
  {
    name: "Healthify",
    description: {
      id: "Asisten AI yang membantu kamu memverifikasi klaim kesehatan dalam hitungan detik, bukan berdasarkan opini, tapi berdasarkan ribuan publikasi ilmiah.",
      en: "AI assistant that helps you verify health claims in seconds, not based on opinions, but based on thousands of scientific publications.",
    },
    category: "AI Health Hoax Detector",
    status: "available",
    link: "https://healthify.twenti.studio",
    image: "/image/healti.png",
  },
  {
    name: "FiNot | Finance Notes",
    description: {
      id: "Asisten AI yang membantu kamu mencatat pengeluaran dan pemasukan dengan mudah dan cepat.",
      en: "AI assistant that helps you record expenses and income easily and quickly.",
    },
    category: "AI Personal Finance Assistant",
    status: "available",
    link: "https://fi-note.app",
    image: "/image/FiNot.png",
  },
  {
    name: "Well Track",
    description: {
      id: "Sehat itu harusnya semudah bercerita.",
      en: "Health should be as easy as telling a story.",
    },
    category: "AI Personal Health Assistant",
    status: "available",
    link: "https://welltrack.twenti.studio",
    image: "/image/welltrack.png",
  },
];

// ============================================
// PROYEK KLIEN (CLIENT WORKS)
// ============================================
// Cara menambah: salin object di bawah, lalu isi:
//   - name        : Nama project/website milik klien
//   - client      : Nama klien / organisasi pemiliknya
//   - description : Ringkasan singkat (id & en) -> tampil di modal
//   - category    : Jenis project (Company Profile, Web App, dll)
//   - link        : URL live project
//   - image       : Path logo di /public
//
// Jangan menambahkan proyek yang belum live atau belum disetujui
// kliennya untuk ditampilkan.
// ============================================

export const clients: ClientWork[] = [
  {
    name: "Simaggot Balkot",
    client: "Kecamatan Balikpapan Kota",
    description: {
      id: "Sistem digitalisasi operasional budidaya maggot Kecamatan Balikpapan Kota. Menyatukan pendataan lapangan, koordinasi petugas, pencatatan aset, dan tabungan sampah warga dalam satu alur, dengan perhitungan setoran warga yang terhitung otomatis, sehingga pengelola bisa mengambil keputusan dari data yang utuh.",
      en: "A system that digitizes maggot cultivation operations for the Balikpapan Kota District. It unifies field data collection, officer coordination, asset tracking, and residents' waste savings into a single flow, with resident deposits calculated automatically, so managers can make decisions based on complete data.",
    },
    category: "Waste Management System",
    link: "https://simaggotbalkot.com",
    image: "/image/simaggot.png",
  },
  {
    name: "KlirLogistik",
    client: "KlirLogistik",
    description: {
      id: "Layanan logistik dan ekspedisi B2B berbasis langganan dirancang untuk bisnis yang mengirim rutin dan butuh alur pengiriman yang tertata, bukan sekali jalan.",
      en: "A subscription-based B2B logistics and shipping service built for businesses that ship regularly and need a structured delivery flow, not one-off runs.",
    },
    category: "B2B Logistics",
    link: "https://klirlogistik.technocrats.studio",
    image: "/image/klirlogistik.png",
  },
  {
    name: "BEM FSTI ITK",
    client: "BEM FSTI Institut Teknologi Kalimantan",
    description: {
      id: "Platform resmi Badan Eksekutif Mahasiswa Fakultas Sains dan Teknologi Informasi ITK. Menyatukan agenda kegiatan, program kerja, dokumentasi, dan kanal aspirasi mahasiswa dalam satu situs, sehingga informasi organisasi mudah diakses dan mahasiswa punya satu tempat untuk mengikuti gerakan BEM.",
      en: "The official platform of the Student Executive Board (BEM) of the Faculty of Science and Information Technology, ITK. It brings event agendas, work programs, documentation, and a student aspiration channel into one site, making organizational information easy to access and giving students a single place to follow BEM's activities.",
    },
    category: "Organization Platform",
    link: "https://bemfsti.org",
    image: "/image/bemfsti.png",
  },
];
