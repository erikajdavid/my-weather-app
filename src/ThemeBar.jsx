import React from 'react';

const ThemeBar = ({ handleToggleTheme, darkMode }) => {
  const sliderPosition = darkMode ? '8%' : '50%';

  return (
    <section className="modes">
      <i className="far fa-sun" onClick={() => handleToggleTheme('day')}></i>
      <i className="fas fa-moon" onClick={() => handleToggleTheme('night')}></i>
      <div className="slider" style={{ left: sliderPosition }}></div>
    </section>
  );
}

export default ThemeBar;
