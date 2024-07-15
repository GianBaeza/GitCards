import React, { createContext, useState } from "react";

export const formContext = createContext();

export default function FormContextProvider({ children }) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleCardChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardNumberChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ");

    handleCardChange({
      target: { name, value: formattedValue },
    });
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <formContext.Provider
      value={{
        formData,
        handleCardChange,
        onSubmit,
        handleCardNumberChange
      }}
    >
      {children}
    </formContext.Provider>
  );
}
