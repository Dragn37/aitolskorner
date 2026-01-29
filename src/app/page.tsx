import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

import { getTrendingTools, getLatestArticles } from '@/lib/data';
import { Button } from '@/components/ui/button';
import ToolCard from '@/components/tool-card';
import ArticleCard from '@/components/article-card';

export const metadata: Metadata = {
  title: 'Best AI Tools 2026 | AI Tools Korner - Expert Reviews & Comparisons',
  description:
    'Discover and compare the best AI tools for writing, coding, design, and productivity. Expert reviews of ChatGPT, Claude, Midjourney, and 100+ AI tools. Updated daily.',
  keywords: [
    'AI tools',
    'artificial intelligence',
    'ChatGPT',
    'Claude',
    'Midjourney',
    'AI writing tools',
    'AI image generators',
    'AI coding tools',
    'best AI tools 2026',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Best AI Tools 2026 | AI Tools Korner - Expert Reviews',
    description:
      'Discover and compare the best AI tools for writing, coding, design, and productivity. Expert reviews updated daily.',
    url: '/',
  },
  twitter: {
    title: 'Best AI Tools 2026 | AI Tools Korner',
    description:
      'Discover and compare the best AI tools. Expert reviews of ChatGPT, Claude, Midjourney, and 100+ AI tools.',
  },
};

export default function Home() {
  const trendingTools = getTrendingTools();
  const latestArticles = getLatestArticles(3);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
          Discover the{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Future
          </span>{' '}
          with AI
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          AI Tools Korner is your curated guide to the ever-evolving world of
          artificial intelligence. Find the best tools and read insightful
          articles.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/tools">
              Explore Tools <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/articles">Read Articles</Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-headline">Trending Tools</h2>
          <Button asChild variant="ghost">
            <Link href="/tools">
              View All <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-headline">Latest Articles</h2>
          <Button asChild variant="ghost">
            <Link href="/articles">
              View All <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
