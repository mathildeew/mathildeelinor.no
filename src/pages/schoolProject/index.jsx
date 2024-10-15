import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { client } from "../../api/sanity-utils";
import SEOHelmet from "../../components/SEOHelmet";
import useClient from "../../hooks/useClient";
import apiQueries from "../../api/apiQueries";

export default function SchoolProject() {
  const { slug } = useParams();
  const [project, setProject] = useState([]);

  const { fetchSanity, isLoading, isSuccess, isError } = useClient;

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(apiQueries(slug).schoolProject);
      setProject(data);
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <SEOHelmet title={`${project.title} - ${project.assignment}`} content="" />

      <section className="max-w-4xl px-4 grid gap-10">
        <Link to="/prosjekter" className="flex items-center gap-2 mx-auto">
          <FontAwesomeIcon icon={faLongArrowLeft} />
          Se alle prosjekter
        </Link>
        <m.h1 animate={{ y: 0 }} initial={{ y: "-20px" }} transition={{ delay: 0.5, duration: 0.5 }} className="text-6xl text-center md:text-9xl">
          {project.title}
        </m.h1>

        <m.div animate={{ y: 0 }} initial={{ y: "2%" }} transition={{ delay: 0.5, duration: 0.5 }}>
          <img src={project.preview} alt={project.title} />
        </m.div>

        <div className="flex items-center gap-3 font-semibold">
          <a href={project.github} className="hover:underline">
            Github
          </a>
          <p>/</p>
          <a href={project.demo} className="hover:underline">
            Demo
          </a>
        </div>
        <p>{project.info}</p>
        <p>{project.builtWith}</p>
      </section>
    </>
  );
}
