import React from 'react';
import windIcon from './myIcons/wind.png';
import humidityIcon from './myIcons/humidity.png';
import pressureIcon from './myIcons/pressure.png';

const ExtraFeatures = ({ windSpeed, humidity, pressure }) => (
    <div className="extras">
        <div className="extraInfoContainer">
            <p className="extraInfoTitle">Wind Speed:</p>
            <img className="miniIcon" src={windIcon} alt="wind icon" />
            <p className="extraInfoDescription">{windSpeed} km/h</p>
        </div>
        <div className="extraInfoContainer">
            <p className="extraInfoTitle">Humidity:</p>
            <img className="miniIcon" src={humidityIcon} alt="humidity icon" />
            <p className="extraInfoDescription">{humidity}%</p>
        </div>
        <div className="extraInfoContainer">
            <p className="extraInfoTitle">Pressure:</p>
            <img className="miniIcon" src={pressureIcon} alt="hpa icon" />
            <p className="extraInfoDescription">{pressure} hPa</p>
        </div>
    </div>
    );
    
export default ExtraFeatures;