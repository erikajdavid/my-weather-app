import React from 'react';

const SelectUnits = ({ selectedUnit, setSelectedUnit }) => {

  const sliderPosition =  selectedUnit === 'metric' ? '8%' : '50%';

  const toggleUnits = () => {
    const newUnit = selectedUnit === 'metric' ? 'imperial' : 'metric';
    setSelectedUnit(newUnit);
  };

  return (
    <section className="units" onClick={toggleUnits}>
      <p>F</p>
      <p>°C</p>
      <div className="sliderTwo" style={{ top: sliderPosition }}></div>
    </section>
  );
};

export default SelectUnits;
