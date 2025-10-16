import { PostList } from "../components/post-list";

export default async function Blog() {
  return (
    <div className="gradient-background">
      <PostList maxContentLengh={9} />
    </div>
  );
}
