import React, { useContext } from 'react';
import { DateContext } from './DateContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RecurrenceOptions from './RecurrenceOptions';
import DatePreview from './DatePreview';

const CustomDatePicker = () => {
    const { startDate, setStartDate, endDate, setEndDate } = useContext(DateContext);

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl mb-4">Select Date Range</h2>
            <div className="flex items-center space-x-4">
                <div>
                    <label>Start Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className="border rounded p-2"
                    />
                </div>
                <div>
                    <label>End Date</label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className="border rounded p-2"
                    />
                </div>
            </div>
            <RecurrenceOptions />
            <DatePreview />
        </div>
    );
};

export default CustomDatePicker;
