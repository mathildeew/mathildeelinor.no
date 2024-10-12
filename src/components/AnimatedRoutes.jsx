import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";
import Layout from "./ui/Layout";
import NotFound from "../pages/NotFound";
import SchoolProject from "../pages/schoolProject";
import Projects from "../pages/Projects";

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
          <Route path="prosjekter/:slug" element={<Projects />} />
          <Route path="prosjekter/skolearbeid-:slug" element={<SchoolProject />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
