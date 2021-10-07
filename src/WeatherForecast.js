import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thu</div>
          <WeatherIcon code="01d" />
          <br/>
          <span className="temperature-min">20</span>
          <span className="temperature-max"> 24</span>
        </div>
      </div>
    </div>
  );
}
