import { motion as m } from "framer-motion";
import gsap from "gsap";
import SEOHelmet from "../SEOHelmet";
import { useEffect } from "react";

export default function DigitalTrash() {
  const mygg = gsap.timeline({
    repeat: -1,
  });

  useEffect(() => {
    mygg
      .to("#mygg", {
        translateY: "0px",
        scaleX: "1.5",
        scaleY: "0.7",
        ease: "power1.inOut",
        transformOrigin: "bottom center",
        duration: 1,
      })
      .to("#mygg", {
        scaleX: "1",
        scaleY: "1.3",
        translateY: "-150px",
        ease: "power1.inOut",
        duration: 1.5,
      })
      .to("#mygg", {
        translateY: "0px",
        scale: "1",
        ease: "power1.out",
        duration: 1,
      });
  }, []);

  return (
    <>
      <SEOHelmet
        title={"| Digital søppelkasse"}
        content="Digital søppelkasse. Alle idèer som fikk komme til liv, men ikke fikk en plass."
      />
      <div className="max-w-3xl flex flex-col gap-24 px-4">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "-20px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-center md:text-9xl"
        >
          Den digitale søppelkassen
        </m.h1>
        <p>
          Ikke alle idèer er gode, men jeg må bare putte dem et sted så det ikke
          går i glemmeboka.
        </p>
      </div>
      <div className="max-w-[800px]">
        <img src="/public/trash/fengselsmattii.jpg" />
        <p>Mimrer tilbake til da jeg var ung og ulovlig god på PS2.</p>
      </div>
      <div>
        <h2>Emoji-kombinasjoner du og jeg kan/bør bruke oftere</h2>
        <div>
          <p className="text-5xl">😯🪒😦</p>
          <p>Om du var uheldig å barbere av begge øyebryn.</p>
        </div>
        <div>
          <p className="text-5xl">🦦🎣</p>
          <p>På fisketur!</p>
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-7xl">🌪</p>
            <p className="text-5xl">🤸🏼</p>
          </div>
          <p>Om du ble tatt av en tornado</p>
        </div>
        <div>
          <p className="text-5xl">😎🤏😳🕶</p>
          <p>"Unnskyld meg, men hva sa du nå?!!"</p>
        </div>
        <div>
          <p className="text-5xl">🕳👩‍🦯</p>
          <p>...</p>
        </div>
        <div>
          <p className="text-5xl">🛌🤺</p>
          <p>Når det er på tide å stå opp.</p>
        </div>
        <div className="flex gap-40">
          {/* <p className="text-5xl">🦗</p> */}

          <p id="mygg" className="w-fit text-7xl border-2 border-red-500">
            🦟
          </p>
        </div>
      </div>
    </>
  );
}
