import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import apiQueries from "../../api/apiQueries";
import useClient from "../../hooks/useClient";
import SEOHelmet from "../../components/SEOHelmet";
import ProjectsGrid from "../../components/ProjectsGrid";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const { fetchSanity, isLoading, isSuccess, isError } = useClient();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSanity(apiQueries().projects);
      setProjects(data);
    };

    fetchData();
  }, []);

  console.log(projects);
  return (
    <>
      {isSuccess && (
        <>
          <SEOHelmet title=" - Prosjekter" content="" />

          <div className="max-w-4xl px-4 grid gap-10">
            <section className="flex flex-col gap-10">
              <m.h1 animate={{ y: 0 }} initial={{ y: "-20px" }} transition={{ delay: 0.5, duration: 0.5 }} className="text-6xl text-center md:text-9xl">
                Prosjekter
              </m.h1>
            </section>
            <ProjectsGrid />
          </div>
        </>
      )}
    </>
  );
}
