import { BlogPosts } from "@/components/posts";
import { getBlogPosts } from "./utils";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  let allBlogs = getBlogPosts();

  return (
    <section className="container  my-10 ">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts allBlogs={allBlogs} />
    </section>
  );
}
