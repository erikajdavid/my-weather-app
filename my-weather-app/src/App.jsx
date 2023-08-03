import { useState } from 'react';
import SearchBar from './SearchBar';
import './App.css'

const apiKey = "70335af88254b66a82ea739a9b7de916";

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

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
        <header className="appHeader">
          <h1>My basic-ass weather app</h1>
          <SearchBar setCity={setCity} searchCity={searchCity}/>
          <p className="city">{weather.name}</p>
        </header>
      </div>
    </>
  )
}

export default App
