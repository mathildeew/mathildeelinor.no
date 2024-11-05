import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaField } from "./Forms/TextareaField";
import { ErrorMessage } from "./Forms/ErrorMessage";
import useApi from "../../hooks/useApi";

const schema = yup.object({
  message: yup.string().required("Vennligst skriv en melding :)").min(5, "Meldingen må være over fem tegn"),
});

export default function GuestBookForm({ displayedMessages, setDisplayedMessages }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const onSubmit = async (formData) => {
    const data = new FormData();
    data.append("message", formData.message);
    if (formData.image) {
      data.append("image", formData.image[0]);
    }

    const response = await fetchApi(`http://localhost:3000/api/messages/`, "POST", data);

    if (response.status === 201) {
      setDisplayedMessages([response.data.post, ...displayedMessages]);
    }
  };

  return (
    <section className="w-full">
      <form className="w-full flex flex-col gap-6 px-2 pt-4 pb-10 " onSubmit={handleSubmit(onSubmit)}>
        <TextareaField label="Melding" register={register} name="message" rows="2" errors={errors} />

        <div className="flex flex-col">
          <div>
            <label htmlFor="image">Bilde</label>
          </div>
          <input name="image" type="file" accept="image/*" />
          <p className="text-red-700">{errors.image?.message}</p>
        </div>

        <ErrorMessage message={isError ? getErrorMessage(errorMsg) : null} />

        <button type="submit" className="bg-primary text-secondary py-2">
          {isLoading ? "Sender..." : isSuccess ? "Sendt!" : "Send melding"}
        </button>
      </form>
    </section>
  );
}
