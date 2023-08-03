import React from 'react';

const SearchBar = ( {setCity, searchCity } ) => {
    return (
        <div>
            <input type="text" placeholder="Enter your city" onChange={(e) => setCity(e.target.value)} />
            <button onClick={searchCity} type="submit">Find</button>
        </div>
    )
}

export default SearchBar;