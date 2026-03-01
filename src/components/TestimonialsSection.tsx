"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const testimonials = [
    {
        name: "Amara O.",
        role: "Grade 10 Student",
        location: "Lagos, Nigeria",
        rating: 5,
        text: "Ibrahim is an incredible tutor. My math grade went from a C to an A in just two months. He explains everything so clearly and always makes sure I understand before moving on. Highly recommended!",
        initials: "AO",
        color: "#00A99D",
        photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
    },
    {
        name: "Priya S.",
        role: "IELTS Candidate",
        location: "Mumbai, India",
        rating: 5,
        text: "I scored 7.5 on my IELTS after training with Ibrahim. His strategies for the Writing and Speaking sections were especially helpful. He was patient, professional, and always on time. Best investment I made!",
        initials: "PS",
        color: "#007B73",
        photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&h=80&fit=crop&crop=face",
    },
    {
        name: "David K.",
        role: "SAT Preparation",
        location: "Accra, Ghana",
        rating: 5,
        text: "Ibrahim helped me improve my SAT score by over 200 points. His structured approach and practice tests made all the difference. He knows exactly how to prepare you for what matters.",
        initials: "DK",
        color: "#00B8A9",
        photo: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=80&h=80&fit=crop&crop=face",
    },
    {
        name: "Fatima M.",
        role: "Grade 7 Student",
        location: "Dubai, UAE",
        rating: 5,
        text: "My daughter struggled with fractions and algebra, but after just a few sessions with Ibrahim, her confidence completely transformed. He has a gift for making complex topics simple.",
        initials: "FM",
        color: "#009688",
        photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face",
    },
    {
        name: "Chen W.",
        role: "GRE Candidate",
        location: "Singapore",
        rating: 5,
        text: "I was nervous about the GRE Verbal section, but Ibrahim's vocabulary strategies and reading comprehension techniques got me to the 90th percentile. Cannot thank him enough!",
        initials: "CW",
        color: "#00A99D",
        photo: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=80&h=80&fit=crop&crop=face",
    },
];


export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = useCallback((index: number, dir: number = 1) => {
        setDirection(dir);
        setCurrent(index);
    }, []);

    const next = useCallback(() => {
        goTo((current + 1) % testimonials.length, 1);
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + testimonials.length) % testimonials.length, -1);
    }, [current, goTo]);

    useEffect(() => {
        intervalRef.current = setInterval(next, 5000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [next]);

    const t = testimonials[current];

    const variants = {
        enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
        center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
        exit: (dir: number) => ({ opacity: 0, x: dir * -60, transition: { duration: 0.3, ease: "easeIn" as const } }),
    };

    return (
        <section id="testimonials" ref={ref} className="section-padding bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-[#00A99D] text-sm font-semibold tracking-widest uppercase mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                        Stories of Transformation
                    </h2>
                    <p className="text-muted max-w-xl mx-auto text-lg">
                        Real students, real results. See what learners from around the world say about their experience with Ibrahim Yusuf.
                    </p>
                </motion.div>

                {/* Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative max-w-3xl mx-auto"
                >
                    <div className="overflow-hidden rounded-3xl">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="bg-card border border-theme rounded-3xl p-8 md:p-10 shadow-xl"
                            >
                                {/* Quote icon */}
                                <div className="text-[#00A99D] mb-4">
                                    <svg className="w-10 h-10 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-5">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-foreground text-base md:text-lg leading-relaxed mb-8 italic">
                                    &ldquo;{t.text}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-theme flex-shrink-0 shadow-md">
                                        <Image
                                            src={t.photo}
                                            alt={t.name}
                                            fill
                                            className="object-cover"
                                            sizes="48px"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">{t.name}</p>
                                        <p className="text-muted text-sm">{t.role} · {t.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className="w-10 h-10 rounded-full border border-theme bg-card flex items-center justify-center text-muted hover:text-[#00A99D] hover:border-[#00A99D] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i, i > current ? 1 : -1)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-[#00A99D]" : "w-2.5 h-2.5 bg-border-theme bg-surface hover:bg-[#00A99D]/40 border border-theme"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            aria-label="Next testimonial"
                            className="w-10 h-10 rounded-full border border-theme bg-card flex items-center justify-center text-muted hover:text-[#00A99D] hover:border-[#00A99D] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
