import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string()
    .min(5, { message: "Campo requerido" })
    .email({ message: "Este Correo no es valido" }),
  password: z.string().min(8, { message: "Campo requerido" }),
});
