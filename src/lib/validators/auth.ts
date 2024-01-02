import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, { message: "Campo requerido" }),
  password: z.string().min(1, { message: "Campo requerido" }),
  remember: z.boolean().default(false).optional(),
});

export const checkEmailSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
});

export const PasswordChangeSchema = z.object({
  password: z.string().min(1, { message: "Mínimo 6 caracteres" }),
  passwordConfirmation: z.string().min(1, { message: "Mínimo 6 caracteres" }),
});
