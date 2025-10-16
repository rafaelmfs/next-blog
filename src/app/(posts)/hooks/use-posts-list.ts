import type { CategoriesTypes } from "@/protocols/categories-protocol"
import type { GetPostsListResponse } from "@/protocols/posts-api-service-protocol"
import type { TagsTypes } from "@/protocols/tags-protocol"
import { PostApiServices } from "@/services/posts-api-service"
import { useQueryState } from "nuqs"
import { parseAsInteger } from "nuqs/server"
import { useEffect, useState } from "react"

const postsApiService = new PostApiServices(false)

const postsCache = new Map<string, GetPostsListResponse>()

export function usePostsList({
  limit = 3
}: { limit?: number }) {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1))
  const [filterType, setFilterType] = useQueryState("filter-type")
  const [filterValue, setFilterValue] = useQueryState("filter-value")

  const [result, setResult] = useState<GetPostsListResponse>()

  const pagination = {
    page,
    onPageChange: setPage,
    total: result?.pagination?.totalPages,
  }

  const filters = {
    type: filterType,
    onTypeChange: setFilterType,
    value: filterValue,
    onValueChange: setFilterValue
  }

  const params = {
    page,
    filterType,
    filterValue,
    limit
  }

  async function loadPosts(key: string) {
    if (filterType && filterValue) {
      if (filterType === "category") {
        const result = await postsApiService.getPostsByCategory({
          category: filterValue as CategoriesTypes,
          pagination: {
            page,
            limit
          }
        })

        setResult(result)
        postsCache.set(key, result)
        return
      }

      if (filterType === "tag") {
        const result = await postsApiService.getPostsByTag({
          tag: filterValue as TagsTypes,
          pagination: {
            page,
            limit
          }
        })

        setResult(result)
        postsCache.set(key, result)
        return
      }
    }

    const result = await postsApiService.getPosts({
      limit,
      page
    })

    setResult(result)
    postsCache.set(key, result)
  }

  useEffect(() => {
    const key = JSON.stringify(params)
    let currentResult = postsCache.get(key)

    if (currentResult) {
      setResult(currentResult)
      return
    }

    loadPosts(key)
  }, [params])

  return {
    pagination,
    filters,
    result
  }
};
