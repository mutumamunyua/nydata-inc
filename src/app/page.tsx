// src/app/page.tsx

import HomePageClient from '@/components/HomePageClient';

export const metadata = {
  title: 'NY Data Inc – AI & Data Science Consulting',
  description: 'Tailor-made AI strategy, MLOps, LLM fine-tuning and custom models—all on one page.',
};

export default function Page() {
  return <HomePageClient />;
}