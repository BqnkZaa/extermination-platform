import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ติดต่อเรา | Rabbit Pest Control - รับปรึกษาฟรี 24 ชั่วโมง',
    description: 'ติดต่อ Rabbit Pest Control เพื่อรับคำปรึกษาฟรีและใบเสนอราคา บริการกำจัดปลวก แมลง หนู 24 ชั่วโมง โทร 089-123-4567 หรือ Line @rabbit-pest',
    openGraph: {
        title: 'ติดต่อเรา | Rabbit Pest Control',
        description: 'ติดต่อ Rabbit Pest Control เพื่อรับคำปรึกษาฟรีและใบเสนอราคา',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
