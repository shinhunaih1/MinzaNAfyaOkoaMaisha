import React, { useState } from "react";
import Logo from "../assests/images/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-600 border-gray-200 py-2.5 dark:bg-gray-900 fixed w-full z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="/" className="flex items-center gap-2">
          <div className="flex flex-shrink-0 items-center bg-white rounded-full justify-center">
            <img alt="Your Company" src={Logo} className="h-16 w-auto" />
          </div>
          <span className="bg-green-900 text-white rounded-md px-3 py-2 text-sm font-medium">
            Okoa Maisha na Health Info
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-green-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-300 hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-300 hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Non-Communicable Diseases
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-300 hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
