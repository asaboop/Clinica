import React from "react";
import "./App.css";
import Resultado from "./Resultado.jsx";
import Cita from "./Cita.jsx";
import Index from "./Index.jsx"

import { BrowserRouter, Route } from "react-router-dom";
import "./assets/css/style2.css";
import AOS from "aos";

import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "remixicon/fonts/remixicon.css";
import "boxicons/css/boxicons.css";
import "venobox/venobox/venobox.css";
import "bootstrap/css/bootstrap.min.css";
import "./assets/icofont/icofont.min.css";

function App() {
  return (
    AOS.init(),
    (
      <BrowserRouter>
        <div className="App">
          <Route path="/cita">
            <Cita />
          </Route>
          <Route path="/resultados">
            <Resultado />
          </Route>
          <Route exact path="/">
          <Index/>
          </Route>
        </div>
      </BrowserRouter>
    )
  );
}

export default App;
