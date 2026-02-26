"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const k12Services = [
    {
        emoji: "📐",
        title: "Mathematics",
        description: "From foundational arithmetic to advanced calculus — building numerical confidence at every grade.",
        bullets: ["Algebra & Geometry", "Pre-Calculus & Calculus", "Statistics & Probability", "Problem-solving techniques"],
    },
    {
        emoji: "📖",
        title: "English Language",
        description: "Mastering reading comprehension, grammar, creative writing, and oral communication.",
        bullets: ["Grammar & Punctuation", "Reading Comprehension", "Essay & Creative Writing", "Oral Communication"],
    },
    {
        emoji: "🔬",
        title: "Core Academic Subjects",
        description: "Curriculum-aligned support across major subjects to keep students on track and ahead.",
        bullets: ["Science (Physics, Biology, Chemistry)", "Social Studies & History", "Curriculum-aligned lesson plans", "Personalized 1-on-1 sessions"],
    },
];

const examServices = [
    { badge: "SAT", description: "Comprehensive verbal, math, and essay preparation to maximize your SAT score." },
    { badge: "GRE", description: "Strategic coaching for Verbal Reasoning, Quantitative Reasoning, and Analytical Writing." },
    { badge: "GMAT", description: "Targeted prep for business school applicants — Data Insights, Verbal, and Quant." },
    { badge: "IELTS", description: "All four bands: Listening, Reading, Writing, and Speaking with band score strategy." },
    { badge: "PTE", description: "PTE Academic preparation with computer-based test technique and fluency development." },
    { badge: "TOEFL", description: "Integrated skills prep for Reading, Listening, Speaking, and Writing sections." },
];

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
    }),
};

export default function WhatWeDoSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="services" ref={ref} className="section-padding bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#00A99D] text-sm font-semibold tracking-widest uppercase mb-3">
                        What We Do
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                        Comprehensive Learning Solutions
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        Every student, every goal, every exam — Ibrahim Yusuf delivers tailored, results-driven instruction that meets you exactly where you are.
                    </p>
                </motion.div>

                {/* K-12 Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full gradient-teal text-white text-sm font-semibold">
                            🎓 K–12 Academic Tutoring
                        </div>
                        <div className="h-px flex-1 bg-border-theme border-t border-theme" />
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {k12Services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                custom={i}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={cardVariant}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="bg-card rounded-2xl p-6 border border-theme shadow-sm hover:shadow-xl hover:shadow-[#00A99D]/10 transition-shadow duration-300 group"
                            >
                                <div className="text-3xl mb-4">{service.emoji}</div>
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#00A99D] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                                            <svg className="w-4 h-4 text-[#00A99D] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* International Exams Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#007B73] text-white text-sm font-semibold">
                            🌐 International Exam Preparation
                        </div>
                        <div className="h-px flex-1 border-t border-theme" />
                    </motion.div>

                    {/* Strategy callout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="grid sm:grid-cols-3 gap-4 mb-8"
                    >
                        {["Strategy-Focused Prep", "Practice Tests Included", "Performance Analytics"].map((tag) => (
                            <div key={tag} className="flex items-center gap-2 p-3 rounded-xl border border-[#00A99D]/30 bg-[#00A99D]/5 text-sm font-medium text-[#00A99D]">
                                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {tag}
                            </div>
                        ))}
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {examServices.map((exam, i) => (
                            <motion.div
                                key={exam.badge}
                                custom={i + 3}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={cardVariant}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="bg-card rounded-2xl p-5 border border-theme shadow-sm hover:shadow-xl hover:shadow-[#00A99D]/10 transition-shadow duration-300 group flex gap-4"
                            >
                                <div className="shrink-0 w-14 h-14 rounded-xl gradient-teal flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                                    {exam.badge}
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1.5 group-hover:text-[#00A99D] transition-colors">
                                        {exam.badge} Preparation
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed">{exam.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
