import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../../../components/Guestbook/Forms/InputField";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { ErrorMessage } from "../../../components/Guestbook/Forms/ErrorMessage";
import useApi from "../../../hooks/useApi";
import SEOHelmet from "../../../components/SEOHelmet";

const schema = yup.object({
  name: yup.string().required("Vennligst fyll inn navn").min(3, "Navn må være over 3 tegn").max(30, "Navn må være under 30 tegn"),
  password: yup.string().required("Vennligst fyll inn passord").min(5, "Passord må være minst 5 tegn"),
});

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isLoading, isError, errorMsg } = useApi();

  const onSubmit = async (formData) => {
    const response = await fetchApi(`http://localhost:3000/api/login`, "POST", formData);

    if (response.status === 200) {
      window.localStorage.setItem("name", response.data.name);
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("emoji", response.data.emoji);
      navigate("/gjesteboka");
    }
  };

  return (
    <>
      <SEOHelmet title="Gjesteboka - logg inn" content="" />

      <section className="w-full max-w-md flex flex-col gap-10 mx-auto px-4">
        <form className="flex flex-col gap-6 border-2 py-10 px-2 border-primary md:px-10" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl text-center">Logg inn</h1>

          <InputField label="Navn" register={register} name="name" errors={errors} />
          <InputField label="Passord" register={register} name="password" errors={errors} type="password" />

          <ErrorMessage message={isError ? getErrorMessage(errorMsg) : null} />

          <button type="submit" className="bg-primary text-secondary py-2">
            {isLoading ? "Logger inn..." : "Logg inn"}
          </button>

          <div className="flex gap-1">
            <p>Har du ikke en bruker?</p>
            <Link to="/gjesteboka/lag-bruker" className="underline">
              Lag en bruker
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
