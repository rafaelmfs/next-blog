'use client'

import { Categories } from "@/constants/categories";
import { CategoriesButton } from "./categories-button";
import { SearchInput } from "./search-input";

export function PostList() {
  return (
    <div className="w-full flex flex-col gap-">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8">
        <div className="flex gap-8 items-center">
          <span className="dark:text-zinc-200 text-slate-700 font-chackra font-bold text-lg lg:text-2xl">Minhas postagens</span>
          <SearchInput />
        </div>
        <div className="flex gap-8 lg:max-w-[50%]">
          <span className="dark:text-zinc-200 text-slate-700 font-bold lg:pt-2">Categorias:</span>
          <div className="flex gap-4 flex-wrap">
            {
              Categories.map(category => (
                <CategoriesButton key={category.slug}>{category.name}</CategoriesButton>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};
