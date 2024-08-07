import { getBlogPosts } from "@/app/blog/utils";
import TagCatList from "./TagCatList";

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
    <div className="w-full flex flex-wrap justify-between   ">
      {[...new Set(Categories)].map((category, id) => (
        <TagCatList val={category} href="categories" id={id} key={id} />
      ))}
    </div>
  );
}
