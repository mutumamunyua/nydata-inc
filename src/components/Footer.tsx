// File: src/components/Footer.tsx

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="bg-amber-400 text-gray-900 py-4"
      style={{ fontFamily: "'EB Garamond', serif" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm">
        {/* Left: Copyright */}
        <span>© {new Date().getFullYear()} NY Data Inc. All rights reserved.</span>

        {/* Right: Privacy & Terms */}
        <div className="mt-2 md:mt-0 space-x-4">
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