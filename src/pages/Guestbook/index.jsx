import { useEffect, useState, useCallback } from "react";
import useApi from "../../hooks/useApi";
import GuestBookForm from "../../components/Guestbook/form";
import RenderMessages from "../../components/Guestbook/RenderMessages";

export default function Guestbook() {
  const [accepted, setAccepted] = useState(false);
  const { fetchApi, data: posts, isLoading, isError, errorMsg } = useApi();

  const getData = useCallback(async () => {
    await fetchApi("http://localhost:3000/api/messages/");
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  //   const imageUrl = `http://localhost:3000/api/messages/image/${post.fileId}

  return (
    <section className="flex flex-col gap-8 mx-auto">
      {/* {!accepted && (
        <div>
          <div className="bg-gray-400 opacity-30 w-full h-screen absolute top-0 z-10"></div>
          <div className="bg-white py-6 px-4 flex flex-col gap-4 items-start absolute bottom-0 z-20">
            <span>Velkommen til gjesteboka!</span>
            <p className="text-sm">Gjesteboka er mitt første front-end og back-end prosjekt. Backend: node.js, express og mongodb. Frontend: react, tailwind, yup Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates ipsum ad! Neque asperiores, nobis officia velit animi aliquid cumque, non atque nam quibusdam repellat corrupti amet sint. Laborum, magnam!</p>
            <p className="text-sm">Back-end er bygget med: Node.js, Express og MongoDB</p>
            <button className="bg-primary text-secondary px-4 py-2" onClick={() => setAccepted(true)}>
              OK, det er forstått!
            </button>
          </div>
        </div>
      )} */}
      <h1 className="text-6xl text-center md:text-9xl">Gjesteboka</h1>
      <GuestBookForm />
      <RenderMessages />

      {/* {posts.map((post, index) => (
        <div key={index} className="border-2 border-primary rounded-md">
          <img src={`http://localhost:3000/api/messages/image/${post.image}`} />
          <p>{post.message}</p>
        </div>
      ))} */}
    </section>
  );
}
