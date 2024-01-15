import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const emailErrorMsg = "Ingrese un correo electrónico válido";

export const ClientSchema = z.object({
  nombre: z.string().min(1, "Ingrese al menos un nombre"),
  apellidos: z.string().min(1, "Ingrese al menos un apellido"),
  address: z.string().min(1, requiredErrorMsg),
  doc_id: z.number().min(1, "Seleccion un tipo"),
  num_identification: z.string().min(1, requiredErrorMsg),
  cellphone: z
  .string()
  .min(9, { message: "Ingrese un número de teléfono" })
  .max(9, { message: "Número de teléfono inválido" }),
  email: z.string().email(emailErrorMsg).min(1, requiredErrorMsg),
});
