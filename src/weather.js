import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./weatherInfo";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = `04bde8cc7f569f7c5603cdbc6deb89a3`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // Search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weatherApp">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search..."
              className="form"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-warning btn-sm"
            />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
