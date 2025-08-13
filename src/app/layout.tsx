'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'; // ★ FIX: Added the missing import for the Script component.
import Footer from '@/components/Footer';
import { Inter, EB_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en" className={`${inter.variable} ${eb_garamond.variable} scroll-smooth`}>
      <body
        style={{
          backgroundImage: "url('/bg-tech.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className="min-h-screen text-gray-900"
      >
        {/* ======================= HEADER ======================= */}
        <header className="bg-[#d4b42c] py-4 sticky top-0 z-50 shadow-md">
          <div className="container mx-auto flex items-center justify-between px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image src="/logo.png" alt="NY Data Inc Logo" width={160} height={40} className="h-10 w-auto" priority />
            </Link>

            {/* Desktop Navigation (Hidden on Mobile) */}
            <nav className="hidden md:flex space-x-8 text-lg font-semibold text-gray-700">
              <Link href="/#hero" className="hover:text-blue-600">Home</Link>
              <Link href="/#services" className="hover:text-blue-600">Services</Link>
              <Link href="/#projects-apps" className="hover:text-blue-600">Projects</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/#contact" className="hover:text-blue-600">Contact</Link>
            </nav>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Panel (Overlay) */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center">
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6" aria-label="Close menu">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col items-center space-y-8 text-2xl font-semibold text-white">
                <Link href="/#hero" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/#services" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link href="/#projects-apps" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                <Link href="/about" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="/#contact" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </nav>
            </div>
          )}
        </header>

        {/* Page content */}
        {children}
        
        {/* Footer */}
        <Footer />

        {/* ★ REMINDER: Replace 'YOUR_GA_ID' with your actual Google Analytics ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID');
          `}
        </Script>

      </body>
    </html>
  )
}
