'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/home/CTASection';
import { useContactInfo } from '@/hooks/useContactInfo';
import { usePhonePopup } from '@/context/PhonePopupContext';

export default function TermiteBaitPage() {
    const { contact } = useContactInfo();
    const { openPopup } = usePhonePopup();
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/insect_optimized.png"
                        alt="Termite Baiting System"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium rounded-full mb-6">
                            Termite Control Service
                        </span>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                            บริการกำจัดปลวก<br />
                            <span className="text-gradient-orange">ระบบเหยื่อ (Baiting System)</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            นวัตกรรมกำจัดปลวกตายรัง ไม่ต้องเจาะพื้น ปลอดภัย ไร้สารเคมีตกค้าง
                            เหมาะสำหรับบ้านที่มีเด็กเล็ก สัตว์เลี้ยง และท่านที่ต้องการความปลอดภัยสูงสุด
                        </p>
                        <Button onClick={() => openPopup(contact.phone_call)} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg h-12 px-8">
                            <Phone className="w-5 h-5 mr-2" />
                            ปรึกษาผู้เชี่ยวชาญฟรี
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                ทำไมต้องเลือก<span className="text-orange-600">ระบบเหยื่อ?</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    ระบบเหยื่อเป็นวิธีกำจัดปลวกที่ทันสมัยที่สุดในปัจจุบัน โดยใช้พฤติกรรมการหาอาหารของปลวก
                                    เป็นตัวนำพาสารออกฤทธิ์ไปสู่รัง ทำให้สามารถกำจัดปลวกได้ถึงต้นตอ (ตายทั้งรัง)
                                </p>
                                <p>
                                    เหยื่อที่ใช้มีความจูงใจสูง ปลวกจะหยุดกินเนื้อไม้แล้วหันมากินเหยื่อแทน
                                    ปลอดภัยต่อผู้อยู่อาศัย เพราะสารออกฤทธิ์ถูกบรรจุในกล่องมิดชิด และออกฤทธิ์เฉพาะกับปลวกเท่านั้น
                                </p>
                            </div>

                            <div className="mt-8 space-y-4">
                                {[
                                    'ตายยกรัง (Colony Elimination)',
                                    'ไม่ต้องเจาะพื้นบ้านให้เสียหาย',
                                    'ปลอดภัยต่อคนและสัตว์เลี้ยงสูงสุด',
                                    'เป็นมิตรต่อสิ่งแวดล้อม',
                                    'ติดตามผลและตรวจสอบได้ง่าย'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
                                {/* Use a placeholder or existing image. User didn't provide specific images for this yet, so reusing main service image or public images if I knew them. optimizing by using a div with gradient for now or reusing service image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                                    <Shield className="w-24 h-24 opacity-20" />
                                </div>
                                {/* Ideally we would use a real image here. Since I don't have new assets, I'll keep it as a styled placeholder or use generic */}
                                <Image
                                    src="/images/service.png"
                                    alt="Baiting System"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100 hidden lg:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">การรับประกัน</p>
                                        <p className="font-bold text-gray-900">ดูแลต่อเนื่อง 1-3 ปี</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">มีการเข้าตรวจสอบเติมเหยื่อทุกๆ 1-2 เดือน ตลอดอายุสัญญา</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">ขั้นตอนการทำงาน</h2>
                        <p className="text-gray-600">กระบวนการติดตั้งและดูแลระบบเหยื่อมาตรฐานสากล</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'สำรวจวงจรปลวก', desc: 'ตรวจหาจุดเสี่ยงและเส้นทางเดินของปลวกด้วยเครื่องมือพิเศษ' },
                            { step: '02', title: 'ติดตั้งสถานี', desc: 'ติดตั้งสถานีเหยื่อตรงจุดที่พบปลวก และรอบตัวอาคาร' },
                            { step: '03', title: 'กำจัดตายรัง', desc: 'ปลวกนำเหยื่อกลับไปที่รัง ทำให้เกิดการตายต่อเนื่องจนหมด' },
                            { step: '04', title: 'ติดตามผล', desc: 'เข้าตรวจเช็คสภาพเหยื่อและปัญหาใหม่ทุกๆ 1-2 เดือน' }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <span className="absolute right-2 top-2 text-6xl font-bold text-gray-100 group-hover:text-orange-50 transition-colors select-none">
                                    {item.step}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
                                <p className="text-gray-600 relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
