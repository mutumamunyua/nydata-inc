export default function TermsPage() {
  return (
    <main
      className="container mx-auto px-6 py-16 flex justify-center"
      style={{ fontFamily: "'EB Garamond', serif" }}
    >
      <div className="bg-white/95 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl w-full text-black">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="mb-4 italic">Effective Date: January 1, 2023</p>

        <p className="mb-4">
          These Terms of Use (“Terms”) govern your use of the NY Data Inc. website and
          services. By accessing or using our services, you agree to comply with these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Services</h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>You must be at least 18 years old to use our services.</li>
          <li>You agree not to misuse or attempt to disrupt our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
        <p className="mb-4">
          All content, trademarks, and data on this site are the property of NY Data Inc.
          or its licensors. You may not reproduce, distribute, or create derivative works
          without our prior written consent.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Disclaimer of Warranties</h2>
        <p className="mb-4">
          Our services are provided “as is” without warranties of any kind, express or
          implied. We do not guarantee uninterrupted or error-free service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by law, NY Data Inc. shall not be liable for any
          damages arising from your use of our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by and construed in accordance with the laws of Kenya.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to These Terms</h2>
        <p className="mb-4">
          We may revise these Terms from time to time. The latest version will always be
          posted on this page with the effective date updated.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
          <br />
          Email:{" "}
          <a href="mailto:info@nydatai.com" className="text-blue-700">
            info@nydatai.com
          </a>
        </p>
      </div>
    </main>
  );
}