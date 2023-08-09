import React, { useState, useEffect } from 'react';
import placeholderImg from './myIcons/placeholderImg.png';
import LocationInfo from './LocationInfo';
import WeatherIcons from './WeatherIcons';
import MainTemperatures from './MainTemperatures';
import BottomHalfContainer from './BottomHalfContainer';

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


  return (
    <div className="AppContainer">
      {!weather.main ? (
        <div className="placeholderImgContainer">
          <img className="placeholderImage" src={placeholderImg} alt="Sun and clouds" />
        </div>
      ) : (
        <>
          <LocationInfo weather={weather} />
          {weather.main && (
              <>
                <p className="dateAndTime">{localTime}</p>

                <MainTemperatures
                  temperature={weather.main.temp}
                  maxTemperature={weather.main.temp_max}
                  minTemperature={weather.main.temp_min}
                />

                <WeatherIcons weatherCondition={weather.weather[0].main} isDaytime={isDaytime} />

                <BottomHalfContainer 
                  weather={weather}
                />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default WeatherData;
