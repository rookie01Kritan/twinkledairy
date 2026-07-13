"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function CategoryGrid() {
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
          className="text-green-600 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4"
        >
          What we make
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="font-display text-ink-900 text-3xl sm:text-4xl lg:text-5xl max-w-xl mb-12"
        >
          Every category, made the same honest way.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.a
              key={category.id}
              href={`/categories/${category.id}`}
              variants={fadeUp}
              custom={i + 2}
              className="group relative rounded-card overflow-hidden h-72 shadow-soft transition-shadow hover:shadow-soft-hover"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="font-display text-white text-2xl mb-1">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm">{category.tagline}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}