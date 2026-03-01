"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* ─── Tutor Data ──────────────────────────────────────────────────── */
const tutors = [
    {
        id: 1,
        name: "Ibrahim Yusuf",
        role: "Founder & Lead Tutor",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop&crop=face",
        initials: "IY",
        tags: ["K–12", "SAT", "IELTS", "GRE", "TOEFL"],
        stats: [
            { value: "6+", label: "Exams Covered" },
            { value: "1–12", label: "Grades Taught" },
        ],
        bio: "Hi, I'm Ibrahim Yusuf, the founder and sole tutor behind Bricau Academy. I created this platform with one mission: to give every student — no matter where they are in the world — access to high-quality, focused, and truly personalized education.",
        credentials: [
            { icon: "🎓", label: "Specialist in K–12 Curriculum" },
            { icon: "🌐", label: "Global Exam Coach — SAT, GRE, IELTS, TOEFL" },
            { icon: "💻", label: "100% Online, Flexible Scheduling" },
            { icon: "🎯", label: "Personalized Instruction for Every Learner" },
            { icon: "📈", label: "Proven Track Record of Score Improvement" },
            { icon: "🤝", label: "Dedicated Mentor & Academic Guide" },
        ],
    },
    {
        id: 2,
        name: "Amira Hassan",
        role: "Mathematics & Science Tutor",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
        initials: "AH",
        tags: ["Math", "Physics", "Chemistry", "IGCSE"],
        stats: [
            { value: "8+", label: "Years Experience" },
            { value: "200+", label: "Students Taught" },
        ],
        bio: "I'm Amira Hassan, a dedicated Math and Science tutor with a passion for breaking down complex concepts into digestible, engaging lessons. My students consistently achieve top scores in IGCSE and A-Level examinations.",
        credentials: [
            { icon: "🔬", label: "BSc Physics, University of Cairo" },
            { icon: "📐", label: "Advanced Mathematics Specialist" },
            { icon: "🏆", label: "Top-Rated IGCSE Coach" },
            { icon: "💡", label: "Problem-Solving Focused Sessions" },
            { icon: "📊", label: "Data-Driven Progress Tracking" },
            { icon: "🌍", label: "Available Across All Time Zones" },
        ],
    },
    {
        id: 3,
        name: "Kwame Asante",
        role: "English & Literature Tutor",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&crop=face",
        initials: "KA",
        tags: ["English", "Writing", "IELTS", "PTE", "Literature"],
        stats: [
            { value: "9+", label: "Band Score Avg" },
            { value: "150+", label: "IELTS Students" },
        ],
        bio: "Hello, I'm Kwame Asante — an English language and literature specialist who has helped over 150 students achieve their target IELTS and PTE scores. I believe every student has a unique voice; my job is to help you find and express it with confidence.",
        credentials: [
            { icon: "✍️", label: "MA in English Literature" },
            { icon: "🗣️", label: "Certified IELTS Instructor" },
            { icon: "📖", label: "Creative Writing Coach" },
            { icon: "🎙️", label: "Public Speaking & Presentation" },
            { icon: "📝", label: "Academic Essay & Report Writing" },
            { icon: "🔤", label: "Grammar & Vocabulary Mastery" },
        ],
    },
    {
        id: 4,
        name: "Sofia Reyes",
        role: "Early Childhood & Language Tutor",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
        initials: "SR",
        tags: ["K–6", "Spanish", "Reading", "Phonics"],
        stats: [
            { value: "5+", label: "Languages Taught" },
            { value: "K–6", label: "Grades Taught" },
        ],
        bio: "I'm Sofia Reyes, an early childhood education specialist and multilingual tutor. I specialize in building strong literacy foundations for young learners and teaching Spanish as a second language through fun, immersive sessions tailored to each child's pace.",
        credentials: [
            { icon: "👶", label: "Early Childhood Education Certified" },
            { icon: "📚", label: "Phonics & Reading Specialist" },
            { icon: "🌎", label: "Native Spanish Speaker & Instructor" },
            { icon: "🎨", label: "Play-Based Learning Techniques" },
            { icon: "🧩", label: "Learning Disability Accommodation" },
            { icon: "⭐", label: "5-Star Rated by Parents" },
        ],
    },
];

/* ─── Component ────────────────────────────────────────────────────── */
export default function MeetTutorsSection() {
    const sectionRef = useRef(null);
    const swiperRef = useRef<SwiperType | null>(null);
    const inView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section id="about" ref={sectionRef} className="section-padding bg-background overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-[#00A99D] text-sm font-semibold tracking-widest uppercase mb-3"
                >
                    Meet Your Tutors
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight"
                >
                    World-Class Educators,{" "}
                    <span className="text-[#00A99D]">Just for You</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-muted text-base max-w-xl mx-auto"
                >
                    Every Bricau tutor is carefully selected for their expertise, teaching style,
                    and passion for student success.
                </motion.p>
            </div>

            {/* Swiper Carousel */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
            >
                <Swiper
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 120,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true, el: ".tutor-pagination" }}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    loop
                    className="tutor-swiper !pb-14"
                >
                    {tutors.map((tutor) => (
                        <SwiperSlide key={tutor.id} className="!w-[320px] md:!w-[800px]">
                            {({ isActive }) => (
                                <div
                                    className={`
                                        grid md:grid-cols-[300px_1fr] rounded-3xl border overflow-hidden shadow-xl
                                        transition-all duration-500
                                        ${isActive
                                            ? "border-[#00A99D]/40 shadow-[#00A99D]/10 shadow-2xl"
                                            : "border-theme opacity-60 shadow-lg"}
                                        bg-card
                                    `}
                                >
                                    {/* ── Left: Profile Card ── */}
                                    <div className="relative flex flex-col items-center bg-gradient-to-b from-[#00A99D]/10 to-card pt-8 pb-6 px-6">
                                        {/* Photo */}
                                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg mb-4">
                                            <Image
                                                src={tutor.image}
                                                alt={tutor.name}
                                                fill
                                                className="object-cover"
                                                sizes="128px"
                                            />
                                        </div>

                                        {/* Name & role */}
                                        <h3 className="text-lg font-extrabold text-foreground text-center leading-tight">
                                            {tutor.name}
                                        </h3>
                                        <p className="text-[#00A99D] text-sm font-semibold mt-1 mb-4 text-center">
                                            {tutor.role}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                                            {tutor.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 rounded-full bg-[#00A99D]/10 text-[#00A99D] text-xs font-semibold"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="w-full grid grid-cols-2 gap-3 mt-auto">
                                            {tutor.stats.map((stat) => (
                                                <div
                                                    key={stat.label}
                                                    className="bg-card border border-theme rounded-2xl p-3 text-center shadow-sm"
                                                >
                                                    <p className="text-xl font-extrabold text-[#00A99D]">{stat.value}</p>
                                                    <p className="text-xs text-muted font-medium leading-tight mt-0.5">{stat.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ── Right: Bio & Credentials ── */}
                                    <div className="flex flex-col justify-center px-7 py-8 gap-6">
                                        {/* Bio */}
                                        <p className="text-muted text-sm leading-relaxed">
                                            {tutor.bio}
                                        </p>

                                        {/* Credentials */}
                                        <div className="grid sm:grid-cols-2 gap-2.5">
                                            {tutor.credentials.map((c) => (
                                                <div
                                                    key={c.label}
                                                    className="flex items-start gap-2.5 p-3 rounded-xl border border-theme bg-surface text-sm"
                                                >
                                                    <span className="text-base">{c.icon}</span>
                                                    <span className="text-foreground font-medium leading-snug">{c.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Dots */}
                <div className="tutor-pagination flex justify-center gap-2 mt-2" />

                {/* Custom Nav Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous tutor"
                        className="group w-12 h-12 rounded-full border border-theme bg-card hover:bg-[#00A99D] hover:border-[#00A99D] shadow-md flex items-center justify-center transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-foreground group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next tutor"
                        className="group w-12 h-12 rounded-full border border-theme bg-card hover:bg-[#00A99D] hover:border-[#00A99D] shadow-md flex items-center justify-center transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-foreground group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </motion.div>

            {/* Swiper dot styles */}
            <style jsx global>{`
                .tutor-swiper .swiper-slide {
                    transition: transform 0.5s ease, opacity 0.5s ease;
                }
                .tutor-pagination .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: var(--color-muted, #94a3b8);
                    opacity: 0.5;
                    border-radius: 9999px;
                    display: inline-block;
                    transition: all 0.3s ease;
                }
                .tutor-pagination .swiper-pagination-bullet-active {
                    width: 24px;
                    background: #00A99D;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}
