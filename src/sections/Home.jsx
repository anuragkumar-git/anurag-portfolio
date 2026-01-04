import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </>
  );
}
