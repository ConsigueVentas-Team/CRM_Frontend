import { z } from "zod";

export const PromotionSchema = z.object({
    name: z.string().min(1, "Ingrese al menos un nombre"),
    description: z.string().min(1, "Ingrese al menos una descripción"),
    discount: z.number().min(0, "Ingrese descuento")
});
