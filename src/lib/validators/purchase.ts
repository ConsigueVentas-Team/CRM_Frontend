import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const PurchaseSchema = z.object({
    provider_id: z.number().min(1, requiredErrorMsg),
    date_purchase: z.date(),
    number_bill: z.string().min(1, requiredErrorMsg),
    total: z.number().min(0, "El total no puede ser negativo"),
    status: z.string().min(1, requiredErrorMsg),
    details: z.array(z.object({
        id: z.number().min(1, requiredErrorMsg),
        purchase_id: z.number().min(1, requiredErrorMsg),
        date_purchase: z.date(),
        item: z.string().min(1, requiredErrorMsg),
        price: z.number().min(0, "El precio no puede ser negativo"),
        quantity: z.number().min(1, "La cantidad debe ser al menos 1"),
        total: z.number().min(0, "El total no puede ser negativo"),
        created_at: z.date()
    })).optional(),
    provider: z.object({
        id: z.number().min(1, requiredErrorMsg),
        person_contact: z.string().min(1, requiredErrorMsg),
        phone: z.string().min(1, requiredErrorMsg),
        email: z.string().email("Ingrese un correo electrónico válido"),
        address: z.string().min(1, requiredErrorMsg),
        notes: z.string().min(1, requiredErrorMsg),
        created_at: z.date(),
        updated_at: z.date()
    }).optional(),
    payments: z.array(z.object({
        id: z.number().min(1, requiredErrorMsg),
        purchase_id: z.number().min(1, requiredErrorMsg),
        date_payment: z.date(),
        date_limit: z.date(),
        payment_method: z.string().min(1, requiredErrorMsg),
        total: z.number().min(0, "El total no puede ser negativo"),
        cancelled_total: z.number().min(0, "El total cancelado no puede ser negativo"),
        status: z.string().min(1, requiredErrorMsg)
    })).optional()
});