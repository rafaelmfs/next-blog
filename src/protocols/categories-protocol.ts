export type CategoriesTypes = "mobile" | "programacao" | "frontend" | "devops" | "ux-design" | "data-science" | "inovacao-gestao"

export type CategoriesProtocol = {
  description?: string,
  name: string,
  slug: CategoriesTypes
}