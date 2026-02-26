"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
    { icon: "🎓", label: "Specialist in K–12 Curriculum" },
    { icon: "🌐", label: "Global Exam Coach — SAT, GRE, GMAT, IELTS, PTE, TOEFL" },
    { icon: "💻", label: "100% Online, Flexible Scheduling" },
    { icon: "🎯", label: "Personalized Instruction for Every Learner" },
    { icon: "📈", label: "Proven Track Record of Score Improvement" },
    { icon: "🤝", label: "Dedicated Mentor & Academic Guide" },
];

export default function MeetIbrahimSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="about" ref={ref} className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image / Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="relative flex justify-center lg:justify-start"
                    >
                        <div className="relative">
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 rounded-3xl border-2 border-[#00A99D]/20 rotate-3" />
                            <div className="absolute -inset-4 rounded-3xl border-2 border-[#007B73]/10 -rotate-3" />

                            {/* Profile card */}
                            <div className="relative w-72 md:w-80 bg-card rounded-3xl border border-theme shadow-xl overflow-hidden">
                                {/* Teal gradient header */}
                                <div className="h-28 gradient-teal relative">
                                    <div
                                        className="absolute inset-0 opacity-20"
                                        style={{
                                            backgroundImage: "radial-gradient(circle at 30% 50%, white 0%, transparent 60%)",
                                        }}
                                    />
                                </div>

                                {/* Avatar circle */}
                                <div className="flex justify-center -mt-14 mb-4 relative z-10">
                                    <div className="w-28 h-28 rounded-full border-4 border-background shadow-lg gradient-teal flex items-center justify-center">
                                        <span className="text-white font-extrabold text-4xl" style={{ fontFamily: "var(--font-outfit)" }}>
                                            IY
                                        </span>
                                    </div>
                                </div>

                                <div className="text-center px-6 pb-6">
                                    <h3 className="text-xl font-extrabold text-foreground mb-1">Ibrahim Yusuf</h3>
                                    <p className="text-[#00A99D] text-sm font-semibold mb-4">Founder & Lead Tutor, Bricau Academy</p>

                                    <div className="flex justify-center gap-2 flex-wrap">
                                        {["K–12", "SAT", "IELTS", "GRE", "TOEFL"].map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-full bg-[#00A99D]/10 text-[#00A99D] text-xs font-semibold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating stat cards */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="absolute -right-8 top-8 bg-card border border-theme rounded-2xl p-4 shadow-lg"
                            >
                                <p className="text-2xl font-extrabold text-[#00A99D]">6+</p>
                                <p className="text-xs text-muted font-medium">Exams Covered</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.65, duration: 0.4 }}
                                className="absolute -left-8 bottom-8 bg-card border border-theme rounded-2xl p-4 shadow-lg"
                            >
                                <p className="text-2xl font-extrabold text-[#00A99D]">1–12</p>
                                <p className="text-xs text-muted font-medium">Grades Taught</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <p className="text-[#00A99D] text-sm font-semibold tracking-widest uppercase mb-3">
                            Meet Your Tutor
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                            Ibrahim Yusuf
                        </h2>
                        <div className="space-y-4 text-muted text-base leading-relaxed mb-8">
                            <p>
                                Hi, I&apos;m <strong className="text-foreground">Ibrahim Yusuf</strong>, the founder and sole tutor behind Bricau Academy. I created this platform with one mission: to give every student — no matter where they are in the world — access to high-quality, focused, and truly personalized education.
                            </p>
                            <p>
                                Whether you&apos;re a Grade 3 student struggling with fractions, a Grade 12 student preparing for university, or an adult professional targeting a top score on the IELTS, TOEFL, or SAT, my approach is always the same: <strong className="text-foreground">understand your needs first, then build a plan that works for you.</strong>
                            </p>
                            <p>
                                Forget one-size-fits-all. At Bricau Academy, every session is crafted around your specific learning style, goals, and timeline — delivered 100% online, at your convenience.
                            </p>
                        </div>

                        {/* Credentials grid */}
                        <div className="grid sm:grid-cols-2 gap-3 mb-8">
                            {credentials.map((c, i) => (
                                <motion.div
                                    key={c.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                                    className="flex items-start gap-3 p-3 rounded-xl border border-theme bg-surface text-sm"
                                >
                                    <span className="text-lg">{c.icon}</span>
                                    <span className="text-foreground font-medium leading-snug">{c.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.button
                            initial={{ opacity: 0, y: 15 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white gradient-teal shadow-lg hover:opacity-90 transition-all duration-300"
                        >
                            Learn with Ibrahim
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
