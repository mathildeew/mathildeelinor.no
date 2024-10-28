import { useEffect, useState, useCallback } from "react";
import useApi from "../../hooks/useApi";
import GuestBookForm from "../../components/Guestbook/form";

export default function Guestbook() {
  const { fetchApi, data: posts, isLoading, isError, errorMsg } = useApi();

  const getData = useCallback(async () => {
    await fetchApi("http://localhost:3000/api/messages/");
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  //   const imageUrl = `http://localhost:3000/api/messages/image/${post.fileId}

  return (
    <section className="">
      {/* <h1>Gjesteboka</h1> */}
      <GuestBookForm />

      {/* {posts.map((post, index) => (
        <div key={index} className="border-2 border-primary rounded-md">
          <img src={`http://localhost:3000/api/messages/image/${post.image}`} />
          <p>{post.message}</p>
        </div>
      ))} */}
    </section>
  );
}
