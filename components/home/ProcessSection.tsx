import { Search, FileText, SprayCan, ShieldCheck } from 'lucide-react';
import React from 'react';

const steps = [
    {
        icon: Search,
        title: '1. นัดสำรวจพื้นที่ฟรี',
        desc: 'พร้อมวิเคราะห์ปัญหาโดยผู้เชี่ยวชาญ เข้าหน้างานไวใน 24 ชม.'
    },
    {
        icon: FileText,
        title: '2. เสนอแผนและราคา',
        desc: 'เลือกแผนการรักษาที่ตรงจุด และประเมินราคาอย่างโปร่งใส'
    },
    {
        icon: SprayCan,
        title: '3. เข้าดำเนินการ',
        desc: 'ด้วยเครื่องมือทันสมัย และน้ำยาที่ได้รับรองมาตรฐาน อย.'
    },
    {
        icon: ShieldCheck,
        title: '4. รับประกันผลงาน',
        desc: 'ติดตามผลต่อเนื่องและรับประกันดูแลฟรีตลอดอายุสัญญา'
    }
];

const ProcessSection = () => {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Our Process</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        ขั้นตอนการทำงานระดับมืออาชีพ
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-orange-100 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-white rounded-full border-4 border-orange-50 flex items-center justify-center mb-6 group-hover:border-orange-500 transition-colors duration-300 shadow-lg shadow-orange-500/5">
                                <step.icon size={32} className="text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
