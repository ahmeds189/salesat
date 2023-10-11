'use client'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductFormScheme } from '@/lib/schema'
import { addProduct } from '@/app/_actions'

type Inputs = z.infer<typeof ProductFormScheme>

const ProductForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ProductFormScheme),
  })

  const onSubmit: SubmitHandler<Inputs> = async (date) => {
    const result = await addProduct(date)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder='name'
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register('name')}
      />
      <div className='mb-3 mt-2 h-5 text-xs text-red-700' role='alert'>
        {errors.name?.message}
      </div>

      <Textarea
        placeholder='Type the description here.'
        aria-invalid={errors.description ? 'true' : 'false'}
        {...register('description')}
      />
      <div className='mb-3 mt-2 h-5 text-xs text-red-700' role='alert'>
        {errors.description?.message}
      </div>

      <Input
        placeholder='image url'
        aria-invalid={errors.img_url ? 'true' : 'false'}
        {...register('img_url')}
      />
      <div className='mb-3 mt-2 h-5 text-xs text-red-700' role='alert'>
        {errors.img_url?.message}
      </div>

      <Input
        placeholder='price'
        aria-invalid={errors.price ? 'true' : 'false'}
        {...register('price', { valueAsNumber: true })}
      />
      <div className='mb-3 mt-2 h-5 text-xs text-red-700' role='alert'>
        {errors.price?.message}
      </div>

      <Button type='submit'>Submit {isSubmitting && 'loading...'}</Button>
    </form>
  )
}
export default ProductForm
