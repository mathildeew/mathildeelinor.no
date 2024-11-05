import useApi from "../hooks/useApi";

export default function DeleteMessage({ displayedMessages, setDisplayedMessages }) {
  const { fetchApi, errorMsg } = useApi();

  const handleDelete = async (id) => {
    if (window.confirm("Er du sikker på at du vil slette denne meldingen?")) {
      const response = await fetchApi(`http://localhost:3000/api/messages/${id}`, "DELETE");

      if (response.status === 200) {
        setDisplayedMessages(displayedMessages.filter((message) => message._id !== id));
        console.log("Melding slettet");
      } else {
        console.error("Feil ved sletting av melding:", errorMsg);
      }
    }
  };

  return { handleDelete };
}
