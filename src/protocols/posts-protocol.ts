import type { CategoriesProtocol } from "./categories-protocol"
import type { TagProtocol } from "./tags-protocol"

export type PostsProtocol =  {
  id: string,
  title: string,
  content: string,
  author: string,
  createdAt: string,
  likes: number,
  category: CategoriesProtocol,
  tags: TagProtocol[],
  imageUrl: string
}

