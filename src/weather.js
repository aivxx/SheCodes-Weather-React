import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weatherApp">
      <div className="row">
        <form>
          <input
            type="search"
            placeholder="Search..."
            className="form"
            autoFocus="on"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-warning btn-sm"
          />
        </form>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          <div className="currentTemp">77</div>
          <p>°F</p>
          <ul className="data">
            <li>Precipitation:15%</li>
            <li>Humidity:68%</li>
            <li>Wind:14mph</li>
          </ul>
        </div>

        <div className="col-6">
          <h1>West Palm Beach</h1>
          <ul className="currentData">
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
