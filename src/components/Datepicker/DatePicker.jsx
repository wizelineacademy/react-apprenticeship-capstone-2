import React from 'react';

const DatePicker = ({ handleDate, date}) => {
    const today = new Date();
    let month;
    if(today.getMonth() > 10) month = `0${today.getMonth()}`;
    if(today.getMonth() === 0) month = today.getMonth() + '1';
    const max = today.getFullYear()+'-'+ month +'-'+today.getDate();
    return (
        <div>
            <input
                data-testid="date-input" 
                type="date"
                onChange={handleDate}
                placeholder='select a date'
                value={date}
                min="1995-06-16"
                max={max}
            />
        </div>
    );
}

export default DatePicker;