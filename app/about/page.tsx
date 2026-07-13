import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us | Twinkle Dairy",
  description:
    "Three generations of fresh dairy and handcrafted sweets in Kathmandu.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <Navbar />
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <p className="text-green-600 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">
          About us
        </p>
        <h1 className="font-display text-ink-900 text-3xl sm:text-4xl lg:text-5xl mb-12 max-w-2xl">
          A family recipe book, still open after three generations.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-image overflow-hidden h-80 lg:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1605880980331-20a711b27338?auto=format&fit=crop&w=1000&q=80"
              alt="Traditional dairy-making at Twinkle Dairy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-ink-500 text-lg leading-relaxed mb-4">
              Twinkle Dairy began with a single milk cart and a handwritten
              ledger, run by a family that believed fresh should mean
              fresh — not shelf-stable, not diluted, not rushed.
            </p>
            <p className="text-ink-500 text-lg leading-relaxed">
              Three generations later, that same philosophy still shapes
              every batch. Our ghee is still simmered slowly. Our sweets
              are still shaped by hand. We've only changed how we get
              them to you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          <div className="rounded-card bg-white shadow-soft p-8 text-center">
            <p className="font-display text-4xl text-green-600 mb-2">40+</p>
            <p className="text-ink-500 text-sm">Years in business</p>
          </div>
          <div className="rounded-card bg-white shadow-soft p-8 text-center">
            <p className="font-display text-4xl text-green-600 mb-2">3</p>
            <p className="text-ink-500 text-sm">Generations of family</p>
          </div>
          <div className="rounded-card bg-white shadow-soft p-8 text-center">
            <p className="font-display text-4xl text-green-600 mb-2">10k+</p>
            <p className="text-ink-500 text-sm">Households served</p>
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 className="font-display text-ink-900 text-2xl sm:text-3xl mb-4">
            What hasn't changed
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed mb-4">
            No preservatives. No shortcuts. Every batch of milk is
            bottled within hours of milking, every sweet is made the
            same week it's sold, and every recipe is still the one
            written down decades ago.
          </p>
          <p className="text-ink-500 text-lg leading-relaxed">
            We just found better ways to keep it fresh, from our
            kitchen to your door.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}