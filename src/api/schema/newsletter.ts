import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(200, "Email is too long"),
});

export type NewsletterSchema = z.infer<typeof newsletterSchema>;


