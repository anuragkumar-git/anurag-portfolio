import { useRef, useState } from "react";
import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";
import ProjectCard from "./ProjectCard";
import ProjectModel from "./ProjectModel";

export default function Projects() {
  const { ref, isVisible } = useReveal();
  const [selected, setSelected] = useState(null);
  const cardRefs = useRef([])

  const handleOpen = (project, index) =>{
    cardRefs.current[index]?.scrollIntoView({
      behavior:"smooth",
      block: "center",
      inline:"center",
    })
    setSelected(project)
  }

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className={`px-3 sm:px-6 md:px-16 pt-20 pb-26 reveal ${
          isVisible ? "reveal-visible" : ""
        }`}
      >
        <h2 className="text-2xl text-accent mb-10">Projects</h2>
        
        {/* Carousel Container */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el)=>(cardRefs.current[index] = el)}
              className="min-w-[86%] sm:min-w-[55%] md:min-w-[45%] lg:min-w-[35%] xl:min-w-[23%] 2xl:min-w-[18%] snap-start"
            >
              <ProjectCard
                project={project}
                onClick={() => handleOpen(project, index)}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <ProjectModel project={selected} onClose={() => setSelected(null)} />
        )}
      </section>
    </>
  );
}
