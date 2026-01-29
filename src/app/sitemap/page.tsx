import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'An overview of the content on AI Tools Korner.',
};

export default function SitemapPage() {
  // This page is disabled to resolve a build conflict with the sitemap.xml generation.
  // The presence of both `app/sitemap.ts` and `app/sitemap/page.tsx` is not allowed.
  notFound();
}
