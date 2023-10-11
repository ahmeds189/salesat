import { z } from 'zod'

export const ProductFormScheme = z.object({
  name: z.string().min(3).max(50),
  description: z.string().min(4),
  img_url: z.string().url(),
  price: z.number().min(10),
})
