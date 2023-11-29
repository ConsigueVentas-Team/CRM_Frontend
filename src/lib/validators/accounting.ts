import { z } from "zod";

const formSchema = z.object({
    fechaEmision: z.string().min(2, {
      message: "Campo requerido",
    }),
    serie: z.string().min(2, {
      message: "Campo requerido",
    }).max(10, {
      message: "Limite superado",
    }),
    numero: z.string().min(2, {
      message: "Campo requerido",
    }).max(10, {
      message: "Limite superado",
    }),
    ruc: z.string().min(2, {
      message: "Campo requerido",
    }).max(12, {
      message: "Limite superado",
    }),
    razSocial: z.string().min(2, {
      message: "Campo requerido",
    }).max(30, {
      message: "Limite superado",
    }),
    direccion: z.string().min(2, {
      message: "Campo requerido",
    }).max(30, {
      message: "Limite superado",
    }).refine(value => value.trim() !== "", {
      message: "Campo requerido",
    }),
    descripcion: z.string().min(2, {
      message: "Campo requerido",
    }).max(60, {
      message: "Limite superado",
    }).refine(value => value.trim() !== "", {
      message: "Campo requerido",
    }),
    monto: z.string().min(2, {
      message: "Campo requerido",
    }).max(6, {
      message: "Limite superado",
    }),
    moneda: z.string(),
    estado: z.string(),
  });
  
  export default formSchema;