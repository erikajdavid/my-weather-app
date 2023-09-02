import React from 'react';
import SearchBar from './SearchBar';

const HeroText = ({ setCity, searchCity, weather }) => {

  return (
    <div className="heroText">
      <h1>My basic-ass weather app</h1>
      <h2>A real-time global weather app that is nowhere near as complex as the one you're already using.</h2>
      <SearchBar setCity={setCity} searchCity={searchCity} weather={weather}/>
    </div>
  )
}

export default HeroText;
