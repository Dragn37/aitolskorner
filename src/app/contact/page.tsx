import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the AI Tools Korner team.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you.
          </p>
        </header>

        <div className="article-content space-y-6">
          <p>
            If you have any questions, suggestions, or would like to partner
            with us, please feel free to reach out. You can contact us via email
            at:
          </p>
          <p className="text-center">
            <a
              href="mailto:contact@aitoolskorner.com"
              className="text-primary text-xl font-bold"
            >
              contact@aitoolskorner.com
            </a>
          </p>
          <p>
            We do our best to respond to all inquiries within 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
