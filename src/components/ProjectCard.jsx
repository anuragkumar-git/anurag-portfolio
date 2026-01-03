import React from "react";

export default function ProjectCard({ project, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className="border border-muted/30 p-6 rounded-lg cursor-pointer hover:border-accent transition"
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
      </div>
    </>
  );
}
