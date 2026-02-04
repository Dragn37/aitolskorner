'use client';

import { Play } from 'lucide-react';

const aioItems = [
  "AI Drafting",
  "Workflow Automation",
  "Repurposing Systems",
  "Content Templates",
  "Internal Linking",
  "Content Scheduling",
  "Streamlined Processes",
  "Multi-Format Output",
  "AI Audits",
  "Scalable SEO",
  "Template-Based Repurposing",
  "Volume Publishing"
];

export function AioSection() {
  return (
    <section className="py-16 bg-muted/30 rounded-3xl border border-border/50 my-12 overflow-hidden relative">
      <div className="container px-4">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#ff6b35] text-white px-6 py-2 rounded-md font-headline font-bold text-xl md:text-2xl mb-6 shadow-lg shadow-orange-500/20">
            2. AIO - AI Optimisation
          </div>
          <h3 className="text-xl md:text-2xl font-medium mb-4 max-w-2xl mx-auto leading-tight">
            Scale visibility with AI-powered content systems.
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Automate workflows, repurpose smartly, and streamline publishing.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {aioItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-card border border-border px-5 py-3 rounded-lg shadow-sm hover:shadow-md hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
            >
              <div className="bg-primary/10 p-1 rounded-sm group-hover:bg-primary/20 transition-colors">
                <Play className="w-3 h-3 fill-primary text-primary" />
              </div>
              <span className="font-medium text-sm md:text-base whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
