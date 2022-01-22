import React, { useState } from 'react';
//import useDataFetch from '../../hooks/useDataFetch.js';
import { getDateToday } from '../../utils/getDateToday.js';
import './DatePicker.styles.css';

function DatePicker() {
  const today = getDateToday();
  console.log(today);
  const [dateValue, setDateValue] = useState(today);

  const handleSubmit = () => {
    console.log('hola');
  };

  const handleDateValue = (e) => {
    console.log(e.target.value);
    setDateValue(e.target.value);
  };

  return (
    <form className="find-image" onSubmit={handleSubmit}>
      <input type="date" value={dateValue} onChange={handleDateValue} />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default DatePicker;
