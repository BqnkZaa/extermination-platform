'use client';

import { motion } from 'framer-motion';
import { Bug, Rat, Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/home/CTASection';
import { useContactInfo } from '@/hooks/useContactInfo';
import { usePhonePopup } from '@/context/PhonePopupContext';

const services = [
    {
        id: 'termites',
        icon: () => (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 0-3 1-3 3v2c0 1 .5 2 1 3l-2 4h8l-2-4c.5-1 1-2 1-3V6c0-2-1.5-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15v3m6-3v3M8 8H6m12 0h-2" />
            </svg>
        ),
        title: 'กำจัดปลวก',
        titleEn: 'Termite Control',
        description: 'บริการกำจัดปลวกครบวงจร ด้วยระบบที่หลากหลายเหมาะกับทุกสถานการณ์',
        color: 'from-orange-500 to-amber-500',
        methods: [
            {
                name: 'ระบบเคมี (Chemical Treatment)',
                description: 'ฉีดพ่นสารเคมีลงใต้พื้นและรอบตัวอาคาร ป้องกันปลวกบุกรุก',
                pros: ['ได้ผลเร็ว', 'ราคาประหยัด', 'เหมาะกับอาคารเก่า'],
            },
            {
                name: 'ระบบเหยื่อ (Baiting System)',
                description: 'วางกล่องเหยื่อรอบอาคาร ปลวกนำเหยื่อกลับไปทำลายรังทั้งหมด',
                pros: ['ทำลายรังทั้งหมด', 'ปลอดภัยกว่า', 'ป้องกันระยะยาว'],
            },
            {
                name: 'ระบบผสมผสาน (Hybrid)',
                description: 'ใช้ทั้งสองระบบร่วมกัน เหมาะกับกรณีระบาดหนัก',
                pros: ['ครอบคลุมที่สุด', 'แก้ปัญหาทุกกรณี', 'รับประกันผล'],
            },
        ],
        warranty: 'รับประกัน 1-5 ปี ตามแพ็คเกจ',
    },
    {
        id: 'cockroaches',
        icon: Bug,
        title: 'กำจัดแมลงสาบ',
        titleEn: 'Cockroach Control',
        description: 'กำจัดแมลงสาบทุกสายพันธุ์ ด้วยวิธีที่ปลอดภัยสำหรับครอบครัว',
        color: 'from-red-500 to-rose-500',
        methods: [
            {
                name: 'เจลล่อแมลงสาบ (Gel Baiting)',
                description: 'ใช้เจลล่อที่แมลงสาบกินแล้วนำกลับไปติดตัวอื่นในรัง',
                pros: ['ไม่มีกลิ่น', 'ปลอดภัย', 'ฆ่าทั้งรัง'],
            },
            {
                name: 'พ่นหมอกควัน (Fogging)',
                description: 'พ่นหมอกควันเข้าถึงทุกซอกมุม กำจัดได้ทันที',
                pros: ['ได้ผลเร็ว', 'ครอบคลุม', 'เหมาะกับพื้นที่กว้าง'],
            },
            {
                name: 'สเปรย์ตกค้าง (Residual Spray)',
                description: 'ฉีดพ่นสารออกฤทธิ์ตกค้าง ป้องกันได้นาน',
                pros: ['ป้องกันยาวนาน', 'ราคาประหยัด', 'ทำง่าย'],
            },
        ],
        warranty: 'รับประกัน 1-3 เดือน',
    },
    {
        id: 'mosquitoes',
        icon: () => (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 4v8M8 12h8M6 8l2 2m8-2l-2 2M6 16l2-2m8 2l-2-2" />
                <circle cx="12" cy="10" r="2" />
            </svg>
        ),
        title: 'กำจัดยุง',
        titleEn: 'Mosquito Control',
        description: 'ลดประชากรยุง ป้องกันโรคไข้เลือดออกและโรคติดต่ออื่นๆ',
        color: 'from-blue-500 to-cyan-500',
        methods: [
            {
                name: 'พ่นหมอกควัน ULV',
                description: 'พ่นหมอกควันละเอียดเข้าถึงทุกพื้นที่ที่ยุงหลบซ่อน',
                pros: ['ครอบคลุมพื้นที่กว้าง', 'ฆ่ายุงตัวเต็มวัย', 'ได้ผลเร็ว'],
            },
            {
                name: 'ใส่สารกำจัดลูกน้ำ',
                description: 'ใส่สารชีวภาพในแหล่งน้ำขัง ป้องกันยุงฟักไข่',
                pros: ['ป้องกันที่ต้นเหตุ', 'ปลอดภัย', 'ยาวนาน'],
            },
            {
                name: 'ติดตั้งเครื่องดักยุง',
                description: 'ติดตั้งเครื่องดักยุงด้วยแสง UV และกลิ่นล่อ',
                pros: ['ใช้งานต่อเนื่อง', 'ไม่ใช้สารเคมี', 'เงียบ'],
            },
        ],
        warranty: 'รับประกันผล 1-2 สัปดาห์',
    },
    {
        id: 'rats',
        icon: Rat,
        title: 'กำจัดหนู',
        titleEn: 'Rodent Control',
        description: 'กำจัดหนูทุกสายพันธุ์ พร้อมป้องกันการกลับมา',
        color: 'from-gray-600 to-gray-700',
        methods: [
            {
                name: 'กับดักหนู (Trapping)',
                description: 'วางกับดักในจุดที่หนูชอบผ่าน จับได้อย่างมีประสิทธิภาพ',
                pros: ['ไม่ใช้ยา', 'เห็นผลชัดเจน', 'ปลอดภัย'],
            },
            {
                name: 'เหยื่อพิษ (Rodenticide)',
                description: 'วางเหยื่อพิษในกล่องล็อค ปลอดภัยจากเด็กและสัตว์เลี้ยง',
                pros: ['จัดการได้มาก', 'ครอบคลุม', 'ตายในรู'],
            },
            {
                name: 'ปิดทางเข้า (Exclusion)',
                description: 'ปิดรูและช่องทางที่หนูใช้เข้าอาคาร',
                pros: ['ป้องกันถาวร', 'แก้ที่ต้นเหตุ', 'ไม่กลับมา'],
            },
        ],
        warranty: 'รับประกัน 1-3 เดือน',
    },
];

export default function ServicesPage() {
    const { contact } = useContactInfo();
    const { openPopup } = usePhonePopup();
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/insect_optimized.png"
                        alt="Insect Control Service"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium rounded-full mb-6">
                            บริการของเรา
                        </span>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                            บริการกำจัดแมลง
                            <span className="text-gradient-orange"> ครบวงจร</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            เราให้บริการกำจัดแมลงและสัตว์รบกวนทุกชนิด ด้วยวิธีการที่หลากหลาย
                            เหมาะสมกับแต่ละสถานการณ์ พร้อมรับประกันผลงาน
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="space-y-24">
                        {services.map((service, serviceIndex) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="scroll-mt-24"
                            >
                                {/* Service Header */}
                                <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
                                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} text-white shrink-0`}>
                                        <service.icon />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-500 text-lg">{service.description}</p>
                                    </div>
                                </div>

                                {/* Methods Grid */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    {service.methods.map((method, index) => (
                                        <motion.div
                                            key={method.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all group"
                                        >
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                                {method.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                {method.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {method.pros.map((pro) => (
                                                    <li key={pro} className="flex items-center gap-2 text-sm text-gray-700">
                                                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Warranty & CTA */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-8 h-8 text-orange-600" />
                                        <div>
                                            <p className="text-sm text-gray-500">การรับประกัน</p>
                                            <p className="font-bold text-gray-900">{service.warranty}</p>
                                        </div>
                                    </div>
                                    <Button onClick={() => openPopup(contact.phone_call)} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                                        <Phone className="w-4 h-4 mr-2" />
                                        ขอใบเสนอราคา
                                    </Button>
                                </div>

                                {serviceIndex < services.length - 1 && (
                                    <hr className="mt-16 border-gray-200" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={`#${service.id}`}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-600 transition-colors"
                            >
                                <service.icon />
                                <span className="text-sm font-medium">{service.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
