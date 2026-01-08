import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="px-3 sm:px-6 md:px-16 py-4 sm:py-5 text:sm sm:text-md text-muted border-t border-muted/20">
        <div className="flex gap-6">
          {/* <span>©{new Date().getFullYear()} Anurag</span> */}
          <a className="hover:text-white" href="https://github.com/anuragkumar-git" target="_blank">GitHub</a>
          <a className="hover:text-white" href="https://linkedin.com/in/anurag-patel-2b4580320" target="_blank">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
