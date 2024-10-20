import SEOHelmet from "../../components/SEOHelmet";
import ProjectsGrid from "../../components/ProjectsGrid";
import Hero from "../../components/Home/Hero";
import ContactMe from "../../components/Home/Banner/ContactMe";

export default function Home() {
  return (
    <>
      <SEOHelmet title={"Mathilde Elinor"} content={"Trenger du ny nettside? Jeg er alltid interessert i nye spennende prosjekter. Send en mail, så lager vi noe flott og fint sammen!"} />

      <div className="flex flex-col items-center gap-12">
        <Hero />
        <ContactMe />
        <ProjectsGrid />
      </div>
    </>
  );
}
