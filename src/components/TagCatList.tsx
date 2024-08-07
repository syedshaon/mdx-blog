import Link from "next/link";

const TagCatList = ({ val, href, id }) => {
  return (
    <Link key={id} className=" px-3 py-2 m-3 lg:px-5 lg:py-3 lg:m-5 border border-gray-700 text-neutral-900 dark:text-gray-50 tracking-tight  capitalize hover:bg-gray-300 dark:hover:bg-gray-700 transition-all   duration-300" href={`/${href}/${val}`}>
      {val}
    </Link>
  );
};

export default TagCatList;
