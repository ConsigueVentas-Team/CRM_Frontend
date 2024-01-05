import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const emailErrorMsg = "Debe ser un correo electrónico válido";

export const UserSchema = z.object({
  username: z.string().min(1, requiredErrorMsg),
  password: z.string().min(1, requiredErrorMsg),
  email: z.string().email(emailErrorMsg).min(1, requiredErrorMsg),
  nombre: z.string().min(1, "Ingrese al menos un nombre"),
  apellidos: z.string().min(1, "Ingrese al menos un apellido"),
  doc_id: z.number().min(1, "Seleccion un tipo"),
  num_identification: z.string().min(1, requiredErrorMsg),
  cellphone: z
    .string()
    .min(9, { message: "Ingrese un número de teléfono" })
    .max(9, { message: "Número de teléfono inválido" }),
  address: z.string().min(1, requiredErrorMsg),
  type_id: z.number().min(1, "Seleccion un tipo"),
});
