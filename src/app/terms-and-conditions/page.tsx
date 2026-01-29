import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms and conditions for using our website.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
            Terms & Conditions
          </h1>
        </header>

        <div className="article-content space-y-6">
          <h2 className="text-2xl font-bold font-headline">Agreement to Terms</h2>
          <p>
            By using our website, you agree to be bound by these Terms &
            Conditions. If you do not agree to these terms, you may not use our
            website.
          </p>

          <h2 className="text-2xl font-bold font-headline">Intellectual Property Rights</h2>
          <p>
            The content on our website, including text, graphics, logos, and
            images, is the property of AI Tools Korner and is protected by
            copyright and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold font-headline">User Conduct</h2>
          <p>
            You agree not to use the website in any way that is unlawful, or
            that could harm the website or its users.
          </p>
          
          <h2 className="text-2xl font-bold font-headline">Disclaimer</h2>
          <p>
            The information on our website is provided for general informational
            purposes only. We make no warranties, expressed or implied, about the
            completeness, accuracy, reliability, suitability, or availability of
            the information contained on the website.
          </p>
          
          <h2 className="text-2xl font-bold font-headline">Changes to Terms</h2>
          <p>
            We reserve the right to change these terms at any time. Your
            continued use of the website after any such changes constitutes your
            acceptance of the new terms.
          </p>
        </div>
      </div>
    </div>
  );
}
