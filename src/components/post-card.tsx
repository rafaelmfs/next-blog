import Link from "next/link";
import { AspectRatio } from "./aspect-ratio";
import { CategoryBadge } from "./category-badge";
import type { CategoriesTypes } from "@/protocols/categories-protocol";
import { ConditionalRender } from "./conditional-render";


type PostCardProps = {
  imageUrl: string
  title: string
  content: string
  id: string
  category: CategoriesTypes
}

const MAX_DISPLAY_CARACTERES_CONTENT = 124

export function PostCard({
  category,
  content,
  id,
  imageUrl,
  title
}: PostCardProps) {
  const displayContent = content.slice(0, MAX_DISPLAY_CARACTERES_CONTENT).concat("...")

  return (
    <div className="flex flex-col gap-7 p-6 rounded-sm border border-sky-400 hover:shadow-posts-card transition-shadow">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <ConditionalRender
            condition={Boolean(imageUrl)}
            then={
              <img
                className="size-full object-cover"
                src={imageUrl}
                alt={`Ilustração do post. ${title}`}
              />
            }
          />
        </AspectRatio>
        <CategoryBadge text={category} className="absolute bottom-0 right-0" />
      </div>
      <strong className="font-chackra text-slate-700 dark:text-zinc-200 font-bold text-lg md:text-xl">{title}</strong>
      <p className="text-slate-400 text-xs md:text-base">{displayContent}</p>
      <Link href={`/blog/${id}`} className="font-bold text-sky-400 hover:underline underline-offset-2 ">Ler mais</Link>
    </div>
  )
};
