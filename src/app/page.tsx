import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MottoSection from "@/components/MottoSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import MeetTutorsSection from "@/components/MeetTutorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Bricau Academy | Expert Online Tutoring by Ibrahim Yusuf",
  description:
    "Bricau Academy — world-class K–12 online tutoring and international exam preparation (SAT, GRE, GMAT, IELTS, PTE, TOEFL) by expert tutor Ibrahim Yusuf. Learn anywhere, achieve everywhere.",
  openGraph: {
    title: "Bricau Academy | Expert Online Tutoring by Ibrahim Yusuf",
    description:
      "World-class K–12 tutoring and international exam preparation. Learn online, achieve globally.",
    url: "https://bricauacademy.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MottoSection />
      <WhatWeDoSection />
      <MeetTutorsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
