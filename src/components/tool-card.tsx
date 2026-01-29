import Link from 'next/link';
import Image from 'next/image';

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
import { ArrowRight } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const logo = PlaceHolderImages.find((img) => img.id === tool.logoUrlId);

  return (
    <Card className="flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        {logo && (
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={`https://www.google.com/s2/favicons?sz=64&domain=${tool.website}`}
              alt={`${tool.name} logo`}
              width={64}
              height={64}
              className="rounded-lg object-cover"
              data-ai-hint={logo.imageHint}
            />
          </div>
        )}
        <div className="flex-1">
          <CardTitle className="font-headline text-xl">{tool.name}</CardTitle>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{tool.category}</Badge>
            {tool.trending && <Badge variant="default">Trending</Badge>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{tool.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-opacity hover:opacity-90">
          <Link href={`/tools/${tool.slug}`}>
            Visit {tool.name} <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
