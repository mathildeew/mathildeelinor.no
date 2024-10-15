import { motion as m } from "framer-motion";
import RenderProjects from "./Rendering/RenderProjects";
import RenderSchoolProjects from "./Rendering/RenderSchool";

export default function ProjectsGrid() {
  return (
    <m.section animate={{ y: 0, opacity: 1 }} initial={{ y: "10%", opacity: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="max-w-3xl px-4 flex flex-col gap-16 items-center">
      <RenderProjects />
      <RenderSchoolProjects />
    </m.section>
  );
}
