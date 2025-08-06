import Link from 'next/link'

export const metadata = {
  title: 'Case Studies – NY Data Inc',
  description: 'Real-world impact from CropHealthAI, UbuntuAnnotation and Fraud Detection at Coop Bank.'
}

export default function CaseStudiesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Case Studies</h1>
      <div className="space-y-12">

        {/* CropHealthAI */}
        <section className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">CropHealthAI</h2>
          <p className="mb-4">
            An end-to-end camera-to-insight pipeline diagnosing 50+ crop diseases and delivering treatment plans.
            <br/>
            <strong>Impact:</strong> 30 000 farmers onboarded, 20% average yield uplift in pilot regions.
          </p>
          <Link
            href="https://crophealthai-335031153474.us-central1.run.app"
            className="font-medium text-blue-600 hover:underline"
          >
            View Live Demo →
          </Link>
        </section>

        {/* UbuntuAnnotation (ACGP) */}
        <section className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">UbuntuAnnotation (ACGP)</h2>
          <p className="mb-4">
            A cloud-native platform slicing and annotating YouTube clips at 240 clips/hour across 12 African languages.
            <br/>
            <strong>Scale:</strong> 1 000+ hours annotated, feeding Whisper & Wav2Vec2 fine-tuning.
          </p>
          <Link
            href="https://ubuntuannotation.com"
            className="font-medium text-blue-600 hover:underline"
          >
            Visit Platform →
          </Link>
        </section>

        {/* Fraud Detection @ Coop Bank */}
        <section className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Fraud Detection @ Coop Bank</h2>
          <p className="mb-4">
            Built a streaming ETL + LLM-driven analytics engine to flag anomalous transaction patterns in real time.
            <br/>
            <strong>Outcome:</strong> 50% reduction in false positives and \$2 M annual savings in chargebacks.
          </p>
          <p className="italic text-sm text-gray-600">
            (Full write-up available on request)
          </p>
        </section>

      </div>
    </main>
  )
}
