import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const emailErrorMsg = "Ingrese un correo electrónico válido";

export const CategoriaSchema = z.object({
    name: z.string().min(1, "Ingrese al menos un nombre"),
    color: z.number().min(0, "Ingrese al menos un color"),
    description: z.string().min(1, "Ingrese al menos una descripción"),
    type_category: z.number().min(0, "Ingrese al menos un tipo de categoría")
});
