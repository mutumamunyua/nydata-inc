export default function PrivacyPage() {
  return (
    <main
      className="container mx-auto px-6 py-16 flex justify-center"
      style={{ fontFamily: "'EB Garamond', serif" }}
    >
      <div className="bg-white/95 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl w-full text-black">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 italic">Effective Date: January 1, 2023</p>

        <p className="mb-4">
          NY Data Inc. (“we,” “our,” or “us”) values your privacy. This Privacy Policy
          explains how we collect, use, and safeguard your information when you use our
          website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Personal information (name, email address) when you contact us.</li>
          <li>Usage data such as pages visited, browser type, and IP address.</li>
          <li>Any other information you voluntarily provide.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>To provide and maintain our services.</li>
          <li>To communicate with you and respond to inquiries.</li>
          <li>To improve our website and offerings.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell your personal data. We may share your information with trusted
          service providers who assist us in operating our website, or if required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We take reasonable steps to protect your information but cannot guarantee absolute
          security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You may request access to, correction of, or deletion of your personal data by
          contacting us at{" "}
          <a href="mailto:info@nydatai.com" className="text-blue-700">
            info@nydatai.com
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy from time to time. Updates will be posted on this page
          with a revised effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
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