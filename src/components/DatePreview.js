import React, { useContext } from 'react';
import { DateContext } from './DateContext';
import { addDays, addWeeks, addMonths, addYears, format } from 'date-fns';

const DatePreview = () => {
    const { startDate, endDate, recurrence } = useContext(DateContext);

    const getRecurringDates = () => {
        let dates = [];
        if (!startDate) return dates;

        let currentDate = startDate;
        while (!endDate || currentDate <= endDate) {
            dates.push(format(currentDate, 'yyyy-MM-dd'));

            switch (recurrence.type) {
                case 'Daily':
                    currentDate = addDays(currentDate, parseInt(recurrence.interval, 10));
                    break;
                case 'Weekly':
                    currentDate = addWeeks(currentDate, parseInt(recurrence.interval, 10));
                    break;
                case 'Monthly':
                    currentDate = addMonths(currentDate, parseInt(recurrence.interval, 10));
                    break;
                case 'Yearly':
                    currentDate = addYears(currentDate, parseInt(recurrence.interval, 10));
                    break;
                default:
                    break;
            }

            // Break if somehow the loop continues infinitely
            if (dates.length > 1000) break;
        }
        return dates;
    };

    return (
        <div className="mt-4">
            <h3 className="text-lg mb-2">Preview</h3>
            <div className="grid grid-cols-7 gap-2">
                {getRecurringDates().map((date, index) => (
                    <div key={index} className="p-2 border rounded text-center">
                        {date}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DatePreview;
