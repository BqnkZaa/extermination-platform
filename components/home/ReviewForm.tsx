'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviewFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReviewForm({ isOpen, onClose }: ReviewFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        service: 'กำจัดปลวก',
        rating: 5,
        comment: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const services = [
        'กำจัดปลวก',
        'กำจัดแมลงสาบ',
        'กำจัดมด',
        'กำจัดหนู',
        'กำจัดยุง',
        'อื่นๆ'
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Failed to submit review');

            setIsSuccess(true);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error(error);
            alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 m-auto z-[101] w-full max-w-lg h-fit bg-white rounded-3xl p-6 shadow-2xl overflow-hidden"
                    >
                        {/* Success Overlay */}
                        {isSuccess && (
                            <div className="absolute inset-0 bg-white z-[102] flex flex-col items-center justify-center text-center p-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600"
                                >
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">ขอบคุณสำหรับรีวิว!</h3>
                                <p className="text-gray-500">ความคิดเห็นของคุณมีค่าสำหรับเรา</p>
                            </div>
                        )}

                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">เขียนรีวิว</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อของคุณ</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    placeholder="เช่น คุณสมชาย"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">สถานที่ (จังหวัด/เขต)</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    placeholder="เช่น กทม., นนทบุรี"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">บริการที่ใช้</label>
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
                                >
                                    {services.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">ความพึงพอใจ</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            className="focus:outline-none"
                                        >
                                            <Star
                                                className={`w-8 h-8 transition-colors ${star <= formData.rating
                                                    ? 'fill-orange-400 text-orange-400'
                                                    : 'fill-gray-100 text-gray-300'
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">ความคิดเห็นเพิ่มเติม</label>
                                <textarea
                                    value={formData.comment}
                                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all h-24 resize-none"
                                    placeholder="เล่าประสบการณ์ของคุณ..."
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 text-lg font-medium bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {isSubmitting ? (
                                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> กำลังส่ง...</>
                                ) : (
                                    'ส่งรีวิว'
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
