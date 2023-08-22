import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import HeroText from './components/HeroText';
import WeatherData from './components/WeatherData';
import Footer from './components/Footer';
import './App.css'

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [mode, setMode] = useState('night'); 
  const [unit, setUnit] = useState('metric'); 
  const [displaySignUp, setDisplaySignUp] = useState(false); 
  const [displayLogIn, setDisplayLogIn] = useState(false);

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

  const handleSignUpClick = () => {
    setDisplaySignUp(true); 
  };

  const handleLogInClick = () => {
    setDisplayLogIn(true); 
  };


  return (
    <div className={`App ${mode ? 'night' : 'day'}`}>
      <div className="wrapper">
        {displaySignUp || displayLogIn ? (
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
            ) : (
              <>
                <Header mode={mode} setMode={setMode} handleSignUpClick={handleSignUpClick} handleLogInClick={handleLogInClick}/>
                <div className="mainContainer">
                  <HeroText setCity={setCity} searchCity={searchCity} weather={weather}/>
                <div className="AppContainer">
                    <WeatherData weather={weather} unit={unit} setUnit={setUnit} />
                </div>
              </div>
              <Footer />
            </>
            )}
      </div>
    </div>
  );
  
}

export default App
