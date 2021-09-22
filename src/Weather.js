import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div class="row">
          <div class="col-9">
            <input
              type="Search"
              placeholder="Search city"
              className="form-control"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Lagos</h1>
      <ul>
        <li>Last updated at 12:00</li>
        <li>Clear with periodic clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="weather"
          />
          26°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitaion: 9%</li>
            <li>Humidity: 90%</li>
            <li>Wind :3km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
