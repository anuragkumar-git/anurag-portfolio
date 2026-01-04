import React from "react";

export default function ProjectCard({ project, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="border text-start border-muted/30 p-6 rounded-lg cursor-pointer transition-all duration-300 ease-out hover:border-accent/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] focus:outline-none  focus:ring-2 focus:ring-accent   "
      >
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-muted mt-2">{project.desc}</p>
        <p className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </p>
      </button>
    </div>
  );
}
