import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { client } from "../../../../api/sanity-utils";
import apiQueries from "../../../../api/apiQueries";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState([]);
  const [disco, setDisco] = useState(false);

  function hideOnScroll() {
    if (window.scrollY > 3) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hideOnScroll);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await client.fetch(apiQueries().constants);
        setData(info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="w-full max-w-900 h-full flex justify-end mx-auto mb-16 relative z-50  md-750:w-fit md-750:py-5">
      <m.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }} className="md-750:hidden">
        <FontAwesomeIcon aria-label="Åpne og lukke meny" size="2x" className={`p-1.5 relative top-5 right-5 z-20 transition-all duration-500 ease-in-out ${showMenu && "text-secondary rotate-90"}`} icon={faEllipsis} onClick={() => setShowMenu(!showMenu)} />

        <div className={`bg-primary w-full h-screen absolute right-0 z-10 flex justify-end transition-all duration-700 ease-in-out md-750:w-72 xl-1400:-left-8 ${showMenu ? "top-0 opacity-1" : "-top-[780px] opacity-0"}`}>
          <div className="pt-32 pr-8 z-30 flex flex-col gap-16">
            <div className="text-end flex flex-col gap-5">
              <Link to="/" onClick={() => setShowMenu(false)} className="text-secondary text-3xl hover:relative hover:left-1 hover:italic">
                Hjem
              </Link>
              <Link to={data.cv} target="_blank" onClick={() => setShowMenu(false)} className="text-secondary text-3xl hover:relative hover:left-1 hover:italic">
                CV
              </Link>
            </div>

            <div className="text-end flex flex-col justify-end gap-4 ">
              <span className="text-secondary font-sans text-xl uppercase">Si hei</span>
              <Link to="mailto: hei@mathildeelinor.no" className="text-secondary font-sans  hover:italic">
                hei@mathildeelinor.no
              </Link>

              <div>
                <Link to="https://github.com/mathildeew">
                  <FontAwesomeIcon size="2x" icon={faGithub} className="text-secondary p-2.5" />
                </Link>
                <Link to="https://www.linkedin.com/in/mathilde-elinor-wiik-88075b249/">
                  <FontAwesomeIcon size="2x" icon={faLinkedin} className="text-secondary p-2.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </m.nav>

      <m.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }} className="hidden md-750:flex gap-10">
        <Link to="/" x className="underline duration-150 ease-in-out hover:-skew-x-12 hover:font-semibold hover:translate-x-1">
          Hjem
        </Link>
        <Link to={data.cv} target="_blank" className="underline duration-150 ease-in-out hover:-skew-x-12 hover:font-semibold hover:translate-x-1">
          CV
        </Link>
        <Link to="/kontakt-meg" x className="underline duration-150 ease-in-out hover:-skew-x-12 hover:font-semibold hover:translate-x-1">
          Kontakt meg
        </Link>
      </m.nav>
    </header>
  );
}
