import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { client } from "../../api/sanity-utils";
import apiQueries from "../../api/apiQueries";

export default function RenderProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(apiQueries().projects);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="grid gap-8">
      <h2>Prosjekter</h2>
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
