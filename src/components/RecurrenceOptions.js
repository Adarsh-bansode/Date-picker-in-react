import React, { useContext } from 'react';
import { DateContext } from './DateContext';

const RecurrenceOptions = () => {
    const { recurrence, setRecurrence } = useContext(DateContext);

    const handleRecurrenceChange = (e) => {
        const { name, value } = e.target;
        setRecurrence((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="mt-4">
            <h3 className="text-lg mb-2">Recurrence Pattern</h3>
            <div>
                <label>Type:</label>
                <select
                    name="type"
                    value={recurrence.type}
                    onChange={handleRecurrenceChange}
                    className="border rounded p-2 ml-2"
                >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </div>
            <div className="mt-2">
                <label>Interval:</label>
                <input
                    type="number"
                    name="interval"
                    value={recurrence.interval}
                    onChange={handleRecurrenceChange}
                    className="border rounded p-2 ml-2 w-16"
                    min="1"
                />
            </div>
        </div>
    );
};

export default RecurrenceOptions;
