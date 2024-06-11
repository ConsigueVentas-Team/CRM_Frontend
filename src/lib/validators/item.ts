import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const ItemSchema = z.object({
    name: z.string().min(1, requiredErrorMsg),
    description: z.string().min(1, requiredErrorMsg),
    quantity: z.coerce.number().min(1, "La cantidad debe ser al menos 1"),
    price: z.coerce.number().min(0, "El precio no puede ser negativo"),
    total: z.coerce.number().min(0, "El total no puede ser negativo"),
});