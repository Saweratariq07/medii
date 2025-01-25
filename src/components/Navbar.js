"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiThMenuOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", },
    { name: "Price List", path: "/pricelist",  },
    { name: "Portfolio", path: "/portfolio", },
    { name: "About", path: "/about",},
    { name: "Special Offers", path: "/special",  },
    { name: "Social Media", path: "/contact", },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent p-2 w-full container relative mx-auto">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-28 rotate-logo" />
          </Link>
        </div>

        {/* Centered Navigation Items */}
        <div className="hidden md:flex flex-grow justify-center font-bold items-center font-sans text-xl space-x-6">
          {navItems.map((link, index) => (
            <Link href={link.path || "#"} key={index} className="flex items-center">
           
              <span
                className={`ml-2 font-semibold text-md transition duration-300 ${
                  pathname === link.path
                    ? "text-black"
                    : "text-black "
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <button className="rounded-full bg-[#D39937] text-white font-semibold font-sans py-2 px-4   transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg> */}
               <TiThMenuOutline className="text-yellow-600"/>
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} aria-label="Close menu">
              {/* <svg
                className="w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
              <ImCross className="text-yellow-600"/>
            </button>
          </div>

          <div className="flex flex-col mt-4 space-y-6 p-4">
            {navItems.map((link, index) => (
              <Link
                href={link.path || "#"}
                key={index}
                className="flex items-center"
                onClick={toggleMenu}
              >
                {/* <img
                  src={link.imgSrc}
                  alt={`${link.name} icon`}
                  className="h-5 w-5 mr-2"
                /> */}
                <span
                  className={`font-light text-xl ${
                    pathname === link.path ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <button className="rounded-md bg-gradient-to-r from-blue-950 to-blue-900 text-white font-semibold py-2 px-4 border-2 border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900 transition duration-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
