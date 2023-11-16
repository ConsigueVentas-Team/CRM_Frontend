import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(8, { message: "Campo requerido" }),
  password: z.string().min(8, { message: "Campo requerido" }),
});
