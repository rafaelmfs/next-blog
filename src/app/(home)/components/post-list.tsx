'use client'

import { Categories } from "@/constants/categories";
import { CategoriesButton } from "./categories-button";
import { SearchInput } from "./search-input";
import { PostCard } from "@/components/post-card";
import { usePostsList } from "../hooks/use-posts-list";
import { tags } from "@/constants/tags";
import { Pagination } from "./pagination";

type FilterType = {
  type: 'tag' | 'category',
  value: string
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
    pagination
  } = usePostsList({
    limit: maxContentLengh
  })

  function handleFilter({ type, value }: FilterType) {
    filters.onTypeChange(type)
    filters.onValueChange(value)
  }

  const filterInputValue = filters?.type === "tag" && filters.value ? tagsBySlug[filters.value] : ""
  const filterButtonValue = filters?.type === "category" ? filters.value : ""

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col xl:flex-row justify-between items-start w-full gap-8">
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
          <span className="dark:text-zinc-200 text-slate-700 font-chackra font-bold text-lg xl:text-2xl md:whitespace-nowrap">Minhas postagens</span>
          <SearchInput
            value={filterInputValue}
            onSelect={(value) => handleFilter({ type: "tag", value })}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8 xl:max-w-[50%]">
          <span className="dark:text-zinc-200 text-slate-700 font-bold lg:pt-2">Categorias:</span>
          <div className="flex gap-4 flex-wrap">
            {
              Categories.map(category => (
                <CategoriesButton className={filterButtonValue === category.slug ? "bg-slate-700 border-slate-700 dark:bg-sky-700 dark:border-sky-700" : ""} key={category.slug} onClick={() => handleFilter({ type: "category", value: category.slug })}>{category.name}</CategoriesButton>
              ))
            }
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <PostCard
          imageUrl={"https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"}
          title={"Desenvolvendo uma ferramenta interativa de estudo"}
          content={"Debilito subiungo adulescens sopor spargo. Aperiam comedo convoco molestiae. Voveo ambitus bellicus arx solitudo catena.\nCaries articulus amor sollicito aptus auxilium. Trado alter tum alo voluptatibus. Voluptatibus pecco tactus adflicto cimentarius animi.\nAngustus cometes cupio advoco stultus. Cena eos aliquid nemo vetus comis sopor. Sumptus clam auctus occaecati.\nTricesimus abeo spiritus. Tabesco vivo carpo nemo omnis. Cado viridis dedecor tyrannus subnecto coadunatio torqueo.\nUxor nobis uxor stultus surgo desino. Sequi curriculum pecto accusantium cogito solutio clam quae curto appositus. Molestiae officiis natus solitudo solio."}
          id={""}
          category={"mobile"}
        />
        <PostCard
          imageUrl={"https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"}
          title={"Desenvolvendo uma ferramenta interativa de estudo"}
          content={"Debilito subiungo adulescens sopor spargo. Aperiam comedo convoco molestiae. Voveo ambitus bellicus arx solitudo catena.\nCaries articulus amor sollicito aptus auxilium. Trado alter tum alo voluptatibus. Voluptatibus pecco tactus adflicto cimentarius animi.\nAngustus cometes cupio advoco stultus. Cena eos aliquid nemo vetus comis sopor. Sumptus clam auctus occaecati.\nTricesimus abeo spiritus. Tabesco vivo carpo nemo omnis. Cado viridis dedecor tyrannus subnecto coadunatio torqueo.\nUxor nobis uxor stultus surgo desino. Sequi curriculum pecto accusantium cogito solutio clam quae curto appositus. Molestiae officiis natus solitudo solio."}
          id={""}
          category={"mobile"}
        />
        <PostCard
          imageUrl={"https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"}
          title={"Desenvolvendo uma ferramenta interativa de estudo"}
          content={"Debilito subiungo adulescens sopor spargo. Aperiam comedo convoco molestiae. Voveo ambitus bellicus arx solitudo catena.\nCaries articulus amor sollicito aptus auxilium. Trado alter tum alo voluptatibus. Voluptatibus pecco tactus adflicto cimentarius animi.\nAngustus cometes cupio advoco stultus. Cena eos aliquid nemo vetus comis sopor. Sumptus clam auctus occaecati.\nTricesimus abeo spiritus. Tabesco vivo carpo nemo omnis. Cado viridis dedecor tyrannus subnecto coadunatio torqueo.\nUxor nobis uxor stultus surgo desino. Sequi curriculum pecto accusantium cogito solutio clam quae curto appositus. Molestiae officiis natus solitudo solio."}
          id={""}
          category={"mobile"}
        />
        <PostCard
          imageUrl={"https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"}
          title={"Desenvolvendo uma ferramenta interativa de estudo"}
          content={"Debilito subiungo adulescens sopor spargo. Aperiam comedo convoco molestiae. Voveo ambitus bellicus arx solitudo catena.\nCaries articulus amor sollicito aptus auxilium. Trado alter tum alo voluptatibus. Voluptatibus pecco tactus adflicto cimentarius animi.\nAngustus cometes cupio advoco stultus. Cena eos aliquid nemo vetus comis sopor. Sumptus clam auctus occaecati.\nTricesimus abeo spiritus. Tabesco vivo carpo nemo omnis. Cado viridis dedecor tyrannus subnecto coadunatio torqueo.\nUxor nobis uxor stultus surgo desino. Sequi curriculum pecto accusantium cogito solutio clam quae curto appositus. Molestiae officiis natus solitudo solio."}
          id={""}
          category={"mobile"}
        />
        <PostCard
          imageUrl={"https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"}
          title={"Desenvolvendo uma ferramenta interativa de estudo"}
          content={"Debilito subiungo adulescens sopor spargo. Aperiam comedo convoco molestiae. Voveo ambitus bellicus arx solitudo catena.\nCaries articulus amor sollicito aptus auxilium. Trado alter tum alo voluptatibus. Voluptatibus pecco tactus adflicto cimentarius animi.\nAngustus cometes cupio advoco stultus. Cena eos aliquid nemo vetus comis sopor. Sumptus clam auctus occaecati.\nTricesimus abeo spiritus. Tabesco vivo carpo nemo omnis. Cado viridis dedecor tyrannus subnecto coadunatio torqueo.\nUxor nobis uxor stultus surgo desino. Sequi curriculum pecto accusantium cogito solutio clam quae curto appositus. Molestiae officiis natus solitudo solio."}
          id={""}
          category={"mobile"}
        />
        <PostCard
          imageUrl={"https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"}
          title={"Desenvolvendo uma ferramenta interativa de estudo"}
          content={"Debilito subiungo adulescens sopor spargo. Aperiam comedo convoco molestiae. Voveo ambitus bellicus arx solitudo catena.\nCaries articulus amor sollicito aptus auxilium. Trado alter tum alo voluptatibus. Voluptatibus pecco tactus adflicto cimentarius animi.\nAngustus cometes cupio advoco stultus. Cena eos aliquid nemo vetus comis sopor. Sumptus clam auctus occaecati.\nTricesimus abeo spiritus. Tabesco vivo carpo nemo omnis. Cado viridis dedecor tyrannus subnecto coadunatio torqueo.\nUxor nobis uxor stultus surgo desino. Sequi curriculum pecto accusantium cogito solutio clam quae curto appositus. Molestiae officiis natus solitudo solio."}
          id={""}
          category={"mobile"}
        />
      </div>

      <Pagination
        onPageChange={(page) => pagination.onPageChange(page)}
        page={pagination.page}
        total={pagination.total}
      />
    </div>
  )
};
