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
          
          <h2 className="text-2xl font-bold font-headline">Affiliate Disclosure</h2>
          <p>
            At AI Tools Korner, our goal is to provide you with the best, most
            up-to-date information about artificial intelligence tools and
            platforms. To support our work and keep our content free, we
            participate in affiliate marketing programs.
          </p>
          <p>
            This means that when you click on certain links on our site and make
            a purchase or sign up for a service, we may earn a small commission
            at no extra cost to you. These commissions help us cover the costs
            of running this website, including research, writing, and hosting.
          </p>
          <p>
            Our editorial content is not influenced by affiliate partnerships.
            We are committed to providing honest and unbiased reviews and
            recommendations. We only promote products and services that we
            believe will provide value to our readers. Your trust is our top
            priority.
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
