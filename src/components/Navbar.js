import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-50 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-gray-900 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Mohit Dodhia
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700
            flex flex-wrap items-center text-base justify-center">
          <a href="#skills" className="mr-4 hover:text-black">
            Skills
          </a>
          <a href="#testimonials" className="mr-4 hover:text-black">
            Testimonials
          </a>
          <a href="https://mxhit.hashnode.dev/" className="hover:text-black w-6 h-6 flex-shrink-0 mr" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none
            hover:bg-yellow-600 rounded text-base text-white mt-4 md:mt-0">
          Contact Me
        </a>
      </div>
    </header>
  );
}