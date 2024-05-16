import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{props.celcius}</span>
        <span className="align-top measurement">
          °C |{" "}
          <a href="/" onClick={convertToF}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;

    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="align-top measurement">
          <a href="/" onClick={convertToC}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
