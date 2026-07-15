import type { Category } from "@/types/product";

export const CATEGORIES: Record<Category, string> = {
  transformers: "Силовые трансформаторы",
  substations: "Трансформаторные подстанции",
  switchgear: "Щитовое оборудование",
  cranes: "Краны ITALYCRANE",
};

export const CATEGORY_FILTERS: { value: Category | ""; label: string }[] = [
  { value: "", label: "Все категории" },
  { value: "transformers", label: CATEGORIES.transformers },
  { value: "substations", label: CATEGORIES.substations },
  { value: "switchgear", label: CATEGORIES.switchgear },
  { value: "cranes", label: CATEGORIES.cranes },
];

export const PRODUCT_LINE_IMAGES: Record<Category, string> = {
  transformers:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3108e9495b_ab94883e3ae1f4a6.png",
  substations:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7ae3e8a3cc_0ebb7c2ff0a17802.png",
  switchgear:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e24b921344_de62c07c11bcc32f.png",
  cranes:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e13a61bead_c67bfbf27485ba46.png",
};
