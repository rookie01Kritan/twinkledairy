import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = categories.find((c) => c.id === categorySlug);

  if (!category) {
    return { title: "Category Not Found | Twinkle Dairy" };
  }

  return {
    title: `${category.name} | Twinkle Dairy`,
    description: category.tagline,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = categories.find((c) => c.id === categorySlug);

  if (!category) {
    notFound();
  }

  const filteredProducts = products.filter(
    (product) => product.category === categorySlug
  );

  return (
    <main id="main-content">
      <Navbar />
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <p className="text-green-600 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">
          {category.tagline}
        </p>
        <h1 className="font-display text-ink-900 text-3xl sm:text-4xl lg:text-5xl mb-12">
          {category.name}
        </h1>

        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-ink-500 text-lg">
              No products in this category yet — check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}