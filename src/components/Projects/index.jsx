import { motion as m } from "framer-motion";
import RenderProjects from "../Home/RenderProjects";
import RenderSchoolProjects from "../Home/RenderSchool";

export default function Projects() {
  return (
    <m.section animate={{ y: 0, opacity: 1 }} initial={{ y: "10%", opacity: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="flex flex-col gap-16 items-center">
      <RenderProjects />
      <RenderSchoolProjects />
    </m.section>
  );
}
