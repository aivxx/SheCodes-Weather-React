import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weatherApp">
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          77°F
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:68%</li>
            <li>Wind:14mph</li>
          </ul>
        </div>

        <div className="col-6">
          <h1>City</h1>
          <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
