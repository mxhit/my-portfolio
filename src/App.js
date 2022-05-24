import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-white bg-dark-mode body-font">
      <Navbar />
      <About />
      <Skills />
      <Testimonials />
      <Footer />
    </main>
  );
}
