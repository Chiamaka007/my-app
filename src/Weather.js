import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div class="row">
            <div class="col-9">
              <input
                type="Search"
                placeholder="Search city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>
            <FormatDate />
          </li>
          <li>{weather.description}</li>
        </ul>
        <div className="mt-3 row">
          <div className="col-6">
            <div class="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="weather"
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>
              <span class="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind : {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5447915a7bcf0a835af038a7bf56c3a2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading..";
  }
}
