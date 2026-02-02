'use client';

import { useState } from 'react';
import type { Tool } from '@/lib/types';
import ToolCard from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const INITIAL_LOAD_COUNT = 20;
const LOAD_MORE_COUNT = 20;

export default function ToolGrid({ tools }: { tools: Tool[] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);

  const visibleTools = tools.slice(0, visibleCount);

  const loadMoreTools = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_MORE_COUNT);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {visibleTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      {visibleCount < tools.length && (
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" onClick={loadMoreTools}>
            Load More Tools <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
}
