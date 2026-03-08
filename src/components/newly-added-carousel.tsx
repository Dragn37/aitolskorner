'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Tool } from '@/lib/types';

export function NewlyAddedCarousel({ tools }: { tools: Tool[] }) {
  return (
    <div className="w-full py-4">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          AutoScroll({
            speed: 0.8,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {tools.map((tool) => {
            const logo = PlaceHolderImages.find((img) => img.id === tool.logoUrlId);
            const faviconFallback = `https://www.google.com/s2/favicons?sz=128&domain=${new URL(tool.website).hostname}`;
            
            return (
              <CarouselItem key={tool.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                <Link href={`/tools/${tool.slug}`} className="block">
                  <div className="flex flex-col items-center p-4 bg-card border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 text-center h-full group hover:shadow-lg hover:shadow-primary/5">
                    <div className="relative w-12 h-12 mb-3 shrink-0 flex items-center justify-center bg-muted/20 rounded-xl overflow-hidden group-hover:bg-primary/5 transition-colors">
                      <Image
                        src={logo?.imageUrl || faviconFallback}
                        alt={tool.name}
                        width={48}
                        height={48}
                        className="rounded-lg object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-headline font-bold text-sm line-clamp-1 mb-1 group-hover:text-primary transition-colors">{tool.name}</h3>
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 font-normal text-muted-foreground">
                      {tool.category}
                    </Badge>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
