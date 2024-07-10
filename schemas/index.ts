"use client"

import { z , string} from "zod"
import { object} from "zod"

const loginSchema = object({
    email: string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(6, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
  })
  
  const RegisterSchema = object({
    name: string({ required_error: "Name is required" }).min(1, "Name is required"),
    email: string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),// Ajuste conforme necessário
  });

  export { RegisterSchema }
export { loginSchema }