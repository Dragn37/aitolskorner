import Link from 'next/link';
import Image from 'next/image';
import { getArticles } from '@/lib/data';
import ArticleCard from '@/components/article-card';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';


export const metadata: Metadata = {
  title: 'AI News',
  description:
    'Read insightful AI news and editorials on the world of artificial intelligence.',
};


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

export default function ArticlesPage() {
  const articles = getArticles();
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);
  const featuredImage = PlaceHolderImages.find(img => img.id === featuredArticle.imageUrlId);

  return (
    <div>
      <div className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]"></div>
        <div className="container relative text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
              <span className='text-primary'>AI News</span> & Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest breakthroughs, tutorials, and deep dives into the rapidly evolving world of Artificial Intelligence.
            </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-12">
        {featuredArticle && featuredImage && (
          <section className="mb-16">
            <Link href={`/articles/${featuredArticle.slug}`} className="block group">
              <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[2.4/1] bg-card">
                 <Image
                  src={featuredImage.imageUrl}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={featuredImage.imageHint}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                  <div className='flex gap-2 mb-3'>
                    <Badge>Latest News</Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-headline font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                          <AuthorAvatar authorName={featuredArticle.author}/>
                          <span>{featuredArticle.author}</span>
                      </div>
                      <span className='text-muted-foreground'>•</span>
                      <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      {featuredArticle.readTime && (
                          <>
                              <span className='text-muted-foreground'>•</span>
                              <div className='flex items-center gap-1.5'>
                                  <Clock className="w-4 h-4" />
                                  <span>{featuredArticle.readTime} min read</span>
                              </div>
                          </>
                      )}
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            Load More Articles <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
