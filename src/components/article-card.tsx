import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === article.imageUrlId);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/50">
        {image && (
          <div className="relative aspect-video">
            <Image
              src={image.imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline text-xl leading-snug">
            {article.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            By {article.author} on{' '}
            {new Date(article.date).toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="line-clamp-3">
            {article.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <div className="text-sm font-medium text-primary group-hover:text-primary/80 flex items-center">
            Read article <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
