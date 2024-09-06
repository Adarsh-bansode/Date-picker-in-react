import React from 'react';
import { DateProvider } from './components/DateContext';
import CustomDatePicker from './components/DatePicker';

function App() {
    return (
        <DateProvider>
            <div className="App">
                <CustomDatePicker />
            </div>
        </DateProvider>
    );
}

export default App;
