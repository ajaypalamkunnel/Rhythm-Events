import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name (at least 2 characters)" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid 10-digit phone number" }),
  service: z.string().min(1, { message: "Please select a service you are interested in" }),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  estimatedBudget: z.string().optional(),
  message: z.string().min(10, { message: "Please share a few details about your event (at least 10 characters)" }),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
