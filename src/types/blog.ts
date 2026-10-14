export type Category = 
  | 'Spatial Theory'
  | 'Vernacular Craft'
  | 'Urban Ecology'
  | 'Material Studies'
  | 'Monographs';

export interface Author {
  name: string;
  role: string;
  affiliation: string;
  avatar?: string;
  initials: string;
}

export interface ArticleFigure {
  id: string;
  caption: string;
  subtext?: string;
  imageUrl?: string;
  svgType?: 'pozzolana' | 'mycelium' | 'courtyard' | 'cobblestone' | 'steading';
}

export interface Footnote {
  id: number;
  label: string;
  text: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  paragraphs: string[];
  pullQuote?: {
    text: string;
    citation: string;
  };
  figure?: ArticleFigure;
}

export interface ArticleComment {
  id: string;
  author: string;
  role: string;
  date: string;
  content: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  date: string;
  readTime: string;
  wordCount: number;
  author: Author;
  coverImage: string;
  coverCaption: string;
  excerpt: string;
  featured?: boolean;
  edition: string;
  sections: ArticleSection[];
  footnotes: Footnote[];
  keyTakeaways: string[];
}
