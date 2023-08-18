import React, { useState, useEffect } from 'react';
import placeholderImg from '../myIcons/placeholderImg.png';
import SelectUnits from './SelectUnits';
import LocationInfo from './LocationInfo';
import DateAndTime from './DateAndTime';
import WeatherIcons from './WeatherIcons';
import MainTemperatures from './MainTemperatures';
import BottomHalfContainer from './BottomHalfContainer';

const WeatherData = ({ weather }) => {
  let [weatherIconUrl, setWeatherIconUrl] = useState('');
  const [currentTimeInLocation, setCurrentTimeInLocation] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState('metric'); // Default is Celsius

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


  return (
    <div className="AppContainer">
      {!weather.main ? (
        <div className="placeholderImgContainer">
          <img className="placeholderImage" src={placeholderImg} alt="Sun and clouds" />
        </div>
      ) : (
        <>
          <SelectUnits selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />
          <LocationInfo weather={weather} />
          <DateAndTime currentTimeInLocation={currentTimeInLocation} />
          <MainTemperatures
            temperature={weather.main.temp}
            maxTemperature={weather.main.temp_max}
            minTemperature={weather.main.temp_min}
            unit={selectedUnit}
          />
          <WeatherIcons weatherCondition={weather.weather[0].main} isDaytime={isDaytime} />
          <BottomHalfContainer weather={weather} temperature={weather.main.feels_like} unit={selectedUnit} />
        </>
      )}
    </div>
  );
}

export default WeatherData;