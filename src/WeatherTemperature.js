import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [temp, setTemp] = useState("celsius");

  return (
    <div className="temperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
     <span className="unit">°C</span>
    </div>
  );
}
