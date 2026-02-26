"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function MottoSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
            {/* Gradient background */}
            <div className="absolute inset-0 gradient-teal opacity-95" />
            {/* Subtle pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-white/70 text-sm font-medium tracking-[0.3em] uppercase mb-6"
                >
                    Our Motto
                </motion.p>

                {/* Main motto */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
                >
                    Where Dedication
                    <br />
                    <span className="relative inline-block">
                        Meets{" "}
                        <span className="relative">
                            Distinction
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={inView ? { scaleX: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="absolute -bottom-1 left-0 right-0 h-1 bg-white/40 rounded-full origin-left"
                            />
                        </span>
                    </span>
                </motion.h2>

                {/* Sub-motto */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl md:text-2xl font-light text-white/80 tracking-wide italic"
                >
                    Learn Beyond Limits
                </motion.p>

                {/* Decorative element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-10 flex items-center justify-center gap-3"
                >
                    <div className="h-px w-16 bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                    <div className="h-px w-16 bg-white/30" />
                </motion.div>
            </div>
        </section>
    );
}
