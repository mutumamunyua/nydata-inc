import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Dr. Philip Munyua | AI Architect & ML Model Developer',
  description: 'Learn about Dr. Philip Munyua, a leading AI architect and developer of custom machine learning models in computer vision, NLP for legal tech, and enterprise AI strategy.'
};

export default function AboutPage() {
  return (
    // ★ MODIFIED: Added a text-white class here to make all default text on this page white.
    // We will override it to be dark on the white cards.
    <main className="container mx-auto px-4 py-12 space-y-12 font-serif text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col items-center text-center">
        <Image src="/profile.jpeg" alt="Dr. Philip Munyua, AI Architect" width={144} height={144} className="w-36 h-36 rounded-full mb-4 object-cover" />
        <h1 className="text-4xl font-bold">Philip Munyua, PhD</h1>
        {/* ★ MODIFIED: Removed text-black and added drop-shadow for better readability on the image. */}
        <p className="text-lg mt-2 max-w-3xl drop-shadow-md">
          An expert <strong>AI architect</strong> and hands-on <strong>author of machine learning models</strong> with over 15 years of experience. Dr. Munyua designs and builds end-to-end AI solutions, from scalable cloud infrastructure to the deployment of custom <strong>computer vision</strong> and <strong>Large Language Models (LLMs)</strong> for enterprise and government clients.
        </p>
        <Link href="https://www.linkedin.com/in/philmunyua/" className="mt-3 text-blue-400 hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
          Connect on LinkedIn
        </Link>
      </section>

      {/* ================= ARCHITECT & AUTHOR SECTIONS ================= */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        {/* Architect Section */}
        {/* ★ MODIFIED: Added 'text-gray-800' to make text dark on the white background. */}
        <div className="p-6 bg-white rounded-lg shadow text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Architect of Enterprise AI Systems</h2>
          <p className="mb-4">
            Dr. Munyua excels at building the complete foundation for production-grade AI, ensuring solutions are scalable, robust, and fully integrated with enterprise workflows.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li><strong>End-to-End MLOps:</strong> He implements full-cycle MLOps automation using tools like MLflow, Kubeflow, and Airflow to streamline model development and deployment.</li>
            <li><strong>Scalable Cloud Infrastructure:</strong> He architects cloud-native AI platforms on AWS, Azure, and GCP, leveraging services like SageMaker and Azure ML for cost-efficient scaling.</li>
            <li><strong>Data Pipeline Automation:</strong> He designs and automates complex data pipelines (ETL/ELT) using tools like Apache Airflow and DBT, essential for real-time analytics.</li>
            <li><strong>Full-Stack AI Development:</strong> His expertise covers the full stack, using Python, SQL, Scala, and FastAPI to build comprehensive AI-powered applications.</li>
          </ul>
        </div>
        {/* Author Section */}
        {/* ★ MODIFIED: Added 'text-gray-800' to make text dark on the white background. */}
        <div className="p-6 bg-white rounded-lg shadow text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Author of Custom AI Models</h2>
          <p className="mb-4">
            Beyond infrastructure, Dr. Munyua is a hands-on developer who builds and fine-tunes custom models to solve specific industry challenges.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li><strong>Computer Vision for Agriculture:</strong> He developed the <strong>CropHealthAI</strong> application, which uses custom computer vision models to diagnose crop diseases from images, providing vital decision support for farmers.</li>
            <li><strong>Large Language Models for Legal Tech:</strong> For the NJ Judiciary, he built AI-powered legal analytics tools, including case outcome prediction models and NLP pipelines to analyze legal documents.</li>
            <li><strong>AI for Fraud & Financial Risk:</strong> He has authored numerous real-time anomaly detection models for fraud detection and financial risk, reducing client portfolio risk by up to 35%.</li>
            <li><strong>Custom LLM Fine-Tuning:</strong> He fine-tunes foundational models like GPT and BERT for enterprise use cases such as intelligent chatbots and recommender systems.</li>
          </ul>
        </div>
      </section>

      {/* ================= LEADERSHIP & ADVISORS ================= */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">Leadership & Advisors</h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Philip's Leadership Role */}
          <div className="flex items-start gap-4">
            <Image src="/profile.jpeg" alt="Philip Munyua" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-semibold">Philip Munyua, PhD</h3>
              <p className="text-sm text-gray-300">Founder & COO</p>
              {/* ★ MODIFIED: Removed 'text-black' to inherit the parent's white text color. */}
              <p className="mt-2 text-sm">
                Dr. Munyua has led high-performing global AI teams across the USA, India, and Kenya and advised Fortune 500 companies on enterprise-wide AI strategy.
              </p>
            </div>
          </div>
          {/* Dr. Umesh's Advisor Role */}
          <div className="flex items-start gap-4">
            <Image src="/umesh.jpeg" alt="Dr. Umesh Hodeghatta Rao" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-semibold">Dr. Umesh R. Hodeghatta Rao</h3>
              <p className="text-sm text-gray-300">Advisor & Partner</p>
              {/* ★ MODIFIED: Removed 'text-black' to inherit the parent's white text color. */}
              <p className="mt-2 text-sm">
                With 25+ years in senior roles at AT&T Bell Labs, Cisco, and McAfee, Dr. Hodeghatta is a faculty member at Northeastern University specializing in AI, Big Data, and Cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= CONTACT CTA ================= */}
      <section className="text-center pt-8">
        <h3 className="text-xl font-semibold">Ready to Architect Your AI Future?</h3>
        {/* ★ MODIFIED: Changed text to a lighter gray for better contrast. */}
        <p className="mt-2 text-gray-300">
          Leverage our expertise in AI architecture and custom model development to drive your business forward.
        </p>
        <Link href="/contact" className="mt-4 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}