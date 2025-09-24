import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is too short")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(200, "Email is too long"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject is too short")
    .max(150, "Subject is too long"),
  message: z
    .string()
    .transform((value) => value.trim())
    .pipe(
      z
        .string()
        .min(10, "Message is too short")
        .max(2000, "Message is too long")
    ),
  subscribe: z.boolean().optional().default(false),
  inquiryType: z.enum(["general", "support", "partnership", "demo"]).default("general"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
