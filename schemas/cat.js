import { z } from 'zod';

export const catSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
});