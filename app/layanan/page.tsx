import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Layanan | Twenti Studio',
    description: 'Layanan pengembangan web dan aplikasi profesional dari Twenti Studio. Web development, mobile app, UI/UX design, dan konsultasi teknologi.',
};

export default function LayananPage() {
    return <ServicesClient />;
}
