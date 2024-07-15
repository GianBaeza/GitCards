import React, { useContext } from "react";
import { formContext } from "../Context/Context";
import { useForm } from "react-hook-form";
import "../Form/form.css";

function Form() {
  const { formData, handleCardChange, handleCardNumberChange } =
    useContext(formContext);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: formData,
  });

  const handleData = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="container-formTotal">
      <form onSubmit={handleSubmit(handleData)} className="form-container">
        <label htmlFor="cardNumber" className="form-label">
          Número de Tarjeta
        </label>
        <input
          type="text"
          id="cardNumber"
          className="form-input"
          {...register("cardNumber", {
            required: "El número de tarjeta es obligatorio",
          })}
          onChange={(e) => {
            handleCardNumberChange(e);
            setValue("cardNumber", e.target.value);
          }}
          minLength={16}
          maxLength={16}
          placeholder="0000 0000 0000 0000"
        />

        <label htmlFor="cardName" className="form-label">
          Nombre en la Tarjeta
        </label>
        <input
          type="text"
          id="cardName"
          className="form-input"
          {...register("cardName", {
            required: "El nombre en la tarjeta es obligatorio",
            pattern: {
              value: /^[A-Za-z ]{3,20}$/,
              message:
                "El nombre en la tarjeta debe contener solo letras y tener entre 3 y 20 caracteres",
            },
          })}
          onChange={(e) => {
            handleCardChange(e);
            setValue("cardName", e.target.value);
          }}
          maxLength={20}
          placeholder="Nombre titular"
        />

        <div className="container-fecha-cvv">
          <div className="form-group">
            <label htmlFor="expiryDate" className="form-label">
              Fecha de Expiración
            </label>
            <input
              type="date"
              id="expiryDate"
              className="form-input inputPer"
              {...register("expiryDate", {
                required: "La fecha de expiración es obligatoria",
              })}
              onChange={(e) => {
                handleCardChange(e);
                setValue("expiryDate", e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv" className="form-label">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="form-input inputPer"
              {...register("cvv", {
                required: "El CVV es obligatorio",
                minLength: {
                  value: 3,
                  message: "El CVV debe tener 3 dígitos",
                },
                maxLength: {
                  value: 3,
                  message: "El CVV debe tener 3 dígitos",
                },
              })}
              onChange={(e) => {
                handleCardChange(e);
                setValue("cvv", e.target.value);
              }}
              minLength={3}
              maxLength={3}
              placeholder="Cvv"
            />
          </div>
        </div>

        <button type="submit" className="form-button">
          Confirmar
        </button>
      </form>
    </div>
  );
}

export default Form;
