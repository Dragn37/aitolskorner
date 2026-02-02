import { notFound } from 'next/navigation';
import { getToolsByUseCase, getUseCaseBySlug, getAllUseCases } from '@/lib/data';
import ToolCard from '@/components/tool-card';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const useCase = getUseCaseBySlug(params.slug);

  if (!useCase) {
    return {
      title: 'Use Case Not Found',
    };
  }

  return {
    title: `AI Tools for ${useCase.name}`,
    description: `Discover AI tools tailored for ${useCase.name}.`,
  };
}

export async function generateStaticParams() {
  const useCases = getAllUseCases();
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export default function UseCasePage({ params }: Props) {
  const useCase = getUseCaseBySlug(params.slug);
  if (!useCase) {
    notFound();
  }
  const tools = getToolsByUseCase(useCase.slug);

  return (
    <div>
      <div className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            AI Tools for {useCase.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {useCase.description}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
