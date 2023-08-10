const SelectUnits = ({ selectedUnit, setSelectedUnit }) => {
  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <form action="#" method="#" className="units" name="units">
      <label htmlFor="selectUnits"></label>
      <select id="selectUnits" name="selectUnits" value={selectedUnit} onChange={handleUnitChange}>
        <option value="metric">Celsius °C</option>
        <option value="imperial">Fahrenheit F</option>
      </select>
    </form>
  );
};

export default SelectUnits;