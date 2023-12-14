import { z } from "zod";

const formSchema = z.object({
    date_of_issue: z.string().min(2, {
      message: "Campo requerido",
    }),
    serie: z.string().min(2, {
      message: "Campo requerido",
    }).max(10, {
      message: "Limite superado",
    }),
    number: z.string().min(2, {
      message: "Campo requerido",
    }).max(10, {
      message: "Limite superado",
    }),
    ruc: z.string().min(12, {
      message: "Campo requerido",
    }).max(12, {
      message: "Limite superado",
    }),
    business_name: z.string().min(2, {
      message: "Campo requerido",
    }).max(30, {
      message: "Limite superado",
    }),
    address: z.string().min(2, {
      message: "Campo requerido",
    }).max(30, {
      message: "Limite superado",
    }).refine(value => value.trim() !== "", {
      message: "Campo requerido",
    }),
    description: z.string().min(2, {
      message: "Campo requerido",
    }).max(60, {
      message: "Limite superado",
    }).refine(value => value.trim() !== "", {
      message: "Campo requerido",
    }),
    amount: z.string().min(2, {
      message: "Campo requerido",
    }).max(6, {
      message: "Limite superado",
    }),
    money: z.string(),
    status: z.string(),
  });
  
  export default formSchema;