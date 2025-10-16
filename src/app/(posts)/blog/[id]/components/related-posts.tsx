import { PostCard } from "@/components/post-card";
import type { PostsProtocol } from "@/protocols/posts-protocol";

type RelatedPostsProps = {
  posts: PostsProtocol[]
}

export function RelatedPosts({
  posts
}: RelatedPostsProps) {
  return (
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
  )
};
