import React, { useState } from 'react';

const SearchBar = ({ setCity, weather }) => {
  const [inputCity, setInputCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
    setErrorMessage('');
  };

  const handleSearchClick = () => {
    if (inputCity.trim() === '') {
      setErrorMessage('Oops! Please enter a valid city.');
    } else {
      setCity(inputCity);
      setInputCity('');
      setErrorMessage('');
    }
  };

  return (
    <div className="inputSearchBar">
      <input
        type="text"
        placeholder="Enter your city"
        value={inputCity}
        onChange={handleInputChange}
        required
      />
      <button onClick={handleSearchClick} type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {(errorMessage || (weather.cod === '404')) && (
      <p className="error">
        {errorMessage || 'Oops! Something went wrong. Check your spelling.'}
      </p>
    )}
    </div>
  );
};

export default SearchBar;

