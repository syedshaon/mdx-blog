"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Toggle } from "./Toggle";

const navItems = {
  "/": {
    name: "Home",
  },

  "/categories": {
    name: "Categories",
  },
  "/tags": {
    name: "Tags",
  },
  "/rss": {
    name: "RSS",
  },
  "/blog": {
    name: "Blog",
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-black text-sm p-2 md:p-3  bg-gray-300 dark:bg-gray-950 dark:text-gray-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" text-3xl flex   items-center ">
          WP<span className="text-lg">2</span>NextJS
        </Link>
        <div className="hidden lg:flex lg:items-center space-x-6 ml-auto mr-5">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path} className="transition-all  duration-100 border-transparent hover:border-b-black dark:hover:border-b-white  border-b-2 capitalize px-3">
                {name}
              </Link>
            );
          })}
        </div>

        <div className="lg:hidden ml-auto mr-5 mt-1">
          <button onClick={toggleMenu} className="text-black dark:text-gray-50 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <Toggle />
      </div>
      {isOpen && (
        <div className=" lg:hidden text-black p-4 md:p-6  bg-gray-300 dark:bg-gray-950 dark:text-gray-50   fixed top-0 left-0 w-screen h-screen flex justify-center items-center flex-col z-50">
          <div className="lg:hidden absolute   top-5    right-12">
            <button aria-label="mobile menu" onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              <span className="sr-only">Menu Button</span>
            </button>
          </div>

          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link onClick={toggleMenu} key={path} href={path} className="capitalize transition-all block px-4 py-2   border-transparent hover:border-b-white  border-b-2">
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
