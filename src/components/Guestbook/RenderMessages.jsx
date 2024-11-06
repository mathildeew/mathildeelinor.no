import { useState, useEffect } from "react";
import { GuestBookMessage } from "./Message";
import { useMessages } from "./Context/MessageContext";

export default function RenderMessages() {
  const userName = window.localStorage.getItem("name");
  const { displayedMessages, refreshMessages, getUserMessages, handleDelete } = useMessages();

  const [selectedMsgType, setSelectedMsgType] = useState("allMsg");
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState({});

  const messagesToDisplay = selectedMsgType === "myMsg" ? getUserMessages(userName) : displayedMessages;

  useEffect(() => {
    refreshMessages();
  }, []);

  const toggleUpdateForm = (id) => {
    setShowUpdateForm((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-fit mx-auto">
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

      <div className="flex flex-col gap-16 mt-12">
        {messagesToDisplay.map((message) => (
          <GuestBookMessage key={message._id} message={message} userName={userName} showUpdateForm={showUpdateForm} setShowUpdateForm={setShowUpdateForm} toggleUpdateForm={toggleUpdateForm} activeMenuId={activeMenuId} setActiveMenuId={setActiveMenuId} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}
