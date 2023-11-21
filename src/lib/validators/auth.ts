import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, { message: "Campo requerido" }),
  password: z.string().min(1, { message: "Campo requerido" }),
  remember: z.boolean().default(false).optional(),
});

export const checkEmailSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
});
