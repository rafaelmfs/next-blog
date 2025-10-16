import type { CategoriesTypes } from "@/protocols/categories-protocol"
import type { PaginationProtocol } from "@/protocols/pagination-protocol"
import type { TagsTypes } from "@/protocols/tags-protocol"
import { PostApiServices } from "@/services/posts-api-service"
import { useQueryState } from "nuqs"
import { parseAsInteger } from "nuqs/server"
import { useState } from "react"

// type Pagination = Required<PaginationProtocol>

// type UsePostsListProps =
//   Pagination & {
//     filterType: "tag"
//     filterValue: TagsTypes
//   } | {
//     filterType: "category"
//     filterValue: CategoriesTypes
//   }
//   | {
//     filterType?: undefined
//     filterValue?: undefined
//   }

const postsApiService = new PostApiServices(false)

export function usePostsList({
  limit = 3
}: { limit?: number }) {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1))
  const [filterType, setFilterType] = useQueryState("filter-type")
  const [filterValue, setFilterValue] = useQueryState("filter-value")

  const pagination = {
    page,
    onPageChange: setPage,
    total: 20,
  }

  const filters = {
    type: filterType,
    onTypeChange: setFilterType,
    value: filterValue,
    onValueChange: setFilterValue
  }

  return {
    pagination,
    filters
  }
};
