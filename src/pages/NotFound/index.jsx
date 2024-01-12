import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import SEOHelmet from "../../components/SEOHelmet";

export default function NotFound() {
  return (
    <>
      <SEOHelmet title={"404"} />

      <section className="text-center flex flex-col gap-16">
        <h1 className="text-5xl">Denne siden finnes ikke</h1>
        <FontAwesomeIcon icon={faMugHot} className="text-5xl" />
        <div className="flex justify-center gap-2">
          <p>Burde den finnes?</p>
          <a href="mailto:hei@mathildeelinor.no" className="underline">
            Gi meg beskjed!
          </a>
        </div>
      </section>
    </>
  );
}
