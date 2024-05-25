import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature">{props.celcius}</span>
      <span className="align-top measurement">°C</span>
    </span>
  );
}
