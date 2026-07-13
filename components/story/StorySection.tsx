"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/motion";

export default function StorySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
          className="relative rounded-image overflow-hidden h-80 lg:h-[480px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1605880980331-20a711b27338?auto=format&fit=crop&w=1000&q=80"
            alt="Traditional dairy-making, passed down through generations"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <p className="text-green-600 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">
            Our story
          </p>
          <h2 className="font-display text-ink-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
            Three generations, one recipe book.
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed mb-4">
            It started with a single milk cart and a handwritten ledger.
            Today, the same family still oversees every batch, the ghee
            still simmers the slow way, and the sweets are still shaped
            by hand.
          </p>
          <p className="text-ink-500 text-lg leading-relaxed mb-8">
            No shortcuts were ever added to the recipe. We just found
            better ways to keep it fresh, from our kitchen to your door.
          </p>
          <Link
            href="/story"
            className="inline-block rounded-button border border-ink-900/20 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
          >
            Read Our Full Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}