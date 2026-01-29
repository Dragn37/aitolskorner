import Link from 'next/link';
import type { UseCase } from '@/lib/types';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface UseCaseCardProps {
  useCase: UseCase;
}

export default function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <Link href={`/use-cases/${useCase.slug}`} className="group block">
      <Card className="h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/10">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            {useCase.name}
          </CardTitle>
          <CardDescription>{useCase.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
