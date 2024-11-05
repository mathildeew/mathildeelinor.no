import { motion as m } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path !== "/gjesteboka/logg-inn" && path !== "/gjesteboka/lag-bruker" && (
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
      )}
      <Header />
      <main className="w-full flex flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
