import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../api/sanity-utils";
import apiQueries from "../../api/apiQueries";

export default function RenderSchoolProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(apiQueries().schoolProjects);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <h2>Skolearbeider</h2>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Link to={`/prosjekter/skolearbeider/${project.slug}`} className="overflow-hidden ">
            <img src={project.focusImage} alt={project.name} className="w-full  transition-all duration-300 ease-in-out hover:scale-105" />
          </Link>
          <h3>{project.assignment}</h3>
        </div>
      ))}
    </section>
  );
}
