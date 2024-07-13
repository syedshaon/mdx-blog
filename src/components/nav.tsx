"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

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
    <nav className=" text-black p-4 md:p-6  bg-gray-300 ">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-black text-3xl flex   items-center ">
          WP<span className="text-lg">2</span>NextJS
        </p>
        <div className="hidden lg:flex lg:items-center space-x-6">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path} className="transition-all text-black border-transparent hover:border-b-black  border-b-2 capitalize px-3">
                {name}
              </Link>
            );
          })}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" lg:hidden bg-black  fixed top-0 left-0 w-screen h-screen flex justify-center items-center flex-col">
          <div className="lg:hidden absolute   top-5    right-12">
            <button aria-label="mobile menu" onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              <span className="sr-only">Menu Button</span>
            </button>
          </div>

          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path} className="capitalize transition-all block px-4 py-2 text-white border-transparent hover:border-b-white  border-b-2">
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
