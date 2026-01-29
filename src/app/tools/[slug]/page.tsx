import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';

import { getTools, getToolBySlug } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  const title = `${tool.name} Review 2026: Features, Pricing & Alternatives`;
  const description = `Complete ${tool.name} review: Features, pricing, pros & cons, use cases, and alternatives. Expert analysis updated for 2026.`;

  return {
    title,
    description,
    keywords: [
      tool.name,
      `${tool.name} review`,
      `${tool.name} pricing`,
      tool.category,
      'AI tools',
    ],
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `/tools/${tool.slug}`,
      title: `${tool.name} Review 2026: Complete Guide & Pricing`,
      description: `Expert ${tool.name} review covering features, pricing, pros & cons, and alternatives.`,
      images: [
        {
          url: `/og-images/tools/${tool.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${tool.name} Review`,
        },
      ],
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
      authors: ['AI Tools Korner Team'],
      section: 'AI Tool Reviews',
      tags: [tool.name, tool.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} Review 2026: Features, Pricing & Alternatives`,
      description: `Expert ${tool.name} review: Features, pricing, pros & cons, and alternatives.`,
      images: [`/twitter-images/tools/${tool.slug}.jpg`],
    },
  };
}

export async function generateStaticParams() {
  const tools = getTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  const logo = PlaceHolderImages.find((img) => img.id === tool.logoUrlId);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.aitolskorner.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Tools',
                item: 'https://www.aitolskorner.com/tools',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: tool.name,
                item: `https://www.aitolskorner.com/tools/${tool.slug}`,
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: tool.name,
            applicationCategory: tool.category,
            operatingSystem: 'Web',
            description: tool.description,
            url: tool.website,
            author: {
              '@type': 'Organization',
              name: tool.name,
            },
            offers: {
              '@type': 'Offer',
              price: '0', // Placeholder
              priceCurrency: 'USD',
            },
          }),
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="flex flex-col md:flex-row items-start gap-8 mb-12">
            {logo && (
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={`https://www.google.com/s2/favicons?sz=128&domain=${tool.website}`}
                  alt={`${tool.name} logo`}
                  width={128}
                  height={128}
                  className="rounded-xl object-cover"
                  data-ai-hint={logo.imageHint}
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <Badge variant="secondary" className="text-base">
                  {tool.category}
                </Badge>
                {tool.trending && (
                  <Badge className="text-base">Trending</Badge>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
                {tool.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {tool.description}
              </p>
              <Button asChild>
                <Link
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website <ExternalLink className="ml-2" />
                </Link>
              </Button>
            </div>
          </header>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                About {tool.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="article-content">
              {tool.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
