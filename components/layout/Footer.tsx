'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bug, Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { useContactInfo } from '@/hooks/useContactInfo';

const footerLinks = {
    services: [
        { href: '/services#termites', label: 'กำจัดปลวก' },
        { href: '/services#cockroaches', label: 'กำจัดแมลงสาบ' },
        { href: '/services#mosquitoes', label: 'กำจัดยุง' },
        { href: '/services#rats', label: 'กำจัดหนู' },
    ],
    company: [
        { href: '/about', label: 'เกี่ยวกับเรา' },
        { href: '/services', label: 'บริการทั้งหมด' },
        { href: '/contact', label: 'ติดต่อเรา' },
    ],
    areas: [
        { label: 'จันทบุรี' },
        { label: 'ตราด' },
        { label: 'ระยอง' },
    ],
};

export default function Footer() {
    const { contact } = useContactInfo();

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative h-12 w-12">
                                <Image
                                    src="/images/Logo.png"
                                    alt="Rabbit Pest Control Logo"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white leading-tight">Rabbit</span>
                                <span className="text-sm text-orange-400 font-medium -mt-1">Pest Control</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            บริการกำจัดปลวกและแมลงรบกวนครบวงจร ปลอดภัยต่อคนและสัตว์เลี้ยง
                            ด้วยประสบการณ์กว่า 15 ปี ให้บริการพื้นที่ภาคตะวันออก
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href={contact.facebook_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href={contact.instagram_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href={contact.line_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-green-500 hover:text-white transition-all"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.021.136-.033.203-.033.211 0 .391.09.51.25l2.438 3.317V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">บริการของเรา</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">เกี่ยวกับบริษัท</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h3 className="text-white font-semibold mt-6 mb-4 text-lg">พื้นที่ให้บริการ</h3>
                        <ul className="space-y-2">
                            {footerLinks.areas.map((area) => (
                                <li key={area.label} className="text-gray-400 text-sm flex items-center gap-2">
                                    <MapPin className="h-3 w-3 text-orange-500" />
                                    {area.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">ติดต่อเรา</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs mb-1">โทรศัพท์</p>
                                    <a href={`tel:${contact.phone_call}`} className="text-white font-medium hover:text-orange-400 transition-colors">
                                        {contact.phone_display}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs mb-1">อีเมล</p>
                                    <a href={`mailto:${contact.email}`} className="text-white font-medium hover:text-orange-400 transition-colors text-sm">
                                        {contact.email}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                                    <Clock className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs mb-1">เวลาทำการ</p>
                                    <p className="text-white font-medium">{contact.open_time}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Rabbit Pest Control. สงวนลิขสิทธิ์ทุกประการ
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600 text-xs">จดทะเบียนถูกต้องตามกฎหมาย</span>
                            <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                                ได้รับอนุญาตจากกระทรวงสาธารณสุข
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
