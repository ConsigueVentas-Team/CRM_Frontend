import { z } from "zod";

const ObservationSchema = z.object({
  description: z.string(),
});

const PackageItemSchema = z.object({
  value: z.string(),
  item_id: z.number(),
});

const PackageSchema = z.object({
  name: z.string(),
  price: z.number(),
  note_price: z.string(),
  package_items: z.array(PackageItemSchema),
});

const EmployeeSchema = z.object({
  employees_id: z.number(),
});

export const ProformaScheme = z.object({
  invoice_number: z.string(),
  date: z.string(),
  reference: z.string().trim().toUpperCase().min(1, { message: "La referencia no puede estar vacía" }),
  prepared_by: z.string(),
  required_by: z.string().min(3, { message: "Ingrese el nombre del solicitante"}),
  approved_by: z.string(),
  email: z.string().email({ message: "Email inválido" }),
  phone_number: z.string().min(9, { message: "Ingrese un número de teléfono" }).max(9, { message: "Número de teléfono inválido" }),
  work_time: z.string().min(1, { message: "Ingrese el tiempo de trabajo" }),
  company_id: z.number().min(1, { message: "Seleccione una empresa" }),
  type: z.string(),
  observations: z.array(ObservationSchema),
  package: z.array(PackageSchema),
  personal_proyecto: z.array(EmployeeSchema),
});
