// import React from "react";

// export default function Hero() {
//   return (
//     <>
//       <section id="home" className="h-[80vh] flex flex-col justify-center px-6 md:px-16">
//         <h1 className="text-6xl font-bold leading-light">
//            Hello,
//           <br />
//           <span className="text-accent">&gt; I'm Anurag</span>
//         </h1>

//         <p className="mt-8 text-muted max-w-xl">
//            <span className="text-white font-semibold"></span>Recent Computer
//           Engineering Graduate focused on building scalable MERN
//           applications.
//         </p>
//         <button className="mt-10 w-fit px-6 py-2 border border-muted rounded-md hover:border-accent transition">
//           Read more
//         </button>
//       </section>
//     </>
//   );
// }

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 overflow-hidden"
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hello,<br />
        <span className="text-accent">
          &gt; I’m Anurag
          {/* Focused on Backend & APIs */}
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-muted leading-relaxed">
        A Recent Computer Engineering graduate focused on building scalable MERN applications.
      </p>

      <div className="mt-10 flex gap-4">
        {/* Optional: GitHub */}
        <a
          href="https://github.com/anuragkumar-git"
          target="_blank"
          className=" px-6 py-2 text-muted border border-muted rounded-md hover:border-accent hover:text-white transition"
        >
          GitHub →
        </a>
      </div>
    </section>
  );
}
