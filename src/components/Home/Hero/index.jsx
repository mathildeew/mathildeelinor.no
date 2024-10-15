import { motion as m } from "framer-motion";
import { useState, useEffect } from "react";
import { client } from "../../../api/sanity-utils";
import apiQueries from "../../../api/apiQueries";

export default function Hero() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const info = await client.fetch(apiQueries().constants);
      setData(info);
    };
    fetchData();
  }, []);

  return (
    <section className="max-w-3xl px-4 grid gap-16 overflow-hidden">
      <m.h1 animate={{ y: 0 }} initial={{ y: "-100%" }} transition={{ delay: 0.5, duration: 0.5 }} className="text-home md:text-8xl md:relative md:top-10">
        Mathilde
        <br />
        Elinor
      </m.h1>

      <div className="flex flex-col gap-8 justify-around md:flex-row md:items-center">
        <m.div className="overflow-hidden md:w-1/2">
          <m.h2 animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            Frontend utvikler & designer
          </m.h2>
          <m.p animate={{ y: 0 }} initial={{ y: "100%" }} transition={{ delay: 0.5, duration: 0.5 }} className="md:text-lg">
            Jeg gir liv til idéer ved å skape solide, tilgjengelige og engasjerende nettsider.
          </m.p>
        </m.div>
        <m.div className="bg-primary w-72 h-96 flex flex-col justify-center items-center mx-auto rounded-blob animate-[morph_2.75s_linear_infinite]" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
          <img alt="Mathilde Elinor" src={data.image} className="h-80 rounded-blob" />
        </m.div>
      </div>
    </section>
  );
}
