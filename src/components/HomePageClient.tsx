// src/components/HomePageClient.tsx

"use client";

import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import AnimatedText from '@/components/AnimatedText';
import { motion, Variants } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

// Data for the page sections
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
];

// The main client component
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
      {/* Hero */}
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

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16 bg-black/50">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-garamond">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="p-6 bg-white/90 border rounded-lg shadow hover:shadow-lg font-garamond">
              <div className="flex justify-center mb-4"><span className="text-5xl">{svc.icon}</span></div>
              <h3 className="text-2xl font-semibold mb-2">{svc.title}</h3>
              <p className="mb-4 text-gray-800">{svc.desc}</p>
              <Link href={`/services/${svc.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="text-blue-600 hover:underline font-medium">Read more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Projects & Apps Section */}
      <section id="projects-apps" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-garamond">Projects & Apps</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <div key={c.title} className="p-6 bg-white/90 border rounded-lg shadow hover:shadow-lg font-garamond">
              <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
              <p className="mb-4 text-gray-800">{c.desc}</p>
              {c.link && (
                <a href={c.link} className="font-medium text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{c.linkText}</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-white font-garamond">Contact Us</h2>
        <div className="bg-gray-100 bg-opacity-90 p-8 rounded-lg max-w-xl mx-auto font-garamond">
          <ContactSection />
        </div>
      </section>
    </main>
  );
}