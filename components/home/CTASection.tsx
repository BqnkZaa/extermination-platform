'use client';

import { motion } from 'framer-motion';
import { Phone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContactInfo } from '@/hooks/useContactInfo';
import { usePhonePopup } from '@/context/PhonePopupContext';

export default function CTASection() {
    const { contact } = useContactInfo();
    const { openPopup } = usePhonePopup();
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6"
                    >
                        พร้อมกำจัดปัญหาแมลงให้คุณ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
                    >
                        ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี พร้อมใบเสนอราคาที่ยุติธรรม
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 shadow-xl group"
                            asChild
                        >
                            <button onClick={() => openPopup(contact.phone_call)} className="flex items-center">
                                <Phone className="w-5 h-5 mr-2" />
                                โทรเลย {contact.phone_display}
                                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Button>
                        <Button
                            size="lg"
                            className="bg-[#06C755] text-white hover:bg-[#05b34c] text-lg px-8 py-6 shadow-xl"
                            asChild
                        >
                            <a href={contact.line_url} target="_blank" rel="noopener noreferrer">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.021.136-.033.203-.033.211 0 .391.09.51.25l2.438 3.317V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                เพิ่มเพื่อน Line
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
