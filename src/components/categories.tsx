import Link from "next/link";
import { getBlogPosts } from "@/app/blog/utils";

export function Categories() {
  let allBlogs = getBlogPosts();
  let Categories = [];

  allBlogs.map((blog) => {
    if (blog.metadata.categories) {
      Categories.push(...blog.metadata.categories.split(", "));
    }
  });
  // console.log(tags);
  if (!Categories.length) {
    <p>No categories found</p>;
  }
  return (
    <div className="w-full flex flex-wrap justify-between ">
      {[...new Set(Categories)].map((category, key) => (
        <Link key={key} className=" px-10 py-5 m-5 border border-gray-700 text-neutral-900 dark:text-neutral-100 tracking-tight  capitalize" href={`/categories/${category}`}>
          {category}
        </Link>
      ))}
    </div>
  );
}
