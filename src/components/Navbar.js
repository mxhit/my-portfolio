import React from "react";

export default function Navbar() {
  return (
    <header className="bg-orange-accent md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a href="#about" className="title-font font-medium font-press-start text-white mb-4 md:mb-0 ml-3 text-xl hover:text-dark-mode">
            Mohit Dodhia
        </a>
        <nav className="md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          <a href="#skills" className="mr-4 hover:text-black">
            Skills
          </a>
          <a href="#testimonials" className="mr-4 hover:text-black">
            Testimonials
          </a>
          <a href="https://mxhit.github.io/" className="hover:text-black w-6 h-6 flex-shrink-0" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}