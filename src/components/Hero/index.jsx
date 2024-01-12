import { motion as m } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col gap-16 overflow-hidden ">
      <m.h1
        animate={{ y: 0 }}
        initial={{ y: "-100%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-home font-medium md:text-8xl"
      >
        Mathilde
        <br />
        Elinor
      </m.h1>

      <div className="flex flex-col gap-8 justify-around md:flex-row md:items-center">
        <m.div className="overflow-hidden md:w-1/2">
          <m.h2
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Frontend utvikler
          </m.h2>
          <m.p
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:text-lg"
          >
            Jeg liker å gi liv til idéer ved å skape solide, tilgjengelige og
            engasjerende produkter.
          </m.p>
        </m.div>
        <m.div
          className="bg-primary w-72 h-96 flex flex-col justify-center items-center rounded-blob mx-auto animate-[morph_2.75s_linear_infinite]"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <img
            alt="Mathilde Elinor"
            src="/dist/self1.jpg"
            className="h-80 rounded-blob"
          />
        </m.div>
      </div>
    </section>
  );
}
