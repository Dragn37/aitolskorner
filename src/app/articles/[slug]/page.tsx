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

  const title = `${article.title} | AI Tools Korner`;

  return {
    title,
    description: article.excerpt,
    keywords: [article.title.split(' ')[0], article.title.split(' ')[1], 'AI', 'artificial intelligence'],
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      url: `/articles/${article.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: article.excerpt,
    },
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            image: image?.imageUrl,
            author: { '@type': 'Person', name: article.author },
            publisher: {
              '@type': 'Organization',
              name: 'AI Tools Korner',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.aitolskorner.com/logo.png',
              },
            },
            datePublished: article.date,
            dateModified: article.date,
          }),
        }}
      />
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
                name: 'Articles',
                item: 'https://www.aitolskorner.com/articles',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: `https://www.aitolskorner.com/articles/${article.slug}`,
              },
            ],
          }),
        }}
      />
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              By {article.author} on{' '}
              {new Date(article.date).toLocaleDateString()}
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
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
