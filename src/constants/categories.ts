import type { CategoriesProtocol } from "@/protocols/categories-protocol";

export const Categories: CategoriesProtocol[] = [
  { slug: "mobile", name: "Mobile" },
  { slug: "programacao", name: "Programação" },
  { slug: "frontend", name: "Frontend" },
  { slug: "devops", name: "DevOps" },
  { slug: "ux-design", name: "UX & Design" },
  { slug: "data-science", name: "Data Science" },
  { slug: "inovacao-gestao", name: "Inovação & Gestão" },
] as const;
