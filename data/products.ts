import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "p1",
    slug: "a2-cow-milk-1l",
    name: "A2 Cow Milk",
    category: "milk",
    shortDescription: "Farm-fresh, single-source, bottled daily.",
    description:
      "Our A2 cow milk is sourced from a single grass-fed herd and bottled within hours of milking, with nothing added and nothing taken away.",
    price: 180,
    currency: "NPR",
    unit: "1L",
    image:
      "https://images.unsplash.com/photo-1611211301828-be4b317d0707?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611211301828-be4b317d0707?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["bestseller"],
    isFeatured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 214,
  },
  {
    id: "p2",
    slug: "desi-cow-ghee-500g",
    name: "Desi Cow Ghee",
    category: "ghee",
    shortDescription: "Bilona-method, slow-churned in small batches.",
    description:
      "Made using the traditional bilona method — curd churned to butter, then simmered slowly over a wood fire until golden and fragrant.",
    price: 950,
    currency: "NPR",
    unit: "500g",
    image:
      "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["bestseller", "premium"],
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 342,
  },
  {
    id: "p3",
    slug: "malai-paneer-250g",
    name: "Malai Paneer",
    category: "paneer",
    shortDescription: "Cut fresh every morning, never frozen.",
    description:
      "A soft, creamy paneer pressed the same day it's made — no shortcuts, no preservatives.",
    price: 220,
    currency: "NPR",
    unit: "250g",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["new"],
    isFeatured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 98,
  },
  {
    id: "p4",
    slug: "kesar-rasgulla-box",
    name: "Kesar Rasgulla",
    category: "traditional-sweets",
    shortDescription: "Saffron-infused, syrup-soaked, made to order.",
    description:
      "Spongy rasgullas soaked in a light saffron syrup — a classic finished with a modern touch of restraint on the sweetness.",
    price: 450,
    currency: "NPR",
    unit: "12 pieces",
    image:
      "https://images.unsplash.com/photo-1695568181363-af5c78f4d059?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1695568181363-af5c78f4d059?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["bestseller", "festival"],
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 501,
  },
  {
    id: "p5",
    slug: "kaju-katli-premium-box",
    name: "Kaju Katli",
    category: "premium-gift-boxes",
    shortDescription: "Cashew, silver leaf, hand-cut diamonds.",
    description:
      "Our signature cashew fudge, finished with edible silver leaf and hand-cut into diamonds — a gift-box favourite.",
    price: 1200,
    currency: "NPR",
    unit: "500g box",
    image:
      "https://images.unsplash.com/photo-1699708263762-00ca477760bd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1699708263762-00ca477760bd?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["premium", "gifting"],
    isFeatured: true,
    inStock: true,
    rating: 5.0,
    reviewCount: 167,
  },
  {
    id: "p6",
    slug: "tihar-special-thali",
    name: "Tihar Special Sweet Thali",
    category: "festival-specials",
    shortDescription: "A curated assortment for the festival table.",
    description:
      "Six of our most-loved sweets, arranged in a reusable brass-finish thali, made in limited batches each festival season.",
    price: 2100,
    currency: "NPR",
    unit: "1 thali, 900g",
    image:
      "https://images.unsplash.com/photo-1635952346904-95f2ccfcd029?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1635952346904-95f2ccfcd029?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["festival", "limited"],
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 88,
  },
];

export const featuredProducts = products.filter((p) => p.isFeatured);