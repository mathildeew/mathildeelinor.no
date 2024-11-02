import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../hooks/useApi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function RenderMessages({ messages, selectedMsgType, setSelectedMsgType, displayedMessages, setDisplayedMessages }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const schema = yup.object({
    newMessage: yup.string().required("Vennligst skriv en melding :)").min(5, "Meldingen må være over fem tegn"),
    image: yup.mixed().required("Vennligst last opp et bilde"),
  });

  useEffect(() => {
    setSelectedMsgType("allMsg");
    setDisplayedMessages(messages);
  }, []);

  const userName = window.localStorage.getItem("name");

  useEffect(() => {
    if (userName && messages.length > 0) {
      const filteredMessages = messages.filter((message) => message.name.toLowerCase().includes(userName.toLowerCase()));
      setDisplayedMessages(selectedMsgType === "allMsg" ? messages : filteredMessages);
    } else {
      setDisplayedMessages(messages);
    }
  }, [userName, messages]);

  const { fetchApi, data, isLoading, isSuccess, isError, errorMsg } = useApi();

  const handleUpdate = async (id) => {
    if (window.confirm("Er du sikker på at du vil slette denne meldingen?")) {
      const response = await fetchApi(`https://mathildeelinor-gjesteboka.vercel.app/api/messages/${id}`, "PUT");
      console.log(response);

      if (response.status === 200) {
        setDisplayedMessages(displayedMessages.filter((message) => message._id !== id));
        console.log("Melding oppdatert");
      } else {
        console.error("Feil ved oppdatering av melding:", response);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Er du sikker på at du vil slette denne meldingen?")) {
      const response = await fetchApi(`https://mathildeelinor-gjesteboka.vercel.app/api/messages/${id}`, "DELETE");
      console.log(response);

      if (response.status === 200) {
        setDisplayedMessages(displayedMessages.filter((message) => message._id !== id));
        console.log("Melding slettet");
      } else {
        console.error("Feil ved sletting av melding:", response);
      }
    }
  };

  //Update
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    const data = new FormData();
    data.append("message", formData.message);
    if (formData.image[0]) {
      data.append("image", formData.image[0]);
    }

    const response = await fetchApi(`https://mathildeelinor-gjesteboka.vercel.app/api/messages/${id}`, "POST", data);
    console.log(response);

    if (response.status === 201) {
      setDisplayedMessages([response.data.post, ...displayedMessages]);
    }
  };

  return (
    <section className="w-full">
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
                <p className="font-semibold text-secondary">{message.name.charAt(0).toUpperCase() + message.name.slice(1)}</p>
              </div>

              <img src={`http://localhost:3000/api/messages/image/${message.image}`} alt={`${message.name} sitt bilde`} className="w-full object-cover lg:h-72" />
              <div className="flex flex-col gap-4">
                <p>{message.message}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">{new Date(message.createdAt).toLocaleDateString()}</p>
                  {userName === message.name && (
                    <div className="relative w-fit">
                      <FontAwesomeIcon icon={faGear} size="xl" onClick={() => setShowMenu(!showMenu)} />

                      <div className={`bg-white flex flex-col gap-2 items-end py-2 px-2 border border-primary absolute bottom-8 right-0 ${showMenu ? "visible" : "hidden"}`}>
                        <button className="underline" type="button" onClick={() => setShowUpdateForm(!showUpdateForm)}>
                          Oppdater
                        </button>
                        <button className="underline" type="button" onClick={() => handleDelete(message._id)}>
                          Slett
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {showUpdateForm && (
                <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                  <hr className="border-primary" />
                  <div className="flex flex-col">
                    <div>
                      <label htmlFor="newMessage">Ny melding</label>
                      <span className="text-red-700">*</span>
                    </div>
                    <textarea name="newMessage" type="textarea" rows="2" defaultValue={message.message} className="border bg-secondary border-primary p-2 focus:border-primary" {...register("newMessage", { required: true, type: "text" })} />
                    <p className="text-red-700">{errors.message?.message}</p>
                  </div>

                  <div className="flex flex-col">
                    <div>
                      <label htmlFor="newImage">Nytt bilde</label>
                      <span className="text-red-700">*</span>
                    </div>
                    <input name="image" type="file" accept="image/*" {...register("newImage", { required: true })} />
                    <p className="text-red-700">{errors.image?.message}</p>
                  </div>

                  <button type="submit" className="bg-primary text-secondary py-2">
                    {isLoading ? "Oppdaterer..." : isSuccess ? "Oppdatert!" : "Oppdater melding"}
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Ingen meldinger å vise :(</p>
      )}
    </section>
  );
}
