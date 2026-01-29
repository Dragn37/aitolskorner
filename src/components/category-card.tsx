import Link from 'next/link';
import type { Category } from '@/lib/types';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <Card className="h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/10">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            {category.name}
          </CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
