"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group rounded-card bg-white shadow-soft overflow-hidden transition-shadow hover:shadow-soft-hover h-full flex flex-col"
    >
      <div className="h-48 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        {product.tags.includes("bestseller") && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-900">
            Bestseller
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-ink-900 text-lg mb-1">
          {product.name}
        </h3>
        <p className="text-ink-500 text-sm mb-3 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center gap-1 mb-4">
          <Star size={14} className="fill-gold-500 text-gold-500" />
          <span className="text-sm font-medium text-ink-900">
            {product.rating}
          </span>
          <span className="text-sm text-ink-500">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="font-display text-xl text-ink-900">
              {product.currency} {product.price}
            </span>
            <span className="text-ink-500 text-sm"> / {product.unit}</span>
          </div>

          <span className="flex items-center gap-1.5 text-sm font-semibold text-green-600 group-hover:gap-2.5 transition-all">
            View Details
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </div>
      </div>
    </Link>
  );
}