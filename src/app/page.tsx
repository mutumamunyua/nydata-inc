// File: src/app/page.tsx

import Link from 'next/link'
import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'NY Data Inc – AI & Data Science Consulting',
  description: 'Tailor-made AI strategy, MLOps, LLM fine-tuning and custom models—all on one page.'
}

const services = [
  {
    title: 'AI Strategy & Roadmaps',
    href: '#services',
    icon: '⚙️',
    desc: 'Craft a clear, actionable plan—rapid pilots, KPI-aligned blueprints and scalable AI roadmaps.'
  },
  {
    title: 'MLOps & Platform Engineering',
    href: '#services',
    icon: '🚀',
    desc: 'Automate your ML lifecycle with monitoring, governance, CI/CD and cost-optimized deployments.'
  },
  {
    title: 'LLM Fine-Tuning & Hosting',
    href: '#services',
    icon: '🤖',
    desc: 'Domain-tuned LLMs on your data, vector-DB RAG and SLA-backed hosting—even offline & low bandwidth.'
  },
  {
    title: 'Custom Model Development',
    href: '#services',
    icon: '🛠️',
    desc: 'Crop disease AI, legal-search engines or fraud-analytics pipelines—production APIs with explainability.'
  },
  {
    title: 'Support & Training',
    href: '#services',
    icon: '🎓',
    desc: 'Hands-on workshops, train-the-trainer programs and SLA support to upskill your teams.'
  }
]

const caseStudies = [
  {
    title: 'CropHealthAI',
    desc: 'Camera-to-insight pipeline diagnosing 50+ crop diseases; 30K farmers onboarded, 20% yield uplift.',
    link: 'https://crophealthai-335031153474.us-central1.run.app',
    linkText: 'Live Demo →'
  },
  {
    title: 'UbuntuAnnotation (ACGP)',
    desc: '240 clips/hr annotation across 12 African languages—1,000+ hrs annotated for Whisper & Wav2Vec2 tuning.',
    link: 'https://ubuntuannotation.com',
    linkText: 'Visit Platform →'
  },
  {
    title: 'Fraud Detection @ Coop Bank',
    desc: 'Streaming ETL + LLM analytics flagged anomalies in real time—50% fewer false positives, $2 M saved.'
  }
]

export default function HomePage() {
  return (
    <main className="text-gray-900">

      {/* Hero */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center text-center"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Your AI & Data Science Partners
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-sm mb-8">
            End-to-end AI services—strategy, MLOps, LLMs and custom models in one seamless experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#services"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg"
            >
              Services
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black font-medium rounded-lg shadow-lg"
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
                className="flex-shrink-0 w-80 flex flex-col items-center p-6 bg-white/90 border rounded-lg hover:shadow-lg"
              >
                <span className="text-3xl mb-2 text-black">{svc.icon}</span>
                <h3 className="text-lg font-semibold text-black text-center">
                  {svc.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="p-6 bg-white/90 border rounded-lg shadow hover:shadow-lg"
            >
              <div className="text-3xl mb-4">{svc.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{svc.title}</h3>
              <p className="mb-4 text-gray-800">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
        <div className="space-y-12">
          {caseStudies.map((c) => (
            <section
              key={c.title}
              className="p-6 bg-white/90 border rounded-lg shadow hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
              <p className="mb-4 text-gray-800">{c.desc}</p>
              {c.link && (
                <a
                  href={c.link}
                  className="font-medium text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.linkText}
                </a>
              )}
            </section>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <ContactSection />
      </section>
    </main>
  )
}