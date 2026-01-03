import React from "react";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="px-6 md:px-16 py-24 border-t border-muted/10"
      >
        <h2 className="text-2xl text-accent mb-6">Get in Touch</h2>
        <p className="text-muted max-w-xl mb-6">
          {" "}
          I’m open to internships, full-time roles, and freelance opportunities.
          Feel free to reach out.
        </p>
        <a
          href="mailto:patelanurag3971@gmail.com"
          className="inline-block border border-accent px-6 py-2 rounded-md 
          hover:backdrop-blur z-10 hover:bg-accent hover:text-black transition"
        >
          Say Helloo
        </a>
      </section>
    </>
  );
}
