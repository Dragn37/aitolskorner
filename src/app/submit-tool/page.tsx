import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit a Tool',
  description: 'Get your AI tool featured on AI Tools Korner.',
};

export default function SubmitToolPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
            Feature Your AI Tool
          </h1>
          <p className="text-lg text-muted-foreground">
            Partner with us to showcase your innovation to a dedicated audience.
          </p>
        </header>

        <div className="space-y-6 text-center">
          <p className="text-xl text-foreground/90">
            AI Tools Korner is a fast-growing hub for AI enthusiasts, developers, and early adopters. Featuring your tool on our platform is a great way to gain visibility and connect with your target users.
          </p>
          <p className="text-muted-foreground">
            We are looking for innovative and high-quality AI tools to showcase to our audience. If you have a tool you believe would be a great fit for our directory, we'd love to hear from you.
          </p>
          <div className="bg-card border rounded-xl p-8 my-8">
            <h2 className="text-2xl font-bold font-headline mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              To submit your tool for review or to discuss partnership opportunities, please reach out to our team.
            </p>
            <a
              href="mailto:aitoolskorner@proton.me"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              aitoolskorner@proton.me
            </a>
          </div>
           <p className="text-muted-foreground">
            Please include the name of your tool, a link to your website, and a brief description. We review all submissions carefully and will get back to you if your tool is a good fit for our platform.
          </p>
        </div>
      </div>
    </div>
  );
}
