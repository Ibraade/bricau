"use client";

import { motion } from "framer-motion";

const trustBadges = [
    { icon: "🌍", label: "Students Worldwide" },
    { icon: "📚", label: "K–12 & Exams Covered" },
    { icon: "🎯", label: "Personalized 1-on-1" },
    { icon: "⭐", label: "Proven Results" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
    }),
};

export default function HeroSection() {
    const scrollToContact = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Decorative background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-5"
                    style={{
                        background: "radial-gradient(circle, #00A99D 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10 dark:opacity-5"
                    style={{
                        background: "radial-gradient(circle, #007B73 0%, transparent 70%)",
                    }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="max-w-4xl">
                    {/* Eyebrow */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00A99D]/30 bg-[#00A99D]/10 text-[#00A99D] text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
                        Expert Online Tutoring
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-4"
                    >
                        Unlock Your{" "}
                        <span className="text-gradient">Academic</span>
                        <br />
                        Potential
                    </motion.h1>

                    {/* Subtitle with Ibrahim's name */}
                    <motion.p
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-lg md:text-xl text-muted max-w-2xl mb-4 leading-relaxed"
                    >
                        Learn directly from{" "}
                        <strong className="text-[#00A99D] font-semibold">Ibrahim Yusuf</strong>
                        {" "}— a dedicated educator guiding students from Grade 1 to Grade 12 and preparing candidates for the world&apos;s most competitive exams, all from the comfort of your home.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
                    >
                        <button
                            onClick={scrollToContact}
                            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white gradient-teal shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 text-base"
                        >
                            Book a Session
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <a
                            href="https://wa.me/2340000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 text-base"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        custom={4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-wrap gap-3"
                    >
                        {trustBadges.map((badge) => (
                            <div
                                key={badge.label}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-theme text-sm text-muted"
                            >
                                <span>{badge.icon}</span>
                                <span className="font-medium text-foreground">{badge.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
