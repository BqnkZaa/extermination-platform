'use client';

import { motion } from 'framer-motion';
import { Phone, Shield, Clock, Leaf, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden">
            {/* Background Pattern */}
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black">
                <Image
                    src="/images/background_exterminate.png"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-100"
                    priority
                />

                {/* Animated Circles */}
                {/* <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse" /> */}
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-10 lg:pb-0">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6"
                    >
                        <Shield className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-300 text-sm font-medium">ได้รับอนุญาตจากกระทรวงสาธารณสุข</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 [-webkit-text-stroke:1px_#F97316]"
                    >
                        กำจัดปลวก <span className="text-gradient-orange">ปลอดภัย</span>
                        <br />
                        ไร้กังวล ตลอด 24 ชม.
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-xl text-black mb-8 max-w-2xl leading-relaxed font-medium bg-white/20 backdrop-blur-[2px] p-0.2 rounded-xl md:bg-transparent md:backdrop-blur-none md:p-0 md:[-webkit-text-stroke:0.5px_#ffffff]"
                    >
                        บริการกำจัดปลวก แมลงสาบ ยุง และหนู ครบวงจร ด้วยวิธีที่ปลอดภัยต่อคนและสัตว์เลี้ยง
                        พร้อมให้บริการพื้นที่ <span className="text-orange-400 font-medium">จันทบุรี ตราด ระยอง</span>
                    </motion.p>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 mb-10"
                    >
                        <div className="flex items-center gap-2 text-gray-400">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10">
                                <Leaf className="w-4 h-4 text-green-400" />
                            </div>
                            <span className="text-sm">Eco-Friendly</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10">
                                <Shield className="w-4 h-4 text-blue-400" />
                            </div>
                            <span className="text-sm">ปลอดภัยต่อเด็กและสัตว์เลี้ยง</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10">
                                <Clock className="w-4 h-4 text-orange-400" />
                            </div>
                            <span className="text-sm">บริการ 24 ชั่วโมง</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all group"
                            asChild
                        >
                            <a href="tel:0891234567">
                                <Phone className="w-5 h-5 mr-2" />
                                โทรเลย 089-123-4567
                                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            className="bg-[#06C755] text-white hover:bg-[#05b34c] text-lg px-8 py-6 shadow-xl shadow-green-500/25"
                            asChild
                        >
                            <a href="https://line.me/ti/p/~rabbit-pest" target="_blank" rel="noopener noreferrer">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.021.136-.033.203-.033.211 0 .391.09.51.25l2.438 3.317V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                เพิ่มเพื่อน Line
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
            >
                <span className="text-gray-500 text-sm">เลื่อนลง</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-orange-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
