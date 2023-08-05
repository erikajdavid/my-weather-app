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
    <div className="inputSearchBar">
      <input
        type="text"
        placeholder="Enter your city"
        value={inputCity}
        onChange={handleInputChange}
        required
      />
      <button onClick={handleSearchClick} type="submit">
        Go
      </button>
    </div>
  );
};

export default SearchBar;
