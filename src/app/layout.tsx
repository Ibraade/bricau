import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bricau Academy | Expert Online Tutoring by Ibrahim Yusuf",
    template: "%s | Bricau Academy",
  },
  description:
    "Bricau Academy offers world-class online tutoring for K–12 students and international exam preparation (SAT, GRE, GMAT, IELTS, PTE, TOEFL) by expert tutor Ibrahim Yusuf.",
  keywords: [
    "online tutoring",
    "K-12 tutor",
    "SAT preparation",
    "GRE coaching",
    "GMAT tutoring",
    "IELTS preparation",
    "TOEFL coaching",
    "PTE preparation",
    "Ibrahim Yusuf",
    "Bricau Academy",
    "online education",
    "math tutor",
    "English tutor",
  ],
  authors: [{ name: "Ibrahim Yusuf" }],
  creator: "Ibrahim Yusuf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bricauacademy.com",
    siteName: "Bricau Academy",
    title: "Bricau Academy | Expert Online Tutoring by Ibrahim Yusuf",
    description:
      "World-class K–12 tutoring and international exam preparation. Learn online, achieve globally.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bricau Academy | Expert Online Tutoring by Ibrahim Yusuf",
    description:
      "World-class K–12 tutoring and international exam preparation. Learn online, achieve globally.",
    creator: "@bricauacademy",
  },
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
