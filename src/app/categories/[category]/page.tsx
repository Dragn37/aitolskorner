import { notFound } from 'next/navigation';
import {
  getToolsByCategory,
  getCategoryBySlug,
  getAllCategories,
} from '@/lib/data';
import ToolCard from '@/components/tool-card';
import type { Metadata } from 'next';

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  const title = `Best AI ${category.name} Tools 2026 | AI Tools Korner`;
  const description = `Compare the best AI ${category.name} tools of 2026. Expert reviews, pricing, and feature comparisons for tools like ${category.name}.`;

  return {
    title,
    description,
    keywords: [`AI ${category.name} tools`, `best AI ${category.name}`, category.name],
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/categories/${category.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.category);
  if (!category) {
    notFound();
  }
  const tools = getToolsByCategory(category.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `Best AI ${category.name} Tools`,
            description: `Top AI ${category.name} tools for various applications.`,
            numberOfItems: tools.length,
            itemListElement: tools.map((tool, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'SoftwareApplication',
                name: tool.name,
                url: `https://www.aitolskorner.com/tools/${tool.slug}`,
                description: tool.description,
              },
            })),
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
                name: 'Categories',
                item: 'https://www.aitolskorner.com/categories',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: category.name,
                item: `https://www.aitolskorner.com/categories/${category.slug}`,
              },
            ],
          }),
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            {category.name} Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </>
  );
}
