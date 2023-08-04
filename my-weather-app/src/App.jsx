import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherData from './WeatherData';
import './App.css'

const apiKey = "70335af88254b66a82ea739a9b7de916";

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (city) {
      searchCity();
    }
  }, [city]);


  const searchCity = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(results => {
        setWeather(results);
        console.log(results);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

  return (
    <>
      <div className="App">
        <header>
          <h1>My basic-ass weather app</h1>
          <h2>A simple daily weather app that is nowhere near as complex as the one you're already using.</h2>
          <SearchBar setCity={setCity} searchCity={searchCity}/>
        </header>
        <div className="AppContainer">
          <WeatherData weather={weather} />
        </div>
      </div>
    </>
  )
}

export default App
