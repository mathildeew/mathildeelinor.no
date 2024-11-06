import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getErrorMessage } from "../../utils/getErrorMessage";
import useApi from "../../hooks/useApi";
import { TextareaField } from "./Forms/TextareaField";
import { ErrorMessage } from "./Forms/ErrorMessage";
import { useMessages } from "./Context/MessageContext";

const schema = yup.object({
  newMessage: yup.string().notRequired(),
  newImage: yup.mixed().notRequired(),
});

export default function UpdateMessage({ message, setShowUpdateForm }) {
  const { refreshMessages } = useMessages();
  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    const data = new FormData();
    data.append("message", formData.newMessage);
    if (formData.newImage) {
      data.append("image", formData.newImage[0]);
    }

    const response = await fetchApi(`https://mathildeelinor-gjesteboka.vercel.app/api/messages/${message._id}`, "PUT", data);

    if (response.status === 200) {
      setShowUpdateForm(false);
      await refreshMessages();
    }
  };

  return (
    <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <TextareaField label="Melding" register={register} name="newMessage" rows="2" defaultValue={message.message} errors={errors} />

      <div className="flex flex-col gap-1">
        <div>
          <label htmlFor="newImage">Nytt bilde</label>
        </div>
        <input name="newImage" type="file" accept="image/*" {...register("newImage")} />
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
