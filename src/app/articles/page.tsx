import { getArticles } from '@/lib/data';
import ArticleCard from '@/components/article-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI News',
  description:
    'Read insightful AI news and editorials on the world of artificial intelligence.',
};

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          AI News
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay informed with our collection of insightful AI news, trends, and
          tutorials about Artificial Intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
