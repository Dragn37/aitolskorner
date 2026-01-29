import Link from 'next/link';
import type { Metadata } from 'next';
import {
  getTools,
  getArticles,
  getAllCategories,
  getAllUseCases,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'An overview of the content on AI Tools Korner.',
};

export default function SitemapPage() {
  const tools = getTools();
  const articles = getArticles();
  const categories = getAllCategories();
  const useCases = getAllUseCases();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
            Sitemap
          </h1>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold font-headline mb-4">Main Pages</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><Link href="/" className="text-primary hover:underline">Home</Link></li>
              <li><Link href="/tools" className="text-primary hover:underline">Tools</Link></li>
              <li><Link href="/articles" className="text-primary hover:underline">Articles</Link></li>
              <li><Link href="/categories" className="text-primary hover:underline">Categories</Link></li>
              <li><Link href="/trending" className="text-primary hover:underline">Trending Tools</Link></li>
              <li><Link href="/use-cases" className="text-primary hover:underline">Use Cases</Link></li>
              <li><Link href="/submit-tool" className="text-primary hover:underline">Submit a Tool</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mb-4">AI Tools</h2>
            <ul className="list-disc list-inside space-y-2">
              {tools.map(tool => (
                <li key={tool.id}>
                  <Link href={`/tools/${tool.slug}`} className="text-primary hover:underline">{tool.name}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mb-4">Articles</h2>
            <ul className="list-disc list-inside space-y-2">
              {articles.map(article => (
                <li key={article.id}>
                  <Link href={`/articles/${article.slug}`} className="text-primary hover:underline">{article.title}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mb-4">Categories</h2>
            <ul className="list-disc list-inside space-y-2">
              {categories.map(category => (
                <li key={category.slug}>
                  <Link href={`/categories/${category.slug}`} className="text-primary hover:underline">{category.name}</Link>
                </li>
              ))}
            </ul>
          </section>

           <section>
            <h2 className="text-2xl font-bold font-headline mb-4">Use Cases</h2>
            <ul className="list-disc list-inside space-y-2">
              {useCases.map(useCase => (
                <li key={useCase.slug}>
                  <Link href={`/use-cases/${useCase.slug}`} className="text-primary hover:underline">{useCase.name}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mb-4">Legal & Info</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><Link href="/about" className="text-primary hover:underline">About</Link></li>
              <li><Link href="/contact" className="text-primary hover:underline">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-primary hover:underline">Affiliate Disclosure</Link></li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
