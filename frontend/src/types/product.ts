export type Category = "transformers" | "substations" | "switchgear" | "cranes";

export interface Product {
  id: string;
  code: string;
  name: string;
  category: Category;
  standard: string | null;
  price: number | null;
  currency: string;
  image_url: string | null;
  pdf_url: string | null;
  description: string | null;
  specs: Record<string, string>;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductListResponse {
  items: Product[];
  total: number;
  page: number;
  pages: number;
}

export interface ProductFormData {
  code: string;
  name: string;
  category: Category;
  standard?: string;
  price?: number | null;
  currency: string;
  image_url?: string;
  pdf_url?: string;
  description?: string;
  specs: Record<string, string>;
  is_published: boolean;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface UploadResponse {
  url: string;
}
