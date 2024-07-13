import Link from "next/link";
import { getBlogPostsWithCategory } from "@/app/blog/utils";
import Image from "next/image";
import { BlogPosts } from "@/components/posts";

const page = ({ params }) => {
  let allBlogs = getBlogPostsWithCategory(params.slug);

  // <h1 className="font-semibold text-2xl my-1 tracking-tighter">Posts with {decodeURIComponent(params.slug)} category. </h1>

  return (
    <section className="container  my-10">
      <h1 className="font-semibold text-2xl my-1 tracking-tighter">Posts with category: {decodeURIComponent(params.slug)}. </h1>
      <BlogPosts allBlogs={allBlogs} />
    </section>
  );
};

export default page;
