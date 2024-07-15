import React from "react";
import "./app.css";
import FrontCard from "./Components/FrontCard/FrontCard";
import BackCard from "./Components/BackCard/BackCard";
import Form from "./Components/Form/Form";
import { FormContextProvider } from "./Components/Context/Context"; // Verifica esta importación

function App() {
  return (
    <FormContextProvider>
      <div className="app">
        <section className="section2">
          <FrontCard />
          <BackCard />
        </section>

        <Form />
      </div>
    </FormContextProvider>
  );
}

export default App;
