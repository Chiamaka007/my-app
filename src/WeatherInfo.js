import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) { 
    
    return (
      <div className="WeatherInfo">
         <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <div className="mt-3 row">
          <div className="col-6">
            <div className="clearfix">
              <WeatherIcon code={props.data.icon} />

              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind : {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}