import { z } from "zod";

export const ProformaScheme = z.object({
  fecha: z.string(),
  reference: z.string(),
  elaborado_por: z.string(),
  aprobado_por:z.string(),
  correo:z.string(),
  telefono:z.string()
});