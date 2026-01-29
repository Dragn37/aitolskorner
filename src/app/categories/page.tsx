import { getAllCategories } from '@/lib/data';
import CategoryCard from '@/components/category-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tool Categories',
  description: 'Explore AI tools organized by category.',
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Tool Categories
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find the right AI tool by browsing our curated categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
