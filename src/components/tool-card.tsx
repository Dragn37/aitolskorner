'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bookmark, ExternalLink } from 'lucide-react';

import type { Tool } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const logo = PlaceHolderImages.find((img) => img.id === tool.logoUrlId);
  const faviconUrl =
    logo?.imageUrl ??
    `https://www.google.com/s2/favicons?sz=64&domain=${new URL(tool.website).hostname}`;

  return (
    <Card className="flex flex-col h-full group relative hover:border-primary/50 transition-colors">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => e.stopPropagation()}
      >
        <Bookmark className="h-4 w-4 text-muted-foreground" />
      </Button>

      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={faviconUrl}
              alt={`${tool.name} logo`}
              width={48}
              height={48}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1">
            <CardTitle className="font-headline text-lg">
              <Link
                href={`/tools/${tool.slug}`}
                className="before:absolute before:inset-0 before:z-0"
              >
                {tool.name}
              </Link>
            </CardTitle>
            <p className="text-sm text-muted-foreground">{tool.category}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <CardDescription>{tool.description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-4 justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {tool.trending && <Badge variant="secondary">Popular</Badge>}
          {tool.useCases?.slice(0, 1).map((useCase) => (
            <Badge key={useCase} variant="outline">
              {useCase.charAt(0).toUpperCase() + useCase.slice(1)}
            </Badge>
          ))}
        </div>
        <Button asChild size="sm" className="z-10 shrink-0">
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Visit <ExternalLink />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
