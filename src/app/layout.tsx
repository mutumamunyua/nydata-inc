// File: src/app/layout.tsx

import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'NY Data Inc',
  description: 'AI & Data Science Consulting',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>{/* … */}</head>
      <body
        style={{
          backgroundImage: "url('/bg-tech.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        className="min-h-screen text-gray-900"
      >
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-sm py-4 sticky top-0 z-10">
          <div className="container mx-auto flex items-center px-4">
            <Link href="/">
              <img src="/logo.png" alt="NY Data Inc Logo" className="h-10 w-auto cursor-pointer" />
            </Link>
            // File: src/app/layout.tsx (inside <header>…</header>)

            <nav className="ml-auto space-x-6 font-medium">
              {/* Link back to home’s Hero */}
              <Link href="/#hero">Home</Link>

              {/* Link back to home’s Services */}
              <Link href="/#services">Services</Link>

              {/* Link back to home’s Case Studies */}
              <Link href="/#case-studies">Case Studies</Link>

              {/* About remains a separate page */}
              <Link href="/about">About</Link>

              {/* Link back to home’s Contact */}
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}
      </body>
    </html>
  )
}
