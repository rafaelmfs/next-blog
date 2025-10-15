import type { TagProtocol } from "@/protocols/tags-protocol";


export const tags: TagProtocol[] = [
  { slug: "tecnologia", name: "Tecnologia" },
  { slug: "programacao", name: "Programação" },
  { slug: "web", name: "Web" },
  { slug: "mobile", name: "Mobile" },
  { slug: "design", name: "Design" },
  { slug: "negocios", name: "Negócios" },
  { slug: "startup", name: "Startup" },
  { slug: "inovacao", name: "Inovação" },
  { slug: "frontend", name: "Frontend" },
  { slug: "backend", name: "Backend" },
  { slug: "devops", name: "DevOps" },
  { slug: "data-science", name: "Data Science" }
] as const;