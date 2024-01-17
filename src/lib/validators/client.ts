import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const emailErrorMsg = "Ingrese un correo electrónico válido";

export const ClientSchema = z.object({
  name: z.string().min(1, "Ingrese al menos un nombre"),
  lastname: z.string().min(1, "Ingrese al menos un apellido"),
  address: z.string().min(1, requiredErrorMsg),
  documentType: z.number().min(0, "Seleccion un tipo"),
  documentNumber: z.string().min(1, requiredErrorMsg),
  cellNumber: z
  .string()
  .min(9, { message: "Ingrese un número de teléfono" })
  .max(9, { message: "Número de teléfono inválido" }),
  email: z.string().email(emailErrorMsg).min(1, requiredErrorMsg),
});
