import { z } from "zod";

export const ProformaScheme = z.object({
  proforma_id: z.string(),
  invoice_number: z.string(),
  date: z.string(),
  reference: z.string().trim().toUpperCase(),
  prepared_by: z.string(),
  approved_by: z.string(),
  email: z.string().email({ message: "Email inválido" }),
  phone_number: z.string().min(9, { message: "Mínimo 9 caracteres" }),
  company_id: z
    .string()
    .min(2, {
      message: "Campo requerido",
    })
    .max(30, {
      message: "Limite superado",
    }),
  required_by: z.string(),
  proforma_type: z.string(),
});
