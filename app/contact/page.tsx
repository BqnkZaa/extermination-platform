'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useContactInfo } from '@/hooks/useContactInfo';
import { usePhonePopup } from '@/context/PhonePopupContext';

const contactSchema = z.object({
    name: z.string().min(2, 'กรุณากรอกชื่อ-นามสกุล'),
    phone: z.string().min(9, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง').max(10),
    email: z.string().email('กรุณากรอกอีเมลให้ถูกต้อง').optional().or(z.literal('')),
    service: z.string().min(1, 'กรุณาเลือกประเภทบริการ'),
    address: z.string().min(5, 'กรุณากรอกที่อยู่'),
    message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
    { value: 'termite', label: 'กำจัดปลวก' },
    { value: 'cockroach', label: 'กำจัดแมลงสาบ' },
    { value: 'mosquito', label: 'กำจัดยุง' },
    { value: 'rat', label: 'กำจัดหนู' },
    { value: 'other', label: 'อื่นๆ' },
];



export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const { contact } = useContactInfo();
    const { openPopup } = usePhonePopup();

    const contactInfoItems = [
        {
            icon: Phone,
            title: 'โทรศัพท์',
            value: contact.phone_display,
            href: `tel:${contact.phone_call}`,
            description: 'พร้อมให้บริการ 24 ชั่วโมง',
        },
        {
            icon: Mail,
            title: 'อีเมล',
            value: contact.email,
            href: `mailto:${contact.email}`,
            description: 'ตอบกลับภายใน 24 ชั่วโมง',
        },
        {
            icon: MapPin,
            title: 'สำนักงาน',
            value: contact.address,
            description: 'ให้บริการ จันทบุรี ตราด เกาะช้าง',
        },
        {
            icon: Clock,
            title: 'เวลาทำการ',
            value: contact.open_time,
            description: 'พร้อมให้บริการตลอดเวลา',
        },
    ];

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to submit form');
            }

            setIsSubmitting(false);
            setIsSubmitted(true);
            reset();

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitting(false);
            alert('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง');
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/service_optimized.png"
                        alt="Ready to Serve"
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
                            ติดต่อเรา
                        </span>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                            พร้อมให้บริการ
                            <span className="text-gradient-orange"> 24 ชั่วโมง</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            ติดต่อเราเพื่อรับคำปรึกษาฟรี พร้อมใบเสนอราคาที่ยุติธรรม
                            ทีมงานของเราพร้อมให้บริการคุณตลอดเวลา
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                                ช่องทางติดต่อ
                            </h2>
                            <p className="text-gray-600 mb-8">
                                สามารถติดต่อเราได้หลายช่องทาง ทั้งโทรศัพท์ อีเมล หรือ Line
                                เรายินดีให้คำปรึกษาฟรีทุกเรื่อง
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {contactInfoItems.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.href ? (
                                            item.href.startsWith('tel:') ? (
                                                <button
                                                    onClick={() => openPopup(contact.phone_call)}
                                                    className="block w-full text-left p-5 bg-gray-50 rounded-xl hover:bg-orange-50 hover:border-orange-200 border border-transparent transition-colors group"
                                                >
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                                            <item.icon className="w-5 h-5" />
                                                        </div>
                                                        <div className="text-sm text-gray-500">{item.title}</div>
                                                    </div>
                                                    <div className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                                        {item.value}
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                                </button>
                                            ) : (
                                                <a
                                                    href={item.href}
                                                    className="block p-5 bg-gray-50 rounded-xl hover:bg-orange-50 hover:border-orange-200 border border-transparent transition-colors group"
                                                >
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                                            <item.icon className="w-5 h-5" />
                                                        </div>
                                                        <div className="text-sm text-gray-500">{item.title}</div>
                                                    </div>
                                                    <div className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                                        {item.value}
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                                </a>
                                            )
                                        ) : (
                                            <div className="p-5 bg-gray-50 rounded-xl border border-transparent">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 text-orange-600">
                                                        <item.icon className="w-5 h-5" />
                                                    </div>
                                                    <div className="text-sm text-gray-500">{item.title}</div>
                                                </div>
                                                <div className="font-bold text-gray-900">{item.value}</div>
                                                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Line CTA */}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                href={contact.line_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-6 bg-[#00B900] rounded-xl text-white hover:bg-[#00A000] transition-colors"
                            >
                                <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.021.136-.033.203-.033.211 0 .391.09.51.25l2.438 3.317V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-bold text-lg">เพิ่มเพื่อนทาง Line</div>
                                    <div className="text-white/80 text-sm">{contact.line_id}</div>
                                </div>
                            </motion.a>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    แบบฟอร์มขอใบเสนอราคา
                                </h2>
                                <p className="text-gray-600 text-sm mb-6">
                                    กรอกข้อมูลด้านล่าง เราจะติดต่อกลับภายใน 1 ชั่วโมง
                                </p>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">ส่งข้อมูลสำเร็จ!</h3>
                                        <p className="text-gray-600">เราจะติดต่อกลับโดยเร็วที่สุดครับ</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                ชื่อ-นามสกุล <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register('name')}
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                                                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                                                placeholder="กรอกชื่อ-นามสกุล"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                            )}
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                {...register('phone')}
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                                                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                                                placeholder="0XX-XXX-XXXX"
                                            />
                                            {errors.phone && (
                                                <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                อีเมล (ไม่บังคับ)
                                            </label>
                                            <input
                                                type="email"
                                                {...register('email')}
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                                                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                                                placeholder="example@email.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                            )}
                                        </div>

                                        {/* Service */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                ประเภทบริการ <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                {...register('service')}
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.service ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                                                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                                            >
                                                <option value="">-- เลือกบริการ --</option>
                                                {serviceOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.service && (
                                                <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
                                            )}
                                        </div>

                                        {/* Address */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                ที่อยู่ <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                {...register('address')}
                                                rows={3}
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                                                    } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none`}
                                                placeholder="บ้านเลขที่ ถนน ตำบล อำเภอ จังหวัด"
                                            />
                                            {errors.address && (
                                                <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                รายละเอียดเพิ่มเติม
                                            </label>
                                            <textarea
                                                {...register('message')}
                                                rows={3}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                                                placeholder="อธิบายปัญหาหรือความต้องการเพิ่มเติม..."
                                            />
                                        </div>

                                        {/* Submit */}
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    กำลังส่ง...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    ส่งข้อมูล
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            พื้นที่ให้บริการ
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            เราให้บริการครอบคลุมพื้นที่ 3 จังหวัดในภาคตะวันออก พร้อมทีมงานประจำในแต่ละพื้นที่
                        </p>
                    </div>

                    <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1946.7362069260214!2d102.1134363!3d12.6169837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310481810071db3f%3A0xdff20694d8c02713!2zNSDguJbguJnguJkg4Lij4Lix4LiB4Lio4Lix4LiB4LiU4Li04LmM4LiK4Lih4Li54LilIOC4leC4s-C4muC4peC4p-C4seC4lOC5g-C4q-C4oeC5iCDguK3guLPguYDguKDguK3guYDguKHguLfguK3guIfguIjguLHguJnguJfguJrguLjguKPguLUg4LiI4Lix4LiZ4LiX4Lia4Li44Lij4Li1IDIyMDAw!5e0!3m2!1sth!2sth!4v1767453010854!5m2!1sth!2sth"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Service Area Map"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
