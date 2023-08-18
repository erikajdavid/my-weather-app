import React from 'react';

const SelectUnits = ({ unit, setUnit }) => {

  const sliderPosition =  unit === 'metric' ? '4%' : '52%';
 
  const toggleUnits = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
  };

  return (
    <section className="units" onClick={toggleUnits}>
      <p className="fUnit">F</p>
      <p className="cUnit">°C</p>
      <div className="sliderTwo" style={{ left: sliderPosition }}></div>
    </section>
  );
};

export default SelectUnits;
