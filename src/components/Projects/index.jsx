import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../js/projects";
import { schoolProjects } from "../../js/schoolProjects";

export default function About() {
  return (
    <m.section
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: "10%", opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col gap-16 items-center"
    >
      <div>
        <h2>Prosjekter</h2>
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-2">
            <Link to={project.localLink} className=" overflow-hidden">
              <img
                src={project.preview}
                alt={project.name}
                className="w-fit transition-all duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <h3>{project.role}</h3>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <h2>Skolearbeider</h2>
        {schoolProjects.map((project) => (
          <div key={project.id} className="flex flex-col gap-2">
            <Link
              to={`skolearbeider/${project.id}`}
              className="overflow-hidden "
            >
              <img
                src={project.preview}
                alt={project.name}
                className="w-full  transition-all duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </m.section>
  );
}
