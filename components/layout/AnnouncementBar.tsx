"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useAnnouncementStore } from "@/lib/uiStore";

const DISMISS_KEY = "twinkle-dairy-announcement-dismissed";

export default function AnnouncementBar() {
  const isVisible = useAnnouncementStore((s) => s.isAnnouncementVisible);
  const setVisible = useAnnouncementStore((s) => s.setAnnouncementVisible);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(DISMISS_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, [setVisible]);

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, "true");
    setVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-gold-500 text-ink-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-2.5 flex items-center justify-center text-center relative">
        <p className="text-sm font-medium">
          Festival season is here — visit us for fresh Tihar sweets, made
          daily.
        </p>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        >
          <X size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}