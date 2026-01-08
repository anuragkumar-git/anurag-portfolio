import useReveal from "../hooks/useReveal";

export default function Experience() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className={`px-3 sm:px-6 md:px-16 pt-20 pb-26 reveal ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <h2 className="text-2xl text-accent mb-10">
        Experience
      </h2>

      <div className="border border-muted/30 rounded-lg p-6 bg-panel/40">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-xl font-semibold">
            MERN Stack Training (Project-Based)
          </h3>
          <span className="text-sm text-muted">
            Jan 2025 – Apr 2025
          </span>
        </div>

        <p className="text-muted mb-4">
          Royal Technosoft
        </p>

        <ul className="list-disc list-inside text-muted space-y-2">
          <li>
            Learned and applied MERN stack fundamentals through guided,
            project-based training.
          </li>
          <li>
            Understood the complete project development lifecycle including
            idea discussion, documentation, schema design, and implementation.
          </li>
          <li>
            Worked on <span className="font-medium">NEXORA</span>, a deal
            discovery platform, extending the base idea with additional
            features and real-world use cases.
          </li>
          <li>
            Focused primarily on backend development using Node.js,
            Express.js, MongoDB and other tools.
          </li>
          <li>
            Designed REST APIs, authentication flows, and database schemas.
          </li>
          <li>
            Collaborated with peers using Git and followed structured
            project practices.
          </li>
        </ul>
      </div>
    </section>
  );
}
