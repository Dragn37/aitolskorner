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
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRightCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
}

const AuthorAvatar = ({ authorName }: { authorName: string }) => {
  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2);

  const getColorIndex = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };
  
  const colors = [
    'bg-emerald-500',
    'bg-sky-500',
    'bg-amber-500',
    'bg-rose-500',
    'bg-indigo-500',
    'bg-pink-500',
  ];
  const color = colors[getColorIndex(authorName) % colors.length];

  return (
    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs", color)}>
      {getInitials(authorName)}
    </div>
  );
};


export default function ArticleCard({ article }: ArticleCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === article.imageUrlId);
  const primaryTag = article.tags?.[0];

  return (
    <Card className="flex flex-col h-full group transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-primary/10">
      <Link href={`/articles/${article.slug}`} className="flex flex-col h-full">
        {image && (
          <div className="relative">
            {primaryTag && (
              <Badge className="absolute top-3 left-3 z-10">{primaryTag}</Badge>
            )}
            <div className="aspect-video overflow-hidden">
                <Image
                src={image.imageUrl}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                data-ai-hint={image.imageHint}
                />
            </div>
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline text-lg leading-snug group-hover:text-primary">
            {article.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="line-clamp-3">
            {article.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter className="mt-auto justify-between items-center">
            <div className="flex items-center gap-3">
                <AuthorAvatar authorName={article.author} />
                <span className="text-sm font-medium text-muted-foreground">{article.author}</span>
            </div>
          <ArrowRightCircle className="text-muted-foreground/50 group-hover:text-primary transition-colors" />
        </CardFooter>
      </Link>
    </Card>
  );
}
