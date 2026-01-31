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

  // A simple function to render HTML content from the article data
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('<h2>')) {
        return <h2 key={index} className="text-3xl font-bold mt-12 mb-4 font-headline" dangerouslySetInnerHTML={{ __html: paragraph.replace(/<\/?h2>/g, '') }} />;
      }
       if (paragraph.startsWith('<h3>')) {
        return <h3 key={index} className="text-2xl font-bold mt-8 mb-3 font-headline" dangerouslySetInnerHTML={{ __html: paragraph.replace(/<\/?h3>/g, '') }} />;
      }
      if (paragraph.startsWith('<ul>')) {
        const listItems = paragraph.match(/<li>(.*?)<\/li>/g)?.map(item => item.replace(/<li>/g, '').replace(/<\/li>/g, ''));
        return <ul className="list-disc list-inside my-4 pl-4 space-y-2">{listItems?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }}/>)}</ul>
      }

      // This will render paragraphs and handle the anchor tags within them
      return <p key={index} className="text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: paragraph}} />;
    });
  }

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
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              By {article.author} on{' '}
              {new Date(article.date).toLocaleDateString()}
            </p>
          </header>

          {image && (
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
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
            {renderContent(article.content)}
          </div>
        </div>
      </article>
    </>
  );
}