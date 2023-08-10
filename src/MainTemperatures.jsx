import React from 'react';

const MainTemperatures = ({ temperature, maxTemperature, minTemperature, unit }) => {
  const isMetric = unit === 'metric';
  const convertedTemperature = isMetric ? temperature : (temperature * 9/5) + 32;
  const convertedMaxTemperature = isMetric ? maxTemperature : (maxTemperature * 9/5) + 32;
  const convertedMinTemperature = isMetric ? minTemperature : (minTemperature * 9/5) + 32;

  const displayUnit = isMetric ? '°C' : '°F';

  return (
    <div className="mainMaxMinTempContainer">
      <h2 className="temp">{Math.round(convertedTemperature)}{displayUnit}</h2>
      <div className="maxMinTempContainer">
        <p className="maxTemp">H: {Math.round(convertedMaxTemperature)}{displayUnit}</p>
        <p className="minTemp">L: {Math.round(convertedMinTemperature)}{displayUnit}</p>
      </div>
    </div>
  );
};

export default MainTemperatures;
