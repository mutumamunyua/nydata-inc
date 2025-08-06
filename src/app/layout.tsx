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
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GSC_CODE}
        />

        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
    page_path: window.location.pathname,
  });
`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[url('/bg-tech.jpg')] bg-cover bg-fixed bg-center text-gray-900">
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-sm py-4 sticky top-0 z-10">
          <div className="container mx-auto flex items-center px-4">
            <Link href="/">
              <img
                src="/logo.png"
                alt="NY Data Inc Logo"
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
            <nav className="ml-auto space-x-6 font-medium">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}
      </body>
    </html>
  )
}
