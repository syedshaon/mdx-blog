import Link from "next/link";
import { getBlogPosts } from "@/app/blog/utils";

export function Tags() {
  let allBlogs = getBlogPosts();
  let Tags = [];

  allBlogs.map((blog) => {
    if (blog.metadata.tags) {
      Tags.push(...blog.metadata.tags.split(", "));
    }
  });
  // console.log(tags);

  return (
    <div className="w-full flex flex-wrap justify-between ">
      {[...new Set(Tags)].map((tag, key) => (
        <Link key={key} className=" px-10 py-5 m-5 border border-gray-700 text-neutral-900 dark:text-neutral-100 tracking-tight  capitalize" href={`/tags/${tag}`}>
          {tag}
        </Link>
      ))}
    </div>
  );
}
