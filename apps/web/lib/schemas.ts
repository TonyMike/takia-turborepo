import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(5, { message: "Full name must be at least 5 characters" }).trim(),
  email: z.string().email({ message: "Provide a valid email" }),
  password: z.
    string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .trim(),
  phoneNumber: z.string()
    .min(11, { message: "Phone number must be at least 11 digits" })
    .max(11, { message: "Phone number must be at most 11 digits" })
    .trim(),
})

export const loginSchema = z.object({
  email: z.string().email({ message: "Provide a valid email" }),
  password: z.
    string()
    .min(8, { message: "Password must be at least 8 characters" })
})