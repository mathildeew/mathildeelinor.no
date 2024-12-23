import { motion as m } from "framer-motion";
import { useState, useEffect } from "react";
import { client } from "../../../api/sanity-utils";
import apiQueries from "../../../api/apiQueries";

export default function Hero() {
  const [data, setData] = useState([]);
  const [meTime, setMeTime] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const info = await client.fetch(apiQueries().constants);
      setData(info);
    };
    fetchData();
  }, []);

  return (
    <section className="w-full max-w-2xl px-4 grid overflow-hidden relative">
      <div className="grid gap-10">
        <m.h1 animate={{ y: 0 }} initial={{ y: "-100%" }} transition={{ delay: 0.5, duration: 0.5 }} className="text-home md:text-8xl md:relative md:top-10 z-20" onMouseEnter={() => setMeTime(true)} onMouseLeave={() => setMeTime(false)}>
          Mathilde Elinor
        </m.h1>
        <m.h2 animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          Design og utvikling
        </m.h2>
      </div>

      <img alt="Mathilde Elinor" src={data.image} className={`h-40 rounded-blob absolute right-5 z-10 duration-150 ease-in-out ${meTime ? "opacity-1" : "opacity-0"}`} />
    </section>
  );
}
