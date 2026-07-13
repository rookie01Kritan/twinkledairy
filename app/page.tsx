import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import CategoryGrid from "@/components/categories/CategoryGrid";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import StorySection from "@/components/story/StorySection";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <StorySection />
      <Testimonials />
      <Footer />
    </main>
  );
}