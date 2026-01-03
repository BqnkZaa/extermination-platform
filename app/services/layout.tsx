import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'บริการของเรา | Rabbit Pest Control - กำจัดปลวก แมลงสาบ ยุง หนู',
    description: 'บริการกำจัดปลวก แมลงสาบ ยุง และหนูครบวงจร ด้วยระบบเคมี ระบบเหยื่อ และวิธีอื่นๆ ที่ปลอดภัย รับประกันผลงาน พร้อมให้บริการ 24 ชม.',
    openGraph: {
        title: 'บริการของเรา | Rabbit Pest Control',
        description: 'บริการกำจัดปลวก แมลงสาบ ยุง และหนูครบวงจร รับประกันผลงาน',
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
