'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bug, Rat, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 'termite-bait',
        icon: () => (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        title: 'กำจัดปลวกระบบเหยื่อ',
        titleEn: 'Termite Bait System',
        description: 'ตายยกรัง ปลอดภัยต่อคนและสัตว์เลี้ยง เหมาะสำหรับบ้านที่มีเด็กหรือสัตว์เลี้ยง',
        href: '/services/termite-bait',
        color: 'from-green-500 to-emerald-500',
        bgGradient: 'from-green-50 to-emerald-50',
    },
    {
        id: 'termite-soil',
        icon: () => (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'ฉีดพ่นป้องกันปลวก',
        titleEn: 'Soil Treatment',
        description: 'ปกป้องโครงสร้างบ้านด้วยน้ำยาเคมีมาตรฐานสูง ติดทนนาน คุ้มค่า',
        href: '/services/termite-soil',
        color: 'from-orange-500 to-amber-500',
        bgGradient: 'from-orange-50 to-amber-50',
    },
    {
        id: 'general-pest',
        icon: Bug,
        title: 'กำจัดแมลงและสัตว์รบกวน',
        titleEn: 'General Pest Control',
        description: 'กำจัดมด แมลงสาบ หนู และยุง อย่างมีประสิทธิภาพ ตัดวงจรการแพร่พันธุ์',
        href: '/services/general-pest',
        color: 'from-blue-500 to-indigo-500',
        bgGradient: 'from-blue-50 to-indigo-50',
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-20 lg:py-28 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/images/employee.png')" }}>
            <div className="absolute inset-0 bg-white/90 z-0"></div>
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        บริการมาตรฐานมืออาชีพ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        เรามีโซลูชั่นกำจัดปลวกและแมลงที่ครอบคลุม ออกแบบมาเพื่อปกป้องบ้านและธุรกิจของคุณอย่างยั่งยืน
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={service.href}
                                className="group block h-full p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                                {/* Icon */}
                                <div className="relative w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                    <service.icon className="w-8 h-8" />
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider">{service.titleEn}</p>
                                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                                    <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                                        <span>ดูรายละเอียด</span>
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
