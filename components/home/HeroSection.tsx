'use client';

import { motion } from 'framer-motion';
import { Phone, Shield, Clock, Leaf, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useContactInfo } from '@/hooks/useContactInfo';
import { usePhonePopup } from '@/context/PhonePopupContext';

export default function HeroSection() {
    const { contact } = useContactInfo();
    const { openPopup } = usePhonePopup();
    return (
        <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-white z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-white" />
            </div>

            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_banner_v4.png"
                    alt="Termite Extermination Service"
                    fill
                    className="object-cover object-center lg:object-right-top"
                    priority
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/50" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-10 lg:pb-0 h-full flex items-center">
                <div className="max-w-2xl pt-20 lg:pt-0">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50/90 backdrop-blur-sm border border-orange-100 rounded-full mb-6 shadow-sm"
                    >
                        <Shield className="w-3.5 h-3.5 text-orange-600" />
                        <span className="text-orange-900 text-xs font-medium">บริการมาตรฐานสากล จันทบุรี ตราด เกาะช้าง</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] mb-4 tracking-tight drop-shadow-sm"
                    >
                        บริการกำจัดปลวกและแมลง <br className="hidden md:block" />
                        <span className="text-orange-600">มาตรฐานสากล</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-lg text-gray-700 mb-8 max-w-xl leading-relaxed font-light"
                    >
                        ปกป้องบ้านและธุรกิจของคุณด้วยทีมงานผู้เชี่ยวชาญกว่า 10 ปี สำรวจพื้นที่ฟรีวันนี้ เข้าหน้างานไวใน 24 ชม. ดูแลครอบคลุม <span className="text-gray-900 font-medium">จันทบุรี ตราด เกาะช้าง</span>
                    </motion.p>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 mb-8"
                    >
                        {/* <div className="flex items-center gap-2 text-gray-700 bg-white/50 p-1.5 rounded-lg backdrop-blur-sm">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-50">
                                <Leaf className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-sm font-medium">สมุนไพรปลอดภัย</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 bg-white/50 p-1.5 rounded-lg backdrop-blur-sm">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                                <Shield className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium">รับประกันผลงาน</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 bg-white/50 p-1.5 rounded-lg backdrop-blur-sm">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50">
                                <Clock className="w-4 h-4 text-orange-600" />
                            </div>
                            <span className="text-sm font-medium">เข้าทำไวใน 24 ชม.</span>
                        </div> */}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-3"
                    >
                        <Button
                            size="lg"
                            className="bg-orange-600 hover:bg-orange-700 text-white text-base px-6 py-3 h-auto shadow-lg shadow-orange-500/20 transition-all group"
                            asChild
                        >
                            <button onClick={() => openPopup(contact.phone_call)} className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                โทรปรึกษาฟรี {contact.phone_display}
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/80 backdrop-blur-sm border-2 border-green-500 text-green-600 hover:bg-green-50 text-base px-6 py-3 h-auto"
                            asChild
                        >
                            <a href={contact.line_url} target="_blank" rel="noopener noreferrer">
                                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.021.136-.033.203-.033.211 0 .391.09.51.25l2.438 3.317V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                แอด LINE ประเมินหน้างาน
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>


        </section>
    );
}
