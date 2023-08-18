import React from 'react';

const ThemeBar = ({ handleToggleTheme, darkMode }) => {
  const sliderPosition = darkMode ? '8%' : '50%';

  const handleThemeClick = () => {
    const changeTheme = darkMode ? 'day' : 'night';
    handleToggleTheme(changeTheme);
  };

  return (
    <section className="modes" onClick={() => handleThemeClick}>
      <i className="far fa-sun"></i>
      <i className="fas fa-moon"></i>
      <div className="slider" style={{ left: sliderPosition }}></div>
    </section>
  );
}

export default ThemeBar;
