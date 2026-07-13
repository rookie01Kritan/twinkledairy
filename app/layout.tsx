import type { Metadata } from "next";
import { Playfair_Display, Manrope, Geist } from "next/font/google";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import ThemeProvider from "@/components/motion/ThemeProvider";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import BackToTop from "@/components/layout/BackToTop";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Twinkle Dairy | Fresh Dairy, Handcrafted Sweets",
  description: "Premium dairy and traditional sweets, made fresh daily.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const htmlClassName = playfair.variable + " " + manrope.variable;

  return (
    <html
      lang="en"
      className={cn(htmlClassName, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-button focus:bg-green-500 focus:text-white focus:px-6 focus:py-3 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <FloatingContactButtons />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
