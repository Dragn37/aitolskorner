export type ToolCategory =
  | 'Writing'
  | 'Image'
  | 'Video'
  | 'Audio'
  | 'Coding'
  | 'Productivity'
  | 'Marketing'
  | 'Business'
  | 'SEO';

export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: ToolCategory;
  trending?: boolean;
  logoUrlId: string;
  website: string;
  useCases?: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrlId: string;
  content: string;
}

export interface Category {
  slug: string;
  name: ToolCategory;
  description: string;
}

export interface UseCase {
  slug: string;
  name: string;
  description: string;
}
