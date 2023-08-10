import React from 'react';

const ThemeBar = ({ toggleTheme, darkMode }) => {
  const sliderPosition = darkMode ? '8%' : '50%'; 

  return (
    <div className="toggleBar">
      <i className="fa-solid fa-sun" onClick={toggleTheme}></i>
      <i className="fa-solid fa-moon" onClick={toggleTheme}></i>
      <div className="slider" style={{ left: sliderPosition }}></div>
    </div>
  );
}

export default ThemeBar;
