import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Demi Mortimer and is
        <a href="https://github.com/demimortimer"> open-sourced on Github</a>.
      </footer>
    </div>
  );
}
