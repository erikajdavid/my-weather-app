import React, { useState, useEffect } from 'react';
import placeholderImg from './myIcons/placeholderImg.png';
import WeatherIcons from './WeatherIcons';
import MainTemperatures from './MainTemperatures';
import ExtraFeatures from './ExtraFeatures';

const WeatherData = ({ weather }) => {
  let [weatherIconUrl, setWeatherIconUrl] = useState('');
  const [currentTimeInLocation, setCurrentTimeInLocation] = useState(null);
  const [localTime, setLocalTime] = useState('');
  
  // Define isDaytime here, based on the current hour
  const currentHour = currentTimeInLocation?.getUTCHours();
  const isDaytime = currentHour >= 6 && currentHour < 20;

  useEffect(( ) => {
    if (weather.weather && weather.weather.length > 0) {
      const currentTimeUTC = new Date();
      const offsetInSeconds = weather.timezone;

      const currentTimeInLocation = new Date(currentTimeUTC.getTime() + offsetInSeconds * 1000);
      
      setWeatherIconUrl(weatherIconUrl);
      setCurrentTimeInLocation(currentTimeInLocation);
    }
  }, [weather]);

  useEffect(() => {
    if (currentTimeInLocation) {
      const localTimeInLocation = new Intl.DateTimeFormat(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(currentTimeInLocation);

      setLocalTime(localTimeInLocation);
    }
  }, [currentTimeInLocation]);

  const formatPressure = (pressure) => {
    return pressure >= 1000 ? pressure.toLocaleString() : pressure;
  };

  return (
    <div className="AppContainer">
      {!weather.main ? (
        <div className="placeholderImgContainer">
          <img className="placeholderImage" src={placeholderImg} alt="Sun and clouds" />
        </div>
      ) : (
        <>
          <p className="city">{weather.name}</p>
          {weather.main && (
            <>
              <p className="dateAndTime">{localTime}</p>

              <MainTemperatures
                temperature={weather.main.temp}
                maxTemperature={weather.main.temp_max}
                minTemperature={weather.main.temp_min}
              />

              <WeatherIcons weatherCondition={weather.weather[0].main} isDaytime={isDaytime} />

              <div className="bottomHalfContainer">
                <p className="description">{weather.weather[0].main}</p>
                <p className="feelsLikeTemp">Feels like: {Math.round(weather.main.feels_like)}°C</p>
                <ExtraFeatures
                  windSpeed={weather.wind.speed}
                  humidity={weather.main.humidity}
                  pressure={formatPressure(weather.main.pressure)}  
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default WeatherData;
