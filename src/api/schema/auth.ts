import { z } from "zod";

const phoneRegex =
  /^(\+1|1)?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

const isProdLike = !process.env.NEXT_PUBLIC_ENV || process.env.NEXT_PUBLIC_ENV === "prod";

export const loginSchema = z.object({
  identifier: z.union([
    z.string().email(),
    z.string().regex(phoneRegex, "Please enter a valid US phone number"),
  ]),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      passwordRegex,
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
  captcha: isProdLike 
    ? z.string().min(1, "Captcha is required")
    : z.string().default(""),
});

export const requestOTPSchema = z.object({
  identifier: z.union([
    z.string().email(),
    z.string().regex(phoneRegex, "Please enter a valid US phone number"),
  ]),
});

export const forgotPasswordSchema = z.object({
  identifier: z.union([
    z.string().email(),
    z.string().regex(phoneRegex, "Please enter a valid US phone number"),
  ]),
  otp: z.string().min(6, "OTP must be 6 digits"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RequestOTPSchema = z.infer<typeof requestOTPSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
