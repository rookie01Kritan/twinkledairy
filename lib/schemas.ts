import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;