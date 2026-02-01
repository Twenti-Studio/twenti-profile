import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
    title: 'Produk | Twenti Studio',
    description: 'Jelajahi berbagai produk aplikasi inovatif dari Twenti Studio. Solusi digital siap pakai untuk berbagai kebutuhan bisnis Anda.',
};

export default function ProdukPage() {
    return <ProductsClient />;
}
