import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const ProductoSchema = z.object({
  nombre: z.string().min(1, requiredErrorMsg),
  precio: z.number().min(0.01, "Ingrese un precio válido"),
  categoria: z.string().min(1, requiredErrorMsg),
  descripcion: z.string().min(1, requiredErrorMsg),
  cantidad: z.number().min(1, "Ingrese una cantidad válida"),
  imagen: z.string().min(1, requiredErrorMsg),
});
