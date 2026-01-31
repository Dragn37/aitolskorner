import { getTools, getArticles, getAllCategories, getAllUseCases } from '@/lib/data';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aitolskorner.com';
  const currentDate = new Date().toISOString();

  const toolUrls = getTools().map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const articleUrls = getArticles().map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: article.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const categoryUrls = getAllCategories().map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const useCaseUrls = getAllUseCases().map((useCase) => ({
    url: `${baseUrl}/use-cases/${useCase.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  const staticPages = [
    '/tools',
    '/categories',
    '/trending',
    '/articles',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/submit-tool',
    '/use-cases'
  ].map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));


  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...staticPages,
    ...toolUrls,
    ...articleUrls,
    ...categoryUrls,
    ...useCaseUrls,
  ];
}
