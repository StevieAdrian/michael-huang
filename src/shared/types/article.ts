export type ArticleContentBlock =
  | {
      type: "paragraph" | "heading" | "quote";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

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
