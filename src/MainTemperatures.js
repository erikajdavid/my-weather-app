import React from 'react';

const Temperature = ({ temperature, maxTemperature, minTemperature }) => (
  <div className="mainMaxMinTempContainer">
    <h2 className="temp">{Math.round(temperature)}°C</h2>
    <div className="maxMinTempContainer">
      <p className="maxTemp">H: {Math.round(maxTemperature)}°C</p>
      <p className="minTemp">L: {Math.round(minTemperature)}°C</p>
    </div>
  </div>
);

export default Temperature;
