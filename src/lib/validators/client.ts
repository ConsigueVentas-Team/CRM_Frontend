import { z } from "zod";

const requiredErrorMsg = "Campo requerido";
const emailErrorMsg = "Correo electrónico inválido";
const documentErrorMsg = "Documento inválido";

export const ClientSchema = z.object({
  name: z.string().min(1, "Ingrese al menos un nombre"),
  lastname: z.string().min(1, "Ingrese al menos un apellido"),
  address: z.string().min(1, requiredErrorMsg),
  documentType: z.number().nonnegative("Seleccione un tipo"),
  documentNumber: z
  .string()
  .min(8, requiredErrorMsg)
  .refine(value => /^[0-9.]+$/.test(value), {message: documentErrorMsg}),
  cellNumber: z
  .string()
  .min(9, { message: "Ingrese un número de teléfono" })
  .max(9, { message: "Número de teléfono inválido" }),
  email: z.string().email(emailErrorMsg).min(1, requiredErrorMsg),
});