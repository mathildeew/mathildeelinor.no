import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { client } from "../../api/sanity-utils";
import apiQueries from "../../api/apiQueries";

export default function RenderProjects() {
  const [projects, setProjects] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(apiQueries().projects);
      setProjects(data);
    };

    fetchData();
  }, []);

  return (
    <section className="grid gap-8">
      {pathname !== "/prosjekter" && <h2>Prosjekter</h2>}
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Link to={`/prosjekter/${project.slug}`} className=" overflow-hidden">
            <img src={project.focusImage} alt={project.title} className="w-fit transition-all duration-300 ease-in-out hover:scale-105" />
          </Link>
        </div>
      ))}
    </section>
  );
}
