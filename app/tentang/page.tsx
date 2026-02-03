import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'Tentang Kami - Twenti Studio | Bagian dari Interdots Group',
    description: 'Pelajari lebih lanjut tentang Twenti Studio, app studio inovatif yang merupakan bagian dari ekosistem Interdots Group, yang menghadirkan solusi digital terdepan.',
    keywords: 'tentang twenti studio, interdots group, app studio indonesia, pengembangan aplikasi, tim developer',
};

export default function AboutPage() {
    return <AboutClient />;
}