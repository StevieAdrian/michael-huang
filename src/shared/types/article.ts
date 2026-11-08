export type ArticleContentBlock =
  | {
      type: "paragraph" | "heading" | "quote";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export interface ArticleDetail {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    role: string;
  };
  content: ArticleContentBlock[];
  tags: string[];
}

export interface ArticleRecord extends Article {
  readTime: string;
  subtitle: string;
  author: ArticleDetail["author"];
  content: ArticleContentBlock[];
  tags: string[];
  detailOverrides?: Partial<Pick<ArticleDetail, "title" | "slug" | "category" | "date">>;
}
