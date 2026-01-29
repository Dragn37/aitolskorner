export type ToolCategory =
  | 'Writing'
  | 'Image'
  | 'Video'
  | 'Coding'
  | 'Productivity';

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
