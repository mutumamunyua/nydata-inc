// src/components/HomePageClient.tsx

"use client";

import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import AnimatedText from '@/components/AnimatedText';
import { motion, Variants } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

/* =========================================
   DATA
   ========================================= */

// [UNCHANGED] services list used in hero marquee
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
];

// [CHANGE] Expanded projects/apps to match the cards we discussed
const projectsApps = [
  {
    title: 'CropHealthAI',
    status: 'Live',
    emoji: '🌿',
    desc: 'Mobile crop disease diagnostics with treatment guidance.',
    bullets: ['50+ diseases supported', '30K farmers onboarded', '~20% yield uplift in pilot regions'],
    tags: ['Mobile CV','Edge/on-device','Serving API'],
    link: 'https://crophealthai-335031153474.us-central1.run.app',
    linkText: 'Live Demo →'
  },
  {
    title: 'UbuntuAnnotation (ACGP)',
    status: 'Live',
    emoji: '🎧',
    desc: 'High-throughput, multilingual audio/video annotation.',
    bullets: ['240 clips/hour throughput', '12 African languages', '1,000+ hours annotated'],
    tags: ['Web app','Media slicing','QC workflows'],
    link: 'https://ubuntuannotation.com',
    linkText: 'Visit Platform →'
  },
  {
    title: 'Fraud Analytics @ Bank',
    status: 'Completed',
    emoji: '💳',
    desc: 'Streaming anomaly detection with triage and explainers.',
    bullets: ['50% fewer false positives', '≈ $2M annual savings', 'Analyst feedback loop & audit trail'],
    tags: ['Stream processing','Feature store','Explainable ML']
  },
  {
    title: 'Legal NLP (Judiciary)',
    status: 'Completed',
    emoji: '⚖️',
    desc: 'Case outcome forecasting + retrieval with citations.',
    bullets: ['Backlog reduction via intelligent triage', 'Precedent-aware summaries', 'Audit logs & redaction pipeline'],
    tags: ['Legal RAG','Evals','Auditability']
  },
  {
    title: 'Demand Forecasting (Supply Chain)',
    status: 'Completed',
    emoji: '📦',
    desc: 'Forecasts and safety stock recommendations.',
    bullets: ['+25% planning efficiency', 'SKU-level signals', 'What-if scenarios'],
    tags: ['Time series','Feature pipelines','Dashboards']
  },
  {
    title: 'NLP Chatbots (CRM)',
    status: 'Completed',
    emoji: '💬',
    desc: 'Multilingual customer support agents with grounding.',
    bullets: ['+40% support efficiency', 'Human-in-the-loop escalation', 'Knowledge-base grounding'],
    tags: ['RAG','Multilingual NLU','Analytics']
  }
];

/* =========================================
   COMPONENT
   ========================================= */

export default function HomePageClient() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  const marqueeVariants: Variants = {
    animate: {
      x: [0, -width],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  };

  return (
    <main className="text-gray-900">
      {/* ========================= HERO (UNCHANGED) ========================= */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl mb-6">
            Your <AnimatedText>AI & Data Science</AnimatedText> Partners
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl italic text-gray-200 leading-relaxed drop-shadow-md mb-10">
            End-to-end <span className="font-semibold text-white">AI services</span>, Strategy,
            <span className="font-semibold text-white"> MLOps</span>,
            <span className="font-semibold text-white"> LLMs</span> and custom models in one seamless experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#services" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg text-lg">Services</a>
            <a href="#contact" className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black font-medium rounded-lg shadow-lg text-lg">Contact</a>
          </div>
        </div>

        {/* Auto-scrolling Services Marquee */}
        <div className="absolute bottom-4 w-full z-10 overflow-x-hidden py-4">
          <motion.div className="flex whitespace-nowrap" variants={marqueeVariants} animate="animate">
            <div className="flex" ref={marqueeRef}>
              {/* First Copy */}
              <div className="flex">
                {services.map((svc) => (
                  <span key={svc.title} className="inline-block mx-3 w-80 align-top">
                    <Link href={svc.href} className="flex flex-col items-center p-4 bg-blue-600 text-white border border-blue-700 rounded-lg hover:bg-blue-700">
                      <span className="text-4xl mb-2">{svc.icon}</span>
                      <h3 className="text-lg font-semibold text-center">{svc.title}</h3>
                    </Link>
                  </span>
                ))}
              </div>
              {/* Second Copy */}
              <div className="flex" aria-hidden="true">
                {services.map((svc) => (
                  <span key={`${svc.title}-duplicate`} className="inline-block mx-3 w-80 align-top">
                    <Link href={svc.href} className="flex flex-col items-center p-4 bg-blue-600 text-white border border-blue-700 rounded-lg hover:bg-blue-700">
                      <span className="text-4xl mb-2">{svc.icon}</span>
                      <h3 className="text-lg font-semibold text-center">{svc.title}</h3>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================= SERVICES ========================= */}
      <section
        id="services"
        className="container mx-auto px-4 py-16 bg-black/50 scroll-mt-28"
        style={{ fontFamily: "'EB Garamond', serif" }}
      >
        {/* CHANGED: make title a bit clearer for SEO and keep white for contrast */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Services
        </h2>

        {/* [UNCHANGED STRUCTURE] Scannable service cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* AI Strategy & Roadmaps */}
          <article className="p-6 bg-white/95 border rounded-lg shadow hover:shadow-lg">
            <div className="text-3xl mb-2">🧭</div>
            <h3 className="text-2xl font-semibold mb-2">AI Strategy & Roadmaps</h3>
            {/* CHANGED: tighter, benefits-first copy + leading for readability */}
            <p className="mb-3 leading-relaxed">
              Turn AI from buzz to business value. We identify high-ROI use cases,
              deliver fast MVPs, and define governance & cost models that scale.
            </p>
            {/* CHANGED: bullets phrased as outcomes/decisions */}
            <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-4">
              <li>Opportunity mapping tied to KPIs & owners</li>
              <li>Decision tree: RAG vs. fine-tune vs. buy vs. wait</li>
              <li>90-day MVP → production plan with milestones</li>
            </ul>
            {/* UNCHANGED: anchors + CTA */}
            <div className="flex items-center gap-4">
              <a href="#svc-ai-strategy" className="text-blue-700 hover:underline">Read more ↓</a>
              <a href="#contact" className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book consult</a>
            </div>
          </article>

          {/* MLOps & Platform Engineering */}
          <article className="p-6 bg-white/95 border rounded-lg shadow hover:shadow-lg">
            <div className="text-3xl mb-2">🧰</div>
            <h3 className="text-2xl font-semibold mb-2">MLOps & Platform Engineering</h3>
            {/* CHANGED: emphasize reliability + rollback */}
            <p className="mb-3 leading-relaxed">
              From notebooks to production: CI/CD for models & prompts, observability,
              rollbacks and spend guardrails—by default.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-4">
              <li>Feature & vector pipelines with data quality checks</li>
              <li>Autoscaled inference (CPU/GPU), caching & A/B deploys</li>
              <li>Model/Prompt registry, approvals & audit trail</li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="#svc-mlops" className="text-blue-700 hover:underline">Read more ↓</a>
              <a href="#contact" className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Talk to us</a>
            </div>
          </article>

          {/* LLM Fine-Tuning & Hosting */}
          <article className="p-6 bg-white/95 border rounded-lg shadow hover:shadow-lg">
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="text-2xl font-semibold mb-2">LLM Fine-Tuning & Hosting</h3>
            {/* CHANGED: clear stance (RAG first) + measurable SLOs */}
            <p className="mb-3 leading-relaxed">
              Domain-tuned LLMs with measurable quality, latency and cost. RAG first;
              fine-tune where your data truly justifies it.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-4">
              <li>Curated corpora, chunking, embeddings & retrieval evals</li>
              <li>LoRA/SFT pipelines, safety guardrails & red-team tests</li>
              <li>vLLM/TGI serving, autoscaling & budget caps</li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="#svc-llm" className="text-blue-700 hover:underline">Read more ↓</a>
              <a href="#contact" className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get proposal</a>
            </div>
          </article>

          {/* Custom Model Development */}
          <article className="p-6 bg-white/95 border rounded-lg shadow hover:shadow-lg">
            <div className="text-3xl mb-2">🛠️</div>
            <h3 className="text-2xl font-semibold mb-2">Custom Model Development</h3>
            {/* CHANGED: keep domains, stress explainability & ops */}
            <p className="mb-3 leading-relaxed">
              Built for your domain—agri CV, legal retrieval, fraud analytics.
              Production-grade APIs with explainability and ops.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-4">
              <li>CV pipelines & mobile capture (agriculture)</li>
              <li>Legal RAG with citations, redaction & auditability</li>
              <li>Streaming features, graph signals & analyst feedback</li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="#svc-custom" className="text-blue-700 hover:underline">Read more ↓</a>
              <a href="#contact" className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Discuss a build</a>
            </div>
          </article>

          {/* Support & Training */}
          <article className="p-6 bg-white/95 border rounded-lg shadow hover:shadow-lg">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="text-2xl font-semibold mb-2">Support & Training</h3>
            {/* CHANGED: “own the stack” message kept, made crisper */}
            <p className="mb-3 leading-relaxed">
              Enable your team to own the stack: hands-on workshops, playbooks and SLAs for production.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-4">
              <li>Shadow-to-ownership delivery</li>
              <li>Reusable labs & prompts/RAG patterns</li>
              <li>Runbooks, dashboards & checkpoints</li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="#svc-support" className="text-blue-700 hover:underline">Read more ↓</a>
              <a href="#contact" className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Schedule workshop</a>
            </div>
          </article>
        </div>

        {/* ====== SERVICES; Deep-dive anchors ========== */}
        <div className="mt-16 space-y-16 text-gray-900">
          {/* ================= AI STRATEGY – Deep dive (FONT/COLOR TWEAKS ONLY) ================= */}
          <section
            id="svc-ai-strategy"
            className="p-6 md:p-8 bg-white/95 border rounded-lg shadow scroll-mt-28"
            style={{ fontFamily: "'EB Garamond', serif" }}  // ★ ADDED: Garamond for this block
          >
            {/* ★ CHANGED: larger, darker heading */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              AI Strategy &amp; Roadmaps
            </h3>

            {/* ★ CHANGED: bigger, italic explainer with improved contrast */}
            <p className="text-lg md:text-xl italic text-slate-700 mb-4">
              Outcome mapping → data checks → MVP(s) with KPIs → deploy → measure → iterate.
              Governance &amp; cost controls baked in.
            </p>

            {/* ★ CHANGED: bigger bullets + darker text */}
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-slate-800 mb-6">
              <li>Discovery &amp; value cases (3–5 prioritized)</li>
              <li>RAG / fine-tune / buy decision tree</li>
              <li>Pilot-to-production plan &amp; ownership model</li>
            </ul>

            {/* Diagram */}
            <figure className="mt-2">
              <img
                src="/diagrams/strategy-roadmap.svg"
                alt="AI strategy roadmap: discover → prioritize → MVP → scale → govern"
                loading="lazy"
                className="mx-auto w-full max-w-[1200px] rounded-xl border border-slate-200 shadow-xl bg-white"
              />
              {/* ★ CHANGED: make caption bolder/larger; SVG no longer has duplicate text */}
              <figcaption className="mt-3 text-center text-base md:text-lg font-semibold text-slate-700">
                Strategy flow: outcome mapping → fast MVPs → scale with governance.
              </figcaption>
            </figure>
          </section>

          <section id="svc-mlops" className="p-6 bg-white/95 border rounded-lg shadow scroll-mt-28">
            <h3 className="text-2xl font-bold mb-2">MLOps & Platform Engineering</h3>
            <p className="mb-3 leading-relaxed">
              Data → Train → Evals → Registry → Deploy → Monitor → Retrain.
              Observability and rollback by default.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>CI/CD for models & prompts; approvals & audit</li>
              <li>Autoscaled inference with cost guardrails</li>
              <li>Dashboards for latency, cost & quality</li>
            </ul>
            {/* REPLACE the single <img … /> with this block */}
            {/* CHANGED: added overflow-x-auto wrapper to make responsive */}
            <div className="mt-6 overflow-x-auto">
              <figure
                className="
                  mx-auto
                  w-[min(95vw,1400px)]
                  min-w-[600px] /* ensures diagram doesn't squish too much on very small screens */
                  rounded-2xl border border-white/20 shadow-xl
                  bg-white/70 backdrop-blur-sm
                  p-6 md:p-10
                "
              >
                <img
                  src="/diagrams/mlops-lifecycle.svg"
                  alt="MLOps lifecycle"
                  loading="lazy"
                  className="w-full h-auto rounded-lg"
                />
                <figcaption className="mt-3 text-center text-sm text-gray-700 italic">
                  Closed loop: CICD, registry, blue/green deploys, observability.
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="svc-llm" className="p-6 bg-white/95 border rounded-lg shadow scroll-mt-28">
            <h3 className="text-2xl font-bold mb-2">LLM Fine-Tuning & Hosting</h3>
            <p className="mb-3 leading-relaxed">
              Curate → embed → retrieve → generate → post-check (safety/evals) → observe.
              Latency & cost SLOs included.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>RAG first; fine-tune when data justifies</li>
              <li>Safety guardrails & eval suites</li>
              <li>vLLM/TGI serving, caching & autoscale</li>
            </ul>
            {/* REPLACE the single <img … /> with this block */}
            <figure className="mt-4">
                <img
                  // CHANGED: swap to the new loop diagram
                  src="/diagrams/llm-loop.svg"
                  // CHANGED: clearer alt text
                  alt="LLM loop: curate → embed → retrieve → generate → post-check → observe"
                  loading="lazy"
                  // CHANGED: make it a bit wider on large screens
                  className="mx-auto w-full max-w-5xl rounded-lg border border-white/20 shadow-lg bg-white/70 backdrop-blur-sm"
                />
                {/* OPTIONAL: update caption to match the new diagram */}
                <figcaption className="mt-2 text-center text-sm text-gray-600">
                  End-to-end loop with RAG-first, safety checks, and observable SLOs.
                </figcaption>
              </figure>
          </section>

          {/* ================= CUSTOM MODEL – STACKED DIAGRAMS (ONLY THIS SECTION CHANGED) ================ */}
          <section id="svc-custom" className="p-6 bg-white/95 border rounded-lg shadow scroll-mt-28">
            <h3 className="text-2xl font-bold mb-2">Custom Model Development</h3>
            <p className="mb-3 leading-relaxed">
              Agriculture, legal and fraud solutions with explainability and production-grade APIs.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>CV pipelines &amp; mobile capture (agri)</li>
              <li>Legal RAG with citations &amp; auditability</li>
              <li>Streaming features &amp; analyst triage (fraud)</li>
            </ul>

            {/* CHANGED: each figure wrapped in overflow-x-auto for mobile */}
            <div className="space-y-6">
              {/* Agri CV */}
              <div className="overflow-x-auto">
                <figure className="mx-auto w-[min(95vw,1200px)] min-w-[600px] rounded-xl border border-white/20 shadow-lg bg-white/70 backdrop-blur-sm p-4">
                  <img
                    src="/diagrams/crop-cv-pipeline.svg"
                    alt="Agri CV pipeline: capture → preprocess → infer (edge) → diagnose → guidance"
                    loading="lazy"
                    className="w-full h-auto rounded-lg"
                  />
                  <figcaption className="mt-2 text-center text-sm text-gray-600">
                    Agri CV capture → model → guidance
                  </figcaption>
                </figure>
              </div>

              {/* Legal RAG */}
              <div className="overflow-x-auto">
                <figure className="mx-auto w-[min(95vw,1200px)] min-w-[600px] rounded-xl border border-white/20 shadow-lg bg-white/70 backdrop-blur-sm p-4">
                  <img
                    src="/diagrams/legal-rag.svg"
                    alt="Legal RAG: ingest → chunk → embed → index → retrieve → answer with citations"
                    loading="lazy"
                    className="w-full h-auto rounded-lg"
                  />
                  <figcaption className="mt-2 text-center text-sm text-gray-600">
                    Legal retrieval with citations &amp; review
                  </figcaption>
                </figure>
              </div>

              {/* Fraud streaming */}
              <div className="overflow-x-auto">
                <figure className="mx-auto w-[min(95vw,1200px)] min-w-[600px] rounded-xl border border-white/20 shadow-lg bg-white/70 backdrop-blur-sm p-4">
                  <img
                    src="/diagrams/fraud-streaming.svg"
                    alt="Fraud streaming: stream ingest → features → scoring → alerts → analyst loop"
                    loading="lazy"
                    className="w-full h-auto rounded-lg"
                  />
                  <figcaption className="mt-2 text-center text-sm text-gray-600">
                    Streaming features → scoring → analyst loop
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section id="svc-support" className="p-6 bg-white/95 border rounded-lg shadow scroll-mt-28">
            <h3 className="text-2xl font-bold mb-2">Support & Training</h3>
            <p className="mb-3 leading-relaxed">
              Enablement sprints, reusable labs and SLAs so your team can own the stack.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Shadow-to-ownership delivery</li>
              <li>Playbooks: prompts, RAG, evals, rollback</li>
              <li>Runbooks, dashboards, checkpoints</li>
            </ul>
          </section>
        </div>
      </section>

      {/* ========================= PROJECTS & APPS ========================= */}
      {/* [CHANGE] Cards grid with status chips, bullets, and tags (2 per row on md+) */}
      <section id="projects-apps" className="container mx-auto px-4 py-16 scroll-mt-28" style={{ fontFamily: "'EB Garamond', serif" }}>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects & Apps</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projectsApps.map(p => (
            <article key={p.title} className="p-6 bg-white/95 border rounded-lg shadow hover:shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold">
                  {p.title}{' '}
                  <span
                    className={`text-sm align-middle ml-2 px-2 py-0.5 rounded ${
                      p.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {p.status}
                  </span>
                </h3>
                <span className="text-2xl">{p.emoji}</span>
              </div>
              <p className="mb-3">{p.desc}</p>
              {p.bullets && (
                <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-4">
                  {p.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              )}
              {p.tags && (
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded bg-gray-200 text-gray-800">{t}</span>
                  ))}
                </div>
              )}
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  {p.linkText || 'Learn more →'}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ========================= CONTACT (UNCHANGED WRAPPER) ========================= */}
      <section id="contact" className="container mx-auto px-4 py-16 scroll-mt-28">
        <h2 className="text-4xl font-bold text-center mb-8 text-white" style={{ fontFamily: "'EB Garamond', serif" }}>
          Contact Us
        </h2>
        <div className="bg-gray-100 bg-opacity-90 p-8 rounded-lg max-w-xl mx-auto" style={{ fontFamily: "'EB Garamond', serif" }}>
          <ContactSection />
        </div>
      </section>
    </main>
  );
}