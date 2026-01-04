import React, { useState } from "react";
import userActiveSection from "../hooks/userActiveSection";
const sections = ["home", "about", "experience", "projects", "contact"]

export default function Navbar() {
  const active = userActiveSection(sections)
const linkClass =(id)=> `hover:text-white transition cursor-pointer ${
      active === id
        ? "text-white"
        : "text-muted"
    }`
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur border-b border-muted/20">
        <nav className="flex gap-5 justify-between items-center px-6 md:px-16 text-sm sm:text-base py-4">
          <a href="#home" className={`font-semibold text-accent hover:text-white tracking-wider`}>&lt;/&gt;</a>
          <ul className="flex gap-5 md:gap-8 text-md">
            {sections.slice(1).map((id)=>(
               <li key={id}><a href={`#${id}`} className={`${linkClass(id)}`}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
                </a></li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
