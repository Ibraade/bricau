"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="contact" ref={ref} className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-[#00A99D] text-sm font-semibold tracking-widest uppercase mb-3">
                        Get In Touch
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                        Start Your Learning Journey
                    </h2>
                    <p className="text-muted max-w-xl mx-auto text-lg">
                        Ready to achieve your academic goals? Fill out the form below or reach out on WhatsApp — Ibrahim will respond within 24 hours.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="bg-surface border border-theme rounded-2xl p-6 space-y-5">
                            <h3 className="text-lg font-bold text-foreground">Contact Information</h3>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/2340000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-md flex-shrink-0">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</p>
                                    <p className="text-muted text-sm">Quick response guaranteed</p>
                                </div>
                                <svg className="w-4 h-4 text-muted ml-auto group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            {/* Info items */}
                            {[
                                { icon: "📧", label: "Email", value: "info@bricauacademy.com" },
                                { icon: "🌐", label: "Format", value: "100% Online — Worldwide" },
                                { icon: "🕒", label: "Response Time", value: "Within 24 Hours" },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-3 text-sm">
                                    <span className="text-xl">{item.icon}</span>
                                    <div>
                                        <p className="text-muted text-xs font-medium">{item.label}</p>
                                        <p className="text-foreground font-medium">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA callout */}
                        <div className="relative overflow-hidden rounded-2xl p-6 gradient-teal text-white">
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10" />
                            <p className="font-bold text-lg mb-2 relative z-10">Ready to get started?</p>
                            <p className="text-white/80 text-sm mb-4 relative z-10">
                                Book your first session today and experience the Bricau difference.
                            </p>
                            <a
                                href="https://wa.me/2340000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#00A99D] font-semibold text-sm hover:shadow-lg transition-all relative z-10"
                            >
                                Book Now
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Google Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-surface border border-theme rounded-2xl overflow-hidden shadow-xl">
                            <div className="px-6 py-4 border-b border-theme flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                <span className="text-muted text-xs ml-2 font-medium">Book a Session Form</span>
                            </div>
                            <div className="relative">
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSdKMUCg77g-KX2w66cgI6T2M3bKvB9cTJ1LVRc9nUaUJmjuhA/viewform?embedded=true"
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Book a Session with Bricau Academy"
                                    className="w-full"
                                    style={{ minHeight: "700px" }}
                                >
                                    Loading…
                                </iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
