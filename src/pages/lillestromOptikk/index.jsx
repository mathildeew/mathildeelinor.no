import { motion as m } from "framer-motion";
import SEOHelmet from "../../components/SEOHelmet";

export default function LillestromOptikk() {
  return (
    <>
      <SEOHelmet title={"| Lillestrøm Optikk"} content="" />
      <div className="max-w-3xl flex flex-col gap-24 px-4">
        <section className="flex flex-col gap-16">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "-20px" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center md:text-9xl"
          >
            Lillestrøm Optikk
          </m.h1>
          <m.div
            animate={{ y: 0 }}
            initial={{ y: "2%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img
              src="/projects/lillestromOptikk/lillestromWeb2.jpg"
              alt="Web mockup"
            />
          </m.div>
        </section>

        <section className="flex flex-col gap-12">
          <div>
            <h2>Ansvar</h2>
            <p>
              Utforming av visuell identitet, design og utvikling av nettside
              samt produksjon av markedsføringsmateriell for print og SoMe.
            </p>
          </div>

          <div>
            <h2>Nettside</h2>
            <a href="https://www.lillestromoptikk.no">
              www.lillestromoptikk.no
            </a>
          </div>
          <img
            src="/dist/projects/lillestromOptikk/lillestromoptikk-banner.png"
            alt="Logo"
          />
          <p>
            Høsten 2023 åpnet Lillestrøm Optikk dørene &mdash; den nye lokale
            optikeren på Romerike. Målet med prosjektet var en designprofil og
            nettside som skiller seg ut i mengden, men likevel tydeliggjør
            hvilke tjenester bedriften tilbyr ved et profesjonelt uttrykk med
            innslag av grafiske elementer og litt humor.
          </p>

          <div className="flex items-center gap-8 mx-auto md:gap-12">
            <p className="text-xl md:text-2xl">
              En halv brille? Et øye? Et cylinderglass? Kanskje alle tre. Men i
              hvert fall Ø for Øystein, optikeren hos Lillestrøm Optikk.
            </p>
            <img
              src="/public/projects/lillestromOptikk/lillestrom-logoelement.jpg"
              className="w-1/2"
            />
          </div>
        </section>

        <section className="flex flex-col gap-12">
          <div>
            <h2>Nettside</h2>
            <img src="/public/projects/lillestromOptikk/web1.jpg" />
          </div>
          <div>
            <h3>Bygget med</h3>
            <p>React</p>
            <p>Tailwind CSS</p>
            <p>EmailJS</p>
            <p>Integrert bookingsystem via en allerede eksisterende API</p>
          </div>
          <p>
            Lillestrøm Optikk overtok en relativt voksen kundegruppe fra
            tidligere eier, og har et behov for å nå ut til et yngre publikum.
            Selv om målet er å treffe denne kundebasen må ikke designet og
            tekster gå på bekostning av hva butikken først og fremst gjør; å
            være autorisert helsepersonell som utfører synsundersøkelser.
          </p>
          <img src="/public/projects/lillestromOptikk/lillestrom-fonts.jpg" />
          <p>
            I tillegg til å design og utvikling, har jeg skrevet all tekst. Med
            trygge skrifttyper, kontrast og god fontstørrelse håper jeg brukere
            unngår mysing og hodepine.
          </p>
        </section>

        <section className="pb-72 flex flex-col gap-12  ">
          <div>
            <h2>Butikken</h2>
          </div>
          <div className="w-3/4 relative">
            <img
              src="/projects/lillestromOptikk/lillestrom-fasade3.jpg"
              className=""
            />
            <img
              src="/projects/lillestromOptikk/lillestrom-fasade2.jpg"
              className="w-2/3 absolute top-3/4 left-1/2"
            />
          </div>
        </section>
      </div>
    </>
  );
}
