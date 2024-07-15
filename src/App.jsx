import React from "react";
import "./app.css";
import FrontCard from "./Components/FrontCard/FrontCard";
import BackCard from "./Components/BackCard/BackCard";
import Form from "./Components/Form/Form";
import FormContextProvider from "./Components/Context/Context";

function App() {
  return (
    <FormContextProvider>
      <div>
        <FrontCard />
        <BackCard />
      </div>
      <div>
        <Form />
      </div>
    </FormContextProvider>
  );
}

export default App;
