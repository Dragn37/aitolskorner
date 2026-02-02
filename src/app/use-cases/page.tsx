import { getAllUseCases } from '@/lib/data';
import UseCaseCard from '@/components/use-case-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tools by Use Case',
  description: 'Find the perfect AI tool for your specific needs and use case.',
};

export default function UseCasesPage() {
  const useCases = getAllUseCases();

  return (
    <div>
      <div className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            AI Tools by Use Case
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a writer, developer, or entrepreneur, find AI tools tailored for you.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} />
          ))}
        </div>
      </div>
    </div>
  );
}
