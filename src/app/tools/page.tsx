import { getTools } from '@/lib/data';
import ToolCard from '@/components/tool-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curated Tools',
  description: 'Browse our curated directory of the best AI tools.',
};

export default function ToolsPage() {
  const tools = getTools();

  return (
    <div>
      <div className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Curated Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our hand-picked selection of cutting-edge AI tools across various categories.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
