import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";
import Layout from "./ui/Layout";
import NotFound from "../pages/NotFound";
import LillestromOptikk from "../pages/lillestromOptikk";
import SchoolProject from "../pages/schoolProject";

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
          <Route pat="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="lillestrom-optikk" element={<LillestromOptikk />} />
          <Route path="skolearbeider/:id" element={<SchoolProject />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
