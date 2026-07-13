"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, Share2, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/schemas";

const FOOTER_LINKS = {
  shop: [
    { label: "Fresh Milk", href: "/categories/milk" },
    { label: "Pure Ghee", href: "/categories/ghee" },
    { label: "Traditional Sweets", href: "/categories/traditional-sweets" },
    { label: "Gift Boxes", href: "/categories/premium-gift-boxes" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  support: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  function onSubmit() {
    setSubmitted(true);
    reset();
  }

  return (
    <footer className="bg-ink-900 text-white/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-15">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <p className="font-display text-2xl text-white mb-4">
              Twinkle Dairy
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Fresh dairy and handcrafted sweets, made in small batches every
              morning, for three generations.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com"
                aria-label="Twinkle Dairy on Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white/10"
              >
                <AtSign size={18} strokeWidth={1.75} />
              </Link>
              <Link
                href="https://facebook.com"
                aria-label="Twinkle Dairy on Facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white/10"
              >
                <Share2 size={18} strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Shop
            </p>
            <ul className="space-y-3">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={16} strokeWidth={1.75} />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} strokeWidth={1.75} />
              <span>+977 1-XXXXXXX</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} strokeWidth={1.75} />
              <span>hello@twinkledairy.com</span>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white text-sm uppercase tracking-wide mb-3">
              Get festival updates
            </p>
            {submitted ? (
              <p className="text-sm text-gold-500">
                Thanks, you are on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
                noValidate
              >
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="you@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-gold-500"
                      {...register("email")}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold-500 text-ink-900 hover:bg-gold-600 rounded-button px-6"
                  >
                    Join
                  </Button>
                </div>
                {errors.email && (
                  <p className="text-xs text-error">
                    {errors.email.message}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/50 text-center">
          (c) {new Date().getFullYear()} Twinkle Dairy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}