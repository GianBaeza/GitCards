import React, { useContext } from "react";
import { formContext } from "../Context/Context";
import { useForm } from "react-hook-form";

function Form() {
  const { formData, onSubmit, handleCardChange, handleCardNumberChange } =
    useContext(formContext);

  const { register, handleSubmit } = useForm({ defaultValues: formData });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="cardNumber">Número de Tarjeta</label>
        <input
          type="text"
          id="cardNumber"
          {...register("cardNumber", {
            required: "El número de tarjeta es obligatorio",
            pattern: /[A-Za-z]{3}/,
          })}
          onChange={handleCardNumberChange}
          minLength={19}
          maxLength={19}
        />
        <label htmlFor="cardName">Nombre en la Tarjeta</label>
        <input
          type="text"
          id="cardName"
          {...register("cardName", {
            required: "El nombre en la tarjeta es obligatorio",
            pattern: {
              value: /^[A-Za-z]{3,20}$/,
              message:
                "El nombre en la tarjeta debe contener solo letras y tener entre 3 y 20 caracteres",
            },
          })}
          onChange={handleCardChange}
          maxLength={20}
        />
        <div>
          <label htmlFor="expiryDate">Fecha de Expiración</label>
          <input
            type="date"
            id="expiryDate"
            {...register("expiryDate", {
              required: "La fecha de expiración es obligatoria",
            })}
            onChange={handleCardChange}
          />
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            onChange={handleCardChange}
            minLength={3}
            maxLength={3}
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
          />
        </div>
        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}

export default Form;
