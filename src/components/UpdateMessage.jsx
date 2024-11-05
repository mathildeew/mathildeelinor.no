import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getErrorMessage } from "../utils/getErrorMessage";
import useApi from "../hooks/useApi";
import { TextareaField } from "./Guestbook/Forms/TextareaField";
import { ErrorMessage } from "./Guestbook/Forms/ErrorMessage";

const schema = yup.object({
  newMessage: yup.string().notRequired(),
});

export default function UpdateMessage({ message, setDisplayedMessages, displayedMessages, setShowUpdateForm }) {
  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData, id) => {
    const data = new FormData();
    data.append("message", formData.newMessage);
    if (formData.newImage[0]) {
      data.append("image", formData.newImage[0]);
    }

    const response = await fetchApi(`http://localhost:3000/api/messages/${id}`, "PUT", data);

    if (response.status === 200) {
      setShowUpdateForm(false);
      setDisplayedMessages((prevMessages) => prevMessages.map((msg) => (msg._id === id ? response.data : msg)));
    }
  };

  return (
    <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit((data) => onSubmit(data, message._id))}>
      <TextareaField label="Melding" register={register} name="newMessage" rows="2" errors={errors} />

      <div className="flex flex-col gap-1">
        <div>
          <label htmlFor="newImage">Nytt bilde</label>
        </div>
        <input name="newImage" type="file" accept="image/*" />
        <p className="text-red-700">{errors.newImage?.message}</p>
      </div>

      <ErrorMessage message={isError ? getErrorMessage(errorMsg) : null} />

      <button type="submit" className="bg-primary text-secondary py-2">
        {isLoading ? "Oppdaterer..." : isSuccess ? "Oppdatert!" : "Oppdater melding"}
      </button>
      <hr className="border-primary mb-8" />
    </form>
  );
}
