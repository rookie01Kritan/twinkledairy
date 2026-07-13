import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "All Products | Twinkle Dairy",
  description: "Browse our full range of fresh dairy and traditional sweets.",
};

export default function ProductsPage() {
  return (
    <main id="main-content">
      <Navbar />
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <p className="text-green-600 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">
          Full range
        </p>
        <h1 className="font-display text-ink-900 text-3xl sm:text-4xl lg:text-5xl mb-12 max-w-2xl">
          Everything we make, in one place.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}