"use client";
import React, { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/app/blog/utils";
import Image from "next/image";

import ReactPaginate from "react-paginate";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((post, key) => (
          <Link key={key} className=" w-full lg:w-[47%]  border-gray-300 shadow rounded-md border  flex flex-col space-y-1 m-4" href={`/blog/${post.slug}`}>
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

              <p className="text-neutral-900     dark:text-neutral-100 tracking-tight mt-3 text-justify">{post.metadata.excerpt}</p>
            </div>
          </Link>
        ))}
    </>
  );
}
// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Pagination({ itemsPerPage, allBlogs }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allBlogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allBlogs.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allBlogs.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="    flex flex-wrap justify-between items-stretch">
        <Items currentItems={currentItems} />
      </div>

      {/* <ReactPaginate breakLabel="..." nextLabel="next >" onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="< previous" renderOnZeroPageCount={null} /> */}
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="rounded-md cursor-pointer page-item   px-4 py-2 flex justify-center items-center bg-gray-400"
        pageLinkClassName="page-link"
        previousClassName=" rounded-md page-item cursor-pointer bg-gray-700 text-white px-4 py-2"
        previousLinkClassName="page-link cursor-pointer"
        nextClassName="rounded-md page-item cursor-pointer bg-gray-700 text-white px-4 py-2"
        nextLinkClassName="page-link "
        breakLabel="... ..."
        breakClassName="page-item "
        breakLinkClassName="page-link"
        containerClassName="pagination flex justify-between bg-gray-300 p-3 rounded-md mt-10"
        activeClassName="active !bg-gray-700 text-white   "
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
