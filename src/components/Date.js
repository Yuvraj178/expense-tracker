import React, { useState, useEffect } from 'react';

function DateTime () {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <p className="date">
            {`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}
        </p>
    );
}
export default DateTime