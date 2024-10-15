import SEOHelmet from "../../components/SEOHelmet";
import ProjectsGrid from "../../components/ProjectsGrid";
import Hero from "../../components/Home/Hero";
import ContactMe from "../../components/Home/Banner/ContactMe";

export default function Home() {
  return (
    <>
      <SEOHelmet title={"| Front-end utvikler & designer"} content={"Trenger du ny nettside? Jeg er alltid interessert i nye spennende prosjekter. Send en mail, så lager vi noe kult sammen!"} />

      <div className="flex flex-col items-center gap-24">
        <Hero />
        <ContactMe />
        <ProjectsGrid />
      </div>
    </>
  );
}
