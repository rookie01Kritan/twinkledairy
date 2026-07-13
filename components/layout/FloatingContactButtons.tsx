"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href="tel:+97710000000"
        aria-label="Call Twinkle Dairy"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        className="w-14 h-14 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 shadow-soft-hover flex items-center justify-center"
      >
        <Phone size={22} strokeWidth={1.75} />
      </motion.a>

      <motion.a
        href="https://wa.me/97710000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Twinkle Dairy on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        className="w-14 h-14 rounded-full bg-green-500 text-white shadow-gold-glow flex items-center justify-center"
      >
        <MessageCircle size={24} strokeWidth={1.75} />
      </motion.a>
    </div>
  );
}
