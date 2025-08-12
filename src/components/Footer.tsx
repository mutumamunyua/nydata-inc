// src/components/Footer.tsx

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="bg-amber-400 text-gray-900 py-4"
      style={{ fontFamily: "'EB Garamond', serif" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm text-center md:text-left space-y-2 md:space-y-0">
        {/* Left: Copyright */}
        <span>© {new Date().getFullYear()} NY Data Inc. All rights reserved.</span>

        {/* Right: Contact + Legal */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <span>info@nydatai.com</span>
          <span>|</span>
          <span>Nairobi, Kenya</span>
          <span>|</span>
          <Link href="/privacy" className="hover:text-blue-700">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-blue-700">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}