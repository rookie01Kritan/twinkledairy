"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Human-readable labels for URL segments that don't read well as-is.
const LABEL_OVERRIDES: Record<string, string> = {
  categories: "Categories",
  products: "Products",
  milk: "Milk",
  ghee: "Ghee",
  paneer: "Paneer",
  yogurt: "Yogurt & Curd",
  "traditional-sweets": "Traditional Sweets",
  "premium-gift-boxes": "Gift Boxes",
  "festival-specials": "Festival Specials",
  about: "About Us",
  contact: "Contact",
  gallery: "Gallery",
  "privacy-policy": "Privacy Policy",
  terms: "Terms & Conditions",
};

function formatSegment(segment: string): string {
  if (LABEL_OVERRIDES[segment]) return LABEL_OVERRIDES[segment];
  // Fallback: turn "a2-cow-milk-1l" into "A2 Cow Milk 1l"
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            return (
              <span key={href} className="flex items-center gap-1.5">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{formatSegment(segment)}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>
                      {formatSegment(segment)}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </span>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}