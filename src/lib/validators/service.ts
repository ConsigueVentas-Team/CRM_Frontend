import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const ServiceSchema = z.object({
    name:z.string().min(1, requiredErrorMsg),
    description: z.string().min(1, requiredErrorMsg),
    category: z.number().min(1, requiredErrorMsg),
    image: z.any(),
    rate:z.string(),
    service_time: z.number().min(1,requiredErrorMsg),
    promotion:z.number().min(1,requiredErrorMsg)
})
