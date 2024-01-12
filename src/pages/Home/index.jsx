import SEOHelmet from "../../components/SEOHelmet";
import Projects from "../../components/Projects";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <>
      <SEOHelmet title={""} />

      <div className="max-w-3xl flex flex-col items-center gap-24 px-4">
        <Hero />
        <Projects />
      </div>
    </>
  );
}
