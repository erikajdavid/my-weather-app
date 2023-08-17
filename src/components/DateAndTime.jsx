import { useState, useEffect } from 'react';

const DateAndTime = ({ currentTimeInLocation }) => {
    const [localTime, setLocalTime] = useState('');

    useEffect(() => {
        if (currentTimeInLocation) {
            const localTimeInLocation = new Intl.DateTimeFormat(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }).format(currentTimeInLocation);

            setLocalTime(localTimeInLocation);
        }
    }, [currentTimeInLocation]);

    return (
        <p className="dateAndTime">{localTime}</p>
    );
}

export default DateAndTime;
