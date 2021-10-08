import axios from "axios";
import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);

    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div>Thu</div>
            <WeatherIcon code="01d" />
            <br />
            <span className="temperature-min">{Math.round(forecast[0].temp.min)}</span>
            <span className="temperature-max"> {Math.round(forecast[0].temp.max)}</span>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    const apiKey = "5447915a7bcf0a835af038a7bf56c3a2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading..."
  }
}
