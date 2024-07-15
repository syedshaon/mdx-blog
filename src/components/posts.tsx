import Link from "next/link";
import { formatDate } from "@/app/blog/utils";
import Image from "next/image";

import Pagination from "./pagination";

export function BlogPosts({ allBlogs }) {
  const SortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
      return -1;
    }
    return 1;
  });

  // console.log("length: ", SortedBlogs.length);
  return (
    <>
      {/* MOVED TO PAGINATION */}
      {/* <div className="  flex flex-wrap justify-between items-stretch">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link key={post.slug} className=" w-full lg:w-[47%]  border-gray-300 shadow rounded-md border  flex flex-col space-y-1 m-4" href={`/blog/${post.slug}`}>
              <div className="p-5 w-full flex flex-col   space-x-0 md:space-x-2">
                {post.metadata.coverImage ? (
                  <div className="w-full h-[300px] mb-7 relative">
                    <Image className="object-cover coverImage" src={`/images/${post.metadata.coverImage}`} fill alt={post.metadata.title} />
                  </div>
                ) : (
                  <div className="w-full h-[300px] mb-7 relative bg-gray-200 rounded"></div>
                )}

                <p className="text-neutral-900 text-2xl font-bold dark:text-neutral-100 tracking-tight">{post.metadata.title}</p>

                <p className="text-neutral-600 dark:text-neutral-400  tabular-nums text-xs">
                  Posted by {post.metadata.author} on {formatDate(post.metadata.date, false)}
                </p>
              </div>
            </Link>
          ))}
      </div> */}
      <Pagination itemsPerPage={10} allBlogs={SortedBlogs} />
    </>
  );
}
