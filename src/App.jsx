import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { auth } from './firebase';
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
  const [user, setUser] = useState(null)

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
        console.log(results);
    })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setWeather({ cod: '500', message: 'Server error. Please try again later.' });
      });
  }

  useEffect(() => {
    const signOutUser = auth.onAuthStateChanged((user) => {
      setUser(user);
    }); 
    return () => {
      signOutUser(); // Cleanup the listener when the component unmounts
    };
  }, [weather]);

  const handleSignUpClick = () => {
    setDisplaySignUp(true); 
  };

  const handleLogInClick = () => {
    setDisplayLogIn(true); 
  };

  const handleFavouritedNotLoggedIn = () => {
    setDisplayLogIn(true); 
  }

return (
    <div className={`App ${mode ? 'night' : 'day'}`}>
      <div className="wrapper">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={
            <>
              <Header mode={mode} setMode={setMode} handleSignUpClick={handleSignUpClick} handleLogInClick={handleLogInClick} user={user}/>
              <div className="mainContainer">
                <HeroText setCity={setCity} searchCity={searchCity} weather={weather} />
                <div className="AppContainer">
                  <WeatherData weather={weather} unit={unit} setUnit={setUnit} user={user}  handleFavouritedNotLoggedIn={handleFavouritedNotLoggedIn}/>
                </div>
              </div>
              <Footer />
            </>
          } />
          {/* Route for the signup page */}
          <Route path="/signup" element={<SignUp />} />
          {/* Route for the login page */}
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </div>
  );
  
}

export default App

//TO-ADD

//.env file to store API keys for security
//Firebase authetification
//Not logged in, favourites clicked, prompt to log in. 
//Logged in, user can save a city that will always load, maybe include a 5 day forecast? 
//Figure out UI for a logged in user.
//Basic styling of forms for light mode. 
//add error handling for incorrect user sign up/log in


//Stretch goals
//Maybe use a remember me for forms, so user will constantly stay signed in. 
//Maybe implement a forgot password for forms? 
//404 routing 

