import { motion as m } from "framer-motion";
import { useState } from "react";

export default function ContactMe() {
  const [hover, setHover] = useState(false);
  const [webMode, setWebMode] = useState(false);
  const [discoMode, setDiscoMode] = useState(false);
  const [coolMode, setCoolMode] = useState(false);

  return (
    <m.section animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="bg-primary w-full h-auto py-4 lg:py-10">
      <div className=" grid justify-center px-4">
        <p className="text-3xl text-secondary font-serif leading-10 md:text-5xl lg:text-7xl md:leading-[80px] lg:leading-[100px] 2xl:text-[100px] 2xl:leading-[120px]">
          Trenger du ny{" "}
          <span className="text-secondary" onMouseEnter={() => setWebMode(true)} onMouseLeave={() => setWebMode(false)}>
            {webMode ? "🖥️ ⚡️ 💻?" : "nettside?"}
          </span>{" "}
          Jeg er alltid interessert i nye{" "}
          <span className="text-secondary" onMouseEnter={() => setDiscoMode(true)} onMouseLeave={() => setDiscoMode(false)}>
            {discoMode ? "🪩 🪩 🪩 " : "spennende"}
          </span>{" "}
          prosjekter! Send meg en{" "}
          <a href="mailto:hei@mathildeelinor.no" className="text-3xl text-secondary font-serif underline md:text-5xl lg:text-7xl" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover ? "✉️ ✉️ ✉️," : "mail,"}
          </a>{" "}
          så lager vi noe{" "}
          <span className="text-secondary" onMouseEnter={() => setCoolMode(true)} onMouseLeave={() => setCoolMode(false)}>
            {coolMode ? "🫧 🥂 ✨ 🍦" : "flott"}
          </span>{" "}
          sammen.
        </p>
      </div>
    </m.section>
  );
}
