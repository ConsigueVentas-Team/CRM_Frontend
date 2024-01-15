import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const emailErrorMsg = "Ingrese un correo electrónico válido";

export const CategoriaSchema = z.object({
    nombre: z.string().min(1, "Ingrese al menos un nombre"),
    color: z.string().min(1, "Ingrese al menos un apellido"),
    descripcion: z.string().min(1, "Ingrese al menos una descripcion"),

});
