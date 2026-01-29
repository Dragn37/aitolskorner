import { notFound } from 'next/navigation';
import { getToolsByCategory, getCategoryBySlug, getAllCategories } from '@/lib/data';
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

  return {
    title: `${category.name} Tools`,
    description: `Browse AI tools in the ${category.name} category.`,
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
  );
}
