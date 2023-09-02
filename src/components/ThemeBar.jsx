import React from 'react';

const ThemeBar = ({ handleToggleTheme, mode }) => {
  
  const sliderPosition = mode ? '8%' : '50%';

  const handleThemeClick = () => {
    const changeTheme = mode ? 'day' : 'night';
    handleToggleTheme(changeTheme);
  };

  return (
    <div className="modes" onClick={handleThemeClick}>
      <i className="far fa-sun"></i>
      <i className="fas fa-moon"></i>
      <div className="slider" style={{ left: sliderPosition }}></div>
    </div>
  );
}

export default ThemeBar;
