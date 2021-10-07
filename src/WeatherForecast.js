import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lat;
  const apiKey = "5447915a7bcf0a835af038a7bf56c3a2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thu</div>
          <WeatherIcon code="01d" />
          <br />
          <span className="temperature-min">20</span>
          <span className="temperature-max"> 24</span>
        </div>
      </div>
    </div>
  );
}
