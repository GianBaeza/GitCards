import React, { useContext } from "react";
import { formContext } from "../Context/Context";
import img from "../images/favicon.png";
import "../FrontCard/front.css";

function FrontCard() {
  const { formData } = useContext(formContext);
  const { cardNumber, cardName, expiryDate } = formData;

  return (
    <div className="front-card">
      <div>
        <img src={img} alt="icon" />
      </div>
      <div className="container-datos">
        <h1>{cardNumber || "0000 0000 0000 0000"}</h1>
        <div className="container-datos-info">
          <p className="info">{`Nombre: ${cardName}` || "Nombre"}</p>
          <p className="info">{`Fecha: ${expiryDate}` || "MM/AA"}</p>
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
