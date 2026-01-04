'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Target, Heart, Leaf, Clock, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';
import Image from 'next/image';

const stats = [
    { value: '15+', label: 'ปีประสบการณ์', icon: Award },
    { value: '5,000+', label: 'ลูกค้าที่ไว้วางใจ', icon: Users },
    { value: '24/7', label: 'พร้อมให้บริการ', icon: Clock },
    { value: '100%', label: 'ความพึงพอใจ', icon: Heart },
];

const values = [
    {
        icon: Shield,
        title: 'ปลอดภัย',
        description: 'ใช้ผลิตภัณฑ์ที่ได้รับการรับรองจากกรมวิชาการเกษตร ปลอดภัยต่อคน สัตว์เลี้ยง และสิ่งแวดล้อม',
    },
    {
        icon: Target,
        title: 'มีประสิทธิภาพ',
        description: 'ใช้เทคโนโลยีและวิธีการที่ทันสมัย รับประกันผลงาน กำจัดได้ตรงจุด',
    },
    {
        icon: Heart,
        title: 'ใส่ใจลูกค้า',
        description: 'ทีมงานมืออาชีพ ให้คำปรึกษาฟรี บริการหลังการขายตลอดอายุสัญญา',
    },
    {
        icon: Leaf,
        title: 'รักษ์สิ่งแวดล้อม',
        description: 'เลือกใช้วิธีการที่เป็นมิตรต่อสิ่งแวดล้อม ลดการใช้สารเคมีที่ไม่จำเป็น',
    },
];

const milestones = [
    { year: '2009', event: 'ก่อตั้งบริษัท เริ่มให้บริการในพื้นที่จันทบุรี' },
    { year: '2012', event: 'ขยายพื้นที่บริการครอบคลุมจังหวัดตราด' },
    { year: '2015', event: 'ได้รับใบอนุญาตจากกระทรวงสาธารณสุข' },
    { year: '2018', event: 'ขยายบริการสู่เกาะช้าง' },
    { year: '2020', event: 'เปิดตัวระบบนัดหมายออนไลน์' },
    { year: '2024', event: 'ก้าวสู่ลูกค้ารายที่ 5,000' },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-cover bg-top bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/background_employee.png')" }}>
                <div className="absolute inset-0 bg-black/80 z-0"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-2xl"
                        >
                            <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium rounded-full mb-6">
                                เกี่ยวกับเรา
                            </span>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                                ผู้เชี่ยวชาญด้านการกำจัดแมลง
                                <span className="text-gradient-orange"> มากว่า 15 ปี</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Rabbit Pest Control ให้บริการกำจัดปลวก แมลงสาบ ยุง และหนู
                                ด้วยทีมงานมืออาชีพที่มีประสบการณ์และความเชี่ยวชาญ
                                พร้อมให้บริการตลอด 24 ชั่วโมงในพื้นที่ภาคตะวันออก
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-100 text-orange-600 mb-4">
                                    <stat.icon className="w-7 h-7" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4">
                                เรื่องราวของเรา
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                จากความตั้งใจสู่ความเชี่ยวชาญ
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Rabbit Pest Control ก่อตั้งขึ้นในปี 2009 จากความตั้งใจที่จะให้บริการกำจัดแมลงที่มีคุณภาพ
                                    และปลอดภัยสำหรับครอบครัวชาวไทย เราเริ่มต้นจากทีมงานเล็กๆ ในจังหวัดจันทบุรี
                                    และเติบโตอย่างต่อเนื่องจากการบอกต่อของลูกค้าที่พึงพอใจ
                                </p>
                                <p>
                                    ปัจจุบันเราให้บริการครอบคลุม 3 พื้นที่ในภาคตะวันออก ได้แก่ จันทบุรี ตราด และเกาะช้าง
                                    โดยมีทีมงานประจำในแต่ละพื้นที่ พร้อมให้บริการอย่างรวดเร็วและมีประสิทธิภาพ
                                </p>
                                <p>
                                    เราภูมิใจที่ได้รับความไว้วางใจจากลูกค้ากว่า 5,000 ราย ทั้งบ้านพักอาศัย
                                    โรงงาน โรงแรม ร้านอาหาร และสถานประกอบการต่างๆ
                                </p>
                            </div>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200" />
                            <div className="space-y-6">
                                {milestones.map((milestone, index) => (
                                    <motion.div
                                        key={milestone.year}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-12"
                                    >
                                        <div className="absolute left-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                            {milestone.year.slice(-2)}
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="text-sm text-orange-600 font-semibold mb-1">{milestone.year}</div>
                                            <div className="text-gray-700">{milestone.event}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4"
                        >
                            ค่านิยมของเรา
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            สิ่งที่เรายึดมั่น
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-lg max-w-2xl mx-auto"
                        >
                            ความมุ่งมั่นในคุณภาพและความปลอดภัยคือหัวใจสำคัญของการให้บริการ
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4">
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 bg-green-100 text-green-600 text-sm font-medium rounded-full mb-4"
                        >
                            ใบรับรอง
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
                        >
                            ได้รับการรับรองมาตรฐาน
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <div className="relative w-20 h-20 flex-shrink-0">
                                    <Image
                                        src="/images/ministry_of_public_health.png"
                                        alt="Ministry of Public Health Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        ใบอนุญาตจากกระทรวงสาธารณสุข
                                    </h3>
                                    <p className="text-gray-600">
                                        ได้รับใบอนุญาตประกอบกิจการควบคุมและกำจัดแมลง
                                        ตามพระราชบัญญัติการสาธารณสุข พ.ศ. 2535
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                                            <CheckCircle className="w-4 h-4" />
                                            ถูกต้องตามกฎหมาย
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                                            <CheckCircle className="w-4 h-4" />
                                            ผ่านการอบรม
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                                            <CheckCircle className="w-4 h-4" />
                                            มีบัตรประจำตัว
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
