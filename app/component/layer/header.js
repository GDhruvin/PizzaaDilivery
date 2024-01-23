import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className='flex items-center justify-between'>
        <Link className='text-red-600 font-semibold text-2xl' href=''>ST PIZAA</Link>
        <nav className='flex items-center gap-8 text-gray-400 font-semibold'>
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link className='bg-red-700 rounded-full text-white px-8 py-2' href={''}>Login</Link>
        </nav>
      </header>
    </>
  )
}
