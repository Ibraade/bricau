"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── Stacked avatar faces for social proof ──────────────────────── */
const avatarStack = [
    "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&h=80&fit=crop&crop=face",
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
            {/* ── Background decorations ── */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top-right teal aura */}
                <div
                    className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
                    style={{ background: "radial-gradient(circle, #00A99D 0%, transparent 70%)" }}
                />
                {/* Bottom-left aura */}
                <div
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.06] dark:opacity-[0.04]"
                    style={{ background: "radial-gradient(circle, #007B73 0%, transparent 70%)" }}
                />
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ══════════════ LEFT COLUMN ══════════════ */}
                    <div>
                        {/* Eyebrow pill */}
                        <motion.div
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00A99D]/30 bg-[#00A99D]/10 text-[#00A99D] text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
                            World-Class Online Tutoring
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-foreground leading-[1.08] tracking-tight mb-5"
                        >
                            Learn From the{" "}
                            <span className="text-gradient">World&apos;s Best</span>
                            <br />
                            Tutors
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="text-lg md:text-xl text-muted max-w-xl mb-8 leading-relaxed"
                        >
                            Experience highly interactive,<strong className="text-[#00A99D] font-semibold"> expert-led </strong> online tutoring tailored to your unique learning style{" "}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
                        >
                            <button
                                onClick={scrollToContact}
                                className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white gradient-teal shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 text-base"
                            >
                                Get Matched with a Tutor
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

                        {/* ── Social Proof Widget ── */}
                        <motion.div
                            custom={4}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                        >
                            {/* Avatar stack */}
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {avatarStack.map((src, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative shadow-sm"
                                            style={{ zIndex: avatarStack.length - i }}
                                        >
                                            <Image
                                                src={src}
                                                alt={`Student ${i + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="40px"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {/* Stars */}
                                    <div className="flex items-center gap-0.5 mb-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted">
                                        <span className="font-bold text-foreground">500+</span> students worldwide
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="hidden sm:block w-px h-10 bg-border-theme border-l border-theme" />

                            {/* Quick trust stats */}
                            <div className="flex gap-5">
                                <div>
                                    <p className="text-xl font-extrabold text-foreground leading-none">4.9<span className="text-[#00A99D]">★</span></p>
                                    <p className="text-xs text-muted mt-0.5">Avg. Rating</p>
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-foreground leading-none">6+</p>
                                    <p className="text-xs text-muted mt-0.5">Exams Covered</p>
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-foreground leading-none">100<span className="text-[#00A99D] text-base">%</span></p>
                                    <p className="text-xs text-muted mt-0.5">Online</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ══════════════ RIGHT COLUMN — Visual ══════════════ */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="relative hidden lg:flex justify-center items-center"
                    >
                        {/* Teal blob behind the image cluster */}
                        <div
                            className="absolute w-[480px] h-[480px] rounded-full opacity-[0.12]"
                            style={{ background: "radial-gradient(circle, #00A99D 0%, transparent 70%)" }}
                        />

                        {/* ── Main hero image ── */}
                        <div className="relative w-[340px] z-10">
                            {/* Decorative rings */}
                            <div className="absolute -inset-3 rounded-3xl border-2 border-[#00A99D]/20 rotate-2" />
                            <div className="absolute -inset-3 rounded-3xl border-2 border-[#007B73]/10 -rotate-2" />

                            {/* Photo card */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#00A99D]/20">
                                {/* Teal gradient header strip */}
                                <div className="h-16 gradient-teal relative">
                                    <div
                                        className="absolute inset-0 opacity-30"
                                        style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 0%, transparent 60%)" }}
                                    />
                                </div>

                                {/* Main study photo */}
                                <div className="relative h-[320px] -mt-8">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=680&h=640&fit=crop"
                                        alt="Students in an online tutoring session"
                                        fill
                                        className="object-cover"
                                        sizes="340px"
                                        priority
                                    />
                                    {/* Bottom gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                </div>

                                {/* Bottom label strip */}
                                <div className="bg-card px-5 py-4 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl gradient-teal flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-foreground">Live 1-on-1 Sessions</p>
                                        <p className="text-xs text-muted">Personalised · Flexible · Online</p>
                                    </div>
                                </div>
                            </div>

                            {/* ── Floating stat cards ── */}

                            {/* Sessions card — top left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 120 }}
                                className="absolute -left-14 top-20 bg-card border border-theme rounded-2xl px-4 py-3 shadow-xl z-20"
                            >
                                <p className="text-2xl font-extrabold text-[#00A99D] leading-none">500+</p>
                                <p className="text-xs text-muted font-medium mt-0.5">Sessions Completed</p>
                                {/* Pulse dot */}
                                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#00A99D] animate-ping opacity-75" />
                                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#00A99D]" />
                            </motion.div>

                            {/* Rating card — bottom right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.5, type: "spring", stiffness: 120 }}
                                className="absolute -right-14 bottom-28 bg-card border border-theme rounded-2xl px-4 py-3 shadow-xl z-20"
                            >
                                <div className="flex items-center gap-1 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-xl font-extrabold text-foreground leading-none">4.9 <span className="text-sm font-normal text-muted">/ 5.0</span></p>
                                <p className="text-xs text-muted mt-0.5">Student Rating</p>
                            </motion.div>

                            {/* "Online Anywhere" badge — top right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3, duration: 0.4 }}
                                className="absolute -right-10 top-6 gradient-teal text-white rounded-2xl px-3.5 py-2.5 shadow-lg z-20 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs font-semibold">Online, Anywhere</span>
                            </motion.div>
                        </div>


                    </motion.div>

                </div>
            </div>
        </section>
    );
}
