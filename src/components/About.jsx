import useReveal from "../hooks/useReveal";

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`px-6 md:px-16 py-24 reveal ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <h2 className="text-2xl text-accent mb-6">About me</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Summary + Education */}
        <div className="space-y-8">
          {/* Summary */}
          <div>
            <p className="text-muted leading-relaxed">
              A Computer Engineering Graduate (2025) learning backend
              development with the MERN stack through hands-on projects.
              <br />
              Gained practical exposure to REST APIs, authentication, and
              database-driven applications through project- based learning.
              <br />
              Familiar with the complete development lifecycle from planning and
              documentation to development.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="font-medium">B.E. in Computer Engineering</p>
            <p className="text-muted">
              Shree Swaminarayan Institute of Technology, Gandhinagar
            </p>
            <p className="text-sm text-muted">2021 – 2025</p>
          </div>
        </div>

        {/* Right: Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>

          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2 tracking-tight">
                Languages & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "Git", "Postman"].map((s) => (
                  <span key={s} className="tech-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2 tracking-tight">
                Frameworks & Libraries
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "Tailwind CSS",
                  "Bootstrap",
                ].map((s) => (
                  <span key={s} className="tech-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2 tracking-tight">
                Familiar with...
              </p>
              <div className="flex flex-wrap gap-2">
                {["JWT", "Google OAuth", "REST APIs", "MVC Architecture"].map(
                  (s) => (
                    <span key={s} className="tech-badge">
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-12">
        <a
          href={`${import.meta.env.BASE_URL}AnuragCv.pdf`}
          download
          className="inline-block border border-accent px-6 py-2 rounded-md hover:bg-accent hover:text-black transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
