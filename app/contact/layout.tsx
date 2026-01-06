import type { Metadata } from 'next';

import { getContactConfig } from '@/app/lib/googleSheets';

export async function generateMetadata() {
    const config = await getContactConfig();

    return {
        title: 'ติดต่อเรา | Rabbit Pest Control - รับปรึกษาฟรี 24 ชั่วโมง',
        description: `ติดต่อ Rabbit Pest Control เพื่อรับคำปรึกษาฟรีและใบเสนอราคา บริการกำจัดปลวก แมลง หนู 24 ชั่วโมง โทร ${config.phone_display || '089-123-4567'} หรือ Line ${config.line_id || '@Bigheart.'}`,
        openGraph: {
            title: 'ติดต่อเรา | Rabbit Pest Control',
            description: 'ติดต่อ Rabbit Pest Control เพื่อรับคำปรึกษาฟรีและใบเสนอราคา',
        },
    };
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
