import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import useApi from "../../../hooks/useApi";
import { Link } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("Vennligst fyll inn navn").min(3, "Navn må være over 3 tegn").max(30, "Navn må være under 30 tegn"),
  password: yup.string().required("Vennligst fyll inn passord").min(5, "Passord må være minst 5 tegn"),
  passwordVal: yup
    .string()
    .required("Vennligst fyll inn passord")
    .oneOf([yup.ref("password")], "Passordene er ikke like"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const onSubmit = async (formData) => {
    delete formData.passwordVal;

    const data = {
      emoji: formData.emoji,
      name: formData.name,
      password: formData.password,
    };

    const response = await fetchApi(`http://localhost:3000/api/users`, "POST", data);
    // console.log(data);
  };

  return (
    <section className="w-full max-w-md flex flex-col gap-10 mx-auto px-4">
      <form className="flex flex-col gap-6 border-2 py-10 px-2 border-primary md:px-10" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl text-center">Lag bruker</h1>
        <div>
          <h3>Velg emoji</h3>
          <div className="flex justify-around">
            {["🦖", "🐝", "🌶️", "🪐", "💙", "🏋🏼‍♂️"].map((emoji) => (
              <div key={emoji} className="flex gap-1">
                <input id={`emoji-${emoji}`} type="radio" value={emoji} {...register("emoji")} />
                <label htmlFor={`emoji-${emoji}`} className="text-xl">
                  {emoji}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Navn</label>
          <input name="name" type="text" className="bg-secondary w-full p-2 border border-primary " {...register("name", { required: true, type: "text" })} />
          <p className="text-red-700">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Passord</label>
          <input name="password" type="password" className="bg-secondary w-full p-2 border border-primary " {...register("password", { required: true, type: "text" })} />
          <p className="text-red-700">{errors.password?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="passwordVal">Gjenta passord</label>
          <input name="passwordVal" type="password" className="bg-secondary w-full p-2 border border-primary " {...register("passwordVal", { required: true, type: "text" })} />
          <p className="text-red-700">{errors.passwordVal?.message}</p>
        </div>
        <button type="submit" className="bg-primary text-secondary py-2">
          {isLoading ? "Sender..." : isSuccess ? "Bruker laget!" : "Lag bruker"}
        </button>
        <div className="flex gap-1">
          <p>Har du allerede en bruker?</p>
          <Link to="/gjesteboka/logg-inn" className="underline">
            Logg inn
          </Link>
        </div>
      </form>
    </section>
  );
}
