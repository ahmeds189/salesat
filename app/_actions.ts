'use server'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { ProductFormScheme } from '@/lib/schema'
import prisma from '@/lib/db/prisma'

type Inputs = z.infer<typeof ProductFormScheme>

export async function addProduct(data: Inputs) {
  const { name, description, price, img_url } = data
  await prisma.product.create({
    data: { name, description, price, img_url },
  })
  redirect('/')
}
