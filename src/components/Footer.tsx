"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Ibrahim" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

const exams = ["SAT", "GRE", "GMAT", "IELTS", "PTE", "TOEFL"];

export default function Footer() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-surface border-t border-theme">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4 group">
                            <div className="relative w-10 h-10">
                                <Image src="/logo.png" alt="Bricau Academy" fill className="object-contain" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-lg text-gradient">Bricau</span>
                                <span className="text-xs text-muted tracking-widest uppercase">Academy</span>
                            </div>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed max-w-xs mb-4">
                            World-class online tutoring for K–12 students and international exam candidates by{" "}
                            <strong className="text-foreground">Ibrahim Yusuf</strong>. Learn from anywhere. Excel everywhere.
                        </p>
                        <p className="text-[#00A99D] text-sm font-semibold italic">
                            &ldquo;Where Dedication Meets Distinction — Learn Beyond Limits&rdquo;
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="text-muted hover:text-[#00A99D] text-sm transition-colors cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exams */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Exam Prep</h4>
                        <div className="flex flex-wrap gap-2">
                            {exams.map((exam) => (
                                <span
                                    key={exam}
                                    className="px-3 py-1 rounded-full bg-[#00A99D]/10 text-[#00A99D] text-xs font-semibold"
                                >
                                    {exam}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 space-y-2">
                            <a
                                href="https://wa.me/2340000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-muted hover:text-[#25D366] transition-colors"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>
                            <p className="text-muted text-sm">📧 info@bricauacademy.com</p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-theme pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-muted text-sm">
                        © {new Date().getFullYear()} Bricau Academy. All rights reserved. Founded by{" "}
                        <strong className="text-foreground">Ibrahim Yusuf</strong>.
                    </p>
                    <p className="text-muted text-xs">
                        Empowering learners worldwide 🌍
                    </p>
                </div>
            </div>
        </footer>
    );
}
