const LocationInfo = ( {weather} ) => {
    return (
        <p className="city">{weather.name}</p>
    )
}

export default LocationInfo;