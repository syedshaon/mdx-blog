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
    <div>
      {[...new Set(Tags)].map((tag, key) => (
        <div key={key} className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          <Link className="flex flex-col space-y-1 mb-4" href={`/tags/${tag}`}>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight  capitalize ">{tag}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
