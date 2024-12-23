import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";
import Layout from "./ui/Layout";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import SchoolProjects from "../pages/Projects/SchoolProjects";
import SchoolProject from "../pages/schoolProject";
import Guestbook from "../pages/Guestbook";
import Register from "../pages/Guestbook/Register";
import Login from "../pages/Guestbook/Login";

export default function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="prosjekter" element={<Projects />} />
          <Route path="prosjekter/:slug" element={<Project />} />
          <Route path="prosjekter/skolearbeider" element={<SchoolProjects />} />
          <Route path="prosjekter/skolearbeider/:slug" element={<SchoolProject />} />
          <Route path="gjesteboka" element={<Guestbook />} />
          <Route path="gjesteboka/lag-bruker" element={<Register />} />
          <Route path="gjesteboka/logg-inn" element={<Login />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
