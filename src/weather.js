import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weatherApp">
      <h1>City</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
        </div>
      </div>
    </div>
  );
}
