import React from 'react';

const SelectUnits = ({ selectedUnit, setSelectedUnit }) => {

  const sliderPosition =  selectedUnit === 'metric' ? '4%' : '52%';
 
  const toggleUnits = () => {
    const newUnit = selectedUnit === 'metric' ? 'imperial' : 'metric';
    setSelectedUnit(newUnit);
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
