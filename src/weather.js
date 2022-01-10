import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormateDate";
import WeatherInfo from "./weatherInfo";
import "./weather.css";

export default function Weather(props) {
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
      date: new Date(response.data.dt * 1000),
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = `04bde8cc7f569f7c5603cdbc6deb89a3`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
