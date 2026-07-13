"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-15">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          variants={fadeUp}
          className="text-green-600 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4 text-center"
        >
          Trusted daily
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="font-display text-ink-900 text-3xl sm:text-4xl lg:text-5xl mb-12 text-center max-w-2xl mx-auto"
        >
          Stories from our neighbours.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              custom={i + 2}
              className="rounded-card bg-white shadow-soft p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className={
                      starIndex < testimonial.rating
                        ? "fill-gold-500 text-gold-500"
                        : "fill-transparent text-ink-500/30"
                    }
                  />
                ))}
              </div>

              <p className="text-ink-900 text-lg leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center font-display text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-ink-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-ink-500 text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}