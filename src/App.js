import logo from "./logo.svg";
import React from "react";
import "./scss/app.scss";

// import { Routes, Route } from "react-router-dom";

import Accaunt from "./components/Accaunt";
import Main from "./components/Main";

function App() {
  return (
    <div className="wrapper">
      <Accaunt />
      <Main />
    </div>
  );
}

export default App;
