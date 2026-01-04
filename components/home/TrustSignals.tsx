'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, ThumbsUp } from 'lucide-react';

const trustItems = [
    {
        icon: Shield,
        title: 'เลขที่ใบอนุญาต',
        description: '39/2560 (อย.)',
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
    return (
        <section className="py-12 lg:py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all group"
                        >
                            <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-sm mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-7 h-7 text-orange-500" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrustSignals;
