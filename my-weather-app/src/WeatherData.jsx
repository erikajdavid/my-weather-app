import React from 'react';

const WeatherData = ({ weather }) => {
  return (
    <p className="city">{weather.name}</p>
  )
}

export default WeatherData;