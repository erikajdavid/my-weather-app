import { useState, useEffect } from 'react';
import ThemeBar from './ThemeBar';
import SelectUnits from './SelectUnits';
import Header from './Header';
import WeatherData from './WeatherData';
import Footer from './Footer';
import './App.css'

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [darkMode, setDarkMode] = useState(true); // Default is dark mode
  const [selectedUnit, setSelectedUnit] = useState('metric'); // Default is Celsius


  useEffect(() => {
    if (city) {
      searchCity();
    }
  }, [city]);

  const searchCity = () => {
    const apiKey = "70335af88254b66a82ea739a9b7de916";
    const metric = "metric";
    const newUrl = new URL("https://api.openweathermap.org/data/2.5/weather")


    newUrl.search = new URLSearchParams ({
        appid: apiKey,
        units: metric,
        q: city
      })
    
    fetch(newUrl)
    .then(res => res.json())
    .then(results => {
      if (results.cod === '404') {
        setWeather({ cod: '404', message: results.message });
      } else {
        setWeather(results);
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      setWeather({ cod: '500', message: 'Server error. Please try again later.' });
    });
  }

  const handleToggleTheme = () => {
    setDarkMode(prevTheme => !prevTheme);
  };

  return (
    <div className={`App ${darkMode ? 'night' : 'day'}`}>
      <div className="wrapper">
        <ThemeBar handleToggleTheme={handleToggleTheme} darkMode={darkMode} />
        <div className="mainContainer">
          <Header setCity={setCity} searchCity={searchCity} weather={weather}/>
          <div className="AppContainer">
          <SelectUnits selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />
          <WeatherData weather={weather} selectedUnit={selectedUnit} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
  
}

export default App

