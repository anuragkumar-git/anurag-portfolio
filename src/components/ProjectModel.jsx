import React, { useEffect } from "react";

export default function ProjectModel({ project, onClose }) {
  if (!project) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const original = document.body.style.overflow;
    // console.info("Modal mounted → lock scroll");
    document.body.style.overflow = "hidden";

    return () => {
      // console.info("Modal unmounted → unlock scroll");
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-0 backdrop-blur-sm flex justify-center px-3 sm:px-4"
        onClick={onClose}
      >
        <div
          className="bg-panel/80 max-w-2xl w-full rounded-lg p-6 relative max-h-[90vh] overflow-y-auto no-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          <button  onClick={onClose} className="absolute top-4 right-4 text-xl">
            ✕
          </button>

          <h2 className="text-2xl border-b pb-2 border-muted/30 font-bold mb-4">
            {project?.title}
          </h2>
          <p className="text-muted mb-6">
            {project?.fullDesc || project?.desc}
          </p>

          {project?.features?.length > 0 && (
            <>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-muted mb-6">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </>
          )}
          {project?.tech?.length > 0 && (
            <>
              <h3 className="font-semibold mb-2">Tech Stack</h3>
              <p className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </p>
            </>
          )}
          <div className="flex gap-4">
            {project?.links?.github && (
              <a
                href={project?.links?.github}
                target="_blank"
                className="border px-4 py-2 rounded-md hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
            )}
            {project?.links?.live && (
              <a
                href={project?.links?.live}
                target="_blank"
                className="border px-4 py-2 rounded-md hover:border-accent hover:text-accent"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
