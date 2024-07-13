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
    <div>
      {[...new Set(Categories)].map((category, key) => (
        <div key={key} className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          <Link className="flex flex-col space-y-1 mb-4" href={`/categories/${category}`}>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight  capitalize ">{category}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
