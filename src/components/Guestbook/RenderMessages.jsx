import { useState, useEffect, useCallback } from "react";
import useApi from "../../hooks/useApi";

export default function RenderMessages() {
  const [selectedMsgType, setSelectedMsgType] = useState("allMsg");
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const userName = window.localStorage.getItem("name");

  const { fetchApi, data: messages, isLoading, isSuccess, isError, errorMsg } = useApi();

  const getData = useCallback(async () => {
    await fetchApi("http://localhost:3000/api/messages/");
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (userName && messages.length > 0) {
      const filteredMessages = messages.filter((message) => message.name.toLowerCase().includes(userName.toLowerCase()));
      setDisplayedMessages(selectedMsgType === "allMsg" ? messages : filteredMessages);
    } else {
      setDisplayedMessages(messages);
    }
  }, [userName, messages]);

  const handleDelete = async (id) => {
    if (window.confirm("Er du sikker på at du vil slette denne meldingen?")) {
      const response = await fetchApi(`http://localhost:3000/api/messages/${id}`, "DELETE");

      // if (response.status === 200) {
      //   setDisplayedMessages(displayedMessages.filter((message) => message._id !== id));
      //   console.log("Melding slettet");
      // } else {
      //   console.error("Feil ved sletting av melding:", response);
      // }
    }
  };

  return (
    <section className="w-full">
      {/* <h2>Meldinger</h2> */}
      {messages.length > 0 && userName && (
        <div className="flex gap-8">
          <div className="flex gap-2">
            <input type="radio" name="msg" value="allMsg" checked={selectedMsgType === "allMsg"} onChange={() => setSelectedMsgType("allMsg")} />
            <label htmlFor="allMsg">Alle meldinger</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="msg" value="myMsg" checked={selectedMsgType === "myMsg"} onChange={() => setSelectedMsgType("myMsg")} />
            <label htmlFor="myMsg">Mine meldinger</label>
          </div>
        </div>
      )}
      {messages.length > 0 ? (
        <div className="flex flex-col gap-16 mt-12">
          {displayedMessages.map((message, index) => (
            <div key={index} className="w-full border border-primary px-2 pt-8 pb-4 relative">
              <div className="bg-primary w-fit flex gap-1 py-1 px-3 items-center absolute -top-5">
                <p className="text-xl">🪩</p>
                <p className="font-semibold text-secondary">{message.name}</p>
              </div>

              <img src={`http://localhost:3000/api/messages/image/${message.image}`} alt={`${message.name} sitt bilde`} className="w-full object-cover lg:h-72" />
              <div className="flex flex-col gap-4">
                <p>{message.message}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">{new Date(message.createdAt).toLocaleDateString()}</p>
                  {userName === message.name && (
                    <button className="underline" type="button" onClick={() => handleDelete(message._id)}>
                      Slett melding
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Ingen meldinger</p>
      )}
    </section>
  );
}
