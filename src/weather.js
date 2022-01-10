import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Wednesday 07:00",
    });
  }

  if (weatherData.ready) {
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
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <div className="currentTemp">
              {Math.round(weatherData.temperature)}
            </div>
            <p>°F</p>
            <ul className="data">
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}mph</li>
            </ul>
          </div>

          <div className="col-6">
            <h1 className="text-capitalize">{weatherData.city}</h1>
            <ul className="currentData">
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `04bde8cc7f569f7c5603cdbc6deb89a3`;
    let city = `Miami`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
