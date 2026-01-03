'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bug, Rat, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 'termites',
        icon: () => (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 0-3 1-3 3v2c0 1 .5 2 1 3l-2 4h8l-2-4c.5-1 1-2 1-3V6c0-2-1.5-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15v3m6-3v3M8 8H6m12 0h-2" />
            </svg>
        ),
        title: 'กำจัดปลวก',
        titleEn: 'Termite Control',
        description: 'ระบบกำจัดปลวกครบวงจร ทั้งแบบเคมีและระบบเหยื่อ รับประกันผลงาน',
        href: '/services#termites',
        color: 'from-orange-500 to-amber-500',
        bgGradient: 'from-orange-50 to-amber-50',
    },
    {
        id: 'cockroaches',
        icon: Bug,
        title: 'กำจัดแมลงสาบ',
        titleEn: 'Cockroach Control',
        description: 'กำจัดแมลงสาบทุกสายพันธุ์ ด้วยวิธีที่ปลอดภัย ไม่มีกลิ่นรบกวน',
        href: '/services#cockroaches',
        color: 'from-red-500 to-rose-500',
        bgGradient: 'from-red-50 to-rose-50',
    },
    {
        id: 'mosquitoes',
        icon: () => (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 4v8M8 12h8M6 8l2 2m8-2l-2 2M6 16l2-2m8 2l-2-2" />
                <circle cx="12" cy="10" r="2" />
            </svg>
        ),
        title: 'กำจัดยุง',
        titleEn: 'Mosquito Control',
        description: 'พ่นหมอกควันและสเปรย์กำจัดยุง ลดการแพร่ระบาดของโรค',
        href: '/services#mosquitoes',
        color: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
        id: 'rats',
        icon: Rat,
        title: 'กำจัดหนู',
        titleEn: 'Rodent Control',
        description: 'กำจัดหนูทุกชนิด ป้องกันการกลับมา ด้วยระบบที่มีประสิทธิภาพ',
        href: '/services#rats',
        color: 'from-gray-600 to-gray-700',
        bgGradient: 'from-gray-50 to-slate-50',
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4"
                    >
                        บริการของเรา
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
                    >
                        บริการกำจัดแมลงครบวงจร
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto"
                    >
                        เราให้บริการกำจัดแมลงและสัตว์รบกวนทุกชนิด ด้วยทีมงานมืออาชีพ
                        และอุปกรณ์ที่ทันสมัย
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                                className="group block h-full p-6 lg:p-8 bg-gradient-to-br rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
                                style={{
                                    background: `linear-gradient(135deg, ${service.bgGradient.split(' ')[0].replace('from-', '')} 0%, white 100%)`,
                                }}
                            >
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                                    <service.icon />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                                <p className="text-sm text-gray-400 mb-3">{service.titleEn}</p>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                                {/* Link */}
                                <div className="flex items-center text-orange-600 font-medium text-sm group-hover:gap-2 transition-all">
                                    <span>ดูรายละเอียด</span>
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
