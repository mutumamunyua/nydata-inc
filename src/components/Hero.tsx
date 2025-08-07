'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero({ services }: { services: Array<{ title: string; href: string; icon: string }> }) {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero content */}
      <div className="relative z-10 px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl mb-6">
          Your{' '}
          <motion.span
            className="text-blue-400"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
          >
            AI & Data Science
          </motion.span>{' '}
          Partners
        </h1>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-200 leading-relaxed drop-shadow-md mb-10">
          End-to-end AI services—strategy, MLOps, LLMs and custom models in one seamless experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="#services"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg text-lg"
          >
            Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black font-medium rounded-lg shadow-lg text-lg"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scrollable Services Belt */}
      <div className="absolute bottom-8 w-full overflow-x-auto z-10">
        <div className="flex space-x-6 w-max px-4 mx-auto">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="flex-shrink-0 w-80 flex flex-col items-center p-6 bg-blue-600 text-white border border-blue-700 rounded-lg hover:bg-blue-700 hover:shadow-xl"
            >
              <span className="text-3xl mb-2">{svc.icon}</span>
              <h3 className="text-lg font-semibold text-center">{svc.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}