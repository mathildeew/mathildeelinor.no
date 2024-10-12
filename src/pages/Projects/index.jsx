import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import apiQueries from "../../api/apiQueries";
import SEOHelmet from "../../components/SEOHelmet";
import useClient from "../../hooks/useClient";
import { portableTextComponent } from "../../components/PortableText";

export default function Projects() {
  const { slug } = useParams();
  const [project, setProject] = useState([]);

  const { fetchSanity, isLoading, isSuccess, isError } = useClient();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSanity(apiQueries(slug).project);
      setProject(data);
    };

    fetchData();
  }, [slug]);

  console.log(project.content);

  return (
    <>
      {isSuccess && (
        <>
          <SEOHelmet title={""} content="" />

          <div className="max-w-3xl px-4 grid gap-8">
            <Link to="/prosjekter" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLongArrowLeft} />
              Se alle prosjekter
            </Link>
            <section className="flex flex-col gap-16">
              <m.h1 animate={{ y: 0 }} initial={{ y: "-20px" }} transition={{ delay: 0.5, duration: 0.5 }} className="text-6xl text-center md:text-9xl">
                {project.title}
              </m.h1>
              <m.div animate={{ y: 0 }} initial={{ y: "2%" }} transition={{ delay: 0.5, duration: 0.5 }}>
                <img src={project.focusImage} alt="Lillestrøm Optikk" />
              </m.div>

              <section className="grid gap-4">
                <div>
                  <h2>Rolle</h2>
                  <p>{project.role}</p>
                </div>
                <div>
                  <h2>Ansvar</h2>
                  <p>{project.resp}</p>
                </div>
                <div>
                  <h2>URL</h2>
                  <a href={project.url}>{project.url}</a>
                </div>
              </section>
            </section>

            <section>
              <PortableText value={project.content} components={portableTextComponent} />
            </section>
          </div>
        </>
      )}
    </>
  );
}
