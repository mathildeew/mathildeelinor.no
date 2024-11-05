import { useState, useEffect } from "react";
import { GuestBookMessage } from "./Message";
import DeleteMessage from "../DeleteMessage";

export default function RenderMessages({ messages, displayedMessages, setDisplayedMessages }) {
  const [selectedMsgType, setSelectedMsgType] = useState("allMsg");
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState({});

  const userName = window.localStorage.getItem("name");

  useEffect(() => {
    const filteredMessages = selectedMsgType === "myMsg" ? messages.filter((message) => message.user.name.toLowerCase() === userName.toLowerCase()) : messages;

    setDisplayedMessages(filteredMessages);
  }, [selectedMsgType, messages, userName, setDisplayedMessages]);

  // Delete
  const { handleDelete } = DeleteMessage({ displayedMessages, setDisplayedMessages });

  //Update
  const toggleUpdateForm = (id) => {
    setShowUpdateForm((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full">
      {userName && (
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

      {displayedMessages.length > 0 ? (
        <div className="flex flex-col gap-16 mt-12">
          {displayedMessages.map((message) => (
            <GuestBookMessage key={message._id} message={message} userName={userName} setDisplayedMessages={setDisplayedMessages} displayedMessages={displayedMessages} showUpdateForm={showUpdateForm} setShowUpdateForm={setShowUpdateForm} toggleUpdateForm={toggleUpdateForm} activeMenuId={activeMenuId} setActiveMenuId={setActiveMenuId} handleDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p>Ingen meldinger å vise :(</p>
      )}
    </section>
  );
}
