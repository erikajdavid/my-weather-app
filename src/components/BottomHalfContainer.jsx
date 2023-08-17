import ExtraFeatures from "./ExtraFeatures";

const formatPressure = (pressure) => {
    return pressure >= 1000 ? pressure.toLocaleString() : pressure;
  };

const BottomHalfContainer = ( {weather, temperature, unit } ) => {

    const isMetric = unit === 'metric';
    const convertedFeelsLikeTemp = isMetric ? temperature : (temperature * 9/5) + 32;
    const displayUnit = isMetric ? '°C' : '°F';
    
    return (
        <div className="bottomHalfContainer">
            <p className="description">{weather.weather[0].main}</p>
            <p className="feelsLikeTemp">Feels like: {Math.round(convertedFeelsLikeTemp)}{displayUnit}</p>
            <ExtraFeatures
                windSpeed={weather.wind.speed}
                humidity={weather.main.humidity}
                pressure={formatPressure(weather.main.pressure)}  
            />
        </div>
    )
}

export default BottomHalfContainer;