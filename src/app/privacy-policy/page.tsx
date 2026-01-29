import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our commitment to your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
            Privacy Policy
          </h1>
        </header>

        <div className="article-content space-y-6">
          <h2 className="text-2xl font-bold font-headline">Introduction</h2>
          <p>
            AI Tools Korner ("we," "our," or "us") is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold font-headline">Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, email address, that you
              voluntarily give to us when you register with the Site or when you
              choose to participate in various activities related to the Site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Site, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have viewed directly before and after
              accessing the Site.
            </li>
          </ul>

          <h2 className="text-2xl font-bold font-headline">Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Improve our website and services.</li>
          </ul>

          <h2 className="text-2xl font-bold font-headline">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at: aitoolskorner@proton.me
          </p>
        </div>
      </div>
    </div>
  );
}
