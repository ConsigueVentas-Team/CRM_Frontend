import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const emailErrorMsg = "Debe ser un correo electrónico válido";

export const UserSchema = z.object({
  username: z.string().min(1, requiredErrorMsg),
  password: z.string().min(1, requiredErrorMsg),
  email: z.string().email(emailErrorMsg).min(1, requiredErrorMsg),
  name: z.string().min(1, "Ingrese al menos un nombre"),
  lastname: z.string().min(1, "Ingrese al menos un apellido"),
  document_type: z.number().min(1, "Seleccion un tipo"),
  document_number: z.string().min(1, requiredErrorMsg),
  phone: z
    .string()
    .min(9, { message: "Ingrese un número de teléfono" })
    .max(9, { message: "Número de teléfono inválido" }),
  address: z.string().min(1, requiredErrorMsg),
  role: z.number().min(1, "Seleccion un tipo"),
});
