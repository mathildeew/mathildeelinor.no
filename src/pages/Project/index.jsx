import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { portableTextComponent } from "../../components/PortableText";
import apiQueries from "../../api/apiQueries";
import SEOHelmet from "../../components/SEOHelmet";
import useClient from "../../hooks/useClient";
import Loader from "../../components/ui/Layout/Loader";
import Error from "../../components/ui/Layout/Error";

export default function Project() {
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

  return (
    <>
      {isSuccess && (
        <>
          <SEOHelmet title={project.title} content="" />

          <div className="max-w-4xl px-4 grid gap-10">
            <section className="flex flex-col gap-10">
              <Link to="/prosjekter" className="flex items-center gap-2 mx-auto">
                <FontAwesomeIcon icon={faLongArrowLeft} />
                Se alle prosjekter
              </Link>
              <m.h1 animate={{ y: 0 }} initial={{ y: "-20px" }} transition={{ delay: 0.5, duration: 0.5 }} className="text-6xl text-center md:text-9xl">
                {project.title}
              </m.h1>
              <m.div animate={{ y: 0 }} initial={{ y: "2%" }} transition={{ delay: 0.5, duration: 0.5 }}>
                <img src={project.focusImage} alt={project.title} />
              </m.div>

              <section className="grid gap-4 lg:grid-cols-3">
                <div>
                  <h2 className="underline">Ansvar</h2>
                  <p>{project.resp}</p>
                </div>
                <div>
                  <h2 className="underline">URL</h2>
                  <a href={project.url}>{project.url}</a>
                </div>
                <div>
                  <h2 className="underline">GitHub</h2>
                  <a href={project.github}>{project.github}</a>
                </div>
              </section>
            </section>

            <section>
              <PortableText value={project.content} components={portableTextComponent} />
            </section>
          </div>
        </>
      )}

      {isLoading && <Loader />}
      {isError && <Error />}
    </>
  );
}
