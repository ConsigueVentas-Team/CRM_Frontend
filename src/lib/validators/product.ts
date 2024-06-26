import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const ProductoSchema = z.object({
  name: z.string().min(1, requiredErrorMsg),
  description: z.string().min(1, requiredErrorMsg),
  price: z.number().min(0.01, "Ingrese un precio válido"),
  stock: z.number().min(1, "Ingrese una cantidad válida"),
  stock_security: z.number().min(1, "Ingrese una cantidad válida"),
  barcode: z.string().min(1, requiredErrorMsg),
  status: z.number().min(0, "Ingrese una cantidad válida").default(0),
  category: z.number().min(1, requiredErrorMsg),
  image: z.any(),
  brand: z.string(),
  rating: z.string()
});
