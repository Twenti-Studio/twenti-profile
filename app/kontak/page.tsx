import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Kontak | Twenti Studio',
    description: 'Hubungi Twenti Studio untuk konsultasi gratis. Kami siap membantu mewujudkan proyek digital Anda.',
};

export default function KontakPage() {
    return <ContactClient />;
}
