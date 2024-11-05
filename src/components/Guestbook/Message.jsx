import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import UpdateMessage from "../UpdateMessage";

export const GuestBookMessage = ({ message, userName, setDisplayedMessages, displayedMessages, showUpdateForm, setShowUpdateForm, toggleUpdateForm, activeMenuId, setActiveMenuId, handleDelete }) => (
  <div key={message._id} className="w-full border border-primary px-2 pt-8 pb-4 relative md:w-[500px]">
    <div className="bg-primary w-fit flex gap-1 py-1 px-3 items-center absolute -top-5">
      <p className="text-xl">{message.user.emoji}</p>
      <p className="font-semibold text-secondary">{message.user.name.charAt(0).toUpperCase() + message.user.name.slice(1)}</p>
    </div>

    {userName === message.user.name && (
      <div className="w-full relative flex flex-col items-end">
        <FontAwesomeIcon icon={faEllipsis} size="xl" onClick={() => setActiveMenuId(activeMenuId === message._id ? null : message._id)} />

        <div className={`bg-white flex flex-col gap-2 items-end py-2 px-2 border border-primary absolute top-6 right-0 ${activeMenuId === message._id ? "visible" : "hidden"}`}>
          <button
            className="underline"
            type="button"
            onClick={() => {
              setActiveMenuId(null), toggleUpdateForm(message._id);
            }}
          >
            Oppdater
          </button>
          <button className="underline" type="button" onClick={() => handleDelete(message._id)}>
            Slett
          </button>
        </div>
      </div>
    )}

    {showUpdateForm[message._id] && <UpdateMessage message={message} setDisplayedMessages={setDisplayedMessages} displayedMessages={displayedMessages} setShowUpdateForm={setShowUpdateForm} />}

    {message.image && <img src={`http://localhost:3000/api/messages/image/${message.image}`} alt={`${message.user.name} sitt bilde`} className="w-full max-h-96 object-cover" />}
    <div className="flex flex-col gap-4">
      <p>{message.message}</p>
      <div className="flex items-center justify-between">
        <p className="text-sm">{new Date(message.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  </div>
);
