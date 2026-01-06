import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import { PhonePopupProvider } from "@/context/PhonePopupContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rabbit Pest Control | กำจัดปลวก แมลง หนู จันทบุรี ตราด เกาะช้าง",
  description: "บริการกำจัดปลวก แมลงสาบ ยุง หนู ครบวงจร ปลอดภัยต่อคนและสัตว์เลี้ยง ให้บริการ 24 ชั่วโมง พื้นที่จันทบุรี ตราด เกาะช้าง ได้รับอนุญาตจากกระทรวงสาธารณสุข",
  keywords: ["กำจัดปลวก", "กำจัดแมลง", "กำจัดหนู", "pest control", "จันทบุรี", "ตราด", "เกาะช้าง", "Rabbit Pest Control"],
  authors: [{ name: "Rabbit Pest Control" }],
  icons: {
    icon: "/images/Logo.png",
  },
  openGraph: {
    title: "Rabbit Pest Control | กำจัดปลวก แมลง หนู จันทบุรี ตราด เกาะช้าง",
    description: "บริการกำจัดปลวก แมลงสาบ ยุง หนู ครบวงจร ปลอดภัยต่อคนและสัตว์เลี้ยง ให้บริการ 24 ชั่วโมง",
    type: "website",
    locale: "th_TH",
    siteName: "Rabbit Pest Control",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} antialiased`}>
        <PhonePopupProvider>
          <Navbar />
          <main className="min-h-screen pb-16 lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileActionBar />
        </PhonePopupProvider>
      </body>
    </html>
  );
}
