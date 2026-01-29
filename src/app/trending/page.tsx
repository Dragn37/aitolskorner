import { getTrendingTools } from '@/lib/data';
import ToolCard from '@/components/tool-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trending AI Tools',
  description: 'Discover the most popular and trending AI tools right now.',
};

export default function TrendingPage() {
  const trendingTools = getTrendingTools();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Trending AI Tools
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the tools that are currently making waves in the AI community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {trendingTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
