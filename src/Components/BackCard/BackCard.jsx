import { useContext } from "react";
import "../BackCard/back.css";
import { formContext } from "../Context/Context";
function BackCard() {
  const { formData } = useContext(formContext);
  return (
    <main className="container-back">
      <div className="contianer-codigo">
        <p>{formData.cvv || "000"}</p>
      </div>
    </main>
  );
}

export default BackCard;
