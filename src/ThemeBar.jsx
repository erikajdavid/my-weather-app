import React, { useState } from 'react';

const ThemeBar = () => {
  const [isSunTheme, setIsSunTheme] = useState(true); // Assuming sun theme is the default

  const toggleTheme = () => {
    setIsSunTheme(prevTheme => !prevTheme);
  };

  const sliderPosition = isSunTheme ? '8%' : '50%'; 

  return (
    <div className="toggleBar">
      <i className="fa-solid fa-sun" onClick={toggleTheme}></i>
      <i className="fa-solid fa-moon" onClick={toggleTheme}></i>
      <div className="slider" style={{ left: sliderPosition }}></div>
    </div>
  );
}

export default ThemeBar;
