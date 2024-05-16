import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: "Wednesday 15:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <p>
          Results for{" "}
          <strong>
            {weatherData.city}, {weatherData.country}
          </strong>
        </p>
        <div className="row">
          <div className="col-4">
            <img src={weatherData.iconUrl} alt="mostly cloudy" />{" "}
            <span className="temperature">{weatherData.temperature}</span>
            <span className="align-top measurement">°C | °F</span>
          </div>
          <div className="col-4 middlecolumn">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>

          <div className="col-4 rightcolumn">
            <ul>
              <li className="weatherHeading">Weather</li>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "49b631c45785fe73d2a88477803dea22";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
