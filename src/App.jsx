import React from "react"
import "./App.css"
import Index from "./Index.jsx"
import {BrowserRouter} from "react-router-dom"

import AOS from "aos";
import "./assets/css/style.css"
import "aos/dist/aos.css";
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'remixicon/fonts/remixicon.css'
import 'boxicons/css/boxicons.css'
import 'venobox/venobox/venobox.css'
import 'bootstrap/css/bootstrap.min.css'
import "./assets/icofont/icofont.min.css";

function App() {
  return (
    AOS.init(),
    <BrowserRouter>
        <div className="App">
        <Index />
    </div>
    </BrowserRouter>

  );
}

export default App;
