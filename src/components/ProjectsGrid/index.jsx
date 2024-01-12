import { Link } from "react-router-dom";
import { schoolProjects } from "../../js/schoolProjects";

export default function Projects() {
  return (
    <div className="flex flex-col ">
      {schoolProjects.map((project) => (
        <div key={project.id} className="flex flex-col mb-24">
          <Link to={project.link} className="mb-5 overflow-hidden ">
            <img
              src={project.image}
              alt={project.name}
              className="transition-all duration-300 ease-in-out hover:scale-105"
            />
          </Link>

          <h2>{project.name}</h2>
          <h3>{project.title}</h3>
          <p className="mb-5">{project.description}</p>
          <p className="mb-5">{project.languages}</p>
          <div>
            <Link
              to={project.link}
              className="font-sans font-medium underline mr-5 hover:italic hover:relative hover:left-1"
            >
              Check out
            </Link>
            <Link
              to={project.github}
              className="font-sans font-medium underline hover:italic hover:relative hover:left-1"
            >
              GitHub
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
