export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center px-3 sm:px-6 md:px-16 overflow-hidden"
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hello,
        <br />
        <p className="text-accent">
          <span className="tracking-tighter">&gt; I’m</span> Anurag
        </p>
      </h1>

      <p className="mt-8 max-w-xl text-muted leading-relaxed">
        A Computer Engineering graduate focused on building scalable MERN
        applications.
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
