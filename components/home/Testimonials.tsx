'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReviewForm from './ReviewForm';

// Fallback data in case of error or empty sheet
const fallbackTestimonials = [
    {
        id: 1,
        name: 'คุณสมชาย วงศ์สวัสดิ์',
        location: 'จันทบุรี',
        rating: 5,
        text: 'บริการดีมากครับ ทีมงานมาตรงเวลา ทำงานเรียบร้อย ปลวกหายไปหมดเลย แนะนำเลยครับ',
        service: 'กำจัดปลวก',
    },
    {
        id: 2,
        name: 'คุณสุภาพร เจริญสุข',
        location: 'ระยอง',
        rating: 5,
        text: 'ประทับใจมากค่ะ แมลงสาบที่บ้านหายไปหมด พนักงานให้คำแนะนำดี ราคายุติธรรม',
        service: 'กำจัดแมลงสาบ',
    },
    {
        id: 3,
        name: 'คุณวิทยา มั่นคง',
        location: 'ตราด',
        rating: 5,
        text: 'ใช้บริการมาหลายครั้งแล้ว ทุกครั้งก็พอใจมาก โดยเฉพาะการรับประกันผลงาน',
        service: 'กำจัดปลวก + หนู',
    },
];

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState(fallbackTestimonials);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch('/api/review');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();

                // Only set if we actually got reviews back
                if (data.reviews && data.reviews.length > 0) {
                    // Reverse to show newest first
                    setTestimonials(data.reviews.reverse());
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
                // Keep fallback data on error
            } finally {
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

    return (
        <section className="py-16 lg:py-24 bg-white relative">
            <ReviewForm isOpen={isReviewFormOpen} onClose={() => setIsReviewFormOpen(false)} />

            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4"
                    >
                        รีวิวจากลูกค้า
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
                    >
                        ลูกค้าของเราพูดอะไรบ้าง
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto mb-8"
                    >
                        ความพึงพอใจของลูกค้าคือความภาคภูมิใจของเรา
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button
                            onClick={() => setIsReviewFormOpen(true)}
                            className="bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-full text-lg font-semibold shadow-sm hover:shadow-md transition-all"
                        >
                            เขียนรีวิวของคุณ
                        </Button>
                    </motion.div>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-orange-50 p-8 lg:p-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                {/* Quote Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500/10">
                                        <Quote className="w-7 h-7 text-orange-500" />
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Rating */}
                                <div className="flex justify-center gap-1 mb-4">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                                    ))}
                                </div>

                                {/* Customer Info */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl font-bold mb-3">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </div>
                                    <p className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</p>
                                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                                    <span className="mt-2 px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                                        {testimonials[currentIndex].service}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handlePrev}
                            className="rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-600"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-orange-500 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleNext}
                            className="rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-600"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
