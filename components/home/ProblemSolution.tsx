import { AlertTriangle, ShieldCheck } from 'lucide-react';
import React from 'react';

const ProblemSolution = () => {
    return (
        <section className="py-16 md:py-24 bg-red-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
                        ปลวก...ภัยเงียบที่ทำลายทรัพย์สินของคุณ
                    </h2>
                    <p className="text-lg text-gray-700">
                        อย่ารอให้สายเกินไป เพราะความเสียหายจากปลวกอาจประเมินค่าไม่ได้
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Problem Side */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-red-100 rounded-full text-red-600">
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">ความเสียหายที่คุณอาจไม่รู้</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'กัดกินโครงสร้างบ้านโดยที่คุณไม่รู้ตัว',
                                'สร้างความเสียหายหลักล้าน ประกันบ้านส่วนใหญ่ไม่คุ้มครอง',
                                'ลามไปถึงเฟอร์นิเจอร์ บิ้วอิน และเอกสารสำคัญ',
                                'ส่งผลเสียต่อสุขภาพจากเชื้อราที่มากับปลวก'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-1 min-w-[20px] text-red-500 font-bold">✗</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution Side */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-100 rounded-full text-green-600">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">ทางออกที่ยั่งยืนจากเรา</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'หยุดปัญหาด้วยระบบเหยื่อ (Nemo/Sentricon) ตายยกรัง',
                                'ระบบฉีดพ่นสมุนไพรและเคมีมาตรฐาน ปลอดภัย 100%',
                                'ทีมงานเชี่ยวชาญตรวจสอบจุดเสี่ยงทุกตารางนิ้ว',
                                'รับประกันผลงาน ดูแลต่อเนื่องตลอดอายุสัญญา'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-1 min-w-[20px] text-green-500 font-bold">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
