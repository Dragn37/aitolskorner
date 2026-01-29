import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Information about our affiliate partnerships.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
            Affiliate Disclosure
          </h1>
        </header>

        <div className="article-content space-y-6">
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
          <p>
            If you have any questions regarding our affiliate relationships,
            please do not hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
