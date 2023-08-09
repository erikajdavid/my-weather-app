import ExtraFeatures from "./ExtraFeatures";

const formatPressure = (pressure) => {
    return pressure >= 1000 ? pressure.toLocaleString() : pressure;
  };

const BottomHalfContainer = ( {weather} ) => {

    return (
        <div className="bottomHalfContainer">
            <p className="description">{weather.weather[0].main}</p>
            <p className="feelsLikeTemp">Feels like: {Math.round(weather.main.feels_like)}°C</p>
            <ExtraFeatures
                windSpeed={weather.wind.speed}
                humidity={weather.main.humidity}
                pressure={formatPressure(weather.main.pressure)}  
            />
        </div>
    )
}

export default BottomHalfContainer;