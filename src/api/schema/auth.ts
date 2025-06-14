import { z } from "zod";

const phoneRegex =
  /^(\+1|1)?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

export const loginSchema = z.object({
  identifier: z.union([
    z.string().email(),
    z.string().regex(phoneRegex, "Please enter a valid US phone number"),
  ]),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      passwordRegex,
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
});

export type LoginSchema = z.infer<typeof loginSchema>;
