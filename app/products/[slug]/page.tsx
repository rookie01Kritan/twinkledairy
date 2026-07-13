import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Star, ChevronLeft, MessageCircle, Phone } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found | Twinkle Dairy" };
  }

  return {
    title: product.name + " | Twinkle Dairy",
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main id="main-content">
      <Navbar />
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors mb-8"
        >
          <ChevronLeft size={16} strokeWidth={1.75} />
          Back to home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="rounded-image h-80 lg:h-[520px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f4b400 0%, #0f9d58 100%)",
            }}
          />

          <div>
            {product.tags.includes("bestseller") && (
              <span className="inline-block rounded-full bg-gold-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-600 mb-4">
                Bestseller
              </span>
            )}

            <h1 className="font-display text-ink-900 text-3xl sm:text-4xl mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-1 mb-5">
              <Star size={16} className="fill-gold-500 text-gold-500" />
              <span className="text-sm font-medium text-ink-900">
                {product.rating}
              </span>
              <span className="text-sm text-ink-500">
                ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-ink-500 text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="mb-8">
              <span className="font-display text-3xl text-ink-900">
                {product.currency} {product.price}
              </span>
              <span className="text-ink-500 text-sm"> / {product.unit}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/97710000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-button bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-colors"
              >
                <MessageCircle size={18} strokeWidth={1.75} />
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+97710000000"
                className="flex items-center gap-2 rounded-button border border-ink-900/20 dark:border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white transition-colors hover:bg-ink-900 hover:text-white dark:hover:bg-white/10"
              >
                <Phone size={18} strokeWidth={1.75} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}