'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Users, ThumbsUp } from 'lucide-react';

const trustItems = [
    {
        icon: Shield,
        title: 'เลขที่ใบอนุญาต',
        description: '๙๒๙/๒๕๕๕ (อย.)',
        color: 'text-green-600',
        bgColor: 'bg-green-100',
    },
    {
        icon: Award,
        title: 'ประสบการณ์ 10+ ปี',
        description: 'ผู้เชี่ยวชาญตัวจริง',
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
    },
    {
        icon: Users,
        title: '5,000+ แห่ง',
        description: 'ที่ไว้วางใจใช้บริการ',
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
    },
    {
        icon: ThumbsUp,
        title: 'รับประกันคุณภาพ',
        description: 'ดูแลหลังการขายดีเยี่ยม',
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
    },
];

const TrustSignals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % trustItems.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-12 lg:py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Desktop Grid View */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col items-center text-center p-8 bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-orange-300 transition-all group rounded-xl"
                        >
                            {/* Minimal Inner Frame */}
                            <div className="absolute inset-1.5 border border-gray-100 group-hover:border-orange-100 pointer-events-none rounded-lg" />

                            <div className={`relative flex items-center justify-center w-14 h-14 bg-gray-50 mb-4 group-hover:bg-orange-50 transition-colors z-10 rounded-full`}>
                                <item.icon className="w-7 h-7 text-orange-500" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Carousel View */}
                <div className="lg:hidden relative h-[280px]"> {/* Fixed height container to prevent layout shift */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white border border-gray-200 shadow-md rounded-xl"
                        >
                            {/* Minimal Inner Frame */}
                            <div className="absolute inset-1.5 border border-gray-100 pointer-events-none rounded-lg" />

                            <div className={`relative flex items-center justify-center w-16 h-16 bg-gray-50 mb-4 rounded-full`}>
                                {(() => {
                                    const Icon = trustItems[currentIndex].icon;
                                    return <Icon className="w-8 h-8 text-orange-500" />;
                                })()}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{trustItems[currentIndex].title}</h3>
                            <p className="text-base text-gray-500">{trustItems[currentIndex].description}</p>

                            {/* Carousel Indicators */}
                            <div className="absolute bottom-6 flex gap-2">
                                {trustItems.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-orange-500' : 'bg-gray-200'
                                            }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default TrustSignals;
