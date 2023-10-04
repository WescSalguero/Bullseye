import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import "./App.css"; // Importa el archivo CSS

import Michael from "./michael.jpg";
import Alejandro from "./Inge.jpeg";
import Wilson from "./wilson.webp";
import Morgan from "./Morgan.jpg";
import William from "./William.jpeg";

interface IFormInputs {
  firstName: string;
  lastName: string;
}

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
  const [submittedData, setSubmittedData] = useState<IFormInputs | null>(null);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setSubmittedData(data);
    console.log(data);
  };

  const getImageSrc = (name: string): string | undefined => {
    switch (name.toLowerCase()) {
      case "michael":
        return Michael;
      case "alejandro":
        return Alejandro;
      case "morgan":
        return Morgan;
      case "wilson":
        return Wilson;
      case "william":
        return William;
      default:
        return undefined;
    }
  };

  return (
    <div className="container">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <p>First name is required</p>}
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <p>Last name is required</p>}
        <input type="submit" />
      </form>

      {submittedData && (
        <div className="card-container">
          <h2>Información Enviada</h2>
          <p>Nombre: {submittedData.firstName}</p>
          <p>Apellido: {submittedData.lastName}</p>
          {submittedData.firstName && (
            <img src={getImageSrc(submittedData.firstName)} alt={submittedData.firstName} />
          )}
        </div>
      )}
    </div>
  );
}
