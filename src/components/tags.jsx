import { getBlogPosts } from "@/app/blog/utils";
import TagCatList from "./TagCatList";

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
      {[...new Set(Tags)].map((tag, id) => (
        <TagCatList val={tag} href="tags" key={id} />
      ))}
    </div>
  );
}
