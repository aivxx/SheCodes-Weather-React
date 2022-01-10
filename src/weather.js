import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
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
            <div className="currentTemp">{Math.round(temperature)}</div>
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
  } else {
    const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let city = "Miami";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
