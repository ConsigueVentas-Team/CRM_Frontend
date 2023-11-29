import { z } from "zod";

export const UserSchema = z.object({
  username: z.string({
    required_error: "El nombre de usuario no puede estar vacío",
  }),
  password: z.string({
    required_error: "La contraseña no puede estar vacía",
  }),
  email: z
    .string({
      required_error: "El correo electrónico no puede estar vacío",
    })
    .email("Debe ser un correo electrónico válido"),
  nombre: z.string({
    required_error: "Ingrese al menos un nombre",
  }),
  apellidos: z.string({
    required_error: "Ingrese al menos un apellido",
  }),
  position_id: z
    .number({
      required_error: "La posición no puede estar vacía",
    })
    .int("La posición debe ser un número entero"),
});
