import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const emailErrorMsg = "Debe ser un correo electrónico válido";

export const UserSchema = z.object({
  username: z.string().min(1, requiredErrorMsg),
  password: z.string().min(1, requiredErrorMsg),
  email: z.string().email(emailErrorMsg).min(1, requiredErrorMsg),
  nombre: z.string().min(1, "Ingrese al menos un nombre"),
  apellidos: z.string().min(1, "Ingrese al menos un apellido"),
  departamento_id: z.number().min(1, "El departamento no puede estar vacío"),
  core_id: z.number().min(1, "El core no puede estar vacío"),
  position_id: z.number().min(1, "La posición no puede estar vacía"),
});