import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ setCity, searchCity, weather }) => {

  return (
    <header>
      <h1>My basic-ass weather app</h1>
      <h2>A real-time international weather app that is nowhere near as complex as the one you're already using.</h2>
      <SearchBar setCity={setCity} searchCity={searchCity} weather={weather} />
    </header>
  )
}

export default Header;
