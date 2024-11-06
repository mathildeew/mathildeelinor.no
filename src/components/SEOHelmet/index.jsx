import { HelmetProvider, Helmet } from "react-helmet-async";

export default function SEOHelmet({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/rkz6tdw.css" />
        <meta name="description" content="Design og utvikling. Kontakt: hei@mathildeelinor.no"></meta>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
