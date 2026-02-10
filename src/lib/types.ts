export type StyleCategory = "general" | "landing" | "dashboard";

export interface StyleMeta {
  slug: string;
  name: string;
  category: StyleCategory;
  description: string;
  bestFor: string[];
  tags: string[];
  relatedSlugs: string[];
  implemented: boolean;
}

export interface CategoryInfo {
  id: StyleCategory;
  label: string;
  description: string;
  count: number;
}
