import type { CategoriesTypes } from "@/protocols/categories-protocol"
import type { TagsTypes } from "@/protocols/tags-protocol"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const getApiEndpoints = ({ isExternal }: { isExternal: boolean }) => {
  let baseUrl = apiUrl

  if(!isExternal &&  typeof window !== undefined) {
    baseUrl = `${window.location.origin}/api`
  }

  return {
    allPosts: `${baseUrl}/posts`,
    postById: (id: string) => `${baseUrl}/posts/id/${id}`,
    postsByCategory: (category: CategoriesTypes) => `${baseUrl}/posts/category/${category}`,
    postsByTag: (tag: TagsTypes) => `${baseUrl}/posts/tags/${tag}`,
  }
}