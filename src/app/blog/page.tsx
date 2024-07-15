import { BlogPosts } from "@/components/posts";
import { getBlogPosts } from "./utils";

export const metadata = {
  title: "Blog",
  description: "Posts of my blog.",
};

export default function Page() {
  let allBlogs = getBlogPosts();

  return (
    <section className="container  my-10 max-w-7xl">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-center">My Blog</h1>
      <BlogPosts allBlogs={allBlogs} />
    </section>
  );
}
