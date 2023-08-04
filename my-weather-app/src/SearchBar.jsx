import React, { useState } from 'react';

const SearchBar = ({ setCity, searchCity }) => {
  const [inputCity, setInputCity] = useState('');

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearchClick = () => {
    setCity(inputCity);
    setInputCity('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your city"
        value={inputCity}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick} type="submit">
        Find
      </button>
    </div>
  );
};

export default SearchBar;
