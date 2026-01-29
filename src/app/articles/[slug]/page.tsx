import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';

import { getArticles, getArticleBySlug } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === article.imageUrlId);

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            By {article.author} on {new Date(article.date).toLocaleDateString()}
          </p>
        </header>

        {image && (
          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={image.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              priority
            />
          </div>
        )}

        <div className="article-content">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
