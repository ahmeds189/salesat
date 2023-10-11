import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hello Next</h1>
      <Link href='new-product' className='inline-block bg-emerald-400 p-4'>
        new product
      </Link>
    </>
  )
}
