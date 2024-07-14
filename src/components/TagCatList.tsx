import Link from "next/link";

const TagCatList = ({ val, href, key }) => {
  return (
    <Link key={key} className=" px-5 py-3 m-3 lg:px-10 lg:py-5 lg:m-5 border border-gray-700 text-neutral-900 dark:text-gray-50 tracking-tight  capitalize hover:bg-gray-300 dark:hover:bg-gray-700 transition-all   duration-300" href={`/${href}/${val}`}>
      {val}
    </Link>
  );
};

export default TagCatList;
