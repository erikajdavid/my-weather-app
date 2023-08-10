const SelectUnits = () => {
    return (
    <form action="#" method="#" className="units" name="units">
        <label htmlFor="selectUnits"></label>
            <select id="selectUnits" name="selectUnits">
            <option value="celcius" defaultValue>°C</option>
            <option value="farenheit">F</option>
        </select>
    </form>
    )
}

export default SelectUnits;