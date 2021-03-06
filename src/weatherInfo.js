import React from "react";
import FormatDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      {" "}
      <div className="row">
        <div className="col-6">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={54}
          />

          <div className="currentTemp">
            {Math.round(props.data.temperature)}
          </div>
          <p>°F</p>
          <ul className="data">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}mph</li>
          </ul>
        </div>

        <div className="col-6">
          <h1 className="text-capitalize">{props.data.city}</h1>
          <ul className="currentData">
            <li>
              <FormatDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
