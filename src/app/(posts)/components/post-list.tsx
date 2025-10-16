'use client'

import { PostCard } from "@/components/post-card";
import { Categories } from "@/constants/categories";
import { tags } from "@/constants/tags";
import { usePostsList } from "../hooks/use-posts-list";
import { AutcompleteTagsInput } from "./autocomplete-tags-input";
import { CategoriesButton } from "./categories-button";
import { Pagination } from "./pagination";

type FilterType = {
  type: 'tag' | 'category' | null,
  value: string | null
}

type PostsListProps = {
  maxContentLengh?: number
}

const tagsBySlug = tags.reduce<Record<string, string>>((acc, tag) => {
  acc[tag.slug] = tag.name
  return acc
}, {})

export function PostList({
  maxContentLengh
}: PostsListProps) {
  const {
    filters,
    pagination,
    result
  } = usePostsList({
    limit: maxContentLengh
  })

  function handleChangeFilter(type: "category" | "tag", value: string | null) {
    const selectedType = value ? type : null

    filters.onTypeChange(selectedType)
    filters.onValueChange(value || null)
  }

  const filterInputValue = filters?.type === "tag" && filters.value ? tagsBySlug[filters.value] : ""
  const filterButtonValue = filters?.type === "category" ? filters.value : ""

  const posts = result?.posts

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col xl:flex-row justify-between items-start w-full gap-8">
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
          <span className="dark:text-zinc-200 text-slate-700 font-chackra font-bold text-lg xl:text-2xl md:whitespace-nowrap">Minhas postagens</span>
          <AutcompleteTagsInput
            value={filterInputValue}
            onSelect={(value) => handleChangeFilter("tag", value)}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8 xl:max-w-[50%]">
          <span className="dark:text-zinc-200 text-slate-700 font-bold lg:pt-2">Categorias:</span>
          <div className="flex gap-4 flex-wrap">
            {
              Categories.map(category => {
                const isActive = filterButtonValue === category.slug
                const value = isActive ? null : category.slug
                return (
                  <CategoriesButton
                    key={category.slug}
                    className={isActive ? "bg-slate-700 border-slate-700 dark:bg-sky-700 dark:border-sky-700" : ""}
                    onClick={() => handleChangeFilter("category", value)}
                  >
                    {category.name}
                  </CategoriesButton>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {
          posts?.map(post => (
            <PostCard
              key={post.id}
              imageUrl={post.imageUrl}
              title={post.title}
              content={post.content}
              id={post.id}
              category={post.category.name}
            />
          ))
        }
      </div>

      <Pagination
        onPageChange={(page) => pagination.onPageChange(page)}
        page={pagination.page}
        total={pagination.total ?? 0}
      />
    </div>
  )
};
