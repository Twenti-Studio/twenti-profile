import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Produk Digital Twenti Studio | Aplikasi & Platform Buatan Sendiri",
  description:
    "Produk digital yang dirancang, dibangun, dan dikembangkan sendiri oleh Twenti Studio: Games Twenti, MiTa, Healthify, FiNot, dan Well Track.",
  alternates: { canonical: "/produk" },
  openGraph: {
    title: "Produk Digital Twenti Studio | Aplikasi & Platform Buatan Sendiri",
    description:
      "Produk digital yang dirancang, dibangun, dan dikembangkan sendiri oleh Twenti Studio: Games Twenti, MiTa, Healthify, FiNot, dan Well Track.",
    url: "/produk",
    type: "website",
  },
};

export default function ProdukPage() {
  return <ProductsClient />;
}
