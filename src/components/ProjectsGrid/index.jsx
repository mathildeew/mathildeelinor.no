import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(apiQueries().project);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(projects);

  return (
    <div className="flex flex-col ">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col mb-24">
          <Link to={project.link} className="mb-5 overflow-hidden ">
            <img src={project.focusImage} alt={project.title} className="transition-all duration-300 ease-in-out hover:scale-105" />
          </Link>
        </div>
      ))}

      {/* {schoolProjects.map((project) => (
        <div key={project.id} className="flex flex-col mb-24">
          <Link to={project.link} className="mb-5 overflow-hidden ">
            <img src={project.image} alt={project.name} className="transition-all duration-300 ease-in-out hover:scale-105" />
          </Link>

          <h2>{project.name}</h2>
          <h3>{project.title}</h3>
          <p className="mb-5">{project.description}</p>
          <p className="mb-5">{project.languages}</p>
          <div>
            <Link to={project.link} className="font-sans font-medium underline mr-5 hover:italic hover:relative hover:left-1">
              Check out
            </Link>
            <Link to={project.github} className="font-sans font-medium underline hover:italic hover:relative hover:left-1">
              GitHub
            </Link>
          </div>
        </div>
      ))} */}
    </div>
  );
}
