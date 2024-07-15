import React, { useContext } from "react";
import { formContext } from "../Context/Context";
import "../BackCard/back.css";

function BackCard() {
  const { formData } = useContext(formContext);
  const { cvv } = formData;

  return (
    <div className="back-card">
      <div className="cvv-container">
        <p>{cvv || "CVV"}</p>
      </div>
    </div>
  );
}

export default BackCard;
