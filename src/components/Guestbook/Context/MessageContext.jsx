import { createContext, useState, useContext } from "react";
import useApi from "../../../hooks/useApi";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const { fetchApi } = useApi();

  const refreshMessages = async () => {
    const response = await fetchApi("http://localhost:3000/api/messages/");
    if (response.status === 200) {
      setDisplayedMessages(response.data);
    }
  };

  const getUserMessages = (userId) => {
    return displayedMessages.filter((message) => message.userId === userId);
  };

  return <MessageContext.Provider value={{ displayedMessages, setDisplayedMessages, refreshMessages, getUserMessages }}>{children}</MessageContext.Provider>;
};

export const useMessages = () => useContext(MessageContext);
