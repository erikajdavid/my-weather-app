import React, { useState, useEffect } from 'react';

const SearchBar = ({ setCity, weather }) => {
  const [inputCity, setInputCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (weather.cod === '404') {
      setErrorMessage('Oops! Check your spelling.');
    } else {
      setErrorMessage('');
    }
  }, [weather]);

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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const errorInputClass = errorMessage ? 'errorInput' : '';

  return (
    <>
      <div className="inputSearchBar">
        <input 
          className={errorInputClass}
          type="text"
          placeholder="Enter your city"
          value={inputCity}
          onChange={handleInputChange} 
          onKeyDown={handleKeyPress} 
          required
        />
        <button onClick={handleSearchClick} type="submit">
          <i className="fa-solid fa-magnifying-glass faMagGlass"></i>
        </button>
    </div>
    <p className="error">{errorMessage}</p>
    </>

  );
};

export default SearchBar;

