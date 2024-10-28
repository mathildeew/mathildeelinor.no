import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useApi from "../../hooks/useApi";

export default function GuestBookForm() {
  const schema = yup.object({
    name: yup.string().required("Vennligst fyll inn navn").min(3, "Navn må være over 3 tegn").max(30, "Navn må være under 30 tegn"),
    message: yup.string().required("Vennligst send en melding :)").min(5, "Meldingen må være over fem tegn"),
    image: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  return (
    <section>
      <h2>Legg igjen en melding</h2>
      <form className="flex flex-col gap-6 border-2 border-primary p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div>
            <label htmlFor="name">Navn</label>
            <span className="text-red-700">*</span>
          </div>
          <input name="name" type="text" className="bg-secondary border border-primary focus:border-primary" {...register("name", { required: true, type: "text" })} />
          <p className="text-red-700">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col">
          <div>
            <label htmlFor="message">Melding</label>
            <span className="text-red-700">*</span>
          </div>

          <textarea name="message" type="textarea" rows="3" className="border bg-secondary border-primary p-2 focus:border-primary" {...register("message", { required: true, type: "text" })} />
          <p className="text-red-700">{errors.message?.message}</p>
        </div>
        <div className="flex flex-col">
          <div>
            <label htmlFor="image">Bilde</label>
            <span className="text-red-700">*</span>
          </div>

          <input name="image" type="file" {...register("image", { required: true })} />
          <p className="text-red-700">{errors.image?.message}</p>
        </div>
        <button type="submit" className="bg-primary text-secondary py-2">
          Send melding
        </button>
      </form>
    </section>
  );
}
