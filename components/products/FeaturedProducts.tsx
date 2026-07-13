"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { featuredProducts } from "@/data/products";
import { fadeUp, staggerContainer } from "@/lib/motion";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-green-100/40 py-15">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-8"
      >
        <motion.p
          variants={fadeUp}
          className="text-green-600 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4"
        >
          Customer favourites
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="font-display text-ink-900 text-3xl sm:text-4xl lg:text-5xl max-w-xl mb-12"
        >
          Featured, because they earned it.
        </motion.h2>

        <motion.div variants={fadeUp} custom={2}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
            className="!pb-12"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
}