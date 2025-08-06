import Link from 'next/link'

export const metadata = {
  title: 'About – NY Data Inc',
  description: 'Meet Philip Munyua, PhD and learn how NY Data Inc drives AI success.'
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero */}
      <section className="flex flex-col items-center text-center">
        {/* Replace '/profile.jpeg' with your actual image in /public */}
        <img src="/profile.jpeg" alt="Dr Philip Munyua" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-4xl font-bold">Philip Munyua, PhD</h1>
        <p className="text-lg text-gray-600">CEO & Lead Data Scientist at NY Data Inc</p>
        <Link
          href="https://www.linkedin.com/in/philmunyua/"
          className="mt-2 text-blue-600 hover:underline"
        >
          LinkedIn Profile
        </Link>
      </section>

      {/* Leadership & Strategy */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Leadership & Strategy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Designed ML platforms for Fortune 500s (Capital One, Workday), cutting fraud losses 40%.</li>
          <li>Advised Kenya’s National Intelligence Service on real-time threat monitoring and AI governance.</li>
          <li>Built cross-functional teams for data engineering, MLOps & UX in both US and Kenyan markets.</li>
        </ul>
      </section>

      {/* AI Product Portfolio */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">AI Product Portfolio</h2>
        <ul className="space-y-4">
          <li>
            <strong>CropHealthAI</strong>: 50+ disease diagnostics & treatment, 30 K farmers, 20% yield uplift.{' '}
            <Link
              href="https://crophealthai-335031153474.us-central1.run.app"
              className="text-blue-600 hover:underline"
            >
              Demo →
            </Link>
          </li>
          <li>
            <strong>UbuntuAnnotation (ACGP)</strong>: 1 000+ hours annotated at 240 clips/hr across 12 languages.{' '}
            <Link
              href="https://ubuntuannotation.com"
              className="text-blue-600 hover:underline"
            >
              Platform →
            </Link>
          </li>
        </ul>
      </section>

      {/* Sector Deep Dives */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Sector Deep Dives</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Sector</th>
                <th className="px-4 py-2 text-left">Use Case</th>
                <th className="px-4 py-2 text-left">Clients & Partners</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Agriculture</td>
                <td className="px-4 py-2">On-device crop disease AI + treatment guidance</td>
                <td className="px-4 py-2">Smallholder farmers, agrovets, input firms</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Finance</td>
                <td className="px-4 py-2">Real-time fraud analytics for M-PESA, Equity & Coop Bank</td>
                <td className="px-4 py-2">Equity Bank, Coop Bank, M-PESA</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Legal</td>
                <td className="px-4 py-2">LLM-powered conveyance, contracts, criminal-law retrieval</td>
                <td className="px-4 py-2">Kenyan Bar Association, private law firms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Signature Case Study */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Signature Case Study</h2>
        <p className="mb-4">
          <strong>Fraud Detection @ Coop Bank</strong>  
          Streaming ETL + LLM analytics flagged anomalies in real time, cutting false positives 50% and saving $2 M annually.
        </p>
      </section>
    </main>
  )
}
