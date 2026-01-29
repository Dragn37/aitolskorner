import { getTools } from '@/lib/data';
import ToolCard from '@/components/tool-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tools',
  description: 'Browse our curated directory of the best AI tools.',
};

export default function ToolsPage() {
  const tools = getTools();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          AI Tools Directory
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our hand-picked selection of cutting-edge AI tools across various categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
