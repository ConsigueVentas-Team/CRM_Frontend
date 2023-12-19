import { z } from "zod";

const ObservationSchema = z.object({
  descripcion: z.string(),
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
  employee_id: z.number(),
});

export const ProformaScheme = z.object({
  invoice_number: z.string(),
  date: z.string(),
  reference: z.string().trim().toUpperCase(),
  prepared_by: z.string(),
  required_by: z.string(),
  approved_by: z.string(),
  email: z.string().email({ message: "Email inválido" }),
  phone_number: z.string().min(9, { message: "Mínimo 9 caracteres" }),
  work_time: z.string(),
  company: z.number(),
  type: z.string(),
  observations: z.array(ObservationSchema),
  package: z.array(PackageSchema),
  personal_proyecto: z.array(EmployeeSchema),
});
