import Link from "next/link";
import { getBlogPostsWithTag } from "@/app/blog/utils";
import Image from "next/image";
import { BlogPosts } from "@/components/posts";

const page = ({ params }) => {
  let allBlogs = getBlogPostsWithTag(params.slug);
  //   <h1 className="font-semibold text-2xl my-1 tracking-tighter">Posts with {decodeURIComponent(params.slug)} tag. </h1>

  return (
    <section className="max-w-7xl mx-auto ">
      <h1 className="font-semibold text-2xl my-1 tracking-tighter">Posts with {decodeURIComponent(params.slug)} tag. </h1>
      <BlogPosts allBlogs={allBlogs} />
    </section>
  );
};

export default page;
