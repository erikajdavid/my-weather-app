import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { auth } from './firebase';
import Header from './components/Header'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import HeroText from './components/HeroText';
import ApiLoadingStates from './components/ApiLoadingStates';
import WeatherData from './components/WeatherData';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import './App.css';
import './styles/ApiLoadingStates.css'
import './styles/LightTheme.css';
import './styles/ModeToggle.css'
import './styles/TempUnitToggle.css'
import './styles/Forms.css';
import './styles/MediaQueries.css';
import './styles/Error404.css';


function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [mode, setMode] = useState('night'); 
  const [unit, setUnit] = useState('metric'); 
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (city) {
      searchCity();
    }
  }, [city]);

  const searchCity = () => {

    setIsLoading(true);

    const apiKey = import.meta.env.VITE_API_KEY;
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
        setTimeout(() => {
          setIsLoading(false); 
          if (results.cod === '404') {
            setWeather({ cod: '404', message: results.message });
          } else {
            setWeather(results);
          }
        }, 900);
    })
      .catch(error => {
        setIsLoading(false); 
        console.error('Error fetching weather data:', error);
        setWeather({ cod: '500', message: 'Server error. Please try again later.' });
      });
  }

  useEffect(() => {
    const signOutUser = auth.onAuthStateChanged((user) => {
      setUser(user);
    }); 
    return () => {
      signOutUser(); 
    };
  }, [weather]);


return (
    <div className={`App ${mode ? 'night' : 'day'}`}>
      <div className="wrapper">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={
            <>
              <Header mode={mode} setMode={setMode} user={user}/>
              <div className="mainContainer">
                <HeroText setCity={setCity} searchCity={searchCity} weather={weather} />
                <div className="AppContainer">
                  {isLoading ? (
                    <ApiLoadingStates />
                  ) : (
                    <WeatherData weather={weather} unit={unit} setUnit={setUnit} user={user} />
                  )}
                </div>
              </div>
              <Footer />
            </>
          } />
          {/* Route for the signup page */}
          <Route path="/signup" element={<SignUp />} />
          {/* Route for the login page */}
          <Route path="/login" element={<LogIn />} />
           {/* Route for the error 404 page */}
          <Route path="*" element={<Error404/>} />
        </Routes>
      </div>
    </div>
  );
  
}

export default App
