import { z } from "zod";

export const orderSchema = z.object({
  customerName: z.string().trim().min(2, "Enter at least 2 characters.").max(80, "Name is too long."),
  phone: z.string().trim().regex(/^(\+251|0)?9\d{8}$/, "Enter a valid Ethiopian mobile number."),
  address: z.string().trim().min(5, "Enter a delivery address.").max(200, "Address is too long."),
  items: z.array(z.object({
    id: z.string().min(1, "Choose a dish."),
    quantity: z.coerce.number().int().min(1, "Quantity must be at least 1.").max(20, "Quantity cannot exceed 20.")
  })).min(1, "Your cart is empty.")
});
