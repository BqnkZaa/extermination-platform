'use client';

import { motion } from 'framer-motion';
import { Shield, Sparkles, Phone, CheckCircle, Search, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/home/CTASection';
import { useContactInfo } from '@/hooks/useContactInfo';
import { usePhonePopup } from '@/context/PhonePopupContext';

export default function TermiteSoilPage() {
    const { contact } = useContactInfo();
    const { openPopup } = usePhonePopup();
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/insect_optimized.png"
                        alt="Soil Treatment"
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
                        <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-6">
                            Chemical Soil Treatment
                        </span>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                            บริการกำจัดปลวก<br />
                            <span className="text-gradient-blue">ระบบอัดน้ำยาลงดิน (Soil Treatment)</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            สร้างเกราะป้องกันบ้านจากใต้ดิน ด้วยน้ำยาคุณภาพสูง มาตรฐานสากล
                            ปกป้องยาวนาน ตัดวงจรปลวกก่อนเข้าถึงตัวบ้าน
                        </p>
                        <Button onClick={() => openPopup(contact.phone_call)} className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white text-lg h-12 px-8">
                            <Phone className="w-5 h-5 mr-2" />
                            ปรึกษาผู้เชี่ยวชาญฟรี
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-300">
                                    <Sparkles className="w-24 h-24 opacity-50" />
                                </div>
                                <Image
                                    src="/images/chemical_soil_Injection_v2.png"
                                    alt="Solid Treatment"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-blue-100 hidden lg:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">สารเคมีมาตรฐาน</p>
                                        <p className="font-bold text-gray-900">อย. และกรมปศุสัตว์</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">ใช้น้ำยาที่มีค่าความปลอดภัยสูง ไม่ฟุ้งกระจาย และย่อยสลายได้ตามธรรมชาติ</p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                กระบวนการ<span className="text-blue-600">อัดน้ำยาลงดิน</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    เป็นการสร้างแนวป้องกันปลวก (Chemical Barrier) ใต้พื้นอาคาร โดยการอัดน้ำยากำจัดปลวกที่มีประสิทธิภาพสูง
                                    ลงไปในดินผ่านท่อที่วางไว้ (Pipe Treatment) หรือการเจาะพื้น (Soil Treatment)
                                    เพื่อให้น้ำยาซึมลงสู่ชั้นดินครอบคลุมพื้นที่ใต้บ้านทั้งหมด
                                </p>
                                <p>
                                    เมื่อปลวกเดินผ่านชั้นดินที่ถูกเคลือบด้วยน้ำยา จะทำให้น้ำยาติดตัวปลวกและส่งผลให้ปลวกตายในที่สุด
                                    เป็นวิธีที่นิยมใช้ในการป้องกันปลวกสำหรับบ้านสร้างใหม่ หรือบ้านที่มีการวางท่อไว้แล้ว
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {[
                                    'วางท่อ (Pipe Treatment)',
                                    'เจาะพื้น (Injection)',
                                    'พ่นหน้าดิน (Soil Spraying)',
                                    'ติดตั้งง่าย รวดเร็ว',
                                    'ราคาประหยัด คุ้มค่า',
                                    'รับประกันผลงาน'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hybrid System */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Hybrid System</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            ระบบผสมผสาน (Hybrid)
                        </h2>
                        <p className="text-gray-600 text-lg">
                            สำหรับกรณีที่มีการระบาดรุนแรง เราแนะนำการใช้ระบบ Hybrid
                            คือการผสมผสานระหว่างระบบเหยื่อและระบบเคมี เพื่อประสิทธิภาพสูงสุดในการกำจัดและป้องกันในคราวเดียว
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Search,
                                title: 'กำจัดตัวที่มีอยู่',
                                desc: 'ใช้การฉีดพ่นเฉพาะจุดหรือวางเหยื่อเพื่อกำจัดปลวกชุดแรกที่พบเห็น',
                                variant: 'white'
                            },
                            {
                                icon: Shield,
                                title: 'ตัดวงจร',
                                desc: 'ทำลายรังด้วยระบบเหยื่อ และสร้างเกราะป้องกันด้วยเคมีรอบนอก',
                                variant: 'blue'
                            },
                            {
                                icon: ShieldCheck,
                                title: 'ป้องกันระยะยาว',
                                desc: 'อัดน้ำยาลงดินเพื่อป้องกันการกลับมาของปลวกชุดใหม่จากใต้ดิน',
                                variant: 'white'
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`
                                    p-8 rounded-3xl shadow-sm text-center h-full flex flex-col items-center
                                    ${item.variant === 'blue'
                                        ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg'
                                        : 'bg-white text-gray-900 border border-blue-50'
                                    }
                                `}
                            >
                                <div className={`
                                    w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                                    ${item.variant === 'blue'
                                        ? 'bg-white/10 text-white'
                                        : 'bg-blue-50 text-blue-600'
                                    }
                                `}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className={`text-xl font-bold mb-4 ${item.variant === 'blue' ? 'text-white' : 'text-gray-900'}`}>
                                    {item.title}
                                </h3>
                                <p className={item.variant === 'blue' ? 'text-blue-50' : 'text-gray-600'}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
