'use client';

import { motion } from 'framer-motion';
import { Shield, Sparkles, Phone, Bug, Rat, AlertTriangle, ArrowRight, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/home/CTASection';
import { useContactInfo } from '@/hooks/useContactInfo';
import { usePhonePopup } from '@/context/PhonePopupContext';

export default function GeneralPestPage() {
    const { contact } = useContactInfo();
    const { openPopup } = usePhonePopup();
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/insect_optimized.png"
                        alt="General Pest Control"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-[20s]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 text-sm font-bold rounded-full mb-8">
                            <Shield className="w-4 h-4" />
                            <span>Professional Pest Control Service</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            บริการกำจัดแมลงและ<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                                สัตว์รบกวนทั่วไป
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl border-l-4 border-green-500 pl-6">
                            ปกป้องบ้านและครอบครัวของคุณจากแมลงสาบ มด หนู และยุง
                            ด้วยทีมงานมืออาชีพและผลิตภัณฑ์ที่ปลอดภัย ได้มาตรฐานสากล
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button onClick={() => openPopup(contact.phone_call)} className="bg-green-600 hover:bg-green-700 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-green-600/30 transform hover:-translate-y-1 transition-all">
                                <Phone className="w-5 h-5 mr-2" />
                                ปรึกษาปัญหาฟรี
                            </Button>
                            <Button className="bg-white text-green-700 hover:bg-gray-50 text-lg h-14 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1" asChild>
                                <Link href="/services">
                                    บริการของเรา <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation / Services Grid */}
            <section id="services" className="py-10 relative z-20">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Mobile View: Minimal List */}
                    <div className="lg:hidden max-w-3xl mx-auto bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
                        <div className="divide-y divide-gray-100">
                            {[
                                { name: 'กำจัดแมลงสาบ', eng: 'Cockroaches', icon: Bug, id: 'cockroaches', color: 'text-orange-500', bg: 'bg-orange-50' },
                                { name: 'กำจัดมด', eng: 'Ants', icon: AlertTriangle, id: 'ants', color: 'text-red-500', bg: 'bg-red-50' },
                                { name: 'กำจัดยุง', eng: 'Mosquitoes', icon: Sparkles, id: 'mosquitoes', color: 'text-blue-500', bg: 'bg-blue-50' },
                                { name: 'กำจัดหนู', eng: 'Rodents', icon: Rat, id: 'rats', color: 'text-gray-600', bg: 'bg-gray-100' },
                            ].map((pest, idx) => (
                                <motion.div
                                    key={pest.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={`#${pest.id}`}
                                        className="flex items-center gap-6 p-6 hover:bg-gray-50 transition-colors group cursor-pointer"
                                    >
                                        <div className={`w-12 h-12 ${pest.bg} ${pest.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                            <pest.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">{pest.name}</h3>
                                            <span className="text-sm text-gray-500">{pest.eng}</span>
                                        </div>
                                        <div className="text-gray-300 group-hover:text-green-500 transition-colors">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop View: Card Grid */}
                    <div className="hidden lg:grid grid-cols-4 gap-6">
                        {[
                            { name: 'กำจัดแมลงสาบ', eng: 'Cockroaches', icon: Bug, id: 'cockroaches', color: 'text-orange-500', bg: 'bg-orange-50' },
                            { name: 'กำจัดมด', eng: 'Ants', icon: AlertTriangle, id: 'ants', color: 'text-red-500', bg: 'bg-red-50' },
                            { name: 'กำจัดยุง', eng: 'Mosquitoes', icon: Sparkles, id: 'mosquitoes', color: 'text-blue-500', bg: 'bg-blue-50' },
                            { name: 'กำจัดหนู', eng: 'Rodents', icon: Rat, id: 'rats', color: 'text-gray-600', bg: 'bg-gray-100' },
                        ].map((pest, idx) => (
                            <motion.div
                                key={pest.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link
                                    href={`#${pest.id}`}
                                    className="block bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-green-200 group h-full"
                                >
                                    <div className={`w-14 h-14 ${pest.bg} ${pest.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <pest.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">{pest.name}</h3>
                                    <span className="text-sm text-gray-500 group-hover:text-green-500/70">{pest.eng}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="space-y-24 pb-24">
                {/* Cockroaches Section - NOW ORANGE */}
                <section id="cockroaches" className="scroll-mt-28">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-sm border border-gray-100">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-bold mb-6">
                                        <Bug className="w-4 h-4" />
                                        <span>Cockroach Control</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        บริการกำจัดแมลงสาบ<br />
                                        <span className="text-orange-500">อย่างตรงจุดและปลอดภัย</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        เราใช้เทคโนโลยีเหยื่อเจลประสิทธิภาพสูง (Gel Bait) ที่ดึงดูดแมลงสาบได้ดีเยี่ยม
                                        ทำให้เกิดการตายและส่งต่อสารออกฤทธิ์ไปยังตัวอื่นๆ ในรัง (Domino Effect)
                                        ช่วยกำจัดแมลงสาบได้ยกรังโดยไม่ต้องฉีดพ่นสารเคมีฟุ้งกระจาย
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {[
                                            'ปลอดภัยต่อผู้อยู่อาศัยและสัตว์เลี้ยง',
                                            'ตายยกรังด้วย Domino Effect',
                                            'ไม่มีกลิ่นรบกวน ไม่เลอะเทอะ',
                                            'เห็นผลชัดเจนภายใน 7-14 วัน'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                                                <span className="text-gray-700 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-orange-50 p-8 rounded-3xl relative overflow-hidden group hover:shadow-lg transition-all">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">ปัญหามักพบที่ไหน?</h3>
                                        <ul className="space-y-3 relative z-10">
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                                                ในครัว ใต้อ่างล้างจาน
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                                                หลังตู้เย็น เครื่องใช้ไฟฟ้าที่มีความร้อน
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                                                ท่อระบายน้ำ บ่อดักไขมัน
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border-2 border-orange-50 p-8 rounded-3xl hover:border-orange-100 transition-colors">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                <Info className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Did you know?</h3>
                                        </div>
                                        <p className="text-gray-600">
                                            แมลงสาบ 1 คู่ สามารถแพร่พันธุ์ได้ถึง 400,000 ตัวใน 1 ปี หากไม่มีการควบคุมอย่างถูกวิธี
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ants Section - NOW RED */}
                <section id="ants" className="scroll-mt-28">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-sm border border-gray-100">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <div className="order-2 lg:order-1 space-y-6">
                                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-red-500" />
                                            วิธีการจัดการของเรา
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-white text-red-600 flex items-center justify-center font-bold text-sm shadow-sm shrink-0">1</div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">สำรวจและระบุชนิด</h4>
                                                    <p className="text-sm text-gray-600 mt-1">มดแต่ละชนิดชอบอาหารต่างกัน การระบุชนิดทำให้เลือกเหยื่อได้ผล 100%</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-white text-red-600 flex items-center justify-center font-bold text-sm shadow-sm shrink-0">2</div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">วางเหยื่อพิษ (Baiting)</h4>
                                                    <p className="text-sm text-gray-600 mt-1">ให้มดงานนำเหยื่อกลับไปป้อนนางพญา เพื่อกำจัดแหล่งกำเนิด</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-white text-red-600 flex items-center justify-center font-bold text-sm shadow-sm shrink-0">3</div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">สเปรย์ป้องกัน (Barrier Spray)</h4>
                                                    <p className="text-sm text-gray-600 mt-1">ฉีดพ่นรอบอาคารเพื่อป้องกันมดจากภายนอกเข้ามาใหม่</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-bold mb-6">
                                        <AlertTriangle className="w-4 h-4" />
                                        <span>Ant Control</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        บริการกำจัดมด<br />
                                        <span className="text-red-500">ตัดวงจรถึงรังนางพญา</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        ปัญหามดกวนใจจะหมดไป ด้วยระบบการจัดการแบบบูรณาการ เราไม่เพียงแค่กำจัดมดที่มองเห็น
                                        แต่เน้นการค้นหาและทำลายรังนางพญา เพื่อป้องกันการกลับมาของมดอย่างยั่งยืน
                                    </p>
                                    <ul className="grid gap-3">
                                        {['กำจัดมดเหม็น มดละเอียด มดดำ มดแดง', 'ปลอดภัยต่อเด็กและสัตว์เลี้ยง', 'ป้องกันมดกลับมาสร้างรังซ้ำ'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                                                    <CheckCircle className="w-4 h-4" />
                                                </div>
                                                <span className="text-gray-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mosquitoes Section - NOW LIGHT BLUE/INDIGO */}
                <section id="mosquitoes" className="scroll-mt-28">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-[3rem] p-8 lg:p-12 shadow-sm border border-blue-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl -ml-20 -mb-20" />

                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-md rounded-lg text-sm font-bold mb-6 border border-blue-100 text-blue-600">
                                        <Sparkles className="w-4 h-4" />
                                        <span>Mosquito Control</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        บริการกำจัดยุง<br />
                                        <span className="text-blue-600">ปกป้องคนที่คุณรักจากโรค</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        หยุดวงจรชีวิตยุงร้าย พาหะไข้เลือดออกและโรคร้ายแรงอื่นๆ
                                        ด้วยการจัดการครอบคลุมทุกระยะ ตั้งแต่แหล่งเพาะพันธุ์ลูกน้ำ
                                        จนถึงยุงตัวเต็มวัย
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-blue-100 hover:bg-white transition-colors">
                                            <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                                            <div className="text-sm text-gray-600">ครอบคลุมพื้นที่</div>
                                        </div>
                                        <div className="bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-blue-100 hover:bg-white transition-colors">
                                            <div className="text-3xl font-bold text-blue-600 mb-1">ULV</div>
                                            <div className="text-sm text-gray-600">พ่นละอองฝอยละเอียด</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    {[
                                        { title: 'กำจัดแหล่งเพาะพันธุ์', desc: 'สำรวจและใส่ทรายอะเบทในแหล่งน้ำขัง เพื่อตัดวงจรก่อนเกิดยุง' },
                                        { title: 'พ่นแบบ ULV ภายใน', desc: 'เครื่องพ่นละอองฝอยละเอียด เข้าถึงทุกซอกมุม ไม่ทิ้งคราบมัน ปลอดภัย' },
                                        { title: 'พ่นแบบหมอกควัน ภายนอก', desc: 'Fogging บริเวณสวน ท่อระบายน้ำ เพื่อกำจัดยุงภายนอกอาคาร' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/60 hover:bg-white transition-all border border-blue-50 shadow-sm">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 shrink-0">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rats Section - Light Gray (Default) */}
                <section id="rats" className="scroll-mt-28">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-sm border border-gray-100">
                            <div className="max-w-4xl mx-auto text-center mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-bold mb-6">
                                    <Rat className="w-4 h-4" />
                                    <span>Rodent Control</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                    บริการกำจัดหนูและสัตว์ฟันแทะ
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    ป้องกันความเสียหายต่อทรัพย์สิน สายไฟ และอุปกรณ์ต่างๆ รวมถึงปัญหาสุขอนามัยจากฉี่หนู
                                    ด้วยอุปกรณ์มาตรฐานเกรดอุตสาหกรรม
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Shield className="w-8 h-8 text-gray-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Tamper Resistant</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        ใช้กล่องสถานีเหยื่อ (Rodent Station) ที่มีระบบล็อค ป้องกันเด็กและสัตว์เลี้ยงสัมผัสเหยื่อพิษ
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Rat className="w-8 h-8 text-gray-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Placement</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        วางเหยื่อตามรอยเดินหากินของหนู (Runway) และจุดเสี่ยงต่างๆ เช่น ฝ้าเพดาน ห้องเก็บของ
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Info className="w-8 h-8 text-gray-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        ติดตามผลและเติมเหยื่ออย่างต่อเนื่อง พร้อมเก็บซากหนูเพื่อสุขอนามัยที่ดี
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <CTASection />
        </div>
    );
}
