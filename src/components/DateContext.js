import React, { createContext, useState } from 'react';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [recurrence, setRecurrence] = useState({
        type: 'Daily',
        interval: 1,
        daysOfWeek: [],
        nthDayOfMonth: null,
    });

    return (
        <DateContext.Provider
            value={{
                startDate,
                setStartDate,
                endDate,
                setEndDate,
                recurrence,
                setRecurrence,
            }}
        >
            {children}
        </DateContext.Provider>
    );
};
