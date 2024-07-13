import img from "../images/favicon.png";
import "../FrontCard/front.css";

function FrontCard() {
  return (
    <div>
      <main>
        <div>
          <img src={img} alt="icon" />
        </div>
        <div className="contianer-datos">
          <h1>00000 00000 00000 00000 </h1>
          <div className="container-datos-info">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FrontCard;
