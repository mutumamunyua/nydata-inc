// File: src/app/services/page.tsx

import Link from 'next/link'

export const metadata = {
  title: 'Services – NY Data Inc',
  description: 'Explore our AI Strategy, MLOps, LLM fine-tuning, custom models and training services.'
}

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {/* AI Strategy & Roadmaps */}
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">AI Strategy & Roadmaps</h2>
          <p className="mb-4">
            Craft a clear, actionable plan to unlock AI’s full potential—now. Rapid maturity assessments,
            KPI-aligned pilots and a blueprint for scaling from PoC to production.
          </p>
          <Link
            href="/services/ai-strategy"
            className="font-medium text-blue-600 hover:underline"
          >
            Learn More →
          </Link>
        </div>

        {/* MLOps & Platform Engineering */}
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">MLOps & Platform Engineering</h2>
          <p className="mb-4">
            Turn experiments into rock-solid, automated ML pipelines with built-in monitoring,
            governance and cost-optimized cloud or hybrid deployments.
          </p>
          <Link
            href="/services/mlops"
            className="font-medium text-blue-600 hover:underline"
          >
            Learn More →
          </Link>
        </div>

        {/* LLM Fine-Tuning & Hosting */}
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">LLM Fine-Tuning & Hosting</h2>
          <p className="mb-4">
            Fine-tune domain-specific language models on your data and host them with
            SLAs, vector-DB integration and low-bandwidth/ offline fallback modes.
          </p>
          <Link
            href="/services/llm-hosting"
            className="font-medium text-blue-600 hover:underline"
          >
            Learn More →
          </Link>
        </div>

        {/* Custom Model Development */}
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Custom Model Development</h2>
          <p className="mb-4">
            Build AI solutions exactly tailored to your domain—crop diagnostics,
            legal search engines or fraud-analytics pipelines with explainability.
          </p>
          <Link
            href="/services/custom-models"
            className="font-medium text-blue-600 hover:underline"
          >
            Learn More →
          </Link>
        </div>

        {/* Support & Training */}
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Support & Training</h2>
          <p className="mb-4">
            Empower your team with hands-on workshops, train-the-trainer programs
            and SLA-backed support for AI adoption and MLOps best practices.
          </p>
          <Link
            href="/services/support-training"
            className="font-medium text-blue-600 hover:underline"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </main>
  )
}
