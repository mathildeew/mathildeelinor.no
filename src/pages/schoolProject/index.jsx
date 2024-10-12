import { useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import SEOHelmet from "../../components/SEOHelmet";

export default function SchoolProject() {
  const slug = useParams();
  console.log(slug);
  // const name = id.id;
  // const project = schoolProjects.find((project) => project.id === id.id);

  return (
    <>
      <p>hhhh</p>
      {/* <SEOHelmet title={` | ${project.name} - ${project.title}`} content="" />
      <section className="max-w-3xl flex flex-col gap-10 px-4">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "-20px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-center md:text-9xl"
        >
          {project.name}
        </m.h1>

        <m.div
          animate={{ y: 0 }}
          initial={{ y: "2%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        ></m.div>

        <img src={project.image} className="" />
        <div className="flex items-center gap-3 font-semibold">
          <a href={project.github} className="underline">
            Github
          </a>
          <p>/</p>
          <a href={project.link} className="underline">
            Demo
          </a>
        </div>
        <p>{project.description}</p>
        <p>{project.languages}</p>
      </section> */}
    </>
  );
}
