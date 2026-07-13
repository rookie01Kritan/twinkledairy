export type ProductCategory =
  | "milk"
  | "ghee"
  | "paneer"
  | "yogurt"
  | "traditional-sweets"
  | "premium-gift-boxes"
  | "festival-specials";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  price: number;
  currency: string;
  unit: string;
  image: string;
  gallery: string[];
  tags: string[];
  isFeatured: boolean;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface Category {
  id: ProductCategory;
  name: string;
  tagline: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}