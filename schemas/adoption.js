import { z } from 'zod';

export const adoptionSchema = z.object({
  fullName: z.string(),
  email: z.string().email,
  telephone: z.string(),
  observation: z.string(),
  catId: z.number(),
});