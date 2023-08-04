import React from 'react';

const WeatherData = ({ weather }) => {

    const formatPressure = (pressure) => {
        return pressure >= 1000 ? pressure.toLocaleString() : pressure;
      };
    
  return (
    <>
      <div className="AppContainer">
         <p className="city">{weather.name}</p>
            {weather.main && ( // Only render the details if weather.main is available
                <>
                <h2 className="temp">{Math.round(weather.main.temp)}°C</h2>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
                <p className="description">{weather.weather[0].description}</p>
                <p className="feelsLike">Feels like: {Math.round(weather.main.feels_like)}°C</p>
                <p className="maxTemp">H: {Math.round(weather.main.temp_max)}°C</p>
                <p className="minTemp">L: {Math.round(weather.main.temp_min)}°C</p>
                <p className="humidity">Humidity: {weather.main.humidity}%</p>
                <p className="pressure">Pressure: {formatPressure(weather.main.pressure)} hPa</p>
                <p className="windSpeed">Wind Speed: {weather.wind.speed} km/h</p>
                </>
            )}
        </div>
    </>
  )
}

export default WeatherData;