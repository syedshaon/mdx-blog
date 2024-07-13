import Link from "next/link";
import { formatDate, getBlogPostsWithTag } from "@/app/blog/utils";
import Image from "next/image";

const page = ({ params }) => {
  let allBlogs = getBlogPostsWithTag(params.slug);
  console.log("allblogs :", allBlogs);

  if (allBlogs.length < 1) {
    return <div className="w-full h-[70vh] flex justify-center items-center">No Posts with {decodeURIComponent(params.slug)} tag. </div>;
    // notFound();
  }

  return (
    <div>
      <h1 className="font-semibold text-2xl my-1 tracking-tighter">Posts with {decodeURIComponent(params.slug)} tag. </h1>
      <hr className="w-full h-[1px] bg-gray-700  mb-8" />
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
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
};

export default page;
