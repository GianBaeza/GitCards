import React, { createContext, useState } from "react";

export const formContext = createContext();

export function FormContextProvider({ children }) {
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

  const handleCardNumberChange = (event) => {
    const { name, value } = event.target;
    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ");
    handleCardChange({
      target: { name, value: formattedValue },
    });
  };

  return (
    <formContext.Provider
      value={{
        formData,
        handleCardChange,
        handleCardNumberChange,
      }}
    >
      {children}
    </formContext.Provider>
  );
}
