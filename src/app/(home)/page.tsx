import { Divider } from "@/app/(home)/components/divider";
import { AuthorApiService } from "@/services/author-api-service";
import { Hero } from "./components/hero";
import { PostList } from "./components/post-list";
import { Contact } from "./components/contact";

const authorApiService = new AuthorApiService()

export default async function Home() {
  const { author } = await authorApiService.getAuthor()

  return (
    <>
      <Hero
        avatarUrl={author.avatarUrl}
        bio={author.bio}
        course={author.course}
        name={author.name}
      />
      <Divider />

      <PostList />

      <Contact
        email={author.social.email}
        github={author.social.github}
        linkedin={author.social.linkedin}
      />
    </>
  );
}
