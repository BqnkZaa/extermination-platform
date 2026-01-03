import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'เกี่ยวกับเรา | Rabbit Pest Control',
    description: 'รู้จัก Rabbit Pest Control ผู้เชี่ยวชาญด้านการกำจัดปลวกและแมลงรบกวนครบวงจร ประสบการณ์กว่า 15 ปี ให้บริการพื้นที่จันทบุรี ตราด ระยอง',
    openGraph: {
        title: 'เกี่ยวกับเรา | Rabbit Pest Control',
        description: 'รู้จัก Rabbit Pest Control ผู้เชี่ยวชาญด้านการกำจัดปลวกและแมลงรบกวนครบวงจร',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
