"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-theme"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                            aria-label="Bricau Academy Home"
                        >
                            <div className="relative w-10 h-10 md:w-12 md:h-12">
                                <Image
                                    src="/logo.png"
                                    alt="Bricau Academy Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-base md:text-lg text-gradient" style={{ fontFamily: "var(--font-outfit)" }}>
                                    Bricau
                                </span>
                                <span className="text-xs text-muted tracking-widest uppercase">Academy</span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-sm font-medium text-muted hover:text-[#00A99D] transition-colors duration-200 relative group cursor-pointer"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A99D] group-hover:w-full transition-all duration-300" />
                                </button>
                            ))}
                        </nav>

                        {/* Right actions */}
                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <button
                                onClick={() => handleNavClick("#contact")}
                                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white gradient-teal hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Book a Session
                            </button>
                            {/* Hamburger */}
                            <button
                                aria-label="Toggle mobile menu"
                                aria-expanded={mobileOpen}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-theme bg-surface"
                            >
                                <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                                <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                                <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? "visible" : "invisible"}`}
            >
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setMobileOpen(false)}
                />
                <nav
                    className={`absolute top-0 right-0 bottom-0 w-72 bg-background shadow-2xl pt-20 px-6 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    aria-label="Mobile navigation"
                >
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="text-left py-3 px-4 rounded-xl text-base font-medium text-foreground hover:bg-surface hover:text-[#00A99D] transition-colors cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick("#contact")}
                            className="mt-4 w-full py-3 rounded-full text-sm font-semibold text-white gradient-teal"
                        >
                            Book a Session
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
}
