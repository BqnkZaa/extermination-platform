'use client';

import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const areas = [
    {
        name: 'จันทบุรี',
        nameEn: 'Chanthaburi',
        districts: ['เมืองจันทบุรี', 'ท่าใหม่', 'โป่งน้ำร้อน', 'มะขาม', 'แหลมสิงห์', 'สอยดาว'],
    },
    {
        name: 'ตราด',
        nameEn: 'Trat',
        districts: ['เกาะช้าง', 'เมืองตราด', 'คลองใหญ่', 'เขาสมิง', 'บ่อไร่', 'แหลมงอบ'],
    },
    {
        name: 'ระยอง',
        nameEn: 'Rayong',
        districts: ['เมืองระยอง', 'บ้านฉาง', 'แกลง', 'วังจันทร์', 'บ้านค่าย', 'ปลวกแดง'],
    },
];

export default function ServiceAreaMap() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium rounded-full mb-4"
                        >
                            พื้นที่ให้บริการ
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6"
                        >
                            ครอบคลุมพื้นที่
                            <span className="text-gradient-orange"> ภาคตะวันออก</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg mb-8 leading-relaxed"
                        >
                            ทีมงานประจำพื้นที่ พร้อมเข้าดูแลด่วนทั้งใน จันทบุรี ตราด และเกาะช้าง
                            ไม่ต้องรอคิวจากกรุงเทพฯ เข้าถึงหน้างานไว แก้ปัญหาได้ทันท่วงที
                        </motion.p>

                        {/* Area List */}
                        <div className="space-y-6">
                            {areas.map((area, index) => (
                                <motion.div
                                    key={area.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/20">
                                            <MapPin className="w-5 h-5 text-orange-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-white">{area.name}</h3>
                                            <p className="text-xs text-gray-500">{area.nameEn}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {area.districts.map((district) => (
                                            <span
                                                key={district}
                                                className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                                            >
                                                <CheckCircle className="w-3 h-3 text-orange-400" />
                                                {district}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Map Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl" />

                            {/* Map Container */}
                            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                                {/* Real Google Maps Image */}
                                <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden p-2">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/service-area-map-v3.png"
                                            alt="Service Area Map - Rayong, Chanthaburi, Trat"
                                            fill
                                            className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                                            quality={100}
                                        />

                                        {/* Overlay Gradient for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />


                                    </div>
                                </div>

                                {/* Legend - Simplified */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700/50">
                                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                                    <span className="text-xs text-gray-200">พื้นที่ให้บริการครอบคลุม 3 จังหวัด</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
