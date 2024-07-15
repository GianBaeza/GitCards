import img from "../images/favicon.png";
import "../FrontCard/front.css";
import { useContext } from "react";
import { formContext } from "../Context/Context";

function FrontCard() {
  const { formData } = useContext(formContext); // Asegúrate de que es formData y no fromData
  const { cardNumber, cardName, expiryDate } = formData;

  return (
    <div>
      <main>
        <div>
          <img src={img} alt="icon" />
        </div>
        <div className="container-datos">
          <h1>{cardNumber || "0000 0000 0000 0000"}</h1>
          <div className="container-datos-info">
            <p>{`Nombre: ${cardName}` || "Nombre"}</p>
            <p>{`Fecha: ${expiryDate}` || "MM/AA"}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FrontCard;
