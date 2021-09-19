import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    console.log(response);
    let temperature = response.data.main.temp;
    let wind = response.data.wind.speed;
    let humidity = response.data.main.humidity;
    let description = response.data.weather[0].description;
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setWeather(
      <ul className="weatherSearch">
        <li>Temperature: {Math.round(temperature)}ºC </li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind} km/h</li>
        <li>
          <img src={icon} alt={description} />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5447915a7bcf0a835af038a7bf56c3a2";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <div>{weather}</div>
    </div>
  );
}
