import { createContext, useContext, useState, useEffect } from "react";
import useApi from "../../../hooks/useApi";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const { fetchApi } = useApi();

  const refreshMessages = async () => {
    const response = await fetchApi("https://mathildeelinor-gjesteboka.vercel.app/api/messages", "GET");
    if (response.status === 200) {
      setDisplayedMessages(response.data);
    }
  };

  const getUserMessages = (userName) => {
    return displayedMessages.filter((message) => message.user.name.toLowerCase() === userName.toLowerCase());
  };

  const handleDelete = async (messageId) => {
    if (window.confirm("Er du sikker på at du vil slette denne meldingen?")) {
      const response = await fetchApi(`https://mathildeelinor-gjesteboka.vercel.app/api/messages/${messageId}`, "DELETE");
      if (response.status === 200) {
        setDisplayedMessages((prevMessages) => prevMessages.filter((message) => message._id !== messageId));
      } else {
        console.log("Feil ved sletting av melding");
      }
    }
  };

  return (
    <MessageContext.Provider
      value={{
        displayedMessages,
        setDisplayedMessages,
        refreshMessages,
        getUserMessages,
        handleDelete,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessages() {
  return useContext(MessageContext);
}
