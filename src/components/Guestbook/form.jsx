import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import useApi from "../../hooks/useApi";

export default function GuestBookForm() {
  const [showForm, setShowForm] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const schema = yup.object({
    message: yup.string().required("Vennligst skriv en melding :)").min(5, "Meldingen må være over fem tegn"),
    image: yup.mixed().required("Vennligst last opp et bilde"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const onSubmit = async (formData) => {
    const data = new FormData();
    data.append("name", window.localStorage.getItem("name"));
    data.append("emoji", window.localStorage.getItem("emoji"));
    data.append("message", formData.message);
    if (formData.image[0]) {
      data.append("image", formData.image[0]);
    }

    const response = await fetchApi(`http://localhost:3000/api/messages`, "POST", data);
    console.log(response);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <section className="w-full">
      {/* <div className="flex gap-1 items-center cursor-pointer" onClick={() => setShowForm(!showForm)}>
        <h2 className="m-0">Legg igjen en melding</h2>
        <FontAwesomeIcon icon={showForm ? faChevronUp : faChevronDown} size="lg" />
      </div> */}
      {showForm && (
        <form className="w-full flex flex-col gap-6 px-2 pt-4 pb-10 " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <div>
              <label htmlFor="message">Melding</label>
              <span className="text-red-700">*</span>
            </div>
            <textarea name="message" type="textarea" rows="2" className="border bg-secondary border-primary p-2 focus:border-primary" {...register("message", { required: true, type: "text" })} />
            <p className="text-red-700">{errors.message?.message}</p>
          </div>

          <div className="flex flex-col">
            <div>
              <label htmlFor="image">Bilde</label>
              <span className="text-red-700">*</span>
            </div>
            <input name="image" type="file" accept="image/*" {...register("image", { required: true })} onChange={handleImageChange} />
            {/* <div className="">{imagePreview ? <img src={imagePreview} alt="Bildepreview" className="w-16 h-16 object-cover" /> : <FontAwesomeIcon icon={faImages} size="2xl" />}</div> */}
            <p className="text-red-700">{errors.image?.message}</p>
          </div>
          <button type="submit" className="bg-primary text-secondary py-2">
            {isLoading ? "Sender..." : isSuccess ? "Sendt!" : "Send melding"}
          </button>
        </form>
      )}
    </section>
  );
}
