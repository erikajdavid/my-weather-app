import React from 'react';
import clearIcon from '../myIcons/01d.png';
import clearNightIcon from '../myIcons/01n.png';
import cloudyIcon from '../myIcons/03d.png';
import cloudyNightIcon from '../myIcons/03n.png';
import drizzleIcon from '../myIcons/09d.png';
import rainIcon from '../myIcons/10d.png';
import rainNightIcon from '../myIcons/10n.png';
import thunderstormIcon from '../myIcons/11d.png';
import thunderstormNightIcon from '../myIcons/11n.png';
import snowIcon from '../myIcons/13d.png';
import snowNightIcon from '../myIcons/13n.png';
import unclearIcon from '../myIcons/50d.png';
import unclearNightIcon from '../myIcons/50n.png';

const WeatherIcons = ({ weatherCondition, isDaytime }) => {
  let weatherIconUrl = '';

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
      weatherIconUrl = isDaytime ? snowIcon : snowNightIcon;
      break;
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      weatherIconUrl = isDaytime ? unclearIcon : unclearNightIcon;
      break;
    default:
      const unclearConditions = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'];
      if (unclearConditions.includes(weatherCondition)) {
        weatherIconUrl = unclearIcon;
      } else {
        weatherIconUrl = clearIcon;
      }
  }

  return <img className="tempIcon" src={weatherIconUrl} alt="Weather Icon" />;
};

export default WeatherIcons;
