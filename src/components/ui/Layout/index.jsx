import { motion as m } from "framer-motion";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <m.div
        initial={{
          background: "#002FA7",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: "10",
        }}
        animate={{ y: "-100%" }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      ></m.div>
      <Header />
      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
