'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, ThumbsUp } from 'lucide-react';

const trustItems = [
    {
        icon: Shield,
        title: 'ได้รับอนุญาต',
        description: 'จากกระทรวงสาธารณสุข',
        color: 'text-green-500',
        bgColor: 'bg-green-500/10',
    },
    {
        icon: Award,
        title: '15+ ปี',
        description: 'ประสบการณ์ให้บริการ',
        color: 'text-orange-500',
        bgColor: 'bg-orange-500/10',
    },
    {
        icon: Users,
        title: '5,000+',
        description: 'ลูกค้าที่ไว้วางใจ',
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
    },
    {
        icon: ThumbsUp,
        title: 'รับประกัน',
        description: 'ความพึงพอใจ 100%',
        color: 'text-purple-500',
        bgColor: 'bg-purple-500/10',
    },
];

export default function TrustSignals() {
    return (
        <section className="py-12 lg:py-16 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${item.bgColor} mb-4`}>
                                <item.icon className={`w-7 h-7 ${item.color}`} />
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
