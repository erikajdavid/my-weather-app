import React, { useState, useEffect } from 'react';
import clearIcon from './myIcons/01d.png';
import clearNightIcon from './myIcons/01n.png';
import cloudyIcon from './myIcons/03d.png';
import cloudyNightIcon from './myIcons/03n.png';
import drizzleIcon from './myIcons/09d.png';
import rainIcon from './myIcons/10d.png';
import rainNightIcon from './myIcons/10n.png';
import thunderstormIcon from './myIcons/11d.png';
import thunderstormNightIcon from './myIcons/11n.png';
import snowIcon from './myIcons/13d.png';
import snowNightIcon from './myIcons/13n.png';
import unclearIcon from './myIcons/50d.png';
import unclearNightIcon from './myIcons/50n.png';
import windIcon from './myIcons/wind.png';
import humidityIcon from './myIcons/humidity.png';
import pressureIcon from './myIcons/pressure.png';
import placeholderImg from './myIcons/placeholderImg.png';

const WeatherData = ({ weather }) => {
  let [weatherIconUrl, setWeatherIconUrl] = useState('');
  const [currentTimeInLocation, setCurrentTimeInLocation] = useState(null); // Define the currentTimeInLocation state
  const [localTime, setLocalTime] = useState(''); // Define the localTime state

  useEffect(() => {
    if (weather.weather && weather.weather.length > 0) {
      const weatherCondition = weather.weather[0].main;
      const currentTimeUTC = new Date();
      const offsetInSeconds = weather.timezone;

      const currentTimeInLocation = new Date(currentTimeUTC.getTime() + offsetInSeconds * 1000);

      console.log(currentTimeInLocation.toISOString()); // Log the UTC time in ISO format
      let weatherIconUrl = '';
      // Get the current hour in the local time
      const currentHour = currentTimeInLocation.getUTCHours();
      const isDaytime = currentHour >= 6 && currentHour < 20;
      
      switch (weatherCondition) {
        case 'Clear':
          weatherIconUrl = isDaytime ? clearIcon : clearNightIcon;
          break;
        case 'Clouds':
          weatherIconUrl = isDaytime ? cloudyIcon : cloudyNightIcon;
          break;
        case 'Drizzle':
          weatherIconUrl = drizzleIcon;
          break;
        case 'Rain':
          weatherIconUrl = isDaytime ? rainIcon : rainNightIcon;
          break;
        case 'Thunderstorm':
          weatherIconUrl = isDaytime ? thunderstormIcon : thunderstormNightIcon;
          break;
        case 'Snow':
          weatherIconUrl = isDaytime ? snowIcon: snowNightIcon;
          break;
        case 'Mist, Smoke, Haze, Dust, Fog, Sand, Dust, Ash, Squall, Tornado':
          weatherIconUrl = isDaytime ? unclearIcon: unclearNightIcon;
          break;
        default:
          const unclearConditions = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado'];
          if (unclearConditions.includes(weatherCondition)) {
            weatherIconUrl = unclearIcon;
          } else {
            weatherIconUrl = clearIcon;
          }
      }
        setWeatherIconUrl(weatherIconUrl);
        setCurrentTimeInLocation(currentTimeInLocation); // Update the state with the current time in location
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
    <>
      <div className="AppContainer">
        {!weather.main ? (
          <div className="placeholderImgContainer">
            <img className="placeholderImg" src={placeholderImg} alt="Sun and clouds" />
          </div>
        ) : (
          <>
            <p className="city">{weather.name}</p>
            {weather.main && (
              <>
                <p className="dateAndTime">{localTime}</p>
                <div className="mainMaxMinTempContainer">
                  <h2 className="temp">{Math.round(weather.main.temp)}°C</h2>
                  <div className="maxMinTempContainer">
                    <p className="maxTemp">H: {Math.round(weather.main.temp_max)}°C</p>
                    <p className="minTemp">L: {Math.round(weather.main.temp_min)}°C</p>
                  </div>
                </div>
                {weatherIconUrl && (
                  <img className="tempIcon" src={weatherIconUrl} alt="Weather Icon" />
                )}
                <div className="bottomHalfContainer">
                  <p className="description">{weather.weather[0].main}</p>
                  <p className="feelsLikeTemp">Feels like: {Math.round(weather.main.feels_like)}°C</p>
                  <div className="extras">
                    <div className="extraInfoContainer">
                      <p className="extraInfoTitle">Wind Speed:</p>
                      <img className="miniIcon" src={windIcon} alt="wind icon" />
                      <p className="extraInfoDescription">{weather.wind.speed} km/h</p>
                    </div>
                    <div className="extraInfoContainer">
                      <p className="extraInfoTitle">Humidity:</p>
                      <img className="miniIcon" src={humidityIcon} alt="humidity icon" />
                      <p className="extraInfoDescription">{weather.main.humidity}%</p>
                    </div>
                    <div className="extraInfoContainer">
                      <p className="extraInfoTitle">Pressure:</p>
                      <img className="miniIcon" src={pressureIcon} alt="hpa icon" />
                      <p className="extraInfoDescription">{formatPressure(weather.main.pressure)} hPa</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default WeatherData;