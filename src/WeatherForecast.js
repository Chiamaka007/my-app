import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

   useEffect(() => {
       setLoaded(false);
   }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyforecast, index) {
                if (index < 5) {
                    return (
                      <div className="col" key={index}>
                        <WeatherForecastDay data={dailyforecast} />
                      </div>
                    );
                } else {
                    return null;
                }
            })}
          
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
