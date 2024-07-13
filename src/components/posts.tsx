import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Image from "next/image";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
            <div className="w-full flex flex-col   space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">{formatDate(post.metadata.date, false)}</p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">{post.metadata.title}</p>
              {post.metadata.coverImage && (
                <div className="w-[800px] h-[400px] relative">
                  <Image className="object-cover coverImage" src={`/images/${post.metadata.coverImage}`} fill alt={post.metadata.title} />
                </div>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}