// This is the complete and corrected content for src/app/contact/page.tsx

// STEP 1: Import our single, reusable form component.
import ContactSection from '@/components/ContactSection';

// STEP 2: Add metadata for better SEO.
export const metadata = {
  title: 'Contact Us – NY Data Inc',
  description: 'Get in touch with the NY Data Inc team to discuss your AI and data science needs.',
};

// STEP 3: Create the page layout.
export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-white font-serif">
          Contact Us
        </h1>
        {/* STEP 4: This is the container that provides the consistent background and styling. */}
        <div className="bg-gray-100 bg-opacity-90 p-8 rounded-lg font-serif">
          {/* We now display our single, reusable form component here. */}
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
