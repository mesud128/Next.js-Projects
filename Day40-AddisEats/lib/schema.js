import { z } from "zod";
export const orderSchema = z.object({
 customerName:z.string().trim().min(2,"Enter at least 2 characters.").max(80),
 phone:z.string().trim().min(7,"Enter a valid phone number.").max(20),
 address:z.string().trim().min(5,"Enter a delivery address.").max(200),
 items:z.array(z.object({id:z.string().min(1),name:z.string().min(1),price:z.number().positive(),quantity:z.number().int().positive().max(20)})).min(1,"Your cart is empty.")
});
