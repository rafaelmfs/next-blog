import { AspectRatio } from "@/components/aspect-ratio";
import { CategoryBadge } from "@/components/category-badge";
import { PostCard } from "@/components/post-card";
import { TagBadge } from "@/components/tag-badge";
import { PostApiServices } from "@/services/posts-api-service";

const postsApiService = new PostApiServices(false)

export default async function PostDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { post } = await postsApiService.getPostById(id)
  const { posts } = await postsApiService.getPostsByCategory({
    category: post.category.slug,
    pagination: {
      limit: 3,
      page: 1
    }
  })

  return (
    <div className="space-y-10">
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <strong className="font-bold font-chackra text-2xl md:text-3xl lg:text-5xl text-slate-700 dark:text-zinc-300">
              {post.title}
            </strong>
            <div className="flex flex-col gap-2 md:gap-5 items-start">
              <span className="font-bold text-slate-400 text-xs md:text-base">Categoria:</span>
              <CategoryBadge className="rounded-sm font-inter font-bold px-3 min-w-0" text={post.category.name} title={post.category.description} />
            </div>
            <div className="flex flex-col gap-2 md:gap-5 items-start">
              <span className="font-bold text-slate-400 text-xs md:text-base">Tags:</span>
              <div className="flex flex-wrap gap-3.5">
                {
                  post.tags.map((tag) => <TagBadge key={tag.slug} className="rounded-sm font-inter font-bold" text={tag.name} />)
                }
              </div>
            </div>
          </div>
          <AspectRatio ratio={16 / 9}>
            <img
              className="size-full object-cover"
              src={post.imageUrl}
              alt={`Ilustração do post. ${post.title}`}
            />
          </AspectRatio>
        </div>
        <p className="text-slate-400">
          {post.content}
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <span className="text-slate-700 font-bold md:text-2xl dark:text-zinc-300">Postagens relacionadas</span>
        <div className="grid lg:grid-cols-3 gap-6">
          {
            posts.map((item) => (
              <PostCard
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                content={item.content}
                id={item.id}
                category={item.category.name}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
