// File: src/app/layout.tsx

/* eslint-disable @next/next/no-img-element */

import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'NY Data Inc',
  description: 'AI & Data Science Consulting',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>{/* Google Search Console & GA scripts… */}</head>
      <body
        style={{
          backgroundImage: "url('/bg-tech.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className="min-h-screen text-gray-900"
      >
        {/* Header */}
        <header className="bg-[#d4b42c] py-4 sticky top-0 z-20 shadow-md">
          <div className="container mx-auto flex items-center px-6">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="NY Data Inc Logo" className="h-10 w-auto" />
            </Link>
            <nav className="ml-auto flex space-x-8 text-lg font-semibold text-gray-700">
              <Link href="/#hero" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/#services" className="hover:text-blue-600">
                Services
              </Link>
              <Link href="/#projects-apps" className="hover:text-blue-600">
                Projects & Apps
              </Link>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
              <Link href="/#contact" className="hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
