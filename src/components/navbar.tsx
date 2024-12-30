import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            PUPR
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Beranda
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              Tentang
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

