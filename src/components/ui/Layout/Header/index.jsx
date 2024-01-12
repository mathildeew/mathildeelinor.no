import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function hideOnScroll() {
    if (window.scrollY > 3) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hideOnScroll);
  });

  return (
    <header className="w-full max-w-900 h-full flex justify-end mx-auto mb-16">
      <m.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
        className="md-900:relative"
      >
        <FontAwesomeIcon
          aria-label="Åpne/lukke meny"
          size="2x"
          className={`p-1.5 relative top-5 right-5 z-20 transition-all duration-500 ease-in-out ${
            showMenu && "text-secondary rotate-90"
          }`}
          icon={faEllipsis}
          onClick={() => setShowMenu(!showMenu)}
        />

        <div
          className={`bg-primary w-full h-screen absolute right-0 z-10 flex justify-end transition-all duration-500 ease-in-out md-750:w-72 xl-1400:-left-8 ${
            showMenu ? "top-0 opacity-1" : "-top-full opacity-0"
          }`}
        >
          <div className="pt-32 pr-8 z-30 flex flex-col gap-16 ">
            <ul className="text-end flex flex-col gap-5">
              <li>
                <Link
                  to="/"
                  onClick={() => setShowMenu(false)}
                  className="text-secondary text-3xl hover:relative hover:left-1 hover:italic"
                >
                  Hjem
                </Link>
              </li>
              <li>
                <Link
                  to="/dist/CV_MathildeElinor.pdf"
                  target="_blank"
                  onClick={() => setShowMenu(false)}
                  className="text-secondary text-3xl hover:relative hover:left-1 hover:italic"
                >
                  CV
                </Link>
              </li>
            </ul>

            <div className="text-end flex flex-col justify-end gap-4 ">
              <span className="text-secondary font-sans text-xl uppercase">
                Si hei
              </span>
              <Link
                to="mailto: hei@mathildeelinor.no"
                className="text-secondary font-sans  hover:italic"
              >
                hei@mathildeelinor.no
              </Link>

              <div>
                <Link to="https://github.com/mathildeew">
                  <FontAwesomeIcon
                    size="2x"
                    icon={faGithub}
                    className="text-secondary p-2.5"
                  />
                </Link>
                <Link to="https://www.linkedin.com/in/mathilde-elinor-wiik-88075b249/">
                  <FontAwesomeIcon
                    size="2x"
                    icon={faLinkedin}
                    className="text-secondary p-2.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </m.nav>
    </header>
  );
}
