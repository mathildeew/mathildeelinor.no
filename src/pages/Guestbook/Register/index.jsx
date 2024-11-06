import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../../../components/Guestbook/Forms/InputField";
import { EmojiSelection } from "../../../components/Guestbook/Forms/EmojiSelection";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { ErrorMessage } from "../../../components/Guestbook/Forms/ErrorMessage";
import useApi from "../../../hooks/useApi";
import SEOHelmet from "../../../components/SEOHelmet";

const schema = yup.object({
  name: yup.string().required("Vennligst fyll inn navn").min(3, "Navn må være over 3 tegn").max(30, "Navn må være under 30 tegn"),
  password: yup.string().required("Vennligst fyll inn passord").min(5, "Passord må være minst 5 tegn"),
  passwordVal: yup
    .string()
    .required("Vennligst fyll inn passord")
    .oneOf([yup.ref("password")], "Passordene er ikke like"),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const onSubmit = async (formData) => {
    delete formData.passwordVal;

    const response = await fetchApi(`https://mathildeelinor-gjesteboka.vercel.app/api/users/`, "POST", formData);

    if (response.status === 201) {
      setTimeout(() => {
        navigate("/gjesteboka/logg-inn");
      }, 750);
    }
  };

  return (
    <>
      <SEOHelmet title="Gjesteboka - lag bruker" content="" />

      <section className="w-full max-w-md flex flex-col gap-10 mx-auto px-4">
        <form className="flex flex-col gap-6 border-2 py-10 px-2 border-primary md:px-10" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl text-center">Lag bruker</h1>

          <EmojiSelection register={register} />

          <InputField label="Navn" register={register} name="name" errors={errors} />
          <InputField label="Passord" register={register} name="password" errors={errors} type="password" />
          <InputField label="Gjenta passord" register={register} name="passwordVal" errors={errors} type="password" />

          <ErrorMessage message={isError ? getErrorMessage(errorMsg) : null} />

          <button type="submit" className="bg-primary text-secondary py-2">
            {isLoading ? "Lager bruker..." : isSuccess ? "Bruker laget!" : "Lag bruker"}
          </button>

          <div className="flex gap-1">
            <p>Har du allerede en bruker?</p>
            <Link to="/gjesteboka/logg-inn" className="underline">
              Logg inn
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
