import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import { GrInstagram } from 'react-icons/gr';
import { GrFacebook } from 'react-icons/gr';
import { GrPaypal } from 'react-icons/gr';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  ,document.getElementById("root")
);


// <GrInstagram url="https://www.instagram.com/magdalena.ensemble/" network="instagram" />
//s<GrFacebook url="https://www.facebook.com/profile.php?id=100094669223925" network="facebook" />