import { useEffect, useState, useCallback } from "react";
import useApi from "../../hooks/useApi";
import GuestBookForm from "../../components/Guestbook/SendMessage";
import RenderMessages from "../../components/Guestbook/RenderMessages";
import { Link } from "react-router-dom";
import SEOHelmet from "../../components/SEOHelmet";

export default function Guestbook() {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [accepted, setAccepted] = useState(false);
  const [token, setToken] = useState("");

  const handleLogout = () => {
    window.localStorage.clear(); 
    setToken(""); 
  };

  useEffect(() => {
    const item = window.localStorage.getItem("token");
    const acceptedValue = window.localStorage.getItem("accepted");
    setToken(item);

    if (acceptedValue === "true") {
      setAccepted(true);
    }
  }, []);

  useEffect(() => {
    if (accepted) {
      window.localStorage.setItem("accepted", "true");
    }
  }, [accepted]);

  const { fetchApi, data: messages, isLoading, isError, errorMsg } = useApi();

  const getData = useCallback(async () => {
    await fetchApi("http://localhost:3000/api/messages/");
  }, [fetchApi]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <SEOHelmet title={"Gjesteboka"} content="" />

      {accepted !== true && (
        <div className="w-full h-full bg-gray-950 bg-opacity-20 flex justify-center fixed top-0 z-50">
          <div className="w-full bg-white flex items-start justify-center fixed bottom-0">
            <div className="max-w-7xl py-10 flex flex-col items-start gap-3 px-4">
              <span>Velkommen til gjesteboka!</span>
              <p className="text-sm">
                Gjesteboka er mitt første backend prosjekt, bygget med Node.js, Express og MongoDB. Ta gjerne en titt på prosjektet på{" "}
                <a href="https://github.com/mathildeew/mathildeelinor.no-backend" className="text-sm underline">
                  GitHub.
                </a>
              </p>
              <p className="text-sm">Passord og navn lagres trygt i databasen som krypterte verdier for å sikre at ingen får tilgang til dem.</p>

              <button className="bg-primary text-secondary px-4 py-2" onClick={() => setAccepted(true)}>
                OK, det er forstått!
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="max-w-lg flex flex-col gap-10 px-4 mx-auto">
        <h1 className="text-4xl text-center md:text-6xl">Gjesteboka</h1>

        {token ? (
          <button className="border-2 border-primary px-4 py-2" onClick={handleLogout}>
            Logg ut
          </button>
        ) : (
          <Link to="/gjesteboka/logg-inn" className="bg-primary text-secondary px-4 py-2 mx-auto">
            Logg inn for å legge inn en melding
          </Link>
        )}

        {token && <GuestBookForm messages={messages} displayedMessages={displayedMessages} setDisplayedMessages={setDisplayedMessages} />}
        <RenderMessages messages={messages} displayedMessages={displayedMessages} setDisplayedMessages={setDisplayedMessages} />
      </section>
    </>
  );
}
