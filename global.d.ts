// Deklarasi ambient untuk import file gaya sebagai side-effect,
// contohnya `import "./globals.css"` di app/layout.tsx.
//
// TypeScript versi baru (yang dipakai VS Code) memunculkan error
// ts(2882) "Cannot find module or type declarations for side-effect import"
// karena Next 16 tidak lagi menyertakan deklarasi ini di next-env.d.ts.
// File ini menutup celah tersebut tanpa perlu mengubah next-env.d.ts
// (file itu ditimpa ulang setiap kali Next berjalan).

declare module "*.css";
declare module "*.scss";
declare module "*.sass";
