import { useState, useEffect, useCallback } from "react";
import useApi from "../../hooks/useApi";

export default function RenderMessages() {
  const { fetchApi, data: messages, isLoading, isSuccess, isError, errorMsg } = useApi();

  const getData = useCallback(async () => {
    await fetchApi("http://localhost:3000/api/messages/");
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <section className=" ">
      <h2>Meldinger</h2>
      <div className="flex flex-col gap-24">
        {messages.map((message, index) => (
          <div key={index} className="w-full border border-primary">
            <p>{message.name}</p>

            <img src={`http://localhost:3000/api/messages/image/${message.image}`} alt={`${message.name} sitt bilde`} className=" h-auto" />
            <p>{message.message}</p>
            <p>{new Date(message.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
