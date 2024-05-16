import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city..."
              class="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <p>
        Results for <strong>New York, NY, USA</strong>
      </p>
      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="mostly cloudy"
          />{" "}
          <span className="temperature">18</span>
          <span className="align-top measurement">°C | °F</span>
        </div>
        <div className="col-4 middlecolumn">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>

        <div className="col-4 rightcolumn">
          <ul>
            <li className="weatherHeading">Weather</li>
            <li>Wednesday 15:00</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
