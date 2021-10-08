import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function mintemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function maxtemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon","Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return `${day}`
  }
  return (
    <div className="WeatherForecastDay">
      <div>{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <br />
      <span className="temperature-min">{mintemperature()}</span>
      <span className="temperature-max"> {maxtemperature()}</span>
    </div>
  );
}
