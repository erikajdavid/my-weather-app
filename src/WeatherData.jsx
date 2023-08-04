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
            <div className="mainMaxMinTempContainer">
              <h2 className="temp">{Math.round(weather.main.temp)}°C</h2>
              <div className="maxMinTempContainer">
                <p className="maxTemp">H: {Math.round(weather.main.temp_max)}°C</p>
                <p className="minTemp">L: {Math.round(weather.main.temp_min)}°C</p>
              </div>
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <div className="bottomHalfContainer">
              <p className="description">{weather.weather[0].main}</p>
              <p className="feelsLikeTemp">Feels like: {Math.round(weather.main.feels_like)}°C</p>
              <div class="extras">
                <div className="extraInfoContainer">
                  <p className="extraInfoTitle">Wind Speed:</p> 
                  <p className="extraInfoDescription">{weather.wind.speed} km/h</p>
                </div>
                <div className="extraInfoContainer">
                  <p className="extraInfoTitle">Humidity:</p> 
                  <p className="extraInfoDescription">{weather.main.humidity}%</p>
                </div>
                <div className="extraInfoContainer">
                  <p className="extraInfoTitle">Pressure:</p> 
                  <p className="extraInfoDescription">{formatPressure(weather.main.pressure)} hPa</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default WeatherData;