import type { Metadata } from 'next';
import { AioSection } from '@/components/aio-section';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about AI Tools Korner and our mission.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight mb-6">
            About <span className="text-primary">AI Tools Korner</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your trusted guide in the world of Artificial Intelligence, helping you separate the signal from the noise.
          </p>
        </header>

        <div className="article-content space-y-8 mb-16">
          <p>
            Welcome to AI Tools Korner, your curated directory and knowledge hub
            for the best tools in the rapidly evolving world of artificial
            intelligence. Our mission is to demystify AI and make its powerful
            tools accessible to everyone—from seasoned professionals and
            developers to students, creators, and curious minds.
          </p>
          <p>
            In an age where new AI technologies emerge daily, finding the right
            tool for your specific needs can be overwhelming. That's where we
            come in. We meticulously research, categorize, and review a wide
            range of AI tools, providing you with a clear and organized platform
            to discover, compare, and learn.
          </p>
        </div>

        {/* New AIO Section integrated here */}
        <AioSection />

        <div className="article-content space-y-8 mt-16">
          <h2 className="text-3xl font-bold font-headline">Our Community-Driven Approach</h2>
          <p>
            Beyond being just a directory, AI Tools Korner is a community-driven
            platform. We provide insightful articles, in-depth comparisons, and
            practical guides to help you understand the technology behind the
            tools and how to leverage them effectively.
          </p>
          <p>
            We believe in the transformative power of AI and are passionate
            about fostering a community that is informed, empowered, and ready
            for the future. Thank you for joining us on this exciting journey.
          </p>
        </div>
      </div>
    </div>
  );
}
