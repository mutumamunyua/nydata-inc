// File: src/app/page.tsx

import Link from 'next/link'

export const metadata = {
  title: 'NY Data Inc – AI & Data Science Consulting',
  description: 'Tailor-made AI strategy, MLOps, LLM fine-tuning and custom model development.'
}

const services = [
  { title: 'AI Strategy & Roadmaps',    href: '/services',                   icon: '⚙️' },
  { title: 'MLOps & Engineering',        href: '/services',                   icon: '🚀' },
  { title: 'LLM Fine-Tuning',            href: '/services',                   icon: '🤖' },
  { title: 'Custom Model Development',   href: '/services/custom-models',     icon: '🛠️' },
  { title: 'Support & Training',         href: '/services/support-training',  icon: '🎓' }
]

export default function HomePage() {
  return (
    <main className="min-h-screen text-gray-900">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <h1 className="text-5xl font-extrabold mb-4">Your AI & Data Science Partners</h1>
        <p className="max-w-2xl mb-8">
          We help enterprises and government innovate with AI—strategy to production,
          fine-tuned LLMs to MLOps pipelines.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/services"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-md font-medium"
          >
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Services</h2>
        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory py-4">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="snap-start flex-shrink-0 w-64 flex flex-col items-center p-6 border rounded-lg hover:shadow-lg bg-white"
            >
              <span className="text-4xl mb-4">{svc.icon}</span>
              <h3 className="text-xl font-semibold text-center">{svc.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}